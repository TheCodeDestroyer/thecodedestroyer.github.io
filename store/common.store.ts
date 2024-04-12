import { create } from 'zustand';

import { Sections } from '@utils/types/section.enum';
import type { CurrentSectionState } from '@utils/types/section.interface';

export const useCurrentSectionStore = create<CurrentSectionState>()((set) => ({
  currentSection: Sections.Me,
  setCurrentSection: (section: Sections) =>
    set((state: CurrentSectionState): Partial<CurrentSectionState> => {
      return { ...state, currentSection: section };
    })
}));
