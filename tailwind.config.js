module.exports = {
  content: ['./**/*.html'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {},
      fontFamily: {
        header: ['Poppins', 'sans-serif'],
        text: ['Poppins', 'sans-serif']
      },
      lineHeight: {
        logo: '1.25 !important'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    enabled: true,
    content: ['./**/*.html']
  }
};
