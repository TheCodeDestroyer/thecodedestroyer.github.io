import { create } from 'zustand';

import type { CurrentSectionState, Section } from '@shared/types/section.types';

const createCurrentSectionStore = create<CurrentSectionState>();

export const useCurrentSectionStore = createCurrentSectionStore((set) => ({
  currentSection: null,
  setCurrentSection: (section: Section | null) =>
    set({ currentSection: section }),
}));
