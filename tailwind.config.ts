import type { Config } from "tailwindcss/types/config";

export default {
  content: ["./**/*.tsx"],
  separator: "_",
  theme: {
    extend: { screens: { print: { raw: "print" } } },
  },
} satisfies Config;
