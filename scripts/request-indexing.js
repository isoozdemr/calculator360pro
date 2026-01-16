/**
 * Google Search Console Indexing Request Script
 * 
 * This script helps request indexing for new or updated calculator pages
 * 
 * Prerequisites:
 * 1. Set up Google Search Console API credentials
 * 2. Install googleapis: npm install googleapis
 * 3. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in .env.local
 * 
 * Usage:
 * node scripts/request-indexing.js <url>
 * 
 * Example:
 * node scripts/request-indexing.js https://calculator360pro.com/calculators/finance/mortgage-calculator
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://calculator360pro.com';

async function requestIndexing(url) {
  try {
    // Initialize Google Search Console API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const searchconsole = google.searchconsole({
      version: 'v1',
      auth,
    });

    // Request indexing
    console.log(`Requesting indexing for: ${url}`);
    
    const response = await searchconsole.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: url,
        siteUrl: SITE_URL,
      },
    });

    console.log('✅ Indexing requested successfully!');
    console.log('Response:', JSON.stringify(response.data, null, 2));
    
    return response.data;
  } catch (error) {
    console.error('❌ Error requesting indexing:', error.message);
    
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    
    throw error;
  }
}

// Main function
async function main() {
  const url = process.argv[2];
  
  if (!url) {
    console.error('❌ Error: URL is required');
    console.log('Usage: node scripts/request-indexing.js <url>');
    console.log('Example: node scripts/request-indexing.js https://calculator360pro.com/calculators/finance/mortgage-calculator');
    process.exit(1);
  }

  // Validate URL
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    console.error('❌ Error: URL must start with http:// or https://');
    process.exit(1);
  }

  // Check if URL belongs to our site
  if (!url.startsWith(SITE_URL)) {
    console.error(`❌ Error: URL must belong to ${SITE_URL}`);
    process.exit(1);
  }

  try {
    await requestIndexing(url);
    process.exit(0);
  } catch (error) {
    console.error('Failed to request indexing');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { requestIndexing };

