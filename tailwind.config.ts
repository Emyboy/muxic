import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'fg': '#121212',
        'fg-highlight': '#232323',
        'fg-light': '#A3A3A3',
        'theme': "#1ED760",
      },
      textColor: {
        'fg': '#121212',
        'fg-light': '#A3A3A3',
        'fg-highlight': '#232323',
        'theme': "#1ED760",
      },
    },
  },
  plugins: [],
}
export default config
