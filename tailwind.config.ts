import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        intellibra: {
          pink: '#FF2C62',
          violet: '#C32BFF',
          green: '#0D7A5F',
          'green-light': '#0F8F6E',
          'green-dark': '#0A5F49',
          'green-bg': '#F0FAF7',
          'green-border': '#C0EBE0',
        },
        primary: '#FF2C62',
        secondary: '#C32BFF',
      },
      backgroundImage: {
        'intellibra-gradient': 'linear-gradient(to right, #FF2C62, #C32BFF)',
        'intellibra-gradient-dark': 'linear-gradient(to right, #E0245E, #B026E6)',
        'intellibra-trial-gradient': 'linear-gradient(to right, #0D7A5F, #0F8F6E)',
      },
    },
  },
  plugins: [],
}
export default config
