# HDR Keel website handoff

**For:** the next developer or AI session with no prior chat.
**Written:** 04/09/2026.
**Live:** https://hdrkeel.co.uk/
**Shipped HEAD:** `75dbc01` on `main` of `ewlpsuk/hdr-keel-web` (`Ship light-theme site with 26-stage case support and no public pricing.`). Working tree matches origin. Live pages match this commit.

This note describes the site **as it is now**. Older vault onboarding (31/08) is stale. Do not follow it.

---

## 1. What HDR Keel is

HDR Keel is a **housing disrepair consultancy for solicitors**. It adds capacity on live files: case support, staff training, and AI implementation.

It is **not**:

- a law firm or an SRA-regulated practice
- a claims management company (CMC)
- consumer-facing
- a software company (that phrase is forbidden even as a negation)
- an EWLPS-family business (the GitHub org is `ewlpsuk` for convenience only; do not imply EWLPS on the site)

The instructing firm keeps **conduct** of every matter. HDR Keel works under instruction and supervision. All advice, correspondence and decisions are the firm's to make and sign off. Nothing on the site is legal advice to any firm's client.

**Voice:** a specialist practice, not a one-man band and not a sales desk. Shaine Stead is principal (housing disrepair claim work personally since 2013; that is personal practice, not HDR Keel trading history). Operations support exists. **Do not invent or publish named colleagues.** Vault notes from 31/08 named a family member on admin; that name is not on the site and stays off unless Shaine asks.

**Who it is for:** solicitor firms (and authorised firms) on housing disrepair and associated personal injury **that arises from it**, in England and Wales. No consumer intake. No CMC work. No general PI.

---

## 2. Repo, stack, run, deploy

| Item | Value |
|---|---|
| Local workspace | `/home/shaine-stead/hdr-keel-web-v2` only |
| GitHub | `ewlpsuk/hdr-keel-web`, branch `main` |
| Ignore | `~/hdr-keel-web/` (stale throwaway, no `.git`) |
| Stack | Next.js **15.5.24**, React **19.1.0**, Tailwind **4**, TypeScript |
| Output | Static export (`output: "export"`, `trailingSlash: true`, `images.unoptimized: true`) |
| Node | **20** (`package.json` `engines`, `.node-version`) |
| Host | Cloudflare Pages, project wired to the GitHub repo |
| Live | https://hdrkeel.co.uk/ |

There is **no** `wrangler.toml`. Pages config lives in the Cloudflare dashboard.

### Local

```
npm run dev
```

(`next dev --turbopack`.) Node 20+. Path alias `@/*` → `src/*`.

After copy or lock changes:

```
npm run build
grep -rIn '—' src/
```

The em-dash grep must be empty. Confirm one `h1` per page. Do not commit or push unless Shaine asks.

### Deploy

Documented in `DEPLOY.md`.

| Setting | Value |
|---|---|
| Build command | `npm ci && npm run build` |
| Output directory | `out` |
| Node | 20 |
| Optional env | `NEXT_PUBLIC_BOOKING_URL` (falls back to the committed calendar URL) |
| Optional env | `NEXT_PUBLIC_PRODUCT_URL` (defaults to `https://hdrcompass.co.uk`) |

Use `npm ci`, not `npm install`. Production is GitHub → Pages; uncommitted work is not live.

Security headers that actually ship are in `public/_headers` (copied into `out/_headers`). The `headers()` block in `next.config.ts` is **dead** under `output: "export"`. Do not treat it as live CSP.

Cloudflare also injects managed `robots.txt` rules and email-address obfuscation on mailto links.

### Key source files

| Path | Role |
|---|---|
| `src/lib/site.ts` | Name, URLs, emails, nav, footer, conduct notice, metadata helper, pricing lock comment |
| `src/lib/case-lifecycle.ts` | 26 stages, six phases, `REFERRED_BACK` |
| `src/lib/training-schedule.ts` | Housing disrepair five-day training block |
| `src/lib/ai-training-schedule.ts` | AI five-day training block |
| `src/app/globals.css` | Colour and type tokens |
| `src/app/layout.tsx` | `en-GB`, fonts, header/footer |
| `src/app/sitemap.ts` | Sitemap (omits `/pricing`) |
| `src/app/robots.ts` | Allow `/`, sitemap URL |
| `public/_headers` | CSP, HSTS, frame/nosniff/referrer |
| `public/news/items.json` | News reading list (12 items, updated 04/09/2026) |

---

## 3. Information architecture

`trailingSlash: true`, so live URLs end in `/`.

### Primary nav (`navItems` in `site.ts`)

Services · How it works · About · Contact, plus a **Book a call** CTA (external calendar, new tab).

News and HDR Compass are **not** in primary nav.

### Footer (`footerNavItems`)

Primary items, then Who it is for, News, HDR Compass. Also: enquiry email, product-site link, CMC / not-SRA / not-consumer line, controller email, copyright, privacy.

### Routes

| Route | In chrome | Notes |
|---|---|---|
| `/` | Logo | Home |
| `/services/` | Nav | Hub: case support, training, AI implementation |
| `/services/case-support/` | Linked from hub/Home | Full 26-stage map |
| `/services/training/` | Linked from hub | HDR + AI training schedules |
| `/services/ai-implementation/` | Linked from hub | Implementation, not training |
| `/how-it-works/` | Nav | Four-step engagement |
| `/about/` | Nav | Practice, portrait, GDPR processor line |
| `/contact/` | Nav | Book a call + hello@ |
| `/for-solicitors/` | Footer | Eligibility and FAQ |
| `/news/` | Footer | Curated third-party reading list |
| `/hdr-compass/` | Footer | Self-serve product explainer |
| `/privacy/` | Footer only | Controller notice |
| `/pricing/` | **Unlinked** | Noindex stub, **no figures** |
| 404 | `not-found.tsx` | "That page is not here" |

Sitemap includes home, nav, service children, `/for-solicitors/`, `/news/`, `/hdr-compass/`, `/privacy/`. It does **not** include `/pricing/`. Live `/sitemap.xml` returns 200. `/pricing/` sends `noindex, follow` and still 200s.

Do not 301 `/pricing/` without checking Search Console. An unlisted noindex page is enough.

---

## 4. Brand, type, colour, images

Light solicitor-facing theme. Cream paper, teal practice colour, copper keel. Not a product store and not the old dark neon kit.

### Tokens (`src/app/globals.css`)

| Token | Hex | Use |
|---|---|---|
| `--background` | `#f6f3ec` | Page cream |
| `--surface` | `#fffcf7` | Cards |
| `--accent` | `#1f4f4a` | Teal: nav active, primary buttons, keel bar |
| `--accent-2` | `#9a3412` | Copper: kickers, inner keel, featured edges |
| `--text` | `#1c1917` | Body |
| `--muted` | `#57534e` | Secondary copy |
| `--line` | `#e4ddd2` | Borders |
| `--on-accent` | `#f6f3ec` | Text on teal |
| `--accent-soft` | `#dce8e6` | Teal wash |
| `--accent-2-soft` | `#f3e4d8` | Copper wash |

### Type

- Display: **Source Serif 4** (headings, logo wordmark)
- Body: **Source Sans 3**
- `lang="en-GB"`
- Skip link to `#main`
- Reduced-motion respected
- One `h1` per page (via `PageHero`, except News which sets its own)

Heroes have a left **keel bar**: teal strip plus a thinner copper strip (`PageHero`). Cards have a copper or teal top edge. CTA bands are teal with a copper hairline on top.

### Logo

"Load and the Keel": teal sail, copper keel bar, copper hull. Inline SVG in `Logo.tsx` and `src/app/icon.svg`. Leave the mark unless Shaine asks.

### Image rules

- Photographic stills of files, desks, training rooms, British streets. Proof of work, not glyphs.
- **No** stock solicitors, gavels, or smiling claimants.
- **No readable fake legal text** on document photos. Once text on an image can be read, it is copy. Current `case-files.jpg`, `issue-pack.jpg` and `trial-bundle.jpg` are blank stationery (the 04/09 fake LoC / particulars / QB claim number were replaced).
- Home hero is the **wet terrace** (`practice-street.jpg`), not the prettier dry terrace.
- Shaine's portrait (`shaine-stead.jpg`) is on **About** only, captioned "Shaine Stead, principal". Do not put the portrait in the Home hero.

### Image map (as used now)

| File | Where |
|---|---|
| `practice-street.jpg` | Home hero, Home practice band, About, How it works hero |
| `hero-terrace-day.jpg` | Contact hero, Who it is for hero (prettier terrace; see watch-outs) |
| `case-files.jpg` | Home, Contact, Services card, case-support hero |
| `issue-pack.jpg` | Services hero, How it works, stages 8–9 |
| `evidence-desk.jpg` | Stages 14–18 |
| `trial-bundle.jpg` | Stages 19–23 |
| `workflow-desk.jpg` | Home Compass, Services AI card, AI implementation, `/hdr-compass`, News |
| `training-room.jpg` | Training page and Services training card |
| `shaine-stead.jpg` | About |
| `og-image.png` | Share card (stale dark-theme artwork; see watch-outs) |

Unused leftovers still in `public/images/`: `hero-terrace.png`, `compass-motif.png`, `service-ai.png`, `service-case.png`, `service-training.png`. `PracticePanel.tsx` is unused.

---

## 5. Copy and legal locks

### Conduct (verbatim, `CONDUCT_NOTICE` in `site.ts`)

> The instructing firm retains conduct of the matter and all responsibility to its client and to the regulator. HDR Keel works under the firm's instruction and supervision. All advice, correspondence and decisions are the firm's to make and sign off. Nothing on this site constitutes legal advice to any firm's client.

Used on Home, About, How it works, case-support, training, AI implementation.

### Referred back (verbatim, `REFERRED_BACK`)

- Advocacy at hearings
- Court attendance
- Issuing
- Anything the instructing firm must hold as the solicitor on the record

The **issue pack** is in scope (prepared for the firm). **Issuing**, advocacy and court attendance stay with the firm. Stage 8 body copy: drafted for the firm's review, sign-off and issue. Do not drop "Issuing" from this list again.

### Jurisdictions

- **England:** Landlord and Tenant Act 1985 and Awaab's Law
- **Wales:** Renting Homes (Wales) Act 2016
- Personal injury only where it arises from housing disrepair, and only under the instructed firm
- Anything outside England and Wales housing disrepair plus that associated PI is referred back

### GDPR / Article 28

- Website controller: **Shaine Stead** only (never a trading-as string). ICO **ZB861396**. Contact `privacy@hdrkeel.co.uk`.
- On claim work the instructing firm is the controller. HDR Keel is the firm's **processor** under a written data-processing agreement under **Article 28** of the UK GDPR, and only under documented instructions for each matter.
- No online payment. No payment details stored.
- Site and data handling governed by the laws of England and Wales.

### No public prices (locked 04/09/2026)

There is **no public rate card**. Do not publish monthly retainer tiers, indicative Home prices, day rates, or a `/pricing` table. `/pricing` is a noindex stub: "We agree the fee to the work." Conversion is the booking slot and `hello@hdrkeel.co.uk`. The 31/08 four-tier onboarding lock is **superseded**. Those figures remain in stale vault notes; they must not return to the site.

### House style

- British English (-ise, -our)
- Dates **dd/mm/yyyy**
- **No em-dashes** (`—`). En-dashes in stage ranges (`1–7`) are already in the phase kickers; do not introduce em-dashes in prose
- No fabricated testimonials, headcount, case counts, certifications, or retention periods
- Training is "practitioner-led guidance, not a CPD certification unless one is later confirmed as evidenced"
- News is a reading list, not HDR Keel's advice
- Footer (Sarah's 31/08 preference, shipped): "HDR Keel is not a claims management company, not an SRA-regulated law firm and not a provider of legal advice to consumers." Keep unless Shaine reverses it. Rachel preferred this line on About and Who it is for only.

---

## 6. Case-support 26-stage map

Single source: `src/lib/case-lifecycle.ts`. Home phase cards and `/services/case-support/` both read it. Keep it that way so Stage 24 wording and `REFERRED_BACK` cannot drift.

Canonical vault index: `Documents/EWLPS Vault/Legal Logic/0003_Stage_Index.md`.

Engagement shape: the **whole 26-stage file**, a **named phase**, or **overflow** on the stages that are blocking the desk. Administrative support on the same files is included where that is what the matter needs. Scope and hours are agreed before work starts. Soften any "we take the file" / unqualified "start to finish" so it cannot be read as taking conduct.

### In scope

The 26-stage housing disrepair lifecycle, including preparing the issue pack, default judgment papers, trial bundle, Part 36 and enforcement papers **for the firm to sign off and take**.

### Out of scope (stays with the firm)

Advocacy, court attendance, **issuing**, and anything the firm must hold as solicitor on the record.

### Phases and stages (titles as shipped)

**Stages 1–7 — Pre-action and protocol**

| # | Title | Copy lock |
|---|---|---|
| 1 | Vetting new claims | Go/no-go: notice, limitation, jurisdiction, defects, cost |
| 2 | Letter of claim and disclosure | Letter of claim, disclosure, landlord's **6.2** reply. Do not put 6.3 here |
| 3 | Instructing a surveyor | CPR Part 35 / protocol |
| 4 | Considering the surveyor's report | |
| 5 | Requesting a 6.3 reply | 6.3 lives here |
| 6 | Considering the 6.3 reply | |
| 7 | Instructing counsel | Brief prepared for the firm's instruction of counsel |

**Stages 8–9 — Issuing proceedings** (copper). Issue pack prepared for the firm. Firm remains solicitor on the record.

| # | Title | Copy lock |
|---|---|---|
| 8 | Issuing proceedings | Particulars, Part 7 claim, issue pack, **drafted for the firm to review, sign off and issue** |
| 9 | Default judgment | Prepared **for the firm to make** |

**Stages 10–13 — Active case management**

10 Considering the defence · 11 Directions questionnaire · 12 Considering the defendant's DQ · 13 Standard disclosure (N265)

**Stages 14–18 — Evidence and experts** (visual: `evidence-desk.jpg`)

14 Witness statement (CPR Part 32) · 15 Exchanging witness evidence · 16 Considering the defendant's witness evidence · 17 Part 35 questions · 18 Considering the defendant's Part 35 questions

**Stages 19–23 — Pre-trial and trial preparation** (visual: `trial-bundle.jpg`). The firm attends; HDR Keel prepares the file.

19 Listing questionnaire (N170) · 20 Considering the defendant's listing questionnaire · 21 Trial preparation (bundle and case summary) · 22 Briefing counsel for trial · 23 N260 statement of costs

**Stages 24–26 — Settlement and enforcement**

| # | Title | Copy lock |
|---|---|---|
| 24 | Part 36 offers | **Prepared for the firm to make or respond to.** Do not write this as HDR Keel making the offer |
| 25 | Interim injunction | Urgent repair order, prepared |
| 26 | Post-judgment | Enforcement, interest, consent orders |

### Other services (not the 26-stage map)

- **Training** (`/services/training/`): two tracks (housing disrepair; AI for legal work). Five-day blocks at three levels each. A group session counts as one booking. Fees agreed when booking.
- **AI implementation** (`/services/ai-implementation/`): workflow assessment, tool setup, prompt/key config, testing on the firm's files, ongoing consultation. Training is a separate service. The practice is accountable for the implementation; the firm signs off every output.

---

## 7. Contact and booking

Conversion is **Book a call** plus **hello@hdrkeel.co.uk**. No enquiry form. Do not add a placeholder form.

| Channel | Value |
|---|---|
| Calendar | `https://calendar.app.google/35S3MsowmvkoSJ9d8` (`BOOKING_URL` in `site.ts`) |
| Override | `NEXT_PUBLIC_BOOKING_URL` |
| Meet | Google Calendar appointment schedule; auto-attaches a Google Meet link |
| Enquiries | `hello@hdrkeel.co.uk` (`CONTACT_EMAIL`) |
| Privacy / controller | `privacy@hdrkeel.co.uk` (`PRIVACY_EMAIL`) |

External http buttons open in a new tab (`Button.tsx`).

What to have ready (Contact / first call): jurisdiction of the caseload, matter count, where the capacity gap sits, whether the need is ongoing support, a time-boxed piece, or training. Nothing is charged until the firm agrees the scope.

How it works (four steps): talk it through → agree engagement (scope, hours, fee, conduct, sign-off, Article 28 DPA in writing) → team does the work under instruction → firm keeps conduct.

---

## 8. HDR Compass relationship

HDR Compass is a **separate software product** for firms that want to keep the review in-house. HDR Keel remains the consultancy.

| Item | Value |
|---|---|
| Product site | https://hdrcompass.co.uk (`PRODUCT_URL`) |
| Explainer on this site | `/hdr-compass/` (footer only, plus a Home band and a Services aside) |
| Product repo (pattern only) | `ewlpsuk/hdr-compass-web` |

Locks on the explainer:

- The tool drafts; the firm's own fee earner confirms before anything is exported (human in the loop). This line is on Home as well as `/hdr-compass/`.
- Zero retention is qualified: "This describes how the product is designed to work, not a certification."
- Do not turn `/hdr-compass/` into a second product showcase. Do not put Compass in primary nav without a decision.

JSON-LD: Home has `Organization` (founder Shaine Stead). `/hdr-compass/` has `SoftwareApplication`.

---

## 9. Outstanding / watch-outs

These are true of the **shipped** site, not leftover dirty-tree items.

1. **`hello@hdrkeel.co.uk` is published.** Confirm the Google Workspace mailbox is provisioned, monitored, and that SPF/MX/DMARC still match the 27/08 Cloudflare DNS + email runbook. Publishing the address is not the same as mail working. `privacy@` likewise.
2. **Vault onboarding is stale.** `HDR-Keel-Cursor-Onboarding-Prompt_2026-08-31.md` still locks six routes, published retainer tiers, dark theme, and a named admin colleague. Anyone pasting it will try to undo this site. Rewrite that prompt, or point people here.
3. **`public/og-image.png` is old dark-theme artwork** (dark ground, previous mark). Live pages still point OG/Twitter at it. Favicon and in-page logo are the new Load-and-Keel SVG. Recrop a cream/teal/copper share card when convenient.
4. **Contact and Who it is for still use `hero-terrace-day.jpg`** (prettier terrace). Home correctly uses the wet `practice-street.jpg`. Swap those two heroes if the prettier terrace still reads as a property boutique.
5. **`workflow-desk.jpg` is reused** on Home Compass, News, AI implementation and `/hdr-compass/`. Oliver flagged a small set stretched.
6. **News intro claims "each working day".** The data file is a curated list (`public/news/items.json`, 12 items, last updated 04/09/2026). Cadence is a claim; keep it honest.
7. **Search Console guide (01/09) still lists `/pricing/` for indexing.** Do not request indexing of `/pricing/`. News was later demoted from primary nav; the guide still treats it as a key route.
8. **`pageUrl()` in `site.ts` strips a trailing slash** in source. Live canonicals currently include the slash (Next `trailingSlash`). Don't "fix" without checking live canonicals.
9. **`headers()` in `next.config.ts` does not ship.** CSP/HSTS live in `public/_headers` and Cloudflare. The Pages dashboard Cloudflare account noted in the Search Console guide is the hdrcompass.co.uk Info@ account.
10. Dead code/assets: unused `PracticePanel.tsx`; leftover `service-*.png`, `compass-motif.png`, `hero-terrace.png`.

### Already closed in `75dbc01` (do not re-open as bugs)

- Light theme shipped and live
- No public rate card
- Issuing restored on `REFERRED_BACK`
- Stage 2 = 6.2; Stages 5–6 = 6.3
- Stage 24 = prepared for the firm
- Em-dashes stripped from `src/`
- Document photos no longer show readable fake legal text
- Home wet terrace
- Practice voice: Shaine as principal with operations support
- News and Compass demoted to footer
- `hello@` and `privacy@` published (Sarah's booking-only blocker closed)

---

## 10. Where not to go

- **Do not republish the rate card** or any 31/08 retainer / day-rate figures, on Home, `/pricing`, or anywhere else.
- **Do not restore the dark theme** (`#0a0e10` / cyan `#00f2ff` / orange `#ff8c00`, Space Grotesk, JetBrains Mono, neon service marks).
- **Do not put Compass or News in primary nav** without an explicit decision.
- **Do not collapse** `/how-it-works/` or `/for-solicitors/`; they are part of the live IA.
- **Do not name colleagues** or imply a published headcount.
- **Do not say "software company"**, even to deny it.
- **Do not take issuing, advocacy or court attendance** into HDR Keel's scope. The pack is in; the act of issuing is out.
- **Do not add a contact form.**
- **Do not follow** `~/hdr-keel-web/`, the 31/08 onboarding prompt, or the 31/08 vault handoff for current facts.
- **Do not deploy or commit** unless Shaine asks.

---

## Vault pointers (read, don't blindly apply)

| Note | Use |
|---|---|
| This file (`HANDOFF.md`) | Current site of record |
| `DEPLOY.md` | Pages build settings |
| `Legal Logic/0003_Stage_Index.md` | 26-stage titles and legislation |
| `.../HDR-Keel-Website-Light-Theme-Team-Review_2026-09-04.md` | 04/09 team pass (should-fixes mostly applied in `75dbc01`) |
| `.../HDR-Keel-Cursor-Onboarding-Prompt_2026-08-31.md` | **Stale.** Do not paste. |
| `.../HDR-Keel-Website-Handoff_2026-08-31.md` | **Stale** (dark theme, published prices, dirty tree). |

Before changing anything: state a plan and wait for Shaine's go-ahead.
