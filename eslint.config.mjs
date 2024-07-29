import globals from "globals";
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
    allConfig: js.configs.all
});

export default [...compat.extends(
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "expo",
    "eslint:recommended",
), {
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser,
            ...globals.amd,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "commonjs",

        parserOptions: {
            project: "./tsconfig.json",

            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: "detect",
        },
        'import/ignore': ['react-native'],
    },

    rules: {
        "react/no-danger": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-console": "error",
        "prettier/prettier": "off",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "off",
        "import/no-extraneous-dependencies":[
            "off",
            {
                "devDependencies":[
                    "**/*.test.ts",
                    "**/*.test.tsx"
                ]
            }
            ],
    },
}];