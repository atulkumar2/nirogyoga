# Nirog Yoga Tests

## Link Checker Tests

The `link-checker.test.js` file contains comprehensive tests to verify all internal links across the website are working correctly.

### What It Tests

1. **Page Accessibility**: Verifies all pages return 200 status
2. **Navbar Links**: Checks navbar links exist on every page
3. **Footer Links**: Verifies footer quick links on all pages
4. **Page-Specific Links**: Tests expected links on specific pages
5. **Enrollment Links**: Ensures all enrollment links point to `/enrollment-payment`
6. **Programs/Events Links**: Verifies no old `/programs` or `/events` links exist
7. **Anchor Links**: Tests anchor navigation on programs-events and testimonials pages
8. **External Links**: Verifies external links have proper attributes

### Running the Tests

#### Option 1: Using Jest (Recommended)

```bash
# Install dependencies
npm install --save-dev jest node-fetch

# Run tests
npm test

# Run specific test file
npm test link-checker.test.js

# Run with coverage
npm test -- --coverage
```

#### Option 2: Manual Browser Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open browser console and run:
   ```javascript
   // Check all navbar links
   document.querySelectorAll('nav a').forEach(link => {
     console.log(link.href, link.textContent);
   });

   // Check all footer links
   document.querySelectorAll('footer a').forEach(link => {
     console.log(link.href, link.textContent);
   });

   // Check for broken internal links
   document.querySelectorAll('a[href^="/"]').forEach(link => {
     if (!link.href.includes('#')) {
       fetch(link.href).then(r => {
         if (r.status !== 200) console.error('Broken:', link.href);
       });
     }
   });
   ```

### Setting Up Jest

Add to `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "node-fetch": "^3.0.0"
  },
  "jest": {
    "testEnvironment": "node",
    "testMatch": ["**/tests/**/*.test.js"]
  }
}
```

### Expected Results

All tests should pass with:
- ✅ All pages accessible (200 status)
- ✅ No broken internal links
- ✅ All navbar links present on every page
- ✅ All footer links present on every page
- ✅ No old `/enrollment` links (should be `/enrollment-payment`)
- ✅ No old `/programs` or `/events` links (should be `/programs-events`)
- ✅ Anchor links working on programs-events and testimonials pages
- ✅ External links have `target="_blank"` and `rel="noopener noreferrer"`

### Troubleshooting

If tests fail:
1. Check that the dev server is running on `http://localhost:3000`
2. Verify the page exists and is accessible
3. Check the HTML source for the expected link
4. Update the test expectations if the link structure has changed intentionally
