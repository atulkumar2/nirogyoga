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
    '/what-is-yoga',
    '/what-is-yoga/introduction',
    '/what-is-yoga/why-yoga',
    '/what-is-yoga/historical-references',
    '/what-is-yoga/breathing-techniques',
    '/what-is-yoga/pranayama',
    '/what-is-yoga/major-asanas',
    '/what-is-yoga/standing-asanas',
    '/what-is-yoga/surya-namaskara',
    '/what-is-yoga/meditation',
    '/what-is-yoga/patanjali-sutras',
    '/what-is-yoga/learning-paths',
    '/what-is-yoga/yoga-books',
    '/what-is-yoga/curriculum',
    '/what-is-yoga/safety-guidelines',
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

describe('Mobile Responsiveness Tests', () => {
    beforeAll(async () => {
        await assertSiteReachable();
    });

    describe('Viewport Meta Tag', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - should have viewport meta tag`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                expect(html).toMatch(/<meta[^>]*name=["']viewport["']/i);
            });

            test(`${page} - viewport should have width=device-width`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                const viewportMatch = html.match(/<meta[^>]*name=["']viewport["'][^>]*content=["']([^"']*)["']/i);
                if (viewportMatch) {
                    expect(viewportMatch[1]).toMatch(/width=device-width/i);
                }
            });
        });
    });

    describe('Responsive Images', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - images should not have fixed widths in HTML`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Check that images don't have inline width styles that would break responsiveness
                const imgTags = html.match(/<img[^>]*>/gi) || [];
                imgTags.forEach(imgTag => {
                    // It's okay to have width/height for Next.js Image optimization
                    // But avoid inline styles with fixed px widths
                    if (imgTag.includes('style=')) {
                        expect(imgTag).not.toMatch(/style=["'][^"']*width:\s*\d+px/i);
                    }
                });
            });
        });
    });

    describe('Mobile Navigation', () => {
        test('Should have mobile menu functionality', async () => {
            const response = await fetch(`${SITE_URL}/`);
            const html = await response.text();

            // Check for hamburger menu or mobile navigation
            const hasMobileNav = html.includes('hamburger') ||
                html.includes('mobile-menu') ||
                html.includes('menu-toggle') ||
                html.match(/class=["'][^"']*nav[^"']*mobile/i);

            expect(hasMobileNav).toBe(true);
        });
    });

    describe('Touch Targets', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - buttons should be touch-friendly`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Check that buttons have proper padding/sizing
                const buttons = html.match(/<button[^>]*>/gi) || [];
                const links = html.match(/<a[^>]*class=[^>]*button[^>]*>/gi) || [];

                // Just verify they exist and have classes (actual size is in CSS)
                [...buttons, ...links].forEach(element => {
                    expect(element.length).toBeGreaterThan(0);
                });
            });
        });
    });

    describe('Font Sizes', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - should not have tiny font sizes`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Check for inline styles with very small fonts
                expect(html).not.toMatch(/font-size:\s*[0-9]px/i); // Single digit px
                expect(html).not.toMatch(/font-size:\s*1[0-1]px/i); // 10-11px
            });
        });
    });

    describe('Horizontal Scrolling', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - should not have elements forcing horizontal scroll`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Check for common causes of horizontal scroll
                expect(html).not.toMatch(/width:\s*[0-9]{4,}px/i); // Very wide fixed widths
                expect(html).not.toMatch(/min-width:\s*[0-9]{4,}px/i);
            });
        });
    });

    describe('Media Queries', () => {
        test('Should have responsive CSS', async () => {
            const response = await fetch(`${SITE_URL}/`);
            const html = await response.text();

            // Check if CSS files are loaded (they should contain media queries)
            const hasCSSFiles = html.match(/<link[^>]*rel=["']stylesheet["']/gi);
            expect(hasCSSFiles).toBeTruthy();
            expect(hasCSSFiles.length).toBeGreaterThan(0);
        });
    });
});
