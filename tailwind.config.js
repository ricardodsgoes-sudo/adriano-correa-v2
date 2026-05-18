/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF0000',
          dark: '#000000',
          light: '#FFFFFF',
          gray: '#F5F5F5',
          'gray-light': '#FAFAFA',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Hanken Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'display-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-md': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-xl': ['1.75rem', { lineHeight: '1.4', fontWeight: '700' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.4', fontWeight: '700' }],
        'heading-md': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'safe-sm': '0.75rem',
        'safe-md': '1.5rem',
        'safe-lg': '2.5rem',
        'safe-xl': '4rem',
        'safe-2xl': '6rem',
      },
    },
  },
  plugins: [],
};
