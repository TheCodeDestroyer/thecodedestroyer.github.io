import { create } from 'zustand';

import type { Sections } from '@utils/types/section.enum';
import type { CurrentSectionState } from '@utils/types/section.interface';

export const useCurrentSectionStore = create<CurrentSectionState>()((set) => ({
  currentSection: null,
  setCurrentSection: (section: Sections | null) =>
    set((state: CurrentSectionState): Partial<CurrentSectionState> => {
      return { ...state, currentSection: section };
    })
}));
