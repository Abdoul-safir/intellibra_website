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
        },
        primary: '#FF2C62',
        secondary: '#C32BFF',
      },
      backgroundImage: {
        'intellibra-gradient': 'linear-gradient(to right, #FF2C62, #C32BFF)',
        'intellibra-gradient-dark': 'linear-gradient(to right, #E0245E, #B026E6)',
      },
    },
  },
  plugins: [],
}
export default config
