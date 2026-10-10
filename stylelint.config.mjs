export default {
  plugins: ["./scripts/stylelint/design-contract.mjs"],
  overrides: [
    {
      files: ["**/*.astro"],
      customSyntax: "postcss-html",
    },
  ],
  rules: {
    "next-token/design-contract": true,
    "declaration-property-unit-disallowed-list": {
      "font-size": ["px"],
    },
  },
};
