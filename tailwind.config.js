/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundColor: {
        'steel-blue': '#465b85',
        'light-blue': '#76bff6',
      },
      colors: {
        'steel-blue': '#465b85',
        'light-blue': '#76bff6',
      },
      borderColor: {
        'steel-blue': '#465b85',
        'light-blue': '#76bff6',
      },
      keyframes: {
        'custom-pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        pound: 'custom-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
