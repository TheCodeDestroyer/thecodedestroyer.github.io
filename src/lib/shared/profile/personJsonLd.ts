import type { Person, WithContext } from 'schema-dts';

import { links } from '@shared/constants/link.constants';
import {
  AUTHOR_COUNTRY,
  AUTHOR_NAME,
  JOB_TITLE,
  META_DESCRIPTION,
  PROFILE_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from '@shared/constants/meta.constants';
import { technologies } from '@shared/constants/technology.constants';

/**
 * The structured-data view of the profile. One of three renderers over the
 * same facts; it holds none of its own.
 */
export const personJsonLd: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE_IMAGE_PATH}`,
  jobTitle: JOB_TITLE,
  description: META_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressCountry: AUTHOR_COUNTRY,
  },
  sameAs: [links.github, links.linkedin],
  /* Everything on the list, plus the discipline the list adds up to. Selecting
     a subset here is what let this drift to five entries in the first place. */
  knowsAbout: [
    ...technologies.map((technology) => technology.name),
    'Frontend Engineering',
  ],
};
