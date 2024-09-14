/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      background : 'var(--background)',
      textArea : 'var(--textArea)',
      primaryButton : 'var(--primaryButton)',
      tag : 'var(--tag)',
      buttonHover : 'var(--buttonHover)',
      textColor : 'var(--textColor)',
      primaryBorder : 'var(--primaryBorder)',
      emoteHoverColor : 'var(--emoteHoverColor)',
    },

    screens: {
      '2xl': {'max': '1580px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}