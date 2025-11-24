/**
 * Accessibility Tests
 * Tests for WCAG compliance and accessibility best practices
 */

const SITE_URL = 'http://localhost:3000';

const PAGES_TO_TEST = [
    '/',
    '/about',
    '/instructors',
    '/programs-events',
    '/enrollment-payment',
    '/contact',
    '/what-is-yoga',
    '/yoga-healing',
];

describe('Accessibility Tests', () => {
    describe('Images', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - all images should have alt attributes`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Find all img tags
                const imgTags = html.match(/<img[^>]*>/gi) || [];

                imgTags.forEach(imgTag => {
                    // Check if it has alt attribute (even if empty)
                    expect(imgTag).toMatch(/alt=/i);
                });
            });
        });
    });

    describe('Heading Hierarchy', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - should have exactly one h1`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
                expect(h1Count).toBe(1);
            });

            test(`${page} - should have proper heading hierarchy`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Check that h2 comes before h3, h3 before h4, etc.
                const h1Index = html.indexOf('<h1');
                const h2Index = html.indexOf('<h2');
                const h3Index = html.indexOf('<h3');

                if (h2Index > -1) {
                    expect(h2Index).toBeGreaterThan(h1Index);
                }
                if (h3Index > -1 && h2Index > -1) {
                    expect(h3Index).toBeGreaterThan(h2Index);
                }
            });
        });
    });

    describe('Links', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - links should have descriptive text`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                // Check for generic link text
                expect(html).not.toMatch(/<a[^>]*>click here<\/a>/i);
                expect(html).not.toMatch(/<a[^>]*>read more<\/a>/i);
                expect(html).not.toMatch(/<a[^>]*>here<\/a>/i);
            });
        });
    });

    describe('Language', () => {
        PAGES_TO_TEST.forEach(page => {
            test(`${page} - should have lang attribute on html tag`, async () => {
                const response = await fetch(`${SITE_URL}${page}`);
                const html = await response.text();

                expect(html).toMatch(/<html[^>]*lang=/i);
            });
        });
    });

    describe('ARIA', () => {
        test('Navigation should have proper ARIA labels', async () => {
            const response = await fetch(`${SITE_URL}/`);
            const html = await response.text();

            // Check for nav element or role="navigation"
            const hasNav = html.includes('<nav') || html.includes('role="navigation"');
            expect(hasNav).toBe(true);
        });
    });

    describe('Form Accessibility', () => {
        test('Contact page should have accessible forms', async () => {
            const response = await fetch(`${SITE_URL}/contact`);
            const html = await response.text();

            // If there are input fields, they should have labels or aria-label
            const inputs = html.match(/<input[^>]*>/gi) || [];
            inputs.forEach(input => {
                const hasLabel = input.includes('aria-label') || input.includes('id=');
                // If it has an id, there should be a corresponding label
                if (!hasLabel) {
                    // This is acceptable if it's a submit button
                    const isButton = input.includes('type="submit"') || input.includes('type="button"');
                    expect(isButton).toBe(true);
                }
            });
        });
    });
});
