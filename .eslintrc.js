module.exports = {
    "extends": ["next/core-web-vitals"],
    "ignorePatterns": [".next/", "lib/", "dist/", "coverage/", "docs/", "trash/"],
    "rules": {
        "no-unused-vars": "warn",
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
