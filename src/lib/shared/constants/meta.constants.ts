export const SITE_URL = 'https://thecodedestroyer.com';
export const SITE_NAME = 'TheCodeDestroyer';
export const AUTHOR_NAME = 'Nace Logar';
export const JOB_TITLE = 'Senior Frontend Engineer';
export const AUTHOR_COUNTRY = 'Slovenia';
export const PROFILE_IMAGE_PATH = '/profile.png';

/** "Name, Job title" — the one phrasing shared by the manifest and OG alt text. */
export const AUTHOR_HEADLINE = `${AUTHOR_NAME}, ${JOB_TITLE}`;

export const META_TITLE = `${AUTHOR_NAME}: ${JOB_TITLE} | React & NextJS Specialist | ${AUTHOR_COUNTRY}`;
export const META_DESCRIPTION = `${AUTHOR_NAME} (${SITE_NAME}) is a ${JOB_TITLE} in ${AUTHOR_COUNTRY} specializing in React, NextJS, TypeScript and TailwindCSS, crafting pixel-perfect, responsive web apps.`;

/** Mirrors `--color-black` in globals.css — the page background. */
export const THEME_COLOR = '#030405';

/**
 * Bumped by hand whenever the site's content changes (copy, work history,
 * interests). Deliberately not `new Date()`: the sitemap is prerendered, so a
 * live date would advertise a fresh `lastmod` on every deploy — including
 * dependency bumps that change nothing a crawler cares about.
 */
export const CONTENT_LAST_MODIFIED = '2026-08-27';
