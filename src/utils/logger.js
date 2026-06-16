/**
 * Logger Utility
 * Provides logging functionality
 */

class Logger {
  /**
   * Log info message
   * @param {string} message
   */
  static info(message) {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }

  /**
   * Log error message
   * @param {string} message
   * @param {Error} error
   */
  static error(message, error) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error);
  }

  /**
   * Log warning message
   * @param {string} message
   */
  static warn(message) {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  }
}

module.exports = Logger;
