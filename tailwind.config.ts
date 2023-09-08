import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      page: '#E0E8FF',
    },
    extend: {
      backgroundImage: {
        'page-mobile': 'url(../../public/pattern-background-mobile.svg)',
        'page-desktop': 'url(../../public/pattern-background-desktop.svg)'
      }
    }
  },
  plugins: [],
}
export default config
