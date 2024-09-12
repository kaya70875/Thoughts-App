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
    }
  },
  plugins: [],
}