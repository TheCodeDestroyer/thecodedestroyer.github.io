export const Sections = {
  Me: 'me',
  About: 'about',
  Technologies: 'technologies',
  Career: 'career',
  Hobbies: 'hobbies',
  ContactMe: 'contact',
} as const;

export type Section = (typeof Sections)[keyof typeof Sections];
