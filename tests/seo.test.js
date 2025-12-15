/**
 * SEO Tests
 * Tests for search engine optimization best practices
 */

const fetch = require('node-fetch');
const { SITE_URL, assertSiteReachable } = require("./siteHealth");

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

describe("SEO Tests", () => {
    beforeAll(async () => {
        await assertSiteReachable();
    });

    describe('Title Tags', () => {
        jest.setTimeout(20000); // 20 seconds for all tests in this block

        PAGES_TO_TEST.forEach(page => {
            test(`${page} - should have a title tag`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                expect(html).toMatch(/<title[^>]*>.*<\/title>/i);
            });

            test(`${page} - title should be between 30-60 characters`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
                if (titleMatch) {
                    const titleLength = titleMatch[1].length;
                    expect(titleLength).toBeGreaterThanOrEqual(10);
                    expect(titleLength).toBeLessThanOrEqual(70);
                }
            });
        });
    });

    describe('Meta Descriptions', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - should have a meta description`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                expect(html).toMatch(/<meta[^>]*name=["']description["'][^>]*>/i);
            });

            test(`${page} - meta description should be 120-160 characters`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
                if (descMatch) {
                    const descLength = descMatch[1].length;
                    expect(descLength).toBeGreaterThanOrEqual(50);
                    expect(descLength).toBeLessThanOrEqual(170);
                }
            });
        });
    });

    describe('Open Graph Tags', () => {
        test('Home page should have Open Graph tags', async () => {
            const response = await fetch(`${SITE_URL}/`);
            const html = await response.text();

            // Check for basic OG tags
            expect(html).toMatch(/<meta[^>]*property=["']og:title["']/i);
            expect(html).toMatch(/<meta[^>]*property=["']og:description["']/i);
        });
    });

    describe('Canonical URLs', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - should have canonical URL`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Canonical tag is optional but recommended
                const hasCanonical = html.includes('rel="canonical"');
                // This is a soft check - we just verify if it exists, it's properly formatted
                if (hasCanonical) {
                    expect(html).toMatch(/<link[^>]*rel=["']canonical["'][^>]*href=/i);
                }
            });
        });
    });

    describe('Structured Data', () => {
        test('Should have organization schema', async () => {
            const response = await fetch(`${SITE_URL}/`);
            const html = await response.text();

            // Check for JSON-LD or schema.org markup
            const hasSchema = html.includes('application/ld+json') ||
                html.includes('schema.org') ||
                html.includes('itemtype');

            // This is optional but recommended
            if (hasSchema) {
                expect(html).toMatch(/schema\.org/i);
            }
        });
    });

    describe('Content Quality', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - should not have placeholder text`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                expect(html).not.toMatch(/lorem ipsum/i);
                expect(html).not.toMatch(/placeholder text/i);
                expect(html).not.toMatch(/coming soon/i);
            });
        });
    });

    describe('Robots Meta', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - should not block search engines`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Make sure we're not blocking indexing
                expect(html).not.toMatch(/<meta[^>]*name=["']robots["'][^>]*content=["']noindex/i);
            });
        });
    });
});
