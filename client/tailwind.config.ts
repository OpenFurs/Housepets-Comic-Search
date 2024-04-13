import type { Config } from "tailwindcss"
import typographyPlugin from "@tailwindcss/typography"
import headlessUIPlugin from "@headlessui/tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [typographyPlugin, headlessUIPlugin]
}

export default config
