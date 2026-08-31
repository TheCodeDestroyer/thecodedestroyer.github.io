import nextPreset from '@tcd-devkit/eslint-preset-next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...nextPreset,
  {
    /*
     * Claude Code's scratch space: agent worktrees (full checkouts of other
     * branches, whose files would be reported as this branch's errors) and
     * whatever else an agent writes there. `.gitignore` covers `worktrees/`
     * and the preset imports it, but the rest of `.claude/` is fair game for
     * an agent and none of it is in tsconfig, so type-aware rules cannot
     * parse it anyway.
     */
    ignores: ['.claude/**'],
  },
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
