/**
 * AI Code Review Bot - Main Entry Point
 * Initializes the bot and sets up GitHub webhook listeners
 */

const { Octokit } = require('octokit');
const ReviewEngine = require('./core/ReviewEngine');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const reviewEngine = new ReviewEngine(octokit);

/**
 * Initialize the bot
 */
async function initialize() {
  console.log('🤖 AI Code Review Bot initialized');
  console.log('Listening for pull request events...');
  
  // Bot is ready to process PR events
}

initialize().catch(error => {
  console.error('Failed to initialize bot:', error);
  process.exit(1);
});

module.exports = { reviewEngine };
