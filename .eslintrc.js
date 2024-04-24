const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    "tcd/configs/next",
    "tcd/configs/ts",
    "prettier",
  ],
  parserOptions: {
    project,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-duplicate-imports": "off",
    "@typescript-eslint/naming-convention": "off"
  }
};
