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
