import type { Sections } from '@utils/types/section.enum';

export interface NabBarNavigation {
  name: string;
  sectionId: Sections;
  current: boolean;
}
