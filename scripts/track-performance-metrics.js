/**
 * Performance Metrics Tracking Script
 * 
 * Tracks and stores performance metrics for calculators
 * Creates historical tracking data and comparison reports
 * 
 * Usage: node scripts/track-performance-metrics.js [calculator-url]
 * 
 * Example:
 *   node scripts/track-performance-metrics.js https://calculator360pro.com/calculators/finance/mortgage-calculator
 */

const fs = require('fs');
const path = require('path');

// Performance metrics storage directory
const metricsDir = path.join(__dirname, '../docs/performance-metrics');
if (!fs.existsSync(metricsDir)) {
  fs.mkdirSync(metricsDir, { recursive: true });
}

// Core Web Vitals Targets
const TARGETS = {
  LCP: 2.5,
  INP: 200,
  CLS: 0.1,
  FCP: 1.8,
  TTI: 3.8,
  PERFORMANCE_SCORE: 90,
};

/**
 * Load existing metrics for a calculator
 */
function loadMetrics(calculatorId) {
  const metricsPath = path.join(metricsDir, `${calculatorId}.json`);
  if (fs.existsSync(metricsPath)) {
    return JSON.parse(fs.readFileSync(metricsPath, 'utf8'));
  }
  return {
    calculatorId,
    metrics: [],
    summary: {
      latest: null,
      best: null,
      worst: null,
      average: null,
    },
  };
}

/**
 * Save metrics for a calculator
 */
function saveMetrics(calculatorId, data) {
  const metricsPath = path.join(metricsDir, `${calculatorId}.json`);
  fs.writeFileSync(metricsPath, JSON.stringify(data, null, 2), 'utf8');
}

/**
 * Calculate summary statistics
 */
function calculateSummary(metrics) {
  if (metrics.length === 0) {
    return {
      latest: null,
      best: null,
      worst: null,
      average: null,
    };
  }

  const latest = metrics[metrics.length - 1];
  
  // Calculate averages
  const averages = {
    lcp: metrics.reduce((sum, m) => sum + (m.lcp || 0), 0) / metrics.length,
    inp: metrics.reduce((sum, m) => sum + (m.inp || 0), 0) / metrics.length,
    cls: metrics.reduce((sum, m) => sum + (m.cls || 0), 0) / metrics.length,
    fcp: metrics.reduce((sum, m) => sum + (m.fcp || 0), 0) / metrics.length,
    tti: metrics.reduce((sum, m) => sum + (m.tti || 0), 0) / metrics.length,
    performanceScore: metrics.reduce((sum, m) => sum + (m.performanceScore || 0), 0) / metrics.length,
  };

  // Find best and worst
  const best = metrics.reduce((best, current) => {
    return (current.performanceScore || 0) > (best.performanceScore || 0) ? current : best;
  }, metrics[0]);

  const worst = metrics.reduce((worst, current) => {
    return (current.performanceScore || 0) < (worst.performanceScore || 0) ? current : worst;
  }, metrics[0]);

  return {
    latest,
    best,
    worst,
    average: averages,
  };
}

/**
 * Validate metrics against targets
 */
function validateMetrics(metrics) {
  const issues = [];
  const warnings = [];

  if (metrics.lcp && metrics.lcp > TARGETS.LCP) {
    if (metrics.lcp > 4) {
      issues.push(`LCP is poor: ${metrics.lcp}s (target: < ${TARGETS.LCP}s)`);
    } else {
      warnings.push(`LCP needs improvement: ${metrics.lcp}s (target: < ${TARGETS.LCP}s)`);
    }
  }

  if (metrics.inp && metrics.inp > TARGETS.INP) {
    if (metrics.inp > 500) {
      issues.push(`INP is poor: ${metrics.inp}ms (target: < ${TARGETS.INP}ms)`);
    } else {
      warnings.push(`INP needs improvement: ${metrics.inp}ms (target: < ${TARGETS.INP}ms)`);
    }
  }

  if (metrics.cls && metrics.cls > TARGETS.CLS) {
    if (metrics.cls > 0.25) {
      issues.push(`CLS is poor: ${metrics.cls} (target: < ${TARGETS.CLS})`);
    } else {
      warnings.push(`CLS needs improvement: ${metrics.cls} (target: < ${TARGETS.CLS})`);
    }
  }

  if (metrics.performanceScore && metrics.performanceScore < TARGETS.PERFORMANCE_SCORE) {
    if (metrics.performanceScore < 50) {
      issues.push(`Performance score is poor: ${metrics.performanceScore} (target: ${TARGETS.PERFORMANCE_SCORE}+)`);
    } else {
      warnings.push(`Performance score needs improvement: ${metrics.performanceScore} (target: ${TARGETS.PERFORMANCE_SCORE}+)`);
    }
  }

  return { issues, warnings };
}

/**
 * Add new metrics entry
 */
function addMetrics(calculatorId, newMetrics) {
  const data = loadMetrics(calculatorId);
  
  const entry = {
    timestamp: new Date().toISOString(),
    date: new Date().toISOString().split('T')[0],
    strategy: newMetrics.strategy || 'mobile',
    lcp: newMetrics.lcp,
    inp: newMetrics.inp,
    cls: newMetrics.cls,
    fcp: newMetrics.fcp,
    tti: newMetrics.tti,
    performanceScore: newMetrics.performanceScore,
    accessibilityScore: newMetrics.accessibilityScore,
    bestPracticesScore: newMetrics.bestPracticesScore,
    seoScore: newMetrics.seoScore,
    url: newMetrics.url,
  };

  data.metrics.push(entry);
  data.summary = calculateSummary(data.metrics);
  
  saveMetrics(calculatorId, data);
  
  return { entry, validation: validateMetrics(entry) };
}

/**
 * Generate comparison report
 */
function generateComparisonReport(calculatorId) {
  const data = loadMetrics(calculatorId);
  
  if (data.metrics.length < 2) {
    return null;
  }

  const latest = data.metrics[data.metrics.length - 1];
  const previous = data.metrics[data.metrics.length - 2];

  const comparison = {
    calculatorId,
    latestDate: latest.date,
    previousDate: previous.date,
    changes: {
      lcp: latest.lcp - previous.lcp,
      inp: latest.inp - previous.inp,
      cls: latest.cls - previous.cls,
      fcp: latest.fcp - previous.fcp,
      tti: latest.tti - previous.tti,
      performanceScore: latest.performanceScore - previous.performanceScore,
    },
    trends: {
      lcp: latest.lcp < previous.lcp ? 'improved' : latest.lcp > previous.lcp ? 'worsened' : 'unchanged',
      inp: latest.inp < previous.inp ? 'improved' : latest.inp > previous.inp ? 'worsened' : 'unchanged',
      cls: latest.cls < previous.cls ? 'improved' : latest.cls > previous.cls ? 'worsened' : 'unchanged',
      performanceScore: latest.performanceScore > previous.performanceScore ? 'improved' : latest.performanceScore < previous.performanceScore ? 'worsened' : 'unchanged',
    },
  };

  return comparison;
}

/**
 * Generate summary report for all calculators
 */
function generateSummaryReport() {
  const files = fs.readdirSync(metricsDir).filter(f => f.endsWith('.json'));
  const reports = [];

  for (const file of files) {
    const calculatorId = file.replace('.json', '');
    const data = loadMetrics(calculatorId);
    
    if (data.metrics.length > 0) {
      const latest = data.summary.latest;
      const validation = validateMetrics(latest);
      
      reports.push({
        calculatorId,
        latestDate: latest.date,
        performanceScore: latest.performanceScore,
        lcp: latest.lcp,
        inp: latest.inp,
        cls: latest.cls,
        status: validation.issues.length > 0 ? 'poor' : validation.warnings.length > 0 ? 'needs-improvement' : 'good',
        issues: validation.issues.length,
        warnings: validation.warnings.length,
      });
    }
  }

  // Sort by performance score (lowest first)
  reports.sort((a, b) => (a.performanceScore || 0) - (b.performanceScore || 0));

  return reports;
}

// Command line interface
const args = process.argv.slice(2);

if (args.length === 0) {
  // Generate summary report
  console.log('📊 Performance Metrics Summary Report\n');
  
  const reports = generateSummaryReport();
  
  if (reports.length === 0) {
    console.log('No metrics data found.');
    console.log('\nTo add metrics, use:');
    console.log('  node scripts/track-performance-metrics.js [calculator-id] [metrics-json]');
    console.log('\nExample:');
    console.log('  node scripts/track-performance-metrics.js mortgage-calculator \'{"lcp":2.1,"inp":150,"cls":0.05,"performanceScore":95}\'');
    process.exit(0);
  }

  console.log('─'.repeat(100));
  console.log(`${'Calculator'.padEnd(30)} | Score | LCP | INP | CLS | Status | Issues | Warnings`);
  console.log('─'.repeat(100));

  reports.forEach(report => {
    const name = report.calculatorId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const score = (report.performanceScore || 0).toString().padStart(3);
    const lcp = (report.lcp || 0).toFixed(2).padStart(5);
    const inp = (report.inp || 0).toString().padStart(4);
    const cls = (report.cls || 0).toFixed(3).padStart(5);
    const status = report.status === 'good' ? '✅ Good' : report.status === 'needs-improvement' ? '⚠️  Needs Improvement' : '❌ Poor';
    const issues = report.issues.toString().padStart(6);
    const warnings = report.warnings.toString().padStart(8);

    console.log(`${name.padEnd(30)} | ${score} | ${lcp}s | ${inp}ms | ${cls} | ${status.padEnd(18)} | ${issues} | ${warnings}`);
  });

  console.log('─'.repeat(100));
  console.log(`\nTotal Calculators: ${reports.length}`);
  console.log(`Good: ${reports.filter(r => r.status === 'good').length}`);
  console.log(`Needs Improvement: ${reports.filter(r => r.status === 'needs-improvement').length}`);
  console.log(`Poor: ${reports.filter(r => r.status === 'poor').length}`);
} else if (args.length >= 2) {
  // Add new metrics
  const calculatorId = args[0];
  const metricsJson = args[1];
  
  try {
    const metrics = JSON.parse(metricsJson);
    const result = addMetrics(calculatorId, metrics);
    
    console.log(`✅ Metrics added for ${calculatorId}\n`);
    console.log('Metrics:');
    console.log(`  LCP: ${result.entry.lcp}s`);
    console.log(`  INP: ${result.entry.inp}ms`);
    console.log(`  CLS: ${result.entry.cls}`);
    console.log(`  Performance Score: ${result.entry.performanceScore}`);
    
    if (result.validation.issues.length > 0) {
      console.log('\n❌ Issues:');
      result.validation.issues.forEach(issue => console.log(`  - ${issue}`));
    }
    
    if (result.validation.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      result.validation.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    // Generate comparison if possible
    const comparison = generateComparisonReport(calculatorId);
    if (comparison) {
      console.log('\n📈 Comparison with previous test:');
      console.log(`  Performance Score: ${comparison.changes.performanceScore > 0 ? '+' : ''}${comparison.changes.performanceScore.toFixed(1)} (${comparison.trends.performanceScore})`);
      console.log(`  LCP: ${comparison.changes.lcp > 0 ? '+' : ''}${comparison.changes.lcp.toFixed(2)}s (${comparison.trends.lcp})`);
      console.log(`  INP: ${comparison.changes.inp > 0 ? '+' : ''}${comparison.changes.inp.toFixed(0)}ms (${comparison.trends.inp})`);
      console.log(`  CLS: ${comparison.changes.cls > 0 ? '+' : ''}${comparison.changes.cls.toFixed(3)} (${comparison.trends.cls})`);
    }
  } catch (e) {
    console.error('❌ Error parsing metrics JSON:', e.message);
    console.log('\nUsage:');
    console.log('  node scripts/track-performance-metrics.js [calculator-id] [metrics-json]');
    console.log('\nExample:');
    console.log('  node scripts/track-performance-metrics.js mortgage-calculator \'{"lcp":2.1,"inp":150,"cls":0.05,"fcp":1.5,"tti":3.2,"performanceScore":95,"strategy":"mobile"}\'');
    process.exit(1);
  }
} else {
  console.log('Usage:');
  console.log('  node scripts/track-performance-metrics.js                    # Show summary');
  console.log('  node scripts/track-performance-metrics.js [id] [metrics]    # Add metrics');
  console.log('\nExample:');
  console.log('  node scripts/track-performance-metrics.js mortgage-calculator \'{"lcp":2.1,"inp":150,"cls":0.05,"performanceScore":95}\'');
  process.exit(1);
}

