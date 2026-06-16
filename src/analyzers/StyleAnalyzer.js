/**
 * Style Analyzer
 * Checks code style and formatting
 */

class StyleAnalyzer {
  constructor() {
    this.maxLineLength = 100;
  }

  /**
   * Analyze code style
   * @param {Object} prData - Pull request data
   * @returns {Promise<Array>} Style findings
   */
  async analyze(prData) {
    const findings = [];
    const { files } = prData;

    for (const file of files) {
      const lines = (file.patch || '').split('\n');
      lines.forEach((line, index) => {
        if (line.length > this.maxLineLength) {
          findings.push({
            type: 'style',
            severity: 'low',
            file: file.filename,
            line: index + 1,
            message: `Line exceeds ${this.maxLineLength} characters`,
            suggestion: 'Consider breaking long lines for better readability',
          });
        }
      });
    }

    return findings;
  }
}

module.exports = StyleAnalyzer;
