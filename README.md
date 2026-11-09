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

Production: https://phone-gpt.pages.dev/

GitHub Actions workflow `.github/workflows/cloudflare.yml` builds and checks each push to `main`, then uploads `out` to the existing Cloudflare Pages project `phone-gpt` using Wrangler. It can also be started manually from Actions → Deploy PhoneGPT to Cloudflare → Run workflow. Failed builds/checks do not publish. Concurrent production runs are superseded by the newest run. GitHub Pages remains disabled.

The workflow uses Node 22 and runs `npm ci`, `npm run typecheck`, `npm run build`, and `npm run verify`. Public build settings: `NEXT_PUBLIC_BASE_PATH` is empty and `NEXT_PUBLIC_SITE_URL` is `https://phone-gpt.pages.dev`. The workflow deploys branch `main` to the existing production address; no new Pages project is required.

`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are stored only in this repository’s encrypted GitHub Actions Secrets. The account-owned token has Pages Write permission in the owner’s Cloudflare account, not DNS/billing permissions. It is supplied only to the deployment action, not the frontend build or exported website. Never commit credentials or print them in logs. Repository maintainers with workflow editing permissions can use deployment secrets, so restrict write access. External fork pull requests do not trigger this production workflow.

The first release on November 4 used Direct Upload; GitHub Actions automation replaces manual uploads without changing the URL. The APK stays on public GitHub Releases, and the Formspree contact endpoint is unchanged. Automated deployment verification status is in `docs/VERIFICATION.md`.

Panel alignment (November 5): model discovery, setup and contact now use bounded panels with the same page gutters, pale green surface, rounded corners and responsive padding. Full-width tinted bands were removed. The secondary header download action hides on very narrow screens to keep the logo/menu clear; the main download action remains available.

## Web search website update — 2026-11-08

Homepage hero and a prominent shared homepage/Features section introduce optional web search. FAQs explain the Web toggle and explicit-search override; Privacy discloses the search question leaving the phone through Cloudflare/Brave while generation and saved chat history remain local. This is informational content, not a browser search/chat feature. Download and current release copy point to the verified Android 0.5.10 APK on GitHub Releases; no APK/model bytes are added to Git. Build/verify checks cover the feature section, disclosure anchor and release link.

Android download updated to 0.5.11 for search-limit/reset notices and explicitly local fallback. The FAQ explains network-shared and daily service limits without treating mutable server quotas as permanent product promises.

APK and release-details URLs are derived from APP_VERSION centrally in lib/site.ts and used by both homepage and Downloads. Static checks reject stale APK links on either route.

Production 0.5.12 adds compact inline search activity and improved Send scrolling. APK links and static checks derive the version from the same shared constant. The owner confirmed that replies after search exhaustion are local fallbacks, so the server cap remains unchanged.

## Google Search Console ownership verification

The owner-provided public verification file `public/googlec5ba86e9740be291.html` is served unchanged at `https://phone-gpt.pages.dev/googlec5ba86e9740be291.html` for the URL-prefix property `https://phone-gpt.pages.dev/`. Preserve its filename/content in future builds: Google can recheck it. Export verification compares the public file with its emitted copy. Publishing the file alone does not confirm Google ownership, submit the sitemap or guarantee indexing; those steps are checked in Search Console separately.

Cloudflare Pages normally redirects .html assets to extensionless URLs. A targeted 200 rewrite in public/_redirects serves a byte-identical .txt copy at the exact Google .html URL, avoiding that redirect. The rule applies only to the verification file; no new runtime function is needed.

2026-11-09: Android 0.5.13 download and release links use the shared version constant. Homepage, Features, FAQ and changelog describe locally saved instruction versions and the permanently available original default.

2026-11-09 copy review: shortened repeated local/offline and model-choice claims on the homepage, removed repeated model-download badges, and retained the setup explanation beside downloads. The hero calls the feature web search; controls/privacy details remain explicit in the relevant section and standalone guides. Fresh GPT-6.1 Terra copy review informed this cleanup.

Privacy policy update (2026-11-09): explicit PhoneGPT Privacy Policy heading, responsible-person identification, local/export/search-counter/contact retention, HTTPS handling and deletion-request contact mechanism. The URL remains /privacy/. No new personal-data collection or automatic correspondence-deletion mechanism was introduced.

Terms of Use (2026-11-09): /terms/ covers responsible use, AI limitations, model/component licences, search limits, content/privacy, availability and non-excludable rights. Linked from the shared footer and included in the sitemap. This is product-specific explanatory wording, not a legal enforceability assessment or an implemented click-to-accept flow.
