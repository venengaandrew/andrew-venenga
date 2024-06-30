import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactMemo from "eslint-plugin-react-memo";
import reactHooks from "eslint-plugin-react-hooks";
import next from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["*/public", "*/node_modules/*", "*/.next/*", "*/dist/*"],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "prettier"
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "simple-import-sort": simpleImportSort,
      "import": importPlugin,
      "react": react,
      "react-memo": reactMemo,
      "react-hooks": reactHooks,
      "@next/next": next,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        pragma: "React",
        version: "detect",
      },
    },
    rules: {
      "react/display-name": "off",
      "react-memo/require-usememo": "off", // Gradually re-enable and test
      "react-memo/require-memo": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off", // Gradually re-enable and test
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/member-ordering": [
        "warn",
        {
          interfaces: ["signature", "method", "constructor", "field"],
          typeLiterals: ["signature", "method", "constructor", "field"],
        },
      ],
      "import/first": "error",
      "import/newline-after-import": "off", // Gradually re-enable and test
      "import/no-duplicates": "error",
      "import/order": "off",
      "no-irregular-whitespace": "off",
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
      }],
      "object-curly-spacing": ["error", "never"],
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-sort-props": "error",
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "sort-imports": "off",
      "jsx-a11y/no-onchange": "off",
      "jsx-a11y/no-autofocus": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-duplicate-head": "off", // Gradually re-enable and test
      "@next/next/no-page-custom-font": "off", // Gradually re-enable and test
    },
  },
  {
    files: ["**/*.tsx"],
    rules: {
      "react/prop-types": "off",
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];