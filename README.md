This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Spell-check (cSpell) — Auto-add unknown words

Yes — you can **auto-add unknown words** to your `cspell-yoga.txt`. There are two solid ways:

### Option A (VS Code, easiest)

In VS Code, when a word is underlined by cSpell:

- **Right-click** the word
- Choose **“Add Word to Workspace Dictionary”** (or similar)

This will write to your workspace dictionary (usually `cspell.json` / `settings.json`).
If you want it to go specifically into `cspell-yoga.txt`, use Option B.

### Option B (Best: use cspell CLI to “dump” unknown words into your `.txt`)

Install cspell locally in your repo:

```bash
npm i -D cspell
```

Then run (examples):

#### 1) List unknown words from your Markdown (and save to a file)

```bash
npx cspell "content/**/*.md" "app/**/*.mdx" --words-only --unique > cspell-new-words.txt
```

Now review `cspell-new-words.txt`, then append the approved ones into `cspell-yoga.txt`.

#### 2) Append directly into your yoga dictionary (quick + dirty)

```bash
npx cspell "content/**/*.md" "app/**/*.mdx" --words-only --unique >> cspell-yoga.txt
```

Then you should **sort + dedupe** once in a while:

```bash
node -e "const fs=require('fs'); const p='cspell-yoga.txt'; const a=fs.readFileSync(p,'utf8').split(/\r?\n/).filter(Boolean); const u=[...new Set(a)].sort((x,y)=>x.localeCompare(y)); fs.writeFileSync(p,u.join('\n')+'\n');"
```

### What you should NOT do

- Auto-add everything blindly. You’ll accidentally whitelist real typos (bad long-term).

---

If you tell me your repo layout (where your markdown lives: `content/`, `app/`, `pages/`, etc.), I’ll give you the exact 2–3 commands tailored to your structure.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
