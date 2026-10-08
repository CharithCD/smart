import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Every feature folder. Add a new feature here when you create its folder.
const FEATURES = [
  "auth",
  "profile",
  "knowledge",
  "infrastructure",
  "marketing",
  "compliance",
  "product",
];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // CONVENTIONS.md: no `any`, and always import with "@/…", never "../".
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "no-restricted-imports": [
        "error",
        { patterns: [{ group: ["../*"], message: 'Import with "@/…" instead of "../".' }] },
      ],
    },
  },

  // CONVENTIONS.md: a feature never imports another feature,
  // except the shared company profile (options + schema).
  ...FEATURES.map((feature) => ({
    files: [`src/features/${feature}/**`],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            { group: ["../*"], message: 'Import with "@/…" instead of "../".' },
            {
              // any "@/features/…" import except its own folder and profile/options or profile/schema
              regex: `^@/features/(?!${feature}/|profile/options$|profile/schema$)`,
              message: "A feature may not import another feature (see CONVENTIONS.md).",
            },
          ],
        },
      ],
    },
  })),

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "src/generated/**"]),
]);

export default eslintConfig;
