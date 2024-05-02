import type { Sections } from '@utils/types/section.enum';

export interface CurrentSectionState {
  currentSection: Sections | null;
  setCurrentSection: (section: Sections | null) => void;
}
