module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        surface2: '#1A1A1A',
        primary: '#6C63FF',
        secondary: '#00D4FF',
        tmuted: '#888888',
        border: '#2A2A2A'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        geist: ['Geist Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
