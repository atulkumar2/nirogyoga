/**
 * Link Checker Test
 * Tests all internal links across the Nirog Yoga website
 */

const { SITE_URL, assertSiteReachable } = require("./siteHealth");

// All pages to test
const PAGES_TO_TEST = [
    '/',
    '/about',
    '/instructors',
    '/instructors/dr-kunal',
    '/instructors/parvathi',
    '/programs-events',
    '/enrollment-payment',
    '/payment',
    '/contact',
    '/testimonials',
    '/knowledge-base',
    '/knowledge-base/introduction',
    '/knowledge-base/why-yoga',
    '/knowledge-base/historical-references',
    '/knowledge-base/breathing-techniques',
    '/knowledge-base/pranayama',
    '/knowledge-base/major-asanas',
    '/knowledge-base/shirshashana',
    '/knowledge-base/standing-asanas',
    '/knowledge-base/surya-namaskara',
    '/knowledge-base/meditation',
    '/knowledge-base/patanjali-sutras',
    '/knowledge-base/learning-paths',
    '/knowledge-base/yoga-books',
    '/knowledge-base/curriculum',
    '/knowledge-base/safety-guidelines',
    '/knowledge-base/yoga-terms',
    '/yoga-healing',
    '/yoga-healing/ptsd',
    '/yoga-healing/anxiety-depression',
    '/yoga-healing/adhd',
    '/yoga-healing/chronic-pain',
    '/yoga-healing/arthritis',
    '/yoga-healing/asthma',
    '/yoga-healing/diabetes',
    '/yoga-healing/hypertension',
    '/yoga-healing/insomnia',
    '/yoga-healing/mobility-balance',
    '/yoga-healing/pcos',
    '/saatvic-literature',
    '/resources',
];

// Expected internal link patterns
const EXPECTED_LINKS = {
    '/': [
        '/about',
        '/instructors',
        '/programs-events',
        '/enrollment-payment',
        '/payment',
    ],
    '/about': [
        '/instructors/dr-kunal',
        '/instructors/parvathi',
    ],
    '/instructors': [
        '/instructors/dr-kunal',
        '/instructors/parvathi',
    ],
    '/programs-events': [
        '#programs',
        '#events',
        '/enrollment-payment',
        '/payment',
        '/testimonials#interest',
        '/#contact',
    ],
    '/enrollment-payment': [
        '/payment',
    ],
    '/payment': [
        '/programs-events',
        '/enrollment-payment',
        '/testimonials#interest',
        '/contact',
    ],
    '/contact': [
        '/testimonials#interest',
    ],
    '/knowledge-base': [
        '/knowledge-base/introduction',
        '/knowledge-base/why-yoga',
        '/knowledge-base/historical-references',
        '/knowledge-base/breathing-techniques',
        '/knowledge-base/pranayama',
        '/knowledge-base/major-asanas',
        '/knowledge-base/standing-asanas',
        '/knowledge-base/surya-namaskara',
        '/knowledge-base/meditation',
        '/knowledge-base/patanjali-sutras',
        '/knowledge-base/learning-paths',
        '/knowledge-base/yoga-books',
        '/knowledge-base/curriculum',
        '/knowledge-base/safety-guidelines',
        '/knowledge-base/yoga-terms',
    ],
};

// Navbar links (should be on every page)
const NAVBAR_LINKS = [
    '/about',
    '/instructors',
    '/programs-events',
    '/testimonials',
    '/knowledge-base',
    '/yoga-healing',
    '/saatvic-literature',
    '/contact',
    '/enrollment-payment',
];

// Footer links (should be on every page)
const FOOTER_LINKS = [
    '/about',
    '/instructors',
    '/yoga-healing',
    '/programs-events',
    '/programs-events#events',
    '/knowledge-base',
    '/saatvic-literature',
    '/contact',
    '/testimonials',
    '/testimonials#interest',
    '/payment',
    '/enrollment-payment',
    '/resources',
];

describe('Internal Link Checker', () => {
    beforeAll(async () => {
        await assertSiteReachable();
    });

    describe('Page Accessibility', () => {
        test.each(PAGES_TO_TEST)('%s should be accessible', async (page) => {
            const response = await fetch(`${SITE_URL}${page}`);
            if (response.status !== 200) {
                throw new Error(`Page "${page}" returned status ${response.status} for ${SITE_URL}${page}`);
            }
        });
    });

    describe('Navbar Links', () => {
        test.each(PAGES_TO_TEST)('%s should have all navbar links', async (page) => {
            const response = await fetch(`${SITE_URL}${page}`);
            const html = await response.text();
            const escapedSlash = String.raw`\/`;

            NAVBAR_LINKS.forEach(link => {
                const linkPattern = new RegExp(`href="${link.replaceAll('/', escapedSlash)}"`, 'i');
                const idx = html.search(linkPattern);
                if (idx === -1) {
                    const snippet = html.slice(0, 200);
                    throw new Error(`Missing navbar link "${link}" on page "${page}". Page URL: ${SITE_URL}${page}. Snippet: ${snippet}`);
                }
            });
        });
    });

    describe('Footer Links', () => {
        test.each(PAGES_TO_TEST)('%s should have all footer links', async (page) => {
            const response = await fetch(`${SITE_URL}${page}`);
            const html = await response.text();
            const escapedSlash = String.raw`\/`;

            FOOTER_LINKS.forEach(link => {
                const linkPattern = new RegExp(`href="${link.replaceAll('/', escapedSlash)}"`, 'i');
                const idx = html.search(linkPattern);
                if (idx === -1) {
                    const snippet = html.slice(0, 200);
                    throw new Error(`Missing footer link "${link}" on page "${page}". Page URL: ${SITE_URL}${page}. Snippet: ${snippet}`);
                }
            });
        });
    });

    describe('Page-Specific Links', () => {
        test.each(Object.entries(EXPECTED_LINKS))('%s should have expected internal links', async (page, links) => {
            const response = await fetch(`${SITE_URL}${page}`);
            const html = await response.text();
            const escapedSlash = String.raw`\/`;

            links.forEach(link => {
                const linkPattern = new RegExp(`href="${link.replaceAll('/', escapedSlash)}"`, 'i');
                const idx = html.search(linkPattern);
                if (idx === -1) {
                    const snippet = html.slice(0, 200);
                    console.error(`Link check failed for "${link}" on page "${page}". Snippet: ${snippet}`);
                    throw new Error(`Missing link "${link}" on page "${page}". Page URL: ${SITE_URL}${page}. Snippet: ${snippet}`);
                }
            });
        });
    });

    // Helper: fetch with per-request timeout and diagnostic messages
    const FETCH_TIMEOUT_MS = 8000;

    async function fetchWithTimeout(url, timeoutMs = FETCH_TIMEOUT_MS) {
        return await Promise.race([
            fetch(url),
            new Promise((_, reject) => setTimeout(() => reject(new Error(`Fetch timed out after ${timeoutMs}ms for ${url}`)), timeoutMs)),
        ]);
    }

    async function fetchTextWithTimeout(url, timeoutMs = FETCH_TIMEOUT_MS) {
        try {
            const response = await fetchWithTimeout(url, timeoutMs);
            return await Promise.race([
                response.text(),
                new Promise((_, reject) => setTimeout(() => reject(new Error(`Reading response timed out after ${timeoutMs}ms for ${url}`)), timeoutMs)),
            ]);
        } catch (err) {
            // Normalize and include URL in the message
            throw new Error(`${err.message} (URL: ${url})`);
        }
    }

    describe('Enrollment Links', () => {
        // Increase Jest's timeout for this long-running test and add per-page timeouts so we fail fast with details
        test('All enrollment links should point to /enrollment-payment', async () => {
            for (const page of PAGES_TO_TEST) {
                let html;
                try {
                    html = await fetchTextWithTimeout(`${SITE_URL}${page}`, FETCH_TIMEOUT_MS);
                } catch (err) {
                    // Provide clear context on which page/URL timed out or errored
                    throw new Error(`Timeout/network error while fetching page "${page}" (${SITE_URL}${page}): ${err.message}`);
                }

                // Should NOT have old /enrollment links
                const deprecatedRegex = /href="\/enrollment"[^-]/i;
                const deprecatedMatch = deprecatedRegex.exec(html);
                if (deprecatedMatch) {
                    const snippet = html.substring(Math.max(0, deprecatedMatch.index - 50), Math.min(html.length, deprecatedMatch.index + 50));
                    throw new Error(`Found deprecated "/enrollment" link on page "${page}": ${deprecatedMatch[0]}. Snippet: ${snippet}`);
                }

                // Check if page has enrollment links, they should be /enrollment-payment
                const enrollLinks = [...html.matchAll(/href="(\/enrollment[^"]*)"/gi)];
                enrollLinks.forEach(match => {
                    const href = match[1];
                    if (!/\/enrollment-payment/i.test(href)) {
                        const snippet = html.substring(Math.max(0, match.index - 50), Math.min(html.length, match.index + 50));
                        throw new Error(`Enroll link on page "${page}" points to "${href}" (expected "/enrollment-payment"). Snippet: ${snippet}`);
                    }
                });
            }
        }, 120000); // 2 minute timeout for checking all pages (per-page fetch has a shorter timeout)

        test('Anchors with visible text "Enroll" should link to /enrollment-payment (except on /enrollment-payment page)', async () => {
            for (const page of PAGES_TO_TEST) {
                let html;
                try {
                    html = await fetchTextWithTimeout(`${SITE_URL}${page}`, FETCH_TIMEOUT_MS);
                } catch (err) {
                    throw new Error(`Timeout/network error while fetching page "${page}" (${SITE_URL}${page}): ${err.message}`);
                }

                const enrollAnchorRegex = /<a\b[^>]*href="([^"]+)"[^>]*>(?:(?!<a\b)[\s\S])*?Enroll(?:(?!<a\b)[\s\S])*?<\/a>/gi;
                const matches = [...html.matchAll(enrollAnchorRegex)];

                matches.forEach(match => {
                    const href = match[1];
                    if (page === '/enrollment-payment') return; // enroll page may link to external forms
                    try {
                        expect(href).toMatch(/^\/enrollment-payment(?:$|#)/i);
                    } catch (err) {
                        // Log helpful diagnostics and rethrow a clear error
                        const snippet = html.substring(Math.max(0, match.index - 50), Math.min(html.length, match.index + 50));
                        console.error(`Found enroll anchor on page "${page}" with href "${href}":`, err.message);
                        throw new Error(`Found enroll anchor on page "${page}" with href "${href}". Snippet: ${snippet}`);
                    }
                });
            }
        }, 120000); // 2 minute timeout
    });

    describe('Programs/Events Links', () => {
        test('Programs links should point to /programs-events', async () => {
            for (const page of PAGES_TO_TEST) {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Should NOT have old /programs or /events links (except anchor links)
                const progRegex = /href="\/programs"[^-]/i;
                const progMatch = progRegex.exec(html);
                if (progMatch) {
                    const snippet = html.substring(Math.max(0, progMatch.index - 50), Math.min(html.length, progMatch.index + 50));
                    throw new Error(`Found deprecated "/programs" link on page "${page}": ${progMatch[0]}. Snippet: ${snippet}`);
                }
                const eventsRegex = /href="\/events"[^-]/i;
                const eventsMatch = eventsRegex.exec(html);
                if (eventsMatch) {
                    const snippet = html.substring(Math.max(0, eventsMatch.index - 50), Math.min(html.length, eventsMatch.index + 50));
                    throw new Error(`Found deprecated "/events" link on page "${page}": ${eventsMatch[0]}. Snippet: ${snippet}`);
                }
            }
        }, 120000); // 2 minute timeout
    });

    describe('Payment Links', () => {
        test('All Pay links should point to /payment', async () => {
            for (const page of PAGES_TO_TEST) {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Anchors whose visible text is exactly 'Pay' should link to /payment
                const payAnchors = [...html.matchAll(/<a[^>]*href="([^"]+)"[^>]*>\s*Pay\s*<\/a>/gi)];
                payAnchors.forEach(match => {
                    const href = match[1];
                    if (!/^\/payment$/i.test(href)) {
                        const snippet = html.substring(Math.max(0, match.index - 50), Math.min(html.length, match.index + 50));
                        throw new Error(`Pay anchor on page "${page}" points to "${href}" (expected "/payment"). Snippet: ${snippet}`);
                    }
                });

                // Anchors that include a payButton class should also link to /payment
                const payClassAnchors = [...html.matchAll(/<a[^>]*class="[^"]*payButton[^"]*"[^>]*href="([^"]+)"/gi)];
                payClassAnchors.forEach(match => {
                    const href = match[1];
                    if (!/^\/payment$/i.test(href)) {
                        const snippet = html.substring(Math.max(0, match.index - 50), Math.min(html.length, match.index + 50));
                        throw new Error(`Pay button on page "${page}" points to "${href}" (expected "/payment"). Snippet: ${snippet}`);
                    }
                });
            }
        }, 120000); // 2 minute timeout
    });

    describe('Anchor Links', () => {
        test('/programs-events should have working anchor links', async () => {
            const response = await fetch(`${SITE_URL}/programs-events`);
            const html = await response.text();

            // Check for anchor link targets
            if (!/id="programs"/i.test(html)) throw new Error(`Missing id="programs" on /programs-events. Page URL: ${SITE_URL}/programs-events`);
            if (!/id="events"/i.test(html)) throw new Error(`Missing id="events" on /programs-events. Page URL: ${SITE_URL}/programs-events`);

            // Check for anchor link references
            if (!/href="#programs"/i.test(html)) throw new Error(`Missing href="#programs" reference on /programs-events. Page URL: ${SITE_URL}/programs-events`);
            if (!/href="#events"/i.test(html)) throw new Error(`Missing href="#events" reference on /programs-events. Page URL: ${SITE_URL}/programs-events`);
        });

        test('/testimonials should have working anchor link for interest form', async () => {
            const response = await fetch(`${SITE_URL}/testimonials`);
            const html = await response.text();

            // Check for interest form section (it's now at the top)
            if (!/Interest/i.test(html)) throw new Error(`Missing "Interest" text on /testimonials. Page URL: ${SITE_URL}/testimonials`);
            // The forms are embedded iframes, not anchor links
            if (!/forms\.gle/i.test(html)) throw new Error(`Missing embedded forms (forms.gle) on /testimonials. Page URL: ${SITE_URL}/testimonials`);
        });
    });

    describe('External vs Internal Links', () => {
        test('Google Form links should be external', async () => {
            const response = await fetch(`${SITE_URL}/enrollment-payment`);
            const html = await response.text();

            // Google Forms should have target="_blank" and rel="noopener noreferrer"
            const googleFormRegex = /href="https:\/\/forms\.gle[^"]*"/gi;
            let googleMatch;
            while ((googleMatch = googleFormRegex.exec(html)) !== null) {
                const start = googleMatch.index;
                const linkContext = html.substring(
                    Math.max(0, start - 100),
                    Math.min(html.length, start + 200)
                );
                if (!/target="_blank"/i.test(linkContext)) {
                    throw new Error(`Google Form link missing target="_blank". Context: ${linkContext}`);
                }
                if (!/rel="noopener noreferrer"/i.test(linkContext)) {
                    throw new Error(`Google Form link missing rel="noopener noreferrer". Context: ${linkContext}`);
                }
            }
        }, 120000); // 2 minute timeout
    });
});

// Run this test manually with: npm test
