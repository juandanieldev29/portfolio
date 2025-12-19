module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../src/**/*.{astro,html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Map Tailwind color tokens to CSS variables so utilities like
        // `bg-black` use `var(--color-black)` instead of a hard-coded value.
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        primary: 'var(--color-primary)',
        neutral: 'var(--color-neutral)'
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)']
      }
    },
  },
  plugins: [],
}
