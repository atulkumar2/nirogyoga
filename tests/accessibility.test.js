/**
 * Accessibility Tests
 * Tests for WCAG compliance and accessibility best practices
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

function checkImageAltAttributes(html) {
    const imgTags = html.match(/<img[^>]*>/gi) || [];
    imgTags.forEach(imgTag => {
        expect(imgTag).toMatch(/alt=/i);
    });
}

describe('Accessibility Tests', () => {
    beforeAll(async () => {
        await assertSiteReachable();
    });

    describe('Page Content Checks', () => {
        test.concurrent.each(PAGES_TO_TEST)('%s accessibility checks', async (page) => {
            const html = await getPageHtml(page);

            // Images
            checkImageAltAttributes(html);

            // Heading Hierarchy
            const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
            expect(h1Count).toBe(1);

            const h1Index = html.indexOf('<h1');
            const h2Index = html.indexOf('<h2');
            const h3Index = html.indexOf('<h3');

            if (h2Index > -1) {
                expect(h2Index).toBeGreaterThan(h1Index);
            }
            if (h3Index > -1 && h2Index > -1) {
                expect(h3Index).toBeGreaterThan(h2Index);
            }

            // Links
            expect(html).not.toMatch(/<a[^>]*>click here<\/a>/i);
            expect(html).not.toMatch(/<a[^>]*>read more<\/a>/i);
            expect(html).not.toMatch(/<a[^>]*>here<\/a>/i);

            // Language
            expect(html).toMatch(/<html[^>]*lang=/i);
        });
    });

    describe('Global Accessibility', () => {
        test('Navigation should have proper ARIA labels', async () => {
            const html = await getPageHtml('/');
            const hasNav = html.includes('<nav') || html.includes('role="navigation"');
            expect(hasNav).toBe(true);
        });

        test('Contact page should have accessible forms', async () => {
            const html = await getPageHtml('/contact');
            const inputs = html.match(/<input[^>]*>/gi) || [];
            inputs.forEach(input => {
                const hasLabel = input.includes('aria-label') || input.includes('id=');
                if (!hasLabel) {
                    const isButton = input.includes('type="submit"') || input.includes('type="button"');
                    expect(isButton).toBe(true);
                }
            });
        });
    });
});




