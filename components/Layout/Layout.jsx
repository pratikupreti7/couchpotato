import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'
import { getCurrentTheme, toggleTheme } from '../Theme/Theme'
import CssBaseline from '@mui/material/CssBaseline'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import SidePanel from '../SidePanel/SidePanel'
import Footer from '../Footer/Footer'
import { Container } from '@mui/material'
import Divider from '@mui/material/Divider'
const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false)
  const [currentTheme, setCurrentTheme] = React.useState(getCurrentTheme())
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const handleThemeToggle = () => {
    toggleTheme() // Toggle the theme using the theme manager
    setCurrentTheme(getCurrentTheme()) // Update the component state with the new theme
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <CssBaseline />
        <Header
          open={open}
          drawerWidth={drawerWidth}
          handleDrawerOpen={handleDrawerOpen}
          theme={currentTheme}
          themeToggle={handleThemeToggle}
        />

        {/* Layout for SidePanel + MainContent + Footer */}
        <Box sx={{ display: 'flex', flex: '1', overflow: 'auto' }}>
          {/* SidePanel */}
          <SidePanel
            handleDrawerClose={handleDrawerClose}
            theme={currentTheme}
            open={open}
            openedMixin={openedMixin}
            closedMixin={closedMixin}
            DrawerHeader={DrawerHeader}
          />
          {/* Main Content Area */}

          <Box
            component="main"
            sx={{
              marginTop: 10,
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column', // Change this to column
            }}
          >
            <Divider></Divider>

            <Container
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column', // Ensure this is column as well
              }}
            >
              <Outlet />
            </Container>

            <Divider></Divider>
          </Box>
          <Divider></Divider>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'background.default',
        }}
      >
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
