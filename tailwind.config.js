/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'example-enter 500ms ease-in',
        'fade-out': 'example-leave 300ms ease-in',
      },
      keyframes: {
        'example-enter': {
          '0%': { opacity: '0.01' },
          '100%': { opacity: '1' },
        },
        'example-leave': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.01' },
        },
      },
    },
  },
  plugins: [],
};
