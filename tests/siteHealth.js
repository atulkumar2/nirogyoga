// tests/siteHealth.js
const fetch = require('node-fetch');
const SITE_URL = process.env.SITE_URL || "http://localhost:3000";

async function assertSiteReachable() {
  try {
    const res = await fetch(SITE_URL, { method: "HEAD" });
    if (!res.ok) {
      throw new Error(
        `HTTP ${res.status} from SITE_URL=${SITE_URL} – ` +
        `make sure your app is running or SITE_URL is correct.`
      );
    }
  } catch (err) {
    throw new Error(
      `Could not reach SITE_URL=${SITE_URL}. ` +
      `Make sure your app is running or SITE_URL is correct.\n` +
      `Original error: ${err}`
    );
  }
}

module.exports = { SITE_URL, assertSiteReachable };
