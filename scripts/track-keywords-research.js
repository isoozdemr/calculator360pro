/**
 * Keywords Research Tracking Script
 * 
 * Tracks and stores keywords research data for calculators
 * Creates historical tracking and comparison reports
 * 
 * Usage: 
 *   node scripts/track-keywords-research.js                    # Show summary
 *   node scripts/track-keywords-research.js [calculator-id]    # Show calculator details
 *   node scripts/track-keywords-research.js [id] [json]        # Add research data
 */

const fs = require('fs');
const path = require('path');

// Keywords research storage directory
const researchDir = path.join(__dirname, '../docs/keywords-research');
if (!fs.existsSync(researchDir)) {
  fs.mkdirSync(researchDir, { recursive: true });
}

// Search volume targets
const TARGETS = {
  PRIMARY_MIN: 10000,
  PRIMARY_IDEAL: 50000,
  SECONDARY_MIN: 5000,
  LONGTAIL_MIN: 1000,
  SEMANTIC_MIN: 1000,
  KD_PRIMARY_MAX: 50,
  KD_SECONDARY_MAX: 40,
  KD_LONGTAIL_MAX: 30,
};

/**
 * Load existing research data for a calculator
 */
function loadResearch(calculatorId) {
  const researchPath = path.join(researchDir, `${calculatorId}.json`);
  if (fs.existsSync(researchPath)) {
    return JSON.parse(fs.readFileSync(researchPath, 'utf8'));
  }
  return {
    calculatorId,
    research: [],
    summary: {
      latest: null,
      primaryKeyword: null,
      totalKeywords: 0,
      highVolumeKeywords: 0,
      lowDifficultyKeywords: 0,
    },
  };
}

/**
 * Save research data for a calculator
 */
function saveResearch(calculatorId, data) {
  const researchPath = path.join(researchDir, `${calculatorId}.json`);
  fs.writeFileSync(researchPath, JSON.stringify(data, null, 2), 'utf8');
}

/**
 * Validate keywords research data
 */
function validateResearch(researchData) {
  const issues = [];
  const warnings = [];

  // Validate primary keyword
  if (researchData.primaryKeyword) {
    const pk = researchData.primaryKeyword;
    if (!pk.searchVolume || pk.searchVolume < TARGETS.PRIMARY_MIN) {
      warnings.push(`Primary keyword search volume (${pk.searchVolume || 'N/A'}) is below target (${TARGETS.PRIMARY_MIN}+)`);
    }
    if (pk.keywordDifficulty && pk.keywordDifficulty > TARGETS.KD_PRIMARY_MAX) {
      warnings.push(`Primary keyword difficulty (${pk.keywordDifficulty}) is above target (< ${TARGETS.KD_PRIMARY_MAX})`);
    }
  } else {
    issues.push('Primary keyword not specified');
  }

  // Validate secondary keywords
  if (researchData.secondaryKeywords && researchData.secondaryKeywords.length > 0) {
    researchData.secondaryKeywords.forEach((kw, index) => {
      if (!kw.searchVolume || kw.searchVolume < TARGETS.SECONDARY_MIN) {
        warnings.push(`Secondary keyword[${index}] search volume (${kw.searchVolume || 'N/A'}) is below target (${TARGETS.SECONDARY_MIN}+)`);
      }
      if (kw.keywordDifficulty && kw.keywordDifficulty > TARGETS.KD_SECONDARY_MAX) {
        warnings.push(`Secondary keyword[${index}] difficulty (${kw.keywordDifficulty}) is above target (< ${TARGETS.KD_SECONDARY_MAX})`);
      }
    });
  } else {
    warnings.push('No secondary keywords specified (recommended: 3-5)');
  }

  // Validate long-tail keywords
  if (researchData.longTailKeywords && researchData.longTailKeywords.length > 0) {
    researchData.longTailKeywords.forEach((kw, index) => {
      if (!kw.searchVolume || kw.searchVolume < TARGETS.LONGTAIL_MIN) {
        warnings.push(`Long-tail keyword[${index}] search volume (${kw.searchVolume || 'N/A'}) is below target (${TARGETS.LONGTAIL_MIN}+)`);
      }
    });
  } else {
    warnings.push('No long-tail keywords specified (recommended: 2-3)');
  }

  // Validate semantic keywords
  if (researchData.semanticKeywords && researchData.semanticKeywords.length > 0) {
    researchData.semanticKeywords.forEach((kw, index) => {
      if (kw.searchVolume && kw.searchVolume < TARGETS.SEMANTIC_MIN) {
        warnings.push(`Semantic keyword[${index}] search volume (${kw.searchVolume}) is below target (${TARGETS.SEMANTIC_MIN}+), but may be acceptable if highly relevant`);
      }
    });
  } else {
    warnings.push('No semantic keywords specified (recommended: 2-3)');
  }

  // Check total keyword count
  const totalKeywords = 
    (researchData.primaryKeyword ? 1 : 0) +
    (researchData.secondaryKeywords?.length || 0) +
    (researchData.longTailKeywords?.length || 0) +
    (researchData.semanticKeywords?.length || 0);

  if (totalKeywords < 6) {
    warnings.push(`Total keywords (${totalKeywords}) is below minimum (6-8 recommended)`);
  }

  return { issues, warnings, totalKeywords };
}

/**
 * Calculate summary statistics
 */
function calculateSummary(researchData) {
  const summary = {
    primaryKeyword: researchData.primaryKeyword,
    totalKeywords: 
      (researchData.primaryKeyword ? 1 : 0) +
      (researchData.secondaryKeywords?.length || 0) +
      (researchData.longTailKeywords?.length || 0) +
      (researchData.semanticKeywords?.length || 0),
    highVolumeKeywords: 0,
    lowDifficultyKeywords: 0,
    averageSearchVolume: 0,
    averageKeywordDifficulty: 0,
  };

  const allKeywords = [
    researchData.primaryKeyword,
    ...(researchData.secondaryKeywords || []),
    ...(researchData.longTailKeywords || []),
    ...(researchData.semanticKeywords || []),
  ].filter(Boolean);

  let totalVolume = 0;
  let totalDifficulty = 0;
  let difficultyCount = 0;

  allKeywords.forEach(kw => {
    if (kw.searchVolume) {
      totalVolume += kw.searchVolume;
      if (kw.searchVolume >= TARGETS.PRIMARY_MIN) {
        summary.highVolumeKeywords++;
      }
    }
    if (kw.keywordDifficulty) {
      totalDifficulty += kw.keywordDifficulty;
      difficultyCount++;
      if (kw.keywordDifficulty <= TARGETS.KD_PRIMARY_MAX) {
        summary.lowDifficultyKeywords++;
      }
    }
  });

  if (allKeywords.length > 0) {
    summary.averageSearchVolume = Math.round(totalVolume / allKeywords.length);
  }

  if (difficultyCount > 0) {
    summary.averageKeywordDifficulty = Math.round(totalDifficulty / difficultyCount);
  }

  return summary;
}

/**
 * Add new research entry
 */
function addResearch(calculatorId, researchData) {
  const data = loadResearch(calculatorId);
  
  const entry = {
    timestamp: new Date().toISOString(),
    date: new Date().toISOString().split('T')[0],
    researcher: researchData.researcher || 'Unknown',
    primaryKeyword: researchData.primaryKeyword,
    secondaryKeywords: researchData.secondaryKeywords || [],
    longTailKeywords: researchData.longTailKeywords || [],
    semanticKeywords: researchData.semanticKeywords || [],
    tools: researchData.tools || [],
    notes: researchData.notes || '',
  };

  data.research.push(entry);
  data.summary = calculateSummary(entry);
  
  saveResearch(calculatorId, data);
  
  return { entry, validation: validateResearch(entry) };
}

/**
 * Generate summary report for all calculators
 */
function generateSummaryReport() {
  const files = fs.readdirSync(researchDir).filter(f => f.endsWith('.json'));
  const reports = [];

  for (const file of files) {
    const calculatorId = file.replace('.json', '');
    const data = loadResearch(calculatorId);
    
    if (data.research.length > 0) {
      const latest = data.research[data.research.length - 1];
      const validation = validateResearch(latest);
      
      reports.push({
        calculatorId,
        latestDate: latest.date,
        primaryKeyword: latest.primaryKeyword?.keyword || 'N/A',
        primaryVolume: latest.primaryKeyword?.searchVolume || 0,
        primaryKD: latest.primaryKeyword?.keywordDifficulty || 'N/A',
        totalKeywords: data.summary.totalKeywords,
        highVolumeKeywords: data.summary.highVolumeKeywords,
        lowDifficultyKeywords: data.summary.lowDifficultyKeywords,
        status: validation.issues.length > 0 ? 'poor' : validation.warnings.length > 0 ? 'needs-improvement' : 'good',
        issues: validation.issues.length,
        warnings: validation.warnings.length,
      });
    }
  }

  // Sort by primary volume (highest first)
  reports.sort((a, b) => (b.primaryVolume || 0) - (a.primaryVolume || 0));

  return reports;
}

// Command line interface
const args = process.argv.slice(2);

if (args.length === 0) {
  // Generate summary report
  console.log('📊 Keywords Research Summary Report\n');
  
  const reports = generateSummaryReport();
  
  if (reports.length === 0) {
    console.log('No keywords research data found.');
    console.log('\nTo add research data, use:');
    console.log('  node scripts/track-keywords-research.js [calculator-id] [research-json]');
    console.log('\nExample:');
    console.log('  node scripts/track-keywords-research.js mortgage-calculator \'{"primaryKeyword":{"keyword":"mortgage calculator","searchVolume":450000,"keywordDifficulty":45},"secondaryKeywords":[{"keyword":"mortgage payment calculator","searchVolume":120000,"keywordDifficulty":38}]}\'');
    process.exit(0);
  }

  console.log('─'.repeat(120));
  console.log(`${'Calculator'.padEnd(30)} | Primary Keyword | Volume | KD | Total | High Vol | Low KD | Status`);
  console.log('─'.repeat(120));

  reports.forEach(report => {
    const name = report.calculatorId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const primaryKw = (report.primaryKeyword || 'N/A').substring(0, 25).padEnd(25);
    const volume = report.primaryVolume > 0 ? report.primaryVolume.toLocaleString() : 'N/A';
    const kd = typeof report.primaryKD === 'number' ? report.primaryKD.toString() : report.primaryKD;
    const total = report.totalKeywords.toString().padStart(5);
    const highVol = report.highVolumeKeywords.toString().padStart(8);
    const lowKD = report.lowDifficultyKeywords.toString().padStart(6);
    const status = report.status === 'good' ? '✅ Good' : report.status === 'needs-improvement' ? '⚠️  Needs Improvement' : '❌ Poor';

    console.log(`${name.padEnd(30)} | ${primaryKw} | ${volume.padStart(10)} | ${kd.padStart(3)} | ${total} | ${highVol} | ${lowKD.padStart(6)} | ${status}`);
  });

  console.log('─'.repeat(120));
  console.log(`\nTotal Calculators: ${reports.length}`);
  console.log(`✅ Good: ${reports.filter(r => r.status === 'good').length}`);
  console.log(`⚠️  Needs Improvement: ${reports.filter(r => r.status === 'needs-improvement').length}`);
  console.log(`❌ Poor: ${reports.filter(r => r.status === 'poor').length}`);
} else if (args.length === 1) {
  // Show calculator details
  const calculatorId = args[0];
  const data = loadResearch(calculatorId);
  
  if (data.research.length === 0) {
    console.log(`No research data found for ${calculatorId}`);
    console.log('\nTo add research data, use:');
    console.log(`  node scripts/track-keywords-research.js ${calculatorId} [research-json]`);
    process.exit(0);
  }

  const latest = data.research[data.research.length - 1];
  const validation = validateResearch(latest);

  console.log(`📊 Keywords Research: ${calculatorId}\n`);
  console.log(`Research Date: ${latest.date}`);
  console.log(`Researcher: ${latest.researcher}`);
  console.log(`Tools Used: ${latest.tools.join(', ') || 'N/A'}\n`);

  console.log('Primary Keyword:');
  if (latest.primaryKeyword) {
    console.log(`  Keyword: ${latest.primaryKeyword.keyword}`);
    console.log(`  Search Volume: ${latest.primaryKeyword.searchVolume?.toLocaleString() || 'N/A'} monthly`);
    console.log(`  Keyword Difficulty: ${latest.primaryKeyword.keywordDifficulty || 'N/A'}`);
    console.log(`  Intent: ${latest.primaryKeyword.intent || 'N/A'}`);
  } else {
    console.log('  Not specified');
  }

  console.log('\nSecondary Keywords:');
  if (latest.secondaryKeywords && latest.secondaryKeywords.length > 0) {
    latest.secondaryKeywords.forEach((kw, index) => {
      console.log(`  ${index + 1}. ${kw.keyword}`);
      console.log(`     Volume: ${kw.searchVolume?.toLocaleString() || 'N/A'} monthly, KD: ${kw.keywordDifficulty || 'N/A'}`);
    });
  } else {
    console.log('  None specified');
  }

  console.log('\nLong-Tail Keywords:');
  if (latest.longTailKeywords && latest.longTailKeywords.length > 0) {
    latest.longTailKeywords.forEach((kw, index) => {
      console.log(`  ${index + 1}. ${kw.keyword}`);
      console.log(`     Volume: ${kw.searchVolume?.toLocaleString() || 'N/A'} monthly, KD: ${kw.keywordDifficulty || 'N/A'}`);
    });
  } else {
    console.log('  None specified');
  }

  console.log('\nSemantic Keywords:');
  if (latest.semanticKeywords && latest.semanticKeywords.length > 0) {
    latest.semanticKeywords.forEach((kw, index) => {
      console.log(`  ${index + 1}. ${kw.keyword}`);
      console.log(`     Volume: ${kw.searchVolume?.toLocaleString() || 'N/A'} monthly, KD: ${kw.keywordDifficulty || 'N/A'}`);
    });
  } else {
    console.log('  None specified');
  }

  console.log('\nSummary:');
  console.log(`  Total Keywords: ${data.summary.totalKeywords}`);
  console.log(`  High-Volume Keywords (10K+): ${data.summary.highVolumeKeywords}`);
  console.log(`  Low-Difficulty Keywords (KD < 50): ${data.summary.lowDifficultyKeywords}`);
  console.log(`  Average Search Volume: ${data.summary.averageSearchVolume.toLocaleString() || 'N/A'}`);
  console.log(`  Average Keyword Difficulty: ${data.summary.averageKeywordDifficulty || 'N/A'}`);

  if (validation.issues.length > 0) {
    console.log('\n❌ Issues:');
    validation.issues.forEach(issue => console.log(`  - ${issue}`));
  }

  if (validation.warnings.length > 0) {
    console.log('\n⚠️  Warnings:');
    validation.warnings.forEach(warning => console.log(`  - ${warning}`));
  }

  if (latest.notes) {
    console.log('\nNotes:');
    console.log(`  ${latest.notes}`);
  }
} else if (args.length >= 2) {
  // Add new research
  const calculatorId = args[0];
  const researchJson = args[1];
  
  try {
    const researchData = JSON.parse(researchJson);
    const result = addResearch(calculatorId, researchData);
    
    console.log(`✅ Keywords research added for ${calculatorId}\n`);
    
    console.log('Primary Keyword:');
    if (result.entry.primaryKeyword) {
      console.log(`  ${result.entry.primaryKeyword.keyword}`);
      console.log(`  Volume: ${result.entry.primaryKeyword.searchVolume?.toLocaleString() || 'N/A'} monthly`);
      console.log(`  KD: ${result.entry.primaryKeyword.keywordDifficulty || 'N/A'}`);
    }
    
    console.log(`\nTotal Keywords: ${result.validation.totalKeywords}`);
    console.log(`  Primary: ${result.entry.primaryKeyword ? 1 : 0}`);
    console.log(`  Secondary: ${result.entry.secondaryKeywords.length}`);
    console.log(`  Long-Tail: ${result.entry.longTailKeywords.length}`);
    console.log(`  Semantic: ${result.entry.semanticKeywords.length}`);
    
    if (result.validation.issues.length > 0) {
      console.log('\n❌ Issues:');
      result.validation.issues.forEach(issue => console.log(`  - ${issue}`));
    }
    
    if (result.validation.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      result.validation.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
  } catch (e) {
    console.error('❌ Error parsing research JSON:', e.message);
    console.log('\nUsage:');
    console.log('  node scripts/track-keywords-research.js [calculator-id] [research-json]');
    console.log('\nExample:');
    console.log('  node scripts/track-keywords-research.js mortgage-calculator \'{"primaryKeyword":{"keyword":"mortgage calculator","searchVolume":450000,"keywordDifficulty":45,"intent":"Informational"},"secondaryKeywords":[{"keyword":"mortgage payment calculator","searchVolume":120000,"keywordDifficulty":38}],"researcher":"Name","tools":["Ahrefs","Google Keyword Planner"]}\'');
    process.exit(1);
  }
} else {
  console.log('Usage:');
  console.log('  node scripts/track-keywords-research.js                    # Show summary');
  console.log('  node scripts/track-keywords-research.js [id]               # Show calculator details');
  console.log('  node scripts/track-keywords-research.js [id] [json]       # Add research data');
  console.log('\nExample:');
  console.log('  node scripts/track-keywords-research.js mortgage-calculator \'{"primaryKeyword":{"keyword":"mortgage calculator","searchVolume":450000,"keywordDifficulty":45}}\'');
  process.exit(1);
}

