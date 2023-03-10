/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      background: '#121214',
      text: '#737380',
      text_hover: '#35a3bc',
    },
    extend: {
      backgroundImage: {
        heroBackground: 'url(/background.webp)',
      },
    },
  },
  plugins: [],
}
