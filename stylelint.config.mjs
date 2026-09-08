export default {
  overrides: [
    {
      files: ["**/*.astro"],
      customSyntax: "postcss-html",
    },
  ],
  rules: {
    "declaration-property-unit-disallowed-list": {
      "font-size": ["px"],
    },
  },
};
