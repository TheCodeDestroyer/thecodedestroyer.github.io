import { create } from 'zustand';

import type {
  CurrentSectionState,
  Sections,
} from '@shared/types/section.types';

const createCurrentSectionStore = create<CurrentSectionState>();

export const useCurrentSectionStore = createCurrentSectionStore((set) => ({
  currentSection: null,
  setCurrentSection: (section: Sections | null) =>
    set({ currentSection: section }),
}));
