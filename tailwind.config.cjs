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
      },
      fontSize: {
        xs: ['var(--text-xs)', { lineHeight: 'var(--text-xs--line-height)' }],
        sm: ['var(--text-sm)', { lineHeight: 'var(--text-sm--line-height)' }],
        base: ['var(--text-base)', { lineHeight: 'var(--text-base--line-height)' }],
        lg: ['var(--text-lg)', { lineHeight: 'var(--text-lg--line-height)' }],
        xl: ['var(--text-xl)', { lineHeight: 'var(--text-xl--line-height)' }],
        '2xl': ['var(--text-2xl)', { lineHeight: 'var(--text-2xl--line-height)' }],
        '3xl': ['var(--text-3xl)', { lineHeight: 'var(--text-3xl--line-height)' }],
        '4xl': ['var(--text-4xl)', { lineHeight: 'var(--text-4xl--line-height)' }],
        '5xl': ['var(--text-5xl)', { lineHeight: 'var(--text-5xl--line-height)' }],
        '6xl': ['var(--text-6xl)', { lineHeight: 'var(--text-6xl--line-height)' }],
        '7xl': ['var(--text-7xl)', { lineHeight: 'var(--text-7xl--line-height)' }],
        '8xl': ['var(--text-8xl)', { lineHeight: 'var(--text-8xl--line-height)' }],
        '9xl': ['var(--text-9xl)', { lineHeight: 'var(--text-9xl--line-height)' }],
      },
    },
  },
  plugins: [],
}
