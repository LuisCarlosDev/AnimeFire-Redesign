/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      background: '#121214',
      text: '#737380',
      title: '#123952',
      text_hover: '#35a3bc',
      white: '#DCE2E5',
    },
    extend: {
      backgroundImage: {
        heroBackground: 'url(/background.webp)',
      },
    },
  },
  plugins: [],
}
