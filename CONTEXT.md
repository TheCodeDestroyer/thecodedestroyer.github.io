# Domain language

The vocabulary this codebase uses for itself. Architecture terms (module,
interface, depth, seam, adapter, leverage, locality) come from the
`codebase-design` vocabulary and are not redefined here.

## Page structure

**Section** — one full-height panel of the single-page portfolio, identified by
the id it carries in the URL fragment (`/#career`). The six ids are the
`Sections` const object in `@shared/types/section.types`; the page's order is
the literal JSX in `app/page.tsx`.

**Nav section** — a Section the navbar names as a link. A deliberate subset:
`about`, `hobbies` and `contact` are reachable by scrolling but are not link
targets. Labels and membership live in `@shared/constants/section.constants`.

**Current section** — the one Section the navbar highlights. Exactly one at a
time, decided in `@client/currentSection` and nowhere else.

**Probe band** — the thin horizontal strip a quarter of the way down the
viewport that decides the Current section: whichever Section covers it wins.
Replaced a per-section intersection-ratio threshold, which could not handle a
Section taller than the viewport.

**Entrance animation** — the scale-and-fade a Section plays on coming into
view. Independent of the Current section: it has its own threshold (the
`amount` prop) and is disabled below 48rem and under reduced motion.

## Profile

**Profile** — the résumé facts about Nace, held once in `@shared/constants` and
rendered three ways. No renderer holds a fact of its own.

**Renderer** — one of the three views over the Profile: the JSON-LD `Person`
document (`@shared/profile/personJsonLd`), the plain-text agent document
(`@shared/profile/llmsDocument`, served at `/llms.txt`), and the icon grid in
`SectionTechnologies`.

**Technology** — one entry on the list of what Nace works with, carrying a
canonical `name` (what the JSON-LD uses), an optional prose-only `detail`, and a
`category`.

**Featured technology** — a Technology drawn as an icon in the grid. The set is
type-level: a featured Technology with no icon is a compile error.

**Work** / **Interest** — a career entry and a hobby entry, in
`@shared/constants/work.constants` and `interest.constants`.
