/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss,js}"],
  theme: {
    extend: {
      spacing: {
        'c-sidebar': '20rem',
        'c-topbar': '4rem'
      },
      colors: {
        primary: {
          DEFAULT: '#236433',
          50: '#e8f1eb',
          100: '#cfe0d2',
          200: '#a7c4ae',
          300: '#7ea889',
          400: '#548d65',
          500: '#236433',
          600: '#1e5730',
          700: '#174627',
          800: '#10361e',
          900: '#0a2716'
        },
        'primary-out': '#d9f8e0',
        'sidebar': '#F4F3F7',
        'topbar': '#e8f1eb'
      }
    },
    screens: {

      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      msm: { max: "640px" },
      mmd: { max: "768px" },
      mlg: { max: "1024px" },
      mxl: { max: "1280px" },
      m2xl: { max: "1536px" },
    },
  },
  plugins: [],
  corePlugins: { preflight: false }

}

