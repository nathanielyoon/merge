import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwind from "tailwindcss";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [solid(), viteSingleFile({ removeViteModuleLoader: true })],
  server: { port: 3000 },
  css: { postcss: { plugins: [tailwind()] } },
});
