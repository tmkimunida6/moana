import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import tailwind from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,mjs,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json", // tsconfig.json のパス
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      tailwindcss: tailwind,
    },
    rules: {
      ...eslint.recommended,
      ...tseslint.configs["recommended-type-checked"].rules,
      ...react.configs["recommended"].rules,
      ...reactHooks.configs["recommended"].rules,
      ...importPlugin.configs["recommended"].rules,
      "tailwindcss/classnames-order": "warn", // tailwindcss のクラス名を整理
      "prettier/prettier": "error", // Prettier のルールを適用
      "import/order": "warn", // import 文の順序を整理
      "react/jsx-no-useless-fragment": "warn", // 不要な Fragment を警告
      "no-unused-vars": "warn", // 未使用変数を警告
      "@typescript-eslint/no-unused-vars": "warn", // 未使用変数を警告 (TypeScript)
      "no-console": "warn", // console.log を警告
    },
  },
];

export default eslintConfig;