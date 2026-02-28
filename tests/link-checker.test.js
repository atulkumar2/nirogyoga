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
    '/knowledge-base/yoga-and-telomere-health',
    '/knowledge-base/breathing-techniques',
    '/knowledge-base/pranayama',
    '/knowledge-base/major-asanas',
    '/knowledge-base/shirshashana',
    '/knowledge-base/sarvangasana',
    '/knowledge-base/halasana',
    '/knowledge-base/viparita-karani',
    '/knowledge-base/pincha-mayurasana',
    '/knowledge-base/standing-asanas',
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
    '/knowledge-base/balancing-asanas/vrikshasana',
    '/knowledge-base/balancing-asanas/garudasana',
    '/knowledge-base/balancing-asanas/natarajasana',
    '/knowledge-base/balancing-asanas/bakasana',
    '/knowledge-base/balancing-asanas/kakasana',
    '/knowledge-base/hip-opening-asanas/baddha-konasana',
    '/knowledge-base/hip-opening-asanas/upavista-konasana',
    '/knowledge-base/hip-opening-asanas/eka-pada-raja-kapotasana',
    '/knowledge-base/hip-opening-asanas/mandukasana',
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
    '/knowledge-base/yoga-terms',
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
        '/knowledge-base/yoga-and-telomere-health',
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
        '/knowledge-base/body-control-methods',
    ],
    '/knowledge-base/major-asanas': [
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
        '/knowledge-base/balancing-asanas/vrikshasana',
        '/knowledge-base/balancing-asanas/garudasana',
        '/knowledge-base/balancing-asanas/natarajasana',
        '/knowledge-base/balancing-asanas/bakasana',
        '/knowledge-base/balancing-asanas/kakasana',
        '/knowledge-base/hip-opening-asanas/baddha-konasana',
        '/knowledge-base/hip-opening-asanas/upavista-konasana',
        '/knowledge-base/hip-opening-asanas/eka-pada-raja-kapotasana',
        '/knowledge-base/hip-opening-asanas/mandukasana',
        '/knowledge-base/core-strength-asanas/navasana',
        '/knowledge-base/core-strength-asanas/phalakasana',
        '/knowledge-base/core-strength-asanas/chaturanga-dandasana',
        '/knowledge-base/restorative-asanas/savasana',
        '/knowledge-base/restorative-asanas/sukhasana',
        '/knowledge-base/restorative-asanas/vajrasana',
        '/knowledge-base/restorative-asanas/padmasana',
        '/knowledge-base/shirshashana',
        '/knowledge-base/sarvangasana',
        '/knowledge-base/halasana',
        '/knowledge-base/viparita-karani',
        '/knowledge-base/pincha-mayurasana',
    ],
    '/yoga-healing': [
        '/yoga-healing/ptsd',
        '/yoga-healing/anxiety-depression',
        '/yoga-healing/adhd',
        '/yoga-healing/chronic-pain',
        '/yoga-healing/arthritis',
        '/yoga-healing/mobility-balance',
        '/yoga-healing/migraine-chronic-headaches',
        '/yoga-healing/insomnia',
        '/yoga-healing/cerebral-cortex-thickening',
        '/yoga-healing/acid-peptic-diseases',
        '/yoga-healing/lipid-liver-disorders',
        '/yoga-healing/ibs',
        '/yoga-healing/hypertension',
        '/yoga-healing/coronary-artery-disease',
        '/yoga-healing/diabetes',
        '/yoga-healing/obesity-metabolic-syndrome',
        '/yoga-healing/asthma',
        '/yoga-healing/endocrine-dysregulation',
        '/yoga-healing/pcos',
        '/yoga-healing/menstrual-menopausal-symptoms',
        '/yoga-healing/age-related-changes',
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

    describe('Navbar and Footer Links', () => {
        test.each(PAGES_TO_TEST)('%s should have all navbar and footer links', async (page) => {
            const html = await getPageHtml(page);
            const escapedSlash = String.raw`\/`;

            NAVBAR_LINKS.forEach(link => {
                const linkPattern = new RegExp(`href="${link.replaceAll('/', escapedSlash)}"`, 'i');
                if (html.search(linkPattern) === -1) {
                    throw new Error(`Missing navbar link "${link}" on page "${page}"`);
                }
            });

            FOOTER_LINKS.forEach(link => {
                const linkPattern = new RegExp(`href="${link.replaceAll('/', escapedSlash)}"`, 'i');
                if (html.search(linkPattern) === -1) {
                    throw new Error(`Missing footer link "${link}" on page "${page}"`);
                }
            });
        });
    });

    describe('Page-Specific Links', () => {
        test.each(Object.entries(EXPECTED_LINKS))('%s should have expected internal links', async (page, links) => {
            const html = await getPageHtml(page);
            const escapedSlash = String.raw`\/`;

            links.forEach(link => {
                const linkPattern = new RegExp(`href="${link.replaceAll('/', escapedSlash)}"`, 'i');
                if (html.search(linkPattern) === -1) {
                    throw new Error(`Missing link "${link}" on page "${page}"`);
                }
            });
        });
    });

    describe('Enrollment Links', () => {
        test.each(PAGES_TO_TEST)('%s enrollment link checks', async (page) => {
            const html = await getPageHtml(page);

            // Deprecated links
            const deprecatedRegex = /href="\/enrollment"[^-]/i;
            if (deprecatedRegex.test(html)) {
                throw new Error(`Found deprecated "/enrollment" link on page "${page}"`);
            }

            // Correct enrollment-payment links
            const enrollLinks = [...html.matchAll(/href="(\/enrollment[^"]*)"/gi)];
            enrollLinks.forEach(match => {
                const href = match[1];
                if (!/\/enrollment-payment/i.test(href)) {
                    throw new Error(`Enroll link on page "${page}" points to "${href}" (expected "/enrollment-payment")`);
                }
            });

            // "Enroll" text links
            if (page !== '/enrollment-payment') {
                const enrollAnchorRegex = /<a\b[^>]*href="([^"]+)"[^>]*>(?:(?!<a\b)[\s\S])*?Enroll(?:(?!<a\b)[\s\S])*?<\/a>/gi;
                const matches = [...html.matchAll(enrollAnchorRegex)];
                matches.forEach(match => {
                    const href = match[1];
                    expect(href).toMatch(/^\/enrollment-payment(?:$|#)/i);
                });
            }
        });
    });

    describe('Programs/Events and Payment Links', () => {
        test.each(PAGES_TO_TEST)('%s programs/events and payment checks', async (page) => {
            const html = await getPageHtml(page);

            // Programs/Events
            if (/href="\/programs"[^-]/i.test(html)) throw new Error(`Deprecated "/programs" on ${page}`);
            if (/href="\/events"[^-]/i.test(html)) throw new Error(`Deprecated "/events" on ${page}`);

            // Payment
            const payAnchors = [...html.matchAll(/<a[^>]*href="([^"]+)"[^>]*>\s*Pay\s*<\/a>/gi)];
            payAnchors.forEach(match => {
                expect(match[1]).toMatch(/^\/payment$/i);
            });

            const payClassAnchors = [...html.matchAll(/<a[^>]*class="[^"]*payButton[^"]*"[^>]*href="([^"]+)"/gi)];
            payClassAnchors.forEach(match => {
                expect(match[1]).toMatch(/^\/payment$/i);
            });
        });
    });

    describe('Anchor and General Links', () => {
        test('/programs-events should have working anchor links', async () => {
            const html = await getPageHtml('/programs-events');
            expect(html).toMatch(/id="programs"/i);
            expect(html).toMatch(/id="events"/i);
            expect(html).toMatch(/href="#programs"/i);
            expect(html).toMatch(/href="#events"/i);
        });

        test('/testimonials should have working iframe forms', async () => {
            const html = await getPageHtml('/testimonials');
            expect(html).toMatch(/Interest/i);
            expect(html).toMatch(/forms\.gle/i);
        });

        test('Google Form links should be external and secure', async () => {
            const html = await getPageHtml('/enrollment-payment');
            const googleFormRegex = /<a[^>]*href="https:\/\/forms\.gle[^"]*"[^>]*>/gi;
            const matches = html.match(googleFormRegex) || [];
            matches.forEach(link => {
                expect(link).toMatch(/target="_blank"/i);
                expect(link).toMatch(/rel="noopener noreferrer"/i);
            });
        });
    });
});

// Run this test manually with: npm test
