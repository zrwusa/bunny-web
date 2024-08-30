module.exports = {
    "extends": ["next/core-web-vitals","eslint:recommended",
        "plugin:@typescript-eslint/recommended"],
    "plugins": ["@typescript-eslint"],
    "ignorePatterns": [".next/", "lib/", "dist/", "coverage/", "docs/", "trash/"],
    "rules": {
        // "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_",
                "ignoreRestSiblings": true
            }
        ],
        "lines-around-comment": [
            "warn",
            {
                "beforeLineComment": false,
                "beforeBlockComment": true,
                "allowBlockStart": true,
                "allowClassStart": true,
                "allowObjectStart": true,
                "allowArrayStart": true
            }
        ],
        "newline-before-return": "off",
        "import/newline-after-import": [
            "warn",
            {
                "count": 1
            }
        ],
        // "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        // "object-curly-spacing": ["warn", "always"]
    },

}
