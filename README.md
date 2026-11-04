# PhoneGPT website

Public product website for PhoneGPT, separate from the React Native mobile repository. Owner: Parth Verma. Updated 2026-11-04.

Production address: https://phone-gpt.pages.dev/

GitHub Pages was unpublished on November 4, 2026 and its deployment workflow disabled. Keep this repository public so GitHub Release APK downloads remain accessible.

## Product and content

Ten pages introduce what PhoneGPT is, why local AI is useful, features/use cases/audiences, model discovery, setup, Android downloads, FAQs, privacy, founder contact and release notes. Model search/filtering works in the browser. Public copy uses everyday language; implementation details stay in this README and internal review notes. The homepage ends with a founder form for feedback, well wishes, ideas and model requests. It submits directly to the owner-supplied Formspree endpoint in lib/site.ts, without opening an email app. Formspree handles delivery and may retain submissions; the privacy notice discloses this. No email credentials are included. There is no app-chat upload or analytics. Pending submissions disable duplicate clicks; confirmed acceptance clears the form, while errors/timeouts preserve the draft.

The Android v0.5.3 standalone is an early beta, not a Play Store release. Google Play and signed iOS distribution remain future work. Current input is text and UTF-8 TXT; English Whisper provides local voice typing. Image chat and cloud backup are not advertised as shipped. Device RAM/model compatibility varies. Phone illustrations are marked as illustrations, not measured screenshots or a live web inference demo.

## Development and deployment

- Next.js App Router, React, TypeScript, lucide-react; npm lockfile pins exact installed dependencies.
- Static export; no runtime server, secrets or database. All internal links/assets use `/phone-gpt-website` basePath.
- `npm ci`, `npm run dev` → http://localhost:3000/phone-gpt-website/
- `npm run typecheck`, `npm run build`, `npm run verify`.
- `out/` is generated output and ignored. GitHub Actions builds and verifies before deploying it to Pages. Production URL and basePath live in `lib/site.ts` and `next.config.ts`.
- SEO includes per-page metadata/canonicals, OG/Twitter image, sitemap and factual SoftwareApplication JSON-LD. There are no fabricated ratings or ranking guarantees. Search Console verification/submission is an owner follow-up; project-subdirectory robots.txt cannot control the host-root crawler policy.
- Download binary is hosted separately as a prerelease asset on this website repository, not committed into site source. Preserve identity/signature when replacing the APK; update URL, version, size, checksum and release notes together.

## Maintaining the site

`lib/chat-models.json` is a snapshot of the mobile app catalog, not a live API. Compare with the mobile repository when updating models. Review all claims after app changes and update product/technical docs in the mobile project. Keep the privacy page aligned with app backup behavior, hosting, future SDKs and any change to form handling.

Review notes: [design](docs/DESIGN_REVIEW.md), [SEO](docs/SEO_REVIEW.md), [verification](docs/VERIFICATION.md). No performance score or complete WCAG/store-compliance certification is claimed.

## Navigation and layout update — 2026-11-04

The main header now links to Home, Features, Models, Get started, FAQ and Downloads as homepage sections. An expandable searchable catalog, shared FAQ list and download panel keep these tasks on one page; detail pages remain directly accessible and have a Back to Home shortcut. Detail-page spacing is compact, and callouts sit inside centered wrappers. The phone illustration retains a sample-conversation accessible label; its visible illustration disclaimer and offline badge were removed at the owner’s request. It is not represented as an actual screenshot.

## Cloudflare Pages deployment

Cloudflare Pages URL: https://phone-gpt.pages.dev/

Cloudflare Pages is an additional hosting target; The default configuration retains the old GitHub build path for compatibility, but GitHub Pages hosting is disabled. First deployment uses a direct upload of the static export. GitHub pushes do not automatically update this Pages project; rebuild and upload a new export to publish changes. Published and browser-verified on November 4, 2026 at https://phone-gpt.pages.dev/.

Connect the `phone-gpt-website` repository and production branch `main`. Use the static Next.js export, not server-side Functions. Build command: `npm run build && npm run verify`; output directory: `out`; Node version: `22`. Set `NEXT_PUBLIC_BASE_PATH` to an empty string (root hosting) and `NEXT_PUBLIC_SITE_URL` to the actual production HTTPS URL assigned by Cloudflare, without a trailing slash. These public build settings contain no secrets. Never guess the assigned subdomain or publish credentials. The same environment settings must be present for both build and verification.

Keep the APK download on the existing public GitHub Release and the Formspree endpoint unchanged. Before marking Cloudflare live, check all page routes, homepage anchor navigation, images, contact-form hydration, sitemap/canonical URLs and narrow/mobile layout. Do not send a real contact message during automated verification. Update the hosting privacy disclosure before making Cloudflare the public destination.
