// eslint.config.js
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import pluginReactDom from "eslint-plugin-react-dom";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    // Global ignores
    {
        ignores: ["node_modules/", "dist/", "build/"],
    },

    // ESLint's recommended JavaScript rules
    js.configs.recommended,

    // TypeScript ESLint configuration
    ...tseslint.configs.recommended, // Uses rules from @typescript-eslint/eslint-plugin
    ...tseslint.configs.stylistic, // Optional: Adds stylistic TypeScript rules

    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: "latest",
                sourceType: "module",
                // This is crucial for typed linting with TypeScript.
                // It should point to your tsconfig.json file.
                // If your tsconfig.json is not in the root, adjust the path.
                project: ["./tsconfig.json"],
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            react: pluginReact,
            "react-hooks": pluginReactHooks,
            "jsx-a11y": pluginJsxA11y,
            'react-dom': pluginReactDom,
            'react-refresh': pluginReactRefresh
        },
        settings: {
            react: {
                version: "detect", // Automatically detects the React version
            },
        },
        rules: {
            // React rules
            "react/react-in-jsx-scope": "off", // Not needed with React 17+ JSX transform
            "react/jsx-uses-react": "off", // Not needed with React 17+ JSX transform
            "react/prop-types": "off", // Generally unnecessary when using TypeScript for prop validation

            // React Hooks rules
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // JSX Accessibility rules
            "jsx-a11y/alt-text": "warn", // Example: Enforce alt text on images
            // You can add more specific jsx-a11y rules as needed
            // e.g., "jsx-a11y/anchor-is-valid": "off"

            // TypeScript ESLint rules (overrides or additions)
            "@typescript-eslint/explicit-module-boundary-types": "off", // Often too restrictive for React components
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_", // Ignore unused variables that start with an underscore
                    varsIgnorePattern: "^_",
                },
            ],
            // Add any custom rules here
        },
    },

    // Ensure Prettier is the last configuration to turn off conflicting rules
    eslintConfigPrettier,
];