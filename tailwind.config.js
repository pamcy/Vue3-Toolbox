/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: (theme) => ({
        center: true,
        padding: theme('spacing.5')
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
