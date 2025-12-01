import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          dark: { value: "#064E3B" },
          base: { value: "#047857" },
          light: { value: "#10B981" },
          lighter: { value: "#6EE7B7" },
          lightest: { value: "#D1FAE5" },
        },
        secondary: {
          dark: { value: "#365314" },
          base: { value: "#4D7C0F" },
          light: { value: "#84CC16" },
          lighter: { value: "#BEF264" },
          lightest: { value: "#ECFCCB" },
        },
        neutral: {
          1: { value: "#111827" },
          2: { value: "#374151" },
          3: { value: "#6B7280" },
          4: { value: "#E5E7EB" },
          5: { value: "#F9FAFB" },
        },
      },
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
