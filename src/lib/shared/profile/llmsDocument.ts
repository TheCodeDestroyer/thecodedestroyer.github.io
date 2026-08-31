import { interests } from '@shared/constants/interest.constants';
import { links } from '@shared/constants/link.constants';
import {
  AUTHOR_COUNTRY,
  AUTHOR_NAME,
  JOB_TITLE,
  SITE_NAME,
  SITE_URL,
} from '@shared/constants/meta.constants';
import {
  technologiesIn,
  technologyCategories,
} from '@shared/constants/technology.constants';
import { previousWork } from '@shared/constants/work.constants';

const PORTFOLIO_REPO =
  'https://github.com/TheCodeDestroyer/thecodedestroyer.github.io';
const DEVKIT_REPO = 'https://github.com/TheCodeDestroyer/devkit';
const DOTFILES_REPO = 'https://github.com/TheCodeDestroyer/dotfiles';
const TRIPORA_URL = 'https://tripora.app';

/*
 * The project list stays here rather than in `@shared/constants`: llms.txt is
 * its only reader. One reader is a hypothetical seam; move it out when a
 * second renderer wants it.
 */

/*
 * The role still marked `Present` in the work history. The opening paragraph
 * names it in prose, so deriving it here is what stops llms.txt announcing the
 * previous employer after a job change — the Experience section below renders
 * the same entry.
 */
const currentWork = previousWork.find((work) => work.to === 'Present');

const currentRole = currentWork
  ? `currently works as a ${currentWork.position} at ${currentWork.company}, a global software studio, and `
  : '';

const experience = previousWork
  .map(
    (
      work,
    ) => `### ${work.company} — ${work.position} (${work.from} – ${work.to})
${work.tasks.map((task) => `- ${task}`).join('\n')}`,
  )
  .join('\n\n');

const skills = technologyCategories
  .map((category) => {
    const named = technologiesIn(category)
      .map(({ name, detail }) => (detail ? `${name} ${detail}` : name))
      .join(', ');

    return `- **${category}:** ${named}`;
  })
  .join('\n');

/**
 * The plain-text view of the profile, for language models and other automated
 * agents. One of three renderers over the same facts — the enumerable ones
 * come from `@shared/constants`; the narrative paragraphs below are hand
 * written and belong to this document alone.
 */
export const llmsDocument = `# ${AUTHOR_NAME} — ${JOB_TITLE}

> ${AUTHOR_NAME} (a.k.a. ${SITE_NAME}) is a ${JOB_TITLE} based in ${AUTHOR_COUNTRY} with over 15 years of professional software development experience. He specializes in React, Next.js, and TypeScript, building pixel-perfect, responsive, and intuitive web applications across healthcare, e-commerce, cloud IoT, CMS, and logistics.

${AUTHOR_NAME} ${currentRole}is the co-founder and CTO of Tripora, an AI-powered travel planner. He focuses on precision-engineered front-end work, modern tooling, monorepos, and pragmatic AI adoption, and enjoys mentoring teams and giving talks on JavaScript and React.

This site (${SITE_URL}) is his personal portfolio. The content below summarizes his profile, experience, skills, and notable products for language models and other automated agents.

## Profile

- [Portfolio](${SITE_URL}): Personal portfolio and CV of ${AUTHOR_NAME}, ${JOB_TITLE}.
- [GitHub](${links.github}): Open-source work and personal projects.
- [LinkedIn](${links.linkedin}): Professional profile and contact.

## Experience

${experience}

## Skills

${skills}

## Products & Projects

- [Tripora](${TRIPORA_URL}): AI-powered travel planner that builds full trip itineraries, packing lists, and interactive maps in minutes. Co-founded in 2025; ${AUTHOR_NAME} is founder, CTO, and full-stack developer. Built with Next.js, Convex, Clerk, and Vercel.
- [devkit](${DEVKIT_REPO}): Open-source (MIT) monorepo of shareable JS/TS configs and tooling — ESLint configs/presets, Prettier configs, commitlint, tsconfig, and build scripts — published under the \`@tcd-devkit/*\` scope.
- [dotfiles](${DOTFILES_REPO}): Cross-platform (macOS + Linux) ZSH environment, git config, and CLI utilities — Sheldon-managed plugins with deferred loading, Powerlevel10k, mise for runtime versions, and 1Password CLI for secrets.
- [Portfolio](${PORTFOLIO_REPO}): This site, built with Next.js, React, TypeScript, and Tailwind CSS.

## AI Engineering & Workflow

Beyond shipping products, ${AUTHOR_NAME} invests heavily in AI-augmented development workflows and treats his tooling as a craft of its own:

- **Personal knowledge system ("second brain"):** A self-built system that combines a structured note vault, a queryable knowledge graph, and per-project implementation docs, so AI agents can pull accurate cross-project context on demand instead of guessing. Designed to keep decisions, research, and project knowledge durable and retrievable.
- **Custom AI coding tooling:** An author of a private suite of Claude Code plugins and skills that standardize and accelerate day-to-day engineering — reusable framework patterns and scaffolding, automated conventional commits, design-to-code extraction, and tools that turn external services into agent-callable commands. The emphasis is on deterministic, reviewable automation rather than ad-hoc prompting.

This reflects how ${AUTHOR_NAME} works: pairing strong front-end fundamentals with disciplined, repeatable AI workflows.

## Interests

${interests.map((interest) => `- ${interest.title}`).join('\n')}

## Languages

- Slovenian (native)
- English (professional working proficiency)
- Croatian / Serbian / Bosnian (basic)
- German (basic)

## Contact

- LinkedIn: ${links.linkedin}
- GitHub: ${links.github}
`;
