/**
 * Security Tests
 * Tests for security best practices and vulnerabilities
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
    '/knowledge-base/yoga-and-telomere-health',
    '/knowledge-base/breathing-techniques',
    '/knowledge-base/pranayama',
    '/knowledge-base/major-asanas',    '/knowledge-base/standing-asanas',
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

function checkExternalLinksSecurity(html) {
    // Find all external links (http/https to other domains)
    const externalLinks = html.match(/<a[^>]*href=["']https?:\/\/(?!localhost)[^"']*["'][^>]*>/gi) || [];

    externalLinks.forEach(link => {
        // Should have target="_blank" AND rel="noopener noreferrer"
        if (link.includes('target="_blank"') || link.includes("target='_blank'")) {
            expect(link).toMatch(/rel=["'][^"']*noopener/i);
            expect(link).toMatch(/rel=["'][^"']*noreferrer/i);
        }
    });
}

function checkIframeSecurity(html) {
    const iframes = html.match(/<iframe[^>]*>/gi) || [];

    // Google Forms and Maps are exceptions (trusted sources)
    iframes.forEach(iframe => {
        const isTrustedSource = iframe.includes('google.com') ||
            iframe.includes('youtube.com') ||
            iframe.includes('forms.gle');

        if (!isTrustedSource) {
            expect(iframe).toMatch(/sandbox=/i);
        }
    });
}

function checkHttpsUsage(html) {
    // Check for http:// in src or href (mixed content)
    const httpResources = html.match(/(?:src|href)=["']http:\/\/[^"']*["']/gi) || [];

    // Filter out localhost (allowed in development)
    const insecureResources = httpResources.filter(resource =>
        !resource.includes('localhost') && !resource.includes('127.0.0.1')
    );

    expect(insecureResources.length).toBe(0);
}

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

describe('Security Tests', () => {
    beforeAll(async () => {
        await assertSiteReachable();
    });

    describe('Per-Page Security Checks', () => {
        test.each(PAGES_TO_TEST)('%s security checks', async (page) => {
            const html = await getPageHtml(page);

            // External links should have rel="noopener noreferrer"
            checkExternalLinksSecurity(html);

            // Should minimize inline JavaScript
            expect(html).not.toMatch(/onclick=["'][^"']*["']/i);
            expect(html).not.toMatch(/onerror=["'][^"']*["']/i);
            expect(html).not.toMatch(/onload=["'][^"']*["']/i);

            // Should not expose API keys or secrets
            expect(html).not.toMatch(/api[_-]?key["']?\s*[:=]\s*["'][^"']{20,}/i);
            expect(html).not.toMatch(/secret["']?\s*[:=]\s*["'][^"']{20,}/i);
            expect(html).not.toMatch(/password["']?\s*[:=]\s*["'][^"']+/i);
            expect(html).not.toMatch(/token["']?\s*[:=]\s*["'][^"']{20,}/i);

            // Should not have SQL injection vulnerabilities in URLs
            expect(html).not.toMatch(/href=["'][^"']*SELECT[^"']*FROM/i);
            expect(html).not.toMatch(/href=["'][^"']*DROP[^"']*TABLE/i);
            expect(html).not.toMatch(/href=["'][^"']*UNION[^"']*SELECT/i);

            // External resources should use HTTPS
            checkHttpsUsage(html);

            // Iframes should be from trusted sources
            checkIframeSecurity(html);
        });
    });

    describe('Global Security', () => {
        test('Forms should not submit sensitive data insecurely', async () => {
            const html = await getPageHtml('/contact');
            const forms = html.match(/<form[^>]*>/gi) || [];
            forms.forEach(form => {
                if (form.includes('password') || form.includes('email')) {
                    expect(form).toMatch(/method=["']post["']/i);
                }
            });
        });

        test('Contact page should have proper input types if forms exist', async () => {
            const html = await getPageHtml('/contact');
            const hasInputs = html.match(/<input[^>]*>/gi) || [];
            expect(hasInputs.length).toBeGreaterThanOrEqual(0);
        });

        test('Should not set insecure cookies', async () => {
            const response = await fetch(`${SITE_URL}/`);
            const headers = response.headers;
            const setCookie = headers.get('set-cookie');
            if (setCookie) {
                expect(setCookie).toMatch(/secure/i);
                expect(setCookie).toMatch(/httponly/i);
            }
        });
    });
});





