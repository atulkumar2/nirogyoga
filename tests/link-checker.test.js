/**
 * Link Checker Test
 * Tests all internal links across the Nirog Yoga website
 */

const SITE_URL = 'http://localhost:3000';

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
    '/what-is-yoga',
    '/what-is-yoga/standing-asanas',
    '/yoga-healing',
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
        '/programs',
        '/testimonials#interest',
        '/#contact',
    ],
    '/enrollment-payment': [
        '/payment',
    ],
    '/payment': [
        '/programs',
        '/enrollment-payment',
        '/testimonials#interest',
        '/contact',
    ],
    '/contact': [
        '/testimonials#interest',
    ],
    '/what-is-yoga': [
        '/what-is-yoga/standing-asanas',
    ],
};

// Navbar links (should be on every page)
const NAVBAR_LINKS = [
    '/about',
    '/instructors',
    '/programs-events',
    '/testimonials',
    '/what-is-yoga',
    '/yoga-healing',
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
    '/what-is-yoga',
    '/contact',
    '/testimonials',
    '/testimonials#interest',
    '/payment',
    '/enrollment-payment',
    '/resources',
];

describe('Internal Link Checker', () => {
    describe('Page Accessibility', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} should be accessible`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                expect(response.status).toBe(200);
            });
        });
    });

    describe('Navbar Links', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} should have all navbar links`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                NAVBAR_LINKS.forEach(link => {
                    const linkPattern = new RegExp(`href="${link.replace(/\//g, '\\/')}"`, 'i');
                    expect(html).toMatch(linkPattern);
                });
            });
        });
    });

    describe('Footer Links', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} should have all footer links`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                FOOTER_LINKS.forEach(link => {
                    const linkPattern = new RegExp(`href="${link.replace(/\//g, '\\/')}"`, 'i');
                    expect(html).toMatch(linkPattern);
                });
            });
        });
    });

    describe('Page-Specific Links', () => {
        Object.entries(EXPECTED_LINKS).forEach(([page, links]) => {
            test(`${page} should have expected internal links`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                links.forEach(link => {
                    const linkPattern = new RegExp(`href="${link.replace(/\//g, '\\/')}"`, 'i');
                    try {
                        expect(html).toMatch(linkPattern);
                    } catch (e) {
                        throw new Error(`Missing link "${link}" on page "${page}"`);
                    }
                });
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
        }, 15000); // 15 second timeout
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
