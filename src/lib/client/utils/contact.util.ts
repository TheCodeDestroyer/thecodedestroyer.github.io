import { links } from '@shared/constants/link.types';

/**
 * Single source of truth for the "Contact me" action so every entry point
 * (navbar buttons + contact section) stays in sync if the destination changes.
 */
export const goToContact = (): void => {
  window.location.href = links.linkedin;
};
