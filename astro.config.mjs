// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import mdx from '@astrojs/mdx';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs({ entrypoint: '/src/entrypoint.ts' }),
    mdx(),
    partytown(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});