import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#17211b',
        line: '#dce3df',
        surface: '#f7f9f8',
        brand: '#0f766e',
        accent: '#b45309',
      },
    },
  },
  plugins: [],
} satisfies Config
