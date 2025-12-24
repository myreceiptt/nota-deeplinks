import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [".next", ".yarn", "public", "node_modules"],
  },
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
