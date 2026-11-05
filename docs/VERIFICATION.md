# Website verification

Reviewed 2026-11-04. The owner requested parallel specialists and repeated feedback before public GitHub Pages publication.

## Iterations

1. Design/UX, SEO, product copy, FAQ/privacy and model-catalog agents supplied independent bounded work. Main implementation integrated the ten pages and shared design.
2. Production export review caught unprefixed model-page links, nested main landmarks and duplicated page-title branding. Replaced internal anchors with Next Link, kept a single layout main, normalized metadata and trailing-slash links.
3. Desktop/mobile browser review and specialist re-review informed founder required labels, explicit email handoff, model-request hint, menu Escape/focus behavior and mobile line-break spacing. Illustrations are visibly identified as illustrative rather than screenshots.

4. Independent code/privacy review caught native GET submission if scripts fail. Disabled the complete contact fieldset until hydration installs the handler; no-JS visitors are asked to enable JavaScript to use the form. Static verification asserts disabled initial form fields and the absence of public email links.

## Checks

- Next.js production static export and TypeScript pass after integration.
- `npm run verify` checks all ten routes, distinct metadata/self-canonicals, one H1/main per page, output internal links/assets, sitemap membership, JSON-LD and founder-form presence. GitHub Actions repeats these checks before deployment.
- Browser verification covers mobile navigation, model family plus search filtering/reset/empty state, FAQ disclosures, founder form validation/copy, desktop/mobile layout and horizontal reflow.
- No actual founder email was sent; valid email handoff/delivery depends on the visitor's mail application. Native app inference is not exercised by this marketing website.
- Download APK has its known SHA-256 in GitHub release notes; website checks do not replace physical A54 acceptance or Play review.

## Deliberate limits

No measured Lighthouse score, search-ranking guarantee, complete accessibility certification or store approval. Google Search Console verification/submission and indexing monitoring remain owner follow-ups. Review the initial privacy notice against actual future app/hosting changes before store submission. Current Android backup behavior remains explained rather than silently changed.

## Plain-language and contact revision

A separate reviewer scanned every public page for developer-level copy. The parent rewrote FAQ/setup/privacy, simplified About/Features/Models/update notes, removed internal build/Dev/signing/source-progress details and retained practical user requirements. iPhone availability now says simply that support is planned and no download exists. The former printed address/copy controls were removed; enquiries link to the founder form. The configured website form destination changed at the owner’s request; the mobile app contact destination was not changed. LinkedIn uses the direct profile URL, and the project contribution link remains explicitly requested by the owner.

Final branding revision: Say hello replaces public founder/developer titles. Attribution is “Curious mind. Problem solver.” LinkedIn uses the direct profile URL; project contributions link to the mobile app GitHub repository. The email address is not printed on public pages.

All ten routes were checked at 320 CSS pixels. Nine fit the content width; a small homepage illustration overflow was found and clipped within its figure, keeping the illustrative caption visible. This is a specific reflow check, not full accessibility certification.

## Layout and homepage navigation update

Fixed the Features offline-use callout losing centered alignment when it shared the wrapper class. Added compact detail-page rhythm and reduced the Models recommendation/catalog spacing. Header links now target homepage sections, including a searchable catalog disclosure, shared full FAQ and actual Android download panel. Every detail page exposes Back to Home. Static checks now validate all internal fragment targets and required section/Home shortcuts. The illustration’s visible caption and offline badge were removed at the owner’s request, retaining an accessible sample-conversation description. Browser and deployed checks are recorded with this update.

Layout verification completed: production build/TypeScript pass; all ten route checks pass with 223 internal links and 133 asset references, including fragment IDs and detail-page Home shortcuts. Desktop measurement confirms the offline panel and page intro share left edge and width (1160 px at the tested viewport). Home/Features/Models have no horizontal overflow at 320 CSS px. Mobile Get started/Home hash navigation, the detail Back to Home link and expanding the inline 13-model library were exercised. No actual contact email was sent.

Palette follow-up: the One app / More possibilities band now uses the same pale surface, white cards, teal buttons and text palette as surrounding sections. Direct contact delivery remains pending the owner's verified form endpoint; the working email-draft action is retained until it is connected.

## Direct contact submission — November 4
Owner supplied https://formspree.io/f/mljjawvn. Contact form now posts name/email/topic/message directly, disables duplicate clicks, clears only on confirmed acceptance and preserves drafts after errors/timeouts. Privacy notice now discloses Formspree processing. Tests must mock delivery; no real message should be sent during automated verification. Existing email-handoff notes above describe the earlier implementation.

Direct-form verification: production build and TypeScript passed. Isolated component-handler checks mocked confirmed success, HTTP failure, offline rejection and malformed response; drafts cleared only after confirmed acceptance. No external submission was made.

## Cloudflare preparation
Build-time base path and canonical origin are configurable for Cloudflare root hosting while GitHub Pages defaults are preserved. Deployment is pending owner Cloudflare sign-in and live verification.

Both root-hosted output (reserved `.invalid` origin for validation only) and default GitHub Pages output passed production builds and all ten-route/link/asset/canonical checks. No Cloudflare site has been published yet.

Cloudflare publication succeeded November 4, 2026 at https://phone-gpt.pages.dev/. Browser inspection confirmed styled homepage, working Features navigation, root-relative links, hydrated contact controls and existing GitHub APK link. Static export checks passed for all ten routes. Terminal HTTP probes were blocked with 403, so they do not establish live route coverage. No real contact message was sent. First release uses Direct Upload, not automatic Git integration.

Hosting consolidation November 4, 2026: GitHub Pages site deleted via GitHub API and deploy workflow disabled; website repository remains public. Cloudflare Pages is the production destination. Release assets remain public.

## Automatic Cloudflare deployment — November 5, 2026
Production workflow prepared for pushes to `main` and manual runs. Local root-hosting production build and ten-route/link/asset verification passed. Owner explicitly authorized Pages Write credential creation and encrypted GitHub Actions Secret storage. No credential was written to source or printed in output. First push-triggered automated deployment succeeded: https://github.com/parth-verma7/phone-gpt-website/actions/runs/41999464002 (commit cc93617722c509cb08cacffa423c9d833409f87c). GitHub reported Success for the build, verification and Cloudflare publish job.
