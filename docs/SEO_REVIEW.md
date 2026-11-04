# PhoneGPT website SEO review

Reviewed 2026-11-04 against `next.config.ts`, `lib/site.ts`, the available scaffold and `../phone-gpt/docs/PRODUCT_REQUIREMENTS.md`. This is an implementation/architecture review, not a deployed crawl or device-performance audit. At initial inspection, page/layout source and installed dependencies were absent. No ranking or indexing outcome is promised.

## Implemented within owned files

- `lib/seo.ts`: `pageMetadata(title, description, path)` returns typed Next metadata: a branded absolute title, description, canonical, restrained factual keywords, Open Graph and Twitter summary card. It uses the existing logo, with no invented image dimensions, social account, reviews, ratings or store listings. Google ignores meta keywords for ranking; descriptive visible content is the priority [1].
- `app/sitemap.ts`: exactly ten planned canonical URLs, with explicit `dynamic = 'force-static'`. No invented modification dates: add `lastModified` only when a reliable significant-content update date exists; Google ignores sitemap priority/change frequency [2]. Ship every listed page before publishing this sitemap.
- `app/robots.ts`: static-export-compatible crawl permission for the project path and an absolute sitemap URL. It deliberately does not block rendering assets.

## Architecture and deployment findings

1. **Host-root robots limitation (deployment action):** export produces `out/robots.txt`, served at `https://parth-verma7.github.io/phone-gpt-website/robots.txt`. Google only uses `https://parth-verma7.github.io/robots.txt` for this host [3]. The parent owner should inspect that root file and, if controlled, merge the project Allow and Sitemap directives there without replacing other projects' rules. A project-level file cannot override a host-root block. Submit the project sitemap directly in Search Console even if root access is unavailable.
2. **Base path:** `SITE_URL` already includes `/phone-gpt-website`; `BASE_PATH` and Next config currently agree. Metadata uses full HTTPS URLs and adds the prefix exactly once. Pass `/models/`, not `/phone-gpt-website/models/`, to the helper. Trailing slashes match `trailingSlash: true`. A leading-slash URL resolved with `new URL(path, SITE_URL)` would discard the project path; the helper avoids that trap. Keep canonical, sitemap and internal-link destinations consistent [4].
3. **Navigation/assets:** use app-relative paths with Next `Link` (Next applies basePath). Plain HTML anchors and public assets need an explicit project prefix, e.g. the existing `asset()` helper. Do not manually prefix Next Link paths twice. Deploy the contents of `out/` as the Pages artifact, not inside an additional `phone-gpt-website` directory. Verify direct nested-page requests, CSS/JS and logo URLs after deployment.
4. **Static rendering:** keep important copy, headings and links in exported HTML. Both metadata routes explicitly opt into static generation as required for exported route handlers [5]. No server/API dependency is introduced.

## Parent integration: layout and pages

The parent owns root layout metadata and structured data; neither is changed here. Set `metadataBase: new URL(SITE_URL + '/')` in the root layout, keep `<html lang="en">`, and configure any verification token only after Search Console ownership is established. Avoid a root homepage canonical inherited by pages lacking their own metadata.

Each route should export metadata from its Server Component page (move interactive UI into child Client Components when needed):

```tsx
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  'Features',
  'Explore PhoneGPT’s on-device Android chat, downloadable models, local chat history and English voice typing, with current limitations explained.',
  '/features/',
);
```

The helper supplies a complete Open Graph/Twitter object because nested metadata is replaced rather than deeply merged [6]. Its absolute title prevents duplicate branding from the root template. Retain its existing-logo summary card unless a verified share image is supplied; verify real image dimensions and rendering before switching to a large-image card.

Suggested route intent and titles (titles receive the PhoneGPT suffix automatically):

- `/`: **PhoneGPT — On-device AI chat for Android**. Explain local chat after app/model installation and link to setup and platform status.
- `/features/`: **Features**. Describe implemented chat, history, TXT attachments and English voice typing with limitations.
- `/models/`: **Chat and voice models**. Explain model families, separate downloads, device memory constraints and compatibility limits.
- `/get-started/`: **Get started on Android**. Give installation, download, load and first-chat steps; distinguish first-time network use from offline use.
- `/downloads/`: **Android downloads and iOS status**. Link verified Android artifacts and label source/build status clearly.
- `/faq/`: **Frequently asked questions**. Answer offline, model, storage, input and platform questions in crawlable HTML.
- `/privacy/`: **Privacy and local data**. Explain local processing, deletion, external model downloads, email handoff and unresolved OS backup behavior.
- `/contact/`: **Contact**. State how email handoff works; do not imply automatic submission or delivery.
- `/about/`: **About PhoneGPT**. Explain the product and brief creator credit supported by the PRD.
- `/changelog/`: **Changelog**. Publish factual, dated release notes and distinguish produced artifacts from device acceptance.

Write a unique one- or two-sentence description for each page based on its final visible copy; avoid repeating the same list of search terms. Google may choose page text instead of the supplied description [7]. Use a clear main heading, useful navigation and descriptive crawlable links between related pages [8].

## Product claim and structured-data boundaries

- PRD records Android 0.5.3 artifacts, not Play Store readiness. iOS source is prepared but native build, signing and physical iPhone verification are incomplete. Do not claim App Store, Google Play or TestFlight availability without verified release evidence.
- Offline chat and English voice typing require installed compatible models. TXT input is UTF-8 up to 32 KB; image/PDF/DOCX support, spoken replies and extra languages are future scope. Model catalog presence does not prove every phone/model combination works.
- Do not claim encryption, zero data leaving the device, unlimited memory, universal performance, guaranteed download survival, or implemented Google Drive backup. Local processing does not settle OS backup privacy.
- Parent JSON-LD must describe visible, verified facts. Do not fabricate `aggregateRating`, reviews, prices/offers, installation counts or store URLs. Keep website identity distinct from the app. Validate any chosen markup against Google's relevant requirements before enabling it [9]; valid markup does not guarantee a rich result.

## Verification and launch handoff

No dependency installation, commit or push is part of this scope. At review time, `node`, `tsc` and local Next dependencies were unavailable in the shell, so production build/type checking could not run here. The parent should run the existing build/typecheck/verify scripts in its configured runtime after all pages exist.

Before launch:

1. Confirm `out/index.html` and all nine nested `out/<route>/index.html` files exist. Inspect their raw HTML for one unique title/description, self-canonical, matching `og:url`, absolute project-prefixed logo URLs, and no unintended `noindex`.
2. Inspect `out/sitemap.xml`: exactly ten distinct HTTPS URLs with one basePath and trailing slashes; no 404s, redirect targets or undeployed routes. Check `out/robots.txt` and the actual host-root robots rules separately.
3. On deployed Pages, verify HTTP success for each direct URL, sitemap, assets and metadata. Check mobile usability, meaningful image alt text, semantic headings and loading performance with browser tools; no performance scores were measured here.
4. Verify the URL-prefix property `https://parth-verma7.github.io/phone-gpt-website/` in Search Console, submit `https://parth-verma7.github.io/phone-gpt-website/sitemap.xml`, and inspect representative URLs for crawl access and Google's selected canonical. Sitemap submission is a discovery hint, not an indexing guarantee [2]. Monitor impressions/clicks and real crawl/indexing issues after launch.

## Official primary sources

1. [Google: supported meta tags, including ignored meta keywords](https://developers.google.com/search/docs/crawling-indexing/special-tags)
2. [Google: build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
3. [Google: robots.txt location and rules](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt)
4. [Google: canonical URLs and consistent signals](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
5. [Next.js: static exports and force-static route handlers](https://nextjs.org/docs/app/guides/static-exports)
6. [Next.js: Metadata API and inheritance](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
7. [Google: useful meta descriptions](https://developers.google.com/search/docs/appearance/snippet)
8. [Google: SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
9. [Google: structured data general guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)


## Second iteration — observed production export (2026-11-04)

**Closeout status:** all three code findings below are resolved in source. The parent reports static verification passing for 195 internal links. Earlier export observations are retained as the audit snapshot, not outstanding code recommendations. Only launch verification remains.

Audited the actual `out/index.html` and all nine planned `out/<route>/index.html` files with Python's HTML parser, plus the exported XML sitemap, robots file and PNG headers. This supersedes the earlier scaffold-only verification status for these artifacts: a production export now exists. No browser, rebuild or parent static-verification script was run, and shared code was not edited. Live hosting responses and search-engine processing remain unverified.

### Metadata, headings and crawlable content

All ten documents contain exactly one title, one description, one canonical and one H1. Titles, descriptions and H1s are unique across all ten. Every canonical is the expected absolute HTTPS project URL with exactly one `/phone-gpt-website` prefix and a trailing slash. All ten declare `lang="en"` and `index, follow`; none has a noindex meta directive.

Observed titles by app-relative route:

- `/`: “PhoneGPT — Your AI, on your phone”
- `/features/`: “Features | PhoneGPT”
- `/models/`: “Model library | PhoneGPT”
- `/get-started/`: “Get started | PhoneGPT”
- `/downloads/`: “Download PhoneGPT for Android”
- `/faq/`: “Frequently asked questions | PhoneGPT”
- `/privacy/`: “Privacy | PhoneGPT”
- `/contact/`: “Write to the founder | PhoneGPT”
- `/about/`: “About PhoneGPT”
- `/changelog/`: “What’s new in PhoneGPT”

Descriptions are page-specific and present in raw HTML. For example, models describes the catalog/file sizes/English voice typing, while privacy describes local chats, recordings, backups, website visits and email. Open Graph titles/descriptions match each page's title/description. Nine subpages have `og:url` matching their canonical; the homepage had no `og:url` in that snapshot (resolved at closeout through `pageMetadata`).

Each page has a single main heading and subsequent section headings. Several H1s are deliberately editorial rather than topic labels (e.g. downloads: “Your phone’s next conversation.”); adjacent copy supplies the Android download context. Line-separated heading spans can concatenate in a text-only parser; that is not evidence of a visual spacing defect. FAQ has ten question summaries with answers present in the exported HTML, so its content is available without a client fetch. No heading-count issue was observed.

### Social cards and structured data

All ten pages now use `summary_large_image` and absolute project-prefixed `social-card.png` URLs for both OG and Twitter. The exported PNG header confirms 1200 × 630; the logo is 512 × 512. This supersedes the earlier existing-logo summary-card description. Image existence and dimensions were checked; visual appearance was not reviewed.

Exactly one JSON-LD script was found, on the homepage; all nine subpages have none. It parses as a `SoftwareApplication` named PhoneGPT with Android, version 0.5.3, UtilitiesApplication, a local-chat/English-voice-typing description, logo and author Parth Verma. These facts agree with the PRD. There are no fabricated ratings, reviews, offers, installation counts, store links or iOS availability fields. Its `url` omitted the trailing slash used by the homepage canonical in that snapshot; this consistency cleanup is resolved at closeout. JSON parsing is not rich-result eligibility validation; no rich-result outcome is asserted.

### Raw URL and export checks

- **Resolved basePath defect (original export observation):** `out/models/index.html` contains two literal `<a href="/downloads/">` links, labeled “Get PhoneGPT” and “get the app”. They resolve to `https://parth-verma7.github.io/downloads/`, outside this project. Other checked root-relative `href`, `src` and form `action` values across the ten pages retain the project prefix; no other unprefixed root-relative URL was found.
- All project-prefixed local targets found in those attributes exist in `out/`, including exported nested pages and assets. This is a filesystem existence check, not a live HTTP or fragment-target test, and external links were not fetched.
- `out/sitemap.xml` parses successfully and contains exactly the ten unique planned URLs, matching the HTML canonicals; it includes no extra 404 route or invented last-modified values.
- `out/robots.txt` contains `User-Agent: *`, `Allow: /phone-gpt-website/` and the correct absolute project sitemap URL. The host-root robots limitation in the first review still applies.

### Closeout — resolved findings and remaining deployment actions

Source reinspection confirms the parent completed all three code fixes:

1. **Resolved — models download links.** Both previously raw anchors, “Get PhoneGPT” and “get the app”, now use Next `Link` with `/downloads/` in `app/models/page.tsx`, allowing Next to apply the configured basePath. The parent reports the static verification script passes for **195 internal links**; this script was not independently rerun during closeout.
2. **Resolved — homepage Open Graph URL.** `app/page.tsx` now uses `pageMetadata(..., '/')`; the helper supplies `openGraph.url` matching `https://parth-verma7.github.io/phone-gpt-website/`.
3. **Resolved — JSON-LD canonical consistency.** Homepage structured data now uses `SITE_URL + '/'`, matching the trailing-slash canonical. Factual Android status is retained without invented ratings, offers or store claims.

No further code changes are requested by this review. Closeout changed only this document; no browser or production build was run. Source confirmation and the parent's reported static-link result are distinguished from the earlier independently inspected export snapshot.

**Remaining launch actions:** inspect the actual host-root robots policy, merge the project sitemap directive there if controlled, submit the project sitemap in the URL-prefix Search Console property, and verify deployed HTTP responses and selected canonicals. The project-subdirectory robots file does not establish host-wide crawler permission (official source [3] above). These deployment checks remain unverified and do not imply any promised indexing or ranking outcome.
