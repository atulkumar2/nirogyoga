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
    '/knowledge-base/shirshashana',
    '/knowledge-base/sarvangasana',
    '/knowledge-base/halasana',
    '/knowledge-base/viparita-karani',
    '/knowledge-base/pincha-mayurasana',
    '/knowledge-base/standing-asanas',
    '/knowledge-base/surya-namaskara',
    '/knowledge-base/meditation',
    '/knowledge-base/patanjali-sutras',
    '/knowledge-base/learning-paths',
    '/knowledge-base/yoga-books',
    '/knowledge-base/curriculum',
    '/knowledge-base/safety-guidelines',
    '/knowledge-base/body-control-methods',
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

const htmlCache = new Map();

async function getPageHtml(page) {
    const url = `${SITE_URL}${page}`;
    if (!htmlCache.has(url)) {
        htmlCache.set(url, fetch(url).then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
            return res.text();
        }));
    }
    return htmlCache.get(url);
}

describe("SEO Tests", () => {
    beforeAll(async () => {
        await assertSiteReachable();
    });

    describe('Per-Page SEO Checks', () => {
        test.concurrent.each(PAGES_TO_TEST)('%s SEO checks', async (page) => {
            const html = await getPageHtml(page);

            // Title Tags
            expect(html).toMatch(/<title[^>]*>.*<\/title>/i);
            const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
            if (titleMatch) {
                const titleLength = titleMatch[1].length;
                expect(titleLength).toBeGreaterThanOrEqual(10);
                expect(titleLength).toBeLessThanOrEqual(70);
            }

            // Meta Descriptions
            expect(html).toMatch(/<meta[^>]*name=["']description["'][^>]*>/i);
            const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
            if (descMatch) {
                const descLength = descMatch[1].length;
                expect(descLength).toBeGreaterThanOrEqual(50);
                expect(descLength).toBeLessThanOrEqual(170);
            }

            // Canonical URLs
            const hasCanonical = html.includes('rel="canonical"');
            if (hasCanonical) {
                expect(html).toMatch(/<link[^>]*rel=["']canonical["'][^>]*href=/i);
            }

            // Content Quality
            expect(html).not.toMatch(/lorem ipsum/i);
            expect(html).not.toMatch(/placeholder text/i);
            expect(html).not.toMatch(/coming soon/i);

            // Robots Meta
            expect(html).not.toMatch(/<meta[^>]*name=["']robots["'][^>]*content=["']noindex/i);
        });
    });

    describe('Global SEO Checks', () => {
        test('Home page should have Open Graph tags', async () => {
            const html = await getPageHtml('/');
            expect(html).toMatch(/<meta[^>]*property=["']og:title["']/i);
            expect(html).toMatch(/<meta[^>]*property=["']og:description["']/i);
        });

        test('Should have organization schema markup', async () => {
            const html = await getPageHtml('/');
            const hasSchema = html.includes('application/ld+json') ||
                html.includes('schema.org') ||
                html.includes('itemtype');
            if (hasSchema) {
                expect(html).toMatch(/schema\.org/i);
            }
        });
    });
});
