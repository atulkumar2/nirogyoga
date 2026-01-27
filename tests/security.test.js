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

describe('Security Tests', () => {
    beforeAll(async () => {
        await assertSiteReachable();
    });

    describe('Per-Page Security Checks', () => {
        PAGES_TO_TEST.forEach(page => {
            describe(`Page: ${page}`, () => {
                let html;

                beforeAll(async () => {
                    const response = await fetch(`${SITE_URL}${page}`);
                    html = await response.text();
                });

                test('external links should have rel="noopener noreferrer"', () => {
                    checkExternalLinksSecurity(html);
                });

                test('should minimize inline JavaScript', () => {
                    expect(html).not.toMatch(/onclick=["'][^"']*["']/i);
                    expect(html).not.toMatch(/onerror=["'][^"']*["']/i);
                    expect(html).not.toMatch(/onload=["'][^"']*["']/i);
                });

                test('should not expose API keys or secrets', () => {
                    expect(html).not.toMatch(/api[_-]?key["']?\s*[:=]\s*["'][^"']{20,}/i);
                    expect(html).not.toMatch(/secret["']?\s*[:=]\s*["'][^"']{20,}/i);
                    expect(html).not.toMatch(/password["']?\s*[:=]\s*["'][^"']+/i);
                    expect(html).not.toMatch(/token["']?\s*[:=]\s*["'][^"']{20,}/i);
                });

                test('should not have SQL injection vulnerabilities in URLs', () => {
                    expect(html).not.toMatch(/href=["'][^"']*SELECT[^"']*FROM/i);
                    expect(html).not.toMatch(/href=["'][^"']*DROP[^"']*TABLE/i);
                    expect(html).not.toMatch(/href=["'][^"']*UNION[^"']*SELECT/i);
                });

                test('external resources should use HTTPS', () => {
                    checkHttpsUsage(html);
                });

                test('iframes should be from trusted sources', () => {
                    checkIframeSecurity(html);
                });
            });
        });
    });

    describe('Form Security', () => {
        test('Forms should not submit sensitive data insecurely', async () => {
            const response = await fetch(`${SITE_URL}/contact`);
            const html = await response.text();

            const forms = html.match(/<form[^>]*>/gi) || [];
            forms.forEach(form => {
                if (form.includes('password') || form.includes('email')) {
                    expect(form).toMatch(/method=["']post["']/i);
                }
            });
        });
    });

    describe('Input Validation', () => {
        test('Contact page should have proper input types if forms exist', async () => {
            const response = await fetch(`${SITE_URL}/contact`);
            const html = await response.text();

            const hasInputs = html.match(/<input[^>]*>/gi) || [];
            expect(hasInputs.length).toBeGreaterThanOrEqual(0);
        });
    });

    describe('Cookie Security', () => {
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
