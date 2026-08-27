import { NextResponse } from 'next/server';

import { interests } from '@shared/constants/interest.constants';
import { links } from '@shared/constants/link.types';
import { AUTHOR_NAME, SITE_URL } from '@shared/constants/meta.constants';
import { previousWork } from '@shared/constants/work.constants';

// The content is fully static, so prerender at build time (like robots/sitemap)
// instead of rendering on every request.
export const dynamic = 'force-static';

const PORTFOLIO_REPO =
  'https://github.com/TheCodeDestroyer/thecodedestroyer.github.io';
const DEVKIT_REPO = 'https://github.com/TheCodeDestroyer/devkit';
const DOTFILES_REPO = 'https://github.com/TheCodeDestroyer/dotfiles';
const TRIPORA_URL = 'https://tripora.app';

export const GET = () => {
  const content = `# ${AUTHOR_NAME} — Senior Frontend Engineer

> ${AUTHOR_NAME} (a.k.a. TheCodeDestroyer) is a Senior Frontend Engineer based in Slovenia with over 15 years of professional software development experience. He specializes in React, Next.js, and TypeScript, building pixel-perfect, responsive, and intuitive web applications across healthcare, e-commerce, cloud IoT, CMS, and logistics.

${AUTHOR_NAME} currently works as a Full Stack Developer at Spartan Development, a global software studio, and is the co-founder and CTO of Tripora, an AI-powered travel planner. He focuses on precision-engineered front-end work, modern tooling, monorepos, and pragmatic AI adoption, and enjoys mentoring teams and giving talks on JavaScript and React.

This site (${SITE_URL}) is his personal portfolio. The content below summarizes his profile, experience, skills, and notable products for language models and other automated agents.

## Profile

- [Portfolio](${SITE_URL}): Personal portfolio and CV of ${AUTHOR_NAME}, Senior Frontend Engineer.
- [GitHub](${links.github}): Open-source work and personal projects.
- [LinkedIn](${links.linkedin}): Professional profile and contact.

## Experience

${previousWork
  .map(
    (
      work,
    ) => `### ${work.company} — ${work.position} (${work.from} – ${work.to})
${work.tasks.map((task) => `- ${task}`).join('\n')}`,
  )
  .join('\n\n')}

## Skills

- **Core:** React, Next.js, TypeScript, JavaScript, HTML5, CSS3 (Sass/Less/PostCSS), TailwindCSS
- **State & UI tooling:** Zustand, Storybook, Framer Motion, Webpack
- **Backend & data:** Node.js, NestJS, Prisma, Convex, Supabase, PostgreSQL, MongoDB
- **AI & agentic:** Claude Code (incl. plugin & skill authoring), Cursor, OpenAI Codex, OpenAI API, agentic AI development and workflows
- **Testing:** Cypress, Jest — unit, component, E2E, and smoke testing
- **DevOps & infra:** Docker, Kubernetes (Helm), Git, GitLab CI & GitHub Actions, Jenkins, Vercel, Turborepo/monorepos
- **Practices:** Code review, pair programming, mentoring, Scrum (incl. Scrum Master), responsive design, cross-browser compatibility
- **Earlier-career stack:** C#, .NET, ASP.NET MVC, NHibernate, jQuery, SQL (MS SQL Server)

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

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
