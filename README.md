# PhoneGPT website

Public product website for PhoneGPT, separate from the React Native mobile repository. Owner: Parth Verma. Updated 2026-11-04.

Production address: https://parth-verma7.github.io/phone-gpt-website/

## Product and content

Ten pages introduce what PhoneGPT is, why local AI is useful, features/use cases/audiences, model discovery, setup, Android downloads, FAQs, privacy, founder contact and release notes. Model search/filtering works in the browser. Public copy uses everyday language; implementation details stay in this README and internal review notes. The homepage ends with a founder form for feedback, well wishes, ideas and model requests. It uses an explicit mailto handoff to the configured founder inbox: visitors review/send in their email application. There is no contact backend, collection database, analytics or automatic sending.

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
