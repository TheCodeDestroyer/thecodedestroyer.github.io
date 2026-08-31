import type { Technology } from '@shared/types/technology.types';
import { TechnologyCategory } from '@shared/types/technology.types';

/**
 * The single list of what Nace works with. Three renderers read it and none of
 * them holds a name of its own: the JSON-LD `knowsAbout` array, the llms.txt
 * skills section, and the icon grid in `SectionTechnologies`. Before this list
 * existed those three disagreed — 5 entries, ~40 entries and 12 entries, with
 * Convex, Supabase, Claude Code and Docker missing from the JSON-LD entirely.
 *
 * Category order here is the order the llms.txt skills section prints in.
 */
export const technologies = [
  { name: 'React', category: TechnologyCategory.Core },
  { name: 'Next.js', category: TechnologyCategory.Core },
  { name: 'TypeScript', category: TechnologyCategory.Core },
  { name: 'JavaScript', category: TechnologyCategory.Core },
  { name: 'HTML5', category: TechnologyCategory.Core },
  {
    name: 'CSS3',
    detail: '(Sass/Less/PostCSS)',
    category: TechnologyCategory.Core,
  },
  { name: 'TailwindCSS', category: TechnologyCategory.Core },

  { name: 'Zustand', category: TechnologyCategory.StateAndUi },
  { name: 'Storybook', category: TechnologyCategory.StateAndUi },
  { name: 'Framer Motion', category: TechnologyCategory.StateAndUi },
  { name: 'Webpack', category: TechnologyCategory.StateAndUi },

  { name: 'Node.js', category: TechnologyCategory.BackendAndData },
  { name: 'NestJS', category: TechnologyCategory.BackendAndData },
  { name: 'Prisma', category: TechnologyCategory.BackendAndData },
  { name: 'Convex', category: TechnologyCategory.BackendAndData },
  { name: 'Supabase', category: TechnologyCategory.BackendAndData },
  { name: 'PostgreSQL', category: TechnologyCategory.BackendAndData },
  { name: 'MongoDB', category: TechnologyCategory.BackendAndData },

  {
    name: 'Claude Code',
    detail: '(incl. plugin & skill authoring)',
    category: TechnologyCategory.AiAndAgentic,
  },
  { name: 'Cursor', category: TechnologyCategory.AiAndAgentic },
  { name: 'OpenAI Codex', category: TechnologyCategory.AiAndAgentic },
  { name: 'OpenAI API', category: TechnologyCategory.AiAndAgentic },
  {
    name: 'Agentic AI development and workflows',
    category: TechnologyCategory.AiAndAgentic,
  },

  { name: 'Cypress', category: TechnologyCategory.Testing },
  {
    name: 'Jest',
    detail: '— unit, component, E2E, and smoke testing',
    category: TechnologyCategory.Testing,
  },

  { name: 'Docker', category: TechnologyCategory.DevOpsAndInfra },
  {
    name: 'Kubernetes',
    detail: '(Helm)',
    category: TechnologyCategory.DevOpsAndInfra,
  },
  { name: 'Git', category: TechnologyCategory.DevOpsAndInfra },
  {
    name: 'GitLab CI & GitHub Actions',
    category: TechnologyCategory.DevOpsAndInfra,
  },
  { name: 'Jenkins', category: TechnologyCategory.DevOpsAndInfra },
  { name: 'Vercel', category: TechnologyCategory.DevOpsAndInfra },
  { name: 'Turborepo/monorepos', category: TechnologyCategory.DevOpsAndInfra },

  { name: 'Code review', category: TechnologyCategory.Practices },
  { name: 'Pair programming', category: TechnologyCategory.Practices },
  { name: 'Mentoring', category: TechnologyCategory.Practices },
  {
    name: 'Scrum',
    detail: '(incl. Scrum Master)',
    category: TechnologyCategory.Practices,
  },
  { name: 'Responsive design', category: TechnologyCategory.Practices },
  {
    name: 'Cross-browser compatibility',
    category: TechnologyCategory.Practices,
  },

  { name: 'C#', category: TechnologyCategory.EarlierCareer },
  { name: '.NET', category: TechnologyCategory.EarlierCareer },
  { name: 'ASP.NET MVC', category: TechnologyCategory.EarlierCareer },
  { name: 'NHibernate', category: TechnologyCategory.EarlierCareer },
  { name: 'jQuery', category: TechnologyCategory.EarlierCareer },
  {
    name: 'SQL',
    detail: '(MS SQL Server)',
    category: TechnologyCategory.EarlierCareer,
  },
] as const satisfies readonly Technology[];

type TechnologyName = (typeof technologies)[number]['name'];

/** Category order, taken from the list itself rather than restated. */
export const technologyCategories: readonly TechnologyCategory[] = [
  ...new Set(technologies.map((technology) => technology.category)),
];

export const technologiesIn = (
  category: TechnologyCategory,
): readonly Technology[] =>
  technologies.filter((technology) => technology.category === category);

/**
 * The subset drawn as icons, in the order the grid draws them — a visual
 * sequence, which is why it is a list of its own rather than a flag on the
 * entries above. `satisfies` proves every name here is a real technology, and
 * the grid's icon map is keyed by `FeaturedTechnologyName`, so an entry with no
 * icon is a compile error rather than a blank cell.
 */
export const featuredTechnologyOrder = [
  'React',
  'Next.js',
  'TailwindCSS',
  'Cypress',
  'Storybook',
  'Node.js',
  'Convex',
  'Supabase',
  'Claude Code',
  'OpenAI API',
  'Git',
  'Docker',
] as const satisfies readonly TechnologyName[];

export type FeaturedTechnologyName = (typeof featuredTechnologyOrder)[number];
