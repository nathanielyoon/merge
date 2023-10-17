import type { Config } from "tailwindcss/types/config";
import forms from "@tailwindcss/forms";

export default {
  content: ["./**/*.tsx"],
  separator: "_",
  theme: { extend: {}, container: { center: true, padding: "1rem" } },
  plugins: [forms()],
} satisfies Config;
