/**
 * Featured Snippets Optimization Utilities
 * 
 * Utilities for optimizing content for Google Featured Snippets
 */

/**
 * Optimize FAQ answer for featured snippets
 * 
 * Best practices:
 * - 40-60 words for paragraph snippets
 * - Direct answer in first sentence
 * - Include example if possible
 * - Complete, accurate answer
 * 
 * @param answer - Original FAQ answer
 * @param targetLength - Target word count (default: 50)
 * @returns Optimized answer
 */
export function optimizeFAQAnswer(
  answer: string,
  targetLength: number = 50
): string {
  // If answer is already in optimal range, return as-is
  const wordCount = answer.split(/\s+/).length;
  
  if (wordCount >= 40 && wordCount <= 60) {
    return answer;
  }
  
  // If too short, expand with example or additional context
  if (wordCount < 40) {
    // Try to add an example if not present
    if (!answer.includes("example") && !answer.includes("Example")) {
      return `${answer} For example, this helps illustrate the concept clearly.`;
    }
    return answer;
  }
  
  // If too long, truncate to target length while preserving meaning
  if (wordCount > 60) {
    const sentences = answer.split(/[.!?]+/).filter(s => s.trim().length > 0);
    let optimized = "";
    let currentLength = 0;
    
    for (const sentence of sentences) {
      const sentenceLength = sentence.split(/\s+/).length;
      if (currentLength + sentenceLength <= targetLength) {
        optimized += sentence.trim() + ". ";
        currentLength += sentenceLength;
      } else {
        break;
      }
    }
    
    return optimized.trim() || answer.substring(0, 300) + "...";
  }
  
  return answer;
}

/**
 * Format step-by-step guide for featured snippets
 * 
 * @param steps - Array of step descriptions
 * @returns HTML formatted step-by-step guide
 */
export function formatStepByStepGuide(steps: string[]): string {
  return `
    <ol>
      ${steps.map((step, index) => `
        <li>
          <strong>Step ${index + 1}:</strong> ${step}
        </li>
      `).join('')}
    </ol>
  `;
}

/**
 * Format comparison table for featured snippets
 * 
 * @param headers - Table headers
 * @param rows - Table rows (array of arrays)
 * @returns HTML formatted table
 */
export function formatComparisonTable(
  headers: string[],
  rows: string[][]
): string {
  return `
    <table>
      <thead>
        <tr>
          ${headers.map(header => `<th>${header}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `
          <tr>
            ${row.map(cell => `<td>${cell}</td>`).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

/**
 * Format definition box for featured snippets
 * 
 * @param term - Term to define
 * @param definition - Definition (40-60 words)
 * @param example - Optional example
 * @returns HTML formatted definition
 */
export function formatDefinitionBox(
  term: string,
  definition: string,
  example?: string
): string {
  let html = `
    <div class="definition-box">
      <h3>What is ${term}?</h3>
      <p><strong>${term}</strong> is ${definition}</p>
  `;
  
  if (example) {
    html += `<p><strong>Example:</strong> ${example}</p>`;
  }
  
  html += `</div>`;
  
  return html;
}

/**
 * Check if content is optimized for featured snippets
 * 
 * @param content - Content to check
 * @returns Object with optimization status
 */
export function checkFeaturedSnippetOptimization(content: string): {
  hasStepByStep: boolean;
  hasTable: boolean;
  hasDefinition: boolean;
  hasFAQ: boolean;
  score: number;
} {
  const hasStepByStep = /step\s+\d+|step-by-step|follow these steps/i.test(content);
  const hasTable = /<table|<thead|<tbody/.test(content);
  const hasDefinition = /what is|definition|is defined as/i.test(content);
  const hasFAQ = /frequently asked|faq|question/i.test(content);
  
  let score = 0;
  if (hasStepByStep) score += 25;
  if (hasTable) score += 25;
  if (hasDefinition) score += 25;
  if (hasFAQ) score += 25;
  
  return {
    hasStepByStep,
    hasTable,
    hasDefinition,
    hasFAQ,
    score,
  };
}

