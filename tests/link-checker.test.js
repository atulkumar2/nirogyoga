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
    '/knowledge-base/standing-asanas',
    '/knowledge-base/surya-namaskara',
    '/knowledge-base/meditation',
    '/knowledge-base/patanjali-sutras',
    '/knowledge-base/learning-paths',
    '/knowledge-base/yoga-books',
    '/knowledge-base/curriculum',
    '/knowledge-base/safety-guidelines',
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
            expect(response.status).toBe(200);
        });
    });

    describe('Navbar Links', () => {
        test.each(PAGES_TO_TEST)('%s should have all navbar links', async (page) => {
            const response = await fetch(`${SITE_URL}${page}`);
            const html = await response.text();
            const escapedSlash = String.raw`\/`;

            NAVBAR_LINKS.forEach(link => {
                const linkPattern = new RegExp(`href="${link.replaceAll('/', escapedSlash)}"`, 'i');
                expect(html).toMatch(linkPattern);
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
                expect(html).toMatch(linkPattern);
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
                try {
                    expect(html).toMatch(linkPattern);
                } catch (e) {
                    console.error(`Link check failed for "${link}" on page "${page}":`, e.message);
                    throw new Error(`Missing link "${link}" on page "${page}"`);
                }
            });
        });
    });

    describe('Enrollment Links', () => {
        test('All enrollment links should point to /enrollment-payment', async () => {
            for (const page of PAGES_TO_TEST) {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Should NOT have old /enrollment links
                expect(html).not.toMatch(/href="\/enrollment"[^-]/i);

                // Check if page has enrollment links, they should be /enrollment-payment
                if (html.includes('Enroll')) {
                    const enrollLinks = html.match(/href="(\/enrollment[^"]*)"/gi);
                    if (enrollLinks) {
                        enrollLinks.forEach(match => {
                            expect(match).toMatch(/\/enrollment-payment/i);
                        });
                    }
                }
            }
        }, 15000); // 15 second timeout for checking all pages

        test('Anchors with visible text "Enroll" should link to /enrollment-payment (except on /enrollment-payment page)', async () => {
            for (const page of PAGES_TO_TEST) {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                const enrollAnchorRegex = /<a\b[^>]*href="([^"]+)"[^>]*>(?:(?!<a\b)[\s\S])*?Enroll(?:(?!<a\b)[\s\S])*?<\/a>/gi;
                const matches = [...html.matchAll(enrollAnchorRegex)];

                matches.forEach(match => {
                    const href = match[1];
                    if (page === '/enrollment-payment') return; // enroll page may link to external forms
                    try {
                        expect(href).toMatch(/^\/enrollment-payment(?:$|#)/i);
                    } catch (err) {
                        console.error(`Link check failed for "${link}" on page "${page}":`, e.message);
                        throw new Error(`Found enroll anchor on page "${page}" with href "${href}"`);
                    }
                });
            }
        }, 20000);
    });

    describe('Programs/Events Links', () => {
        test('Programs links should point to /programs-events', async () => {
            for (const page of PAGES_TO_TEST) {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Should NOT have old /programs or /events links (except anchor links)
                expect(html).not.toMatch(/href="\/programs"[^-]/i);
                expect(html).not.toMatch(/href="\/events"[^-]/i);
            }
        }, 20000); // 20 second timeout
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
                    expect(href).toMatch(/^\/payment$/i);
                });

                // Anchors that include a payButton class should also link to /payment
                const payClassAnchors = [...html.matchAll(/<a[^>]*class="[^"]*payButton[^"]*"[^>]*href="([^"]+)"/gi)];
                payClassAnchors.forEach(match => {
                    const href = match[1];
                    expect(href).toMatch(/^\/payment$/i);
                });
            }
        }, 15000);
    });

    describe('Anchor Links', () => {
        test('/programs-events should have working anchor links', async () => {
            const response = await fetch(`${SITE_URL}/programs-events`);
            const html = await response.text();

            // Check for anchor link targets
            expect(html).toMatch(/id="programs"/i);
            expect(html).toMatch(/id="events"/i);

            // Check for anchor link references
            expect(html).toMatch(/href="#programs"/i);
            expect(html).toMatch(/href="#events"/i);
        });

        test('/testimonials should have working anchor link for interest form', async () => {
            const response = await fetch(`${SITE_URL}/testimonials`);
            const html = await response.text();

            // Check for interest form section (it's now at the top)
            expect(html).toMatch(/Interest/i);
            // The forms are embedded iframes, not anchor links
            expect(html).toMatch(/forms\.gle/i);
        });
    });

    describe('External vs Internal Links', () => {
        test('Google Form links should be external', async () => {
            const response = await fetch(`${SITE_URL}/enrollment-payment`);
            const html = await response.text();

            // Google Forms should have target="_blank" and rel="noopener noreferrer"
            const googleFormLinks = html.match(/href="https:\/\/forms\.gle[^"]*"/gi);
            if (googleFormLinks) {
                googleFormLinks.forEach(link => {
                    const linkContext = html.substring(
                        html.indexOf(link) - 100,
                        html.indexOf(link) + 200
                    );
                    expect(linkContext).toMatch(/target="_blank"/i);
                    expect(linkContext).toMatch(/rel="noopener noreferrer"/i);
                });
            }
        });
    });
});

// Run this test manually with: npm test
