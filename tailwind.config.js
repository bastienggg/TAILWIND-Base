/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white': 'hsl(var(--clr-white) / <alpha-value>)',
      'bg-red': 'hsl(var(--clr-red-bg) / <alpha-value>)',
      'btn-red': 'hsl(var(--clr-red-btn) / <alpha-value>)',
      'bg-blue': 'hsl(var(--clr-blue-bg) / <alpha-value>)',
      'btn-blue': 'hsl(var(--clr-blue-btn) / <alpha-value>)',
      'bg-green': 'hsl(var(--clr-green-bg) / <alpha-value>)',
      'btn-green': 'hsl(var(--clr-green-btn) / <alpha-value>)',
    }
  },
  plugins: [],
}

