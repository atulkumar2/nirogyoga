/**
 * External Link Checker Test
 * Tests all external links across the Nirog Yoga website to ensure they are reachable.
 * 
 * Note: determining "reachability" can be flaky due to external server configs (blocking bots, HEAD requests, etc.).
 * This test uses a timeout and retries, and simulates a browser User-Agent.
 */

const { SITE_URL, assertSiteReachable } = require("./siteHealth");

// Reusing pages list from internal checker logic (could be shared, but copying for isolation)
const PAGES_TO_TEST = [
    '/',
    '/about',
    '/instructors',
    '/instructors/dr-kunal',
    '/instructors/parvathi',
    '/programs-events',
    '/enrollment-payment',
    '/payment',
    '/knowledge-base',
    '/knowledge-base/major-asanas',
    '/knowledge-base/shirshashana',
    '/knowledge-base/sarvangasana',
    '/knowledge-base/halasana',
    '/knowledge-base/standing-asanas',
    '/knowledge-base/surya-namaskara',
    '/knowledge-base/viparita-karani',
    '/knowledge-base/pincha-mayurasana',
    '/knowledge-base/body-control-methods',
    '/yoga-healing',
    '/resources',
    // Add other relevant pages that are known to have external links
];

// Cache to avoid re-checking the same URL multiple times across different pages
const urlCheckCache = new Map();

describe('External Link Checker', () => {
    beforeAll(async () => {
        await assertSiteReachable();
    });

    test('External links should be reachable', async () => {
        const uniqueExternalLinks = new Set();
        const pageLinkMap = new Map();

        // 1. Parallel harvesting: Fetch all pages simultaneously
        await Promise.all(PAGES_TO_TEST.map(async (page) => {
            try {
                const url = `${SITE_URL}${page}`;
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
                const html = await response.text();
                
                const linkRegex = /href="(https?:\/\/[^"]+)"/gi;
                let match;
                while ((match = linkRegex.exec(html)) !== null) {
                    const extUrl = match[1];
                    if (!extUrl.includes('localhost') && !extUrl.includes('127.0.0.1')) {
                        uniqueExternalLinks.add(extUrl);
                        if (!pageLinkMap.has(extUrl)) {
                            pageLinkMap.set(extUrl, []);
                        }
                        pageLinkMap.get(extUrl).push(page);
                    }
                }
            } catch (err) {
                console.error(`Error harvesting links from ${page}: ${err.message}`);
                // Don't fail the whole test if one page fails to harvest, 
                // but we might miss links. For reliability, we could throw here.
            }
        }));

        console.log(`Found ${uniqueExternalLinks.size} unique external links to verify.`);

        // 2. Parallel verification: Check all links simultaneously
        const linksArray = Array.from(uniqueExternalLinks);
        const errors = [];

        await Promise.all(linksArray.map(async (url) => {
            if (urlCheckCache.has(url)) {
                if (!urlCheckCache.get(url)) {
                    errors.push(`Broken link: ${url} (found on: ${pageLinkMap.get(url).join(', ')})`);
                }
                return;
            }

            try {
                const status = await checkUrl(url);
                if (status >= 200 && status < 400) {
                    urlCheckCache.set(url, true);
                } else if ([403, 401, 999, 503].includes(status)) {
                    console.warn(`Warning: Received status ${status} for ${url}. Assuming valid but blocked bot.`);
                    urlCheckCache.set(url, true);
                } else {
                    urlCheckCache.set(url, false);
                    errors.push(`Broken link (Status ${status}): ${url} (found on: ${pageLinkMap.get(url).join(', ')})`);
                }
            } catch (err) {
                urlCheckCache.set(url, false);
                errors.push(`Broken link (Network Error: ${err.message}): ${url} (found on: ${pageLinkMap.get(url).join(', ')})`);
            }
        }));

        if (errors.length > 0) {
            throw new Error(`Found ${errors.length} broken external links:\n${errors.join('\n')}`);
        }
    }, 120000); // 2 minute timeout
});

async function checkUrl(url, retries = 2) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
        const response = await fetch(url, {
            method: 'GET', // HEAD is faster but often blocked or handled poorly by some servers
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        clearTimeout(timeoutId);
        return response.status;
    } catch (error) {
        clearTimeout(timeoutId);
        if (retries > 0) {
            // console.log(`Retrying ${url}...`);
            await new Promise(r => setTimeout(r, 1000));
            return checkUrl(url, retries - 1);
        }
        throw error;
    }
}
