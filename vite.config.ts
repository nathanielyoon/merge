import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [solid()],
  server: { port: 3000 },
  css: { postcss: { plugins: [tailwindcss()] } },
});
