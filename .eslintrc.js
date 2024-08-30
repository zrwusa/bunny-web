module.exports = {
    "extends": [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "plugins": ["@typescript-eslint"],
    "ignorePatterns": [".next/", "lib/", "dist/", "coverage/", "docs/", "trash/"],
    "rules": {
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
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
