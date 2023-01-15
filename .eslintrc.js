module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                extensions: [".ts", ".tsx"],
            },
        },
    },

    plugins: ["@typescript-eslint"],
    extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "prettier",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:sonarjs/recommended",
        "plugin:security/recommended",
        "plugin:react-hooks/recommended",
    ],

    rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "react/react-in-jsx-scope": "off",
        "react/function-component-definition": "off",
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".ts", ".tsx", ".js", ".jsx"],
            },
        ],
        "react/jsx-props-no-spreading": "off",
        "no-console": "warn",
        "sonarjs/no-duplicate-string": "warn",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight"],
                aspects: ["invalidHref", "preferButton"],
            },
        ],
        indent: "off",
        "max-len": [0, 100, 2, { ignoreUrls: true }],
        "no-nested-ternary": "off",
        "import/prefer-default-export": "off",
        "prettier/prettier": ["warn", {}, { usePrettierrc: true }],
        "react/jsx-wrap-multilines": [
            "error",
            { declaration: false, assignment: false },
        ],
        "@typescript-eslint/ban-ts-comment": "off",
        "guard-for-in": "off",
        "no-restricted-syntax": "warn",
        "no-plusplus": "off",
        "react/require-default-props": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-empty-function": "warn",

        // "linebreak-style": "off",
        // "object-curly-newline": "off",
        // "implicit-arrow-linebreak": "off",
        // "function-paren-newline": "off",
        // "react/jsx-curly-newline": "off",
        // "react/jsx-one-expression-per-line": "off",
    },
};
