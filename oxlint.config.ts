import { defineHopeConfig } from "oxc-config-hope/oxlint";

export default defineHopeConfig(
  {
    node: ["lib/**/*.ts"],
    react: true,
    vitest: {
      bench: true,
    },

    rules: {
      // project settings
      "max-statements": ["warn", 30],
      "no-underscore-dangle": ["warn", { allow: ["__CONFIG__", "__dirname", "__filename"] }],
      "max-lines-per-function": ["warn", { max: 200, skipBlankLines: true, skipComments: true }],
      "react/forbid-component-props": "off",
      "unicorn/prefer-global-this": "off",
    },
  },
  {
    files: ["config.example.ts", "config.example.js"],
    rules: {
      "max-lines": "off",
    },
  },
  {
    files: ["lib/**/*.ts"],
    rules: {
      // allow console usage in scripts and config files
      "no-console": "off",
    },
  },
);
