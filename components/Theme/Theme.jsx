// themeManager.js
import { createTheme } from '@mui/material/styles'

// Defined custom themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    loginButton: {
      main: '#9C27B0',
      text: '#FFFFFF',
      border: '2px solid #FFFFFF',
      hoverBackground: '#7B1A85', // Darker purple on hover
      boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', // Adding shadows
      borderRadius: '30px', // Rounded corners
      transition: 'all 0.3s ease', // Smooth transition effect
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    loginButton: {
      main: '#FFFFFF',
      text: 'black',
      border: '2px solid #000000',
      hoverBackground: '#E0E0E0', // Slightly darker white on hover
      boxShadow: '0px 4px 15px rgba(255, 255, 255, 0.1)', // Adding shadows
      borderRadius: '30px', // Rounded corners
      transition: 'all 0.3s ease', // Smooth transition effect
    },
  },
})

let currentTheme = lightTheme // Initialize with the light theme by default

const toggleTheme = () => {
  currentTheme = currentTheme === lightTheme ? darkTheme : lightTheme
}

const getCurrentTheme = () => currentTheme

export { toggleTheme, getCurrentTheme }
