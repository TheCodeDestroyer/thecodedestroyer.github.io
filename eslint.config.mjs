import nextPreset from '@tcd-devkit/eslint-preset-next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...nextPreset,
  {
    files: ['**/*.test.ts'],
    rules: {
      /* `describe` and `it` from `node:test` return promises that the runner
         awaits itself. From inside the test file the suite is declarative, so
         floating them is the intended usage rather than a missed await. */
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
];
