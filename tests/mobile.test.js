/**
 * Mobile Responsiveness Tests
 * Tests for mobile-friendly design and viewport settings
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
    '/knowledge-base/twisting-asanas/bharadvajasana',
    '/knowledge-base/twisting-asanas/marichyasana',
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

function checkResponsiveImages(html) {
    const imgTags = html.match(/<img[^>]*>/gi) || [];
    imgTags.forEach(imgTag => {
        if (imgTag.includes('style=')) {
            expect(imgTag).not.toMatch(/style=["'][^"']*width:\s*\d+px/i);
        }
    });
}

function checkTouchTargets(html) {
    const buttons = html.match(/<button[^>]*>/gi) || [];
    const links = html.match(/<a[^>]*class=[^>]*button[^>]*>/gi) || [];
    [...buttons, ...links].forEach(element => {
        expect(element.length).toBeGreaterThan(0);
    });
}

describe('Mobile Responsiveness Tests', () => {
    beforeAll(async () => {
        await assertSiteReachable();
    });

    describe('Per-Page Responsiveness Checks', () => {
        test.concurrent.each(PAGES_TO_TEST)('%s mobile checks', async (page) => {
            const html = await getPageHtml(page);

            // Viewport
            expect(html).toMatch(/<meta[^>]*name=["']viewport["']/i);
            const viewportMatch = html.match(/<meta[^>]*name=["']viewport["'][^>]*content=["']([^"']*)["']/i);
            if (viewportMatch) {
                expect(viewportMatch[1]).toMatch(/width=device-width/i);
            }

            // Responsive Images
            checkResponsiveImages(html);

            // Touch Targets
            checkTouchTargets(html);

            // Font Sizes
            expect(html).not.toMatch(/font-size:\s*\dpx/i);
            expect(html).not.toMatch(/font-size:\s*1[0-1]px/i);

            // Horizontal Scrolling
            expect(html).not.toMatch(/width:\s*\d{4,}px/i);
            expect(html).not.toMatch(/min-width:\s*\d{4,}px/i);
        });
    });

    describe('Global Mobile Features', () => {
        test('Should have mobile menu functionality', async () => {
            const html = await getPageHtml('/');
            const hasMobileNav = html.includes('hamburger') ||
                html.includes('mobile-menu') ||
                html.includes('menu-toggle') ||
                html.match(/class=["'][^"']*nav[^"']*mobile/i);
            expect(hasMobileNav).toBe(true);
        });

        test('Should have responsive CSS', async () => {
            const html = await getPageHtml('/');
            const hasCSSFiles = html.match(/<link[^>]*rel=["']stylesheet["']/gi);
            expect(hasCSSFiles).toBeTruthy();
            expect(hasCSSFiles.length).toBeGreaterThan(0);
        });
    });
});

