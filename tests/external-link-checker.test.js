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
    '/knowledge-base/standing-asanas',
    '/knowledge-base/surya-namaskara',
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
        const pageLinkMap = new Map(); // Store which page a link was found on for debugging

        // 1. Harvest all external links
        for (const page of PAGES_TO_TEST) {
            const response = await fetch(`${SITE_URL}${page}`);
            const html = await response.text();
            
            // Regex to find href="http..."
            const linkRegex = /href="(https?:\/\/[^"]+)"/gi;
            let match;
            while ((match = linkRegex.exec(html)) !== null) {
                const url = match[1];
                // Filter out internal links (localhost or relative converted to absolute if that happened)
                // Filter out known problematic domains or non-navigable links if necessary
                if (!url.includes('localhost') && !url.includes('127.0.0.1')) {
                    uniqueExternalLinks.add(url);
                    if (!pageLinkMap.has(url)) {
                        pageLinkMap.set(url, []);
                    }
                    pageLinkMap.get(url).push(page);
                }
            }
        }

        console.log(`Found ${uniqueExternalLinks.size} unique external links to verify.`);

        // 2. Verify each link
        const errors = [];
        const linksArray = Array.from(uniqueExternalLinks);

        // Process in chunks to avoid overwhelming network
        const CHUNK_SIZE = 5;
        for (let i = 0; i < linksArray.length; i += CHUNK_SIZE) {
            const chunk = linksArray.slice(i, i + CHUNK_SIZE);
            await Promise.all(chunk.map(async (url) => {
                // Return cached result if available
                 if (urlCheckCache.has(url)) {
                    if (!urlCheckCache.get(url)) {
                        // It failed before
                        errors.push(`Broken link: ${url} (found on: ${pageLinkMap.get(url).join(', ')})`);
                    }
                    return;
                }

                try {
                    const status = await checkUrl(url);
                    if (status >= 200 && status < 400) {
                        urlCheckCache.set(url, true);
                    } else if (status === 403 || status === 401 || status === 999) {
                        // Some sites block automated requests (403/401) or LinkedIn/others give 999. 
                        // We might treat these as 'warning' or pass them if we can't reliably test.
                        // For now, let's log them but pass, assuming it's a bot protection.
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
        }

        if (errors.length > 0) {
            throw new Error(`Found ${errors.length} broken external links:\n${errors.join('\n')}`);
        }

    }, 120000); // 2 minute timeout
});

async function checkUrl(url, retries = 2) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

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
