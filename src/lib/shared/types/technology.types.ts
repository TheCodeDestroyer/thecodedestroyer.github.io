export const TechnologyCategory = {
  Core: 'Core',
  StateAndUi: 'State & UI tooling',
  BackendAndData: 'Backend & data',
  AiAndAgentic: 'AI & agentic',
  Testing: 'Testing',
  DevOpsAndInfra: 'DevOps & infra',
  Practices: 'Practices',
  EarlierCareer: 'Earlier-career stack',
} as const;

export type TechnologyCategory =
  (typeof TechnologyCategory)[keyof typeof TechnologyCategory];

export interface Technology {
  /** Canonical name. This is what goes into JSON-LD `knowsAbout`. */
  name: string;
  /**
   * Prose-only qualifier, appended after the name in the llms.txt skills list
   * and nowhere else — "(Helm)", "(incl. Scrum Master)". Keeps the document
   * reading the way a human wrote it without polluting the canonical name.
   */
  detail?: string;
  category: TechnologyCategory;
}
