const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
