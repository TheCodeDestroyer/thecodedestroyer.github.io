export enum Sections {
  Me = 'me',
  About = 'about',
  Technologies = 'technologies',
  Career = 'career',
  Hobbies = 'hobbies',
  ContactMe = 'contact',
}

export interface CurrentSectionState {
  currentSection: Sections | null;
  setCurrentSection: (section: Sections | null) => void;
}
