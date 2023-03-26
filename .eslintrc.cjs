module.exports = {
    "env": {
        commonjs: true,
        browser: true,
        es2021: true,
        mocha: true,
        node: true,
    },
    extends: "eslint:recommended",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "no-unused-vars": 'warn'
    }
}
