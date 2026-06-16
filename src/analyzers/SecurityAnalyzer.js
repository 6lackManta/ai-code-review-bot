/**
 * Security Analyzer
 * Detects common security vulnerabilities
 */

class SecurityAnalyzer {
  constructor() {
    this.issues = [];
  }

  /**
   * Analyze code for security issues
   * @param {Object} prData - Pull request data
   * @returns {Promise<Array>} Security findings
   */
  async analyze(prData) {
    const findings = [];
    const { files } = prData;

    for (const file of files) {
      if (this.isSecurityRisk(file)) {
        findings.push({
          type: 'security',
          severity: 'high',
          file: file.filename,
          message: 'Potential security vulnerability detected',
          suggestion: 'Review this code for security best practices',
        });
      }
    }

    return findings;
  }

  /**
   * Check if file poses security risk
   * @param {Object} file - File object
   * @returns {boolean}
   */
  isSecurityRisk(file) {
    const content = file.patch || '';
    const securityPatterns = [
      /eval\(/,
      /exec\(/,
      /sql\s*=/i,
      /password/i,
    ];

    return securityPatterns.some(pattern => pattern.test(content));
  }
}

module.exports = SecurityAnalyzer;
