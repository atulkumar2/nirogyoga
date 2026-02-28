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
    '/knowledge-base/pincha-mayurasana',    '/knowledge-base/standing-asanas',
    '/knowledge-base/standing-asanas/tadasana',
    '/knowledge-base/standing-asanas/virabhadrasana-1',
    '/knowledge-base/standing-asanas/virabhadrasana-2',
    '/knowledge-base/standing-asanas/virabhadrasana-3',
    '/knowledge-base/standing-asanas/utthita-trikonasana',
    '/knowledge-base/standing-asanas/utthita-parsvakonasana',
    '/knowledge-base/standing-asanas/ardha-chandrasana',
    '/knowledge-base/standing-asanas/parsvottanasana',
    '/knowledge-base/standing-asanas/vrikshasana',
    '/knowledge-base/forward-bends/pascimottanasana',
    '/knowledge-base/forward-bends/uttanasana',
    '/knowledge-base/forward-bends/prasarita-padottanasana',
    '/knowledge-base/forward-bends/janu-sirsasana',
    '/knowledge-base/forward-bends/balasana',
    '/knowledge-base/backbends/bhujangasana',
    '/knowledge-base/backbends/urdhva-mukha-svanasana',
    '/knowledge-base/backbends/dhanurasana',
    '/knowledge-base/backbends/ustrasana',
    '/knowledge-base/backbends/salabhasana',
    '/knowledge-base/backbends/setu-bandha-sarvangasana',
    '/knowledge-base/twisting-asanas/ardha-matsyendrasana',
    '/knowledge-base/twisting-asanas/bharadvajasana',    '/knowledge-base/twisting-asanas/marichyasana',
    '/knowledge-base/balancing-asanas/vrikshasana',
    '/knowledge-base/balancing-asanas/garudasana',
    '/knowledge-base/balancing-asanas/natarajasana',
    '/knowledge-base/balancing-asanas/bakasana',    '/knowledge-base/balancing-asanas/kakasana',
    '/knowledge-base/hip-opening-asanas/baddha-konasana',
    '/knowledge-base/hip-opening-asanas/upavista-konasana',
    '/knowledge-base/hip-opening-asanas/eka-pada-raja-kapotasana',    '/knowledge-base/hip-opening-asanas/mandukasana',
    '/knowledge-base/core-strength-asanas/navasana',
    '/knowledge-base/core-strength-asanas/phalakasana',
    '/knowledge-base/core-strength-asanas/chaturanga-dandasana',
    '/knowledge-base/restorative-asanas/savasana',
    '/knowledge-base/restorative-asanas/sukhasana',
    '/knowledge-base/restorative-asanas/vajrasana',
    '/knowledge-base/restorative-asanas/padmasana',
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
    '/yoga-healing/mobility-balance',    '/yoga-healing/pcos',
    '/yoga-healing/migraine-chronic-headaches',
    '/yoga-healing/cerebral-cortex-thickening',
    '/yoga-healing/acid-peptic-diseases',
    '/yoga-healing/lipid-liver-disorders',
    '/yoga-healing/ibs',
    '/yoga-healing/coronary-artery-disease',
    '/yoga-healing/obesity-metabolic-syndrome',
    '/yoga-healing/endocrine-dysregulation',
    '/yoga-healing/menstrual-menopausal-symptoms',
    '/yoga-healing/age-related-changes',
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





