# Drafted Web Co. — Marketing Site

A static, dependency-free website (HTML / CSS / vanilla JS) built to be
hosted for free on GitHub Pages. No build step, no npm, no framework.

## File structure

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── favicon.svg          (placeholder — replace with your logo)
│       └── PLACEHOLDERS.md      (list of real images still needed)
└── README.md
```

## Running it locally

No server or build tools required. Just open `index.html` directly in
a browser, or, for the closest match to how GitHub Pages will serve it,
run a simple local server from this folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publishing with GitHub Pages

1. Create a new GitHub repository.
2. Upload the entire contents of this folder to the **root** of that
   repository (keep the `css/`, `js/`, and `assets/` folders intact).
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a
   branch," choose the branch (usually `main`), and folder `/ (root)`.
5. Save. GitHub will give you a live URL, usually
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

If you're using a **custom domain**, add it under Settings → Pages →
Custom domain, and follow GitHub's DNS instructions.

## Placeholders to replace before launch

Search the codebase for these — they're also marked with `>>> ... <<<`
comments right above where they're used in `index.html`.

| Placeholder | Where | What to do |
|---|---|---|
| `Drafted Web Co.` | `index.html` (nav logo, footer), `<title>` | Replace with your real business name, everywhere it appears. |
| `YOUR_TALLY_FORM_URL` | Nav "Get Started", hero, pricing, final CTA | Replace with your real Tally form link (appears 5 times). |
| `YOUR_EMAIL` | Final CTA "Contact Me" button, footer | Replace with your real contact email (appears twice). |
| `DEMO_URL_1`, `DEMO_URL_2`, `DEMO_URL_3` | Examples section | Replace with your real Framer template demo links. |
| "Screenshot placeholder" boxes | Examples section | Replace with real `<img>` screenshots — see `assets/images/PLACEHOLDERS.md`. |
| `$XXX` / `$XX` | Pricing section | Replace with your real setup fee and monthly management price. |
| `PRIVACY_POLICY_URL`, `TERMS_URL` | Footer | Replace once you have real Privacy Policy / Terms pages. |
| `https://YOUR_USERNAME.github.io/YOUR_REPO/` | `<meta property="og:url">` in `<head>` | Replace with your live GitHub Pages URL once published. |
| `favicon.svg`, `og-preview.jpg` | `assets/images/` | Replace with your real logo/social preview image. |

## Customizing colors and fonts

All colors and fonts are defined as CSS variables at the top of
`css/style.css`, inside the `:root { ... }` block. Change the hex
values there and the whole site updates — you don't need to touch
color values anywhere else in the file.

Fonts (Zilla Slab for headings, Inter for body text) are loaded from
Google Fonts via the `<link>` tags in the `<head>` of `index.html`.

## What this site intentionally does NOT include

Per the original brief, this site avoids inventing:

- Testimonials or reviews
- Client names or logos
- Statistics or "years of experience" claims
- Guaranteed SEO/ranking or lead-generation promises
- Specific contractual terms (cancellation, ownership, etc. — the FAQ
  points to "your service agreement" for these, which you'll need to
  draft separately)

Add real content to these areas once you have it, rather than filling
them with invented details.
