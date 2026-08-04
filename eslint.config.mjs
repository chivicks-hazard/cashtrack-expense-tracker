import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  // Core Web Vitals rules catch performance and accessibility issues
  ...nextVitals,

  // Custom directory ignores
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // Add your custom rule overrides here
  {
    rules: {
      "no-unused-vars": "error",
      "@next/next/no-html-link-for-pages": "error",
    },
  },
]);

export default eslintConfig;
