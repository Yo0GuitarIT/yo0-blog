import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
    },
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
    },
  },
});
