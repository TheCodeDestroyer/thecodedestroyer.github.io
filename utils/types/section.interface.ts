import type { Sections } from '@utils/types/section.enum';

export interface CurrentSectionState {
  currentSection: Sections;
  setCurrentSection: (section: Sections) => void;
}
