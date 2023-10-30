import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import CssBaseline from '@mui/material/CssBaseline'

import Header from '../Header/Header'
import SidePanel from '../SidePanel/SidePanel'
import Footer from '../Footer/Footer'
import MainContent from '../MainContent/MainContent'

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
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const [open, setOpen] = React.useState(false)

  const themeToggle = () => {
    setIsDarkMode(!isDarkMode)
  }
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <CssBaseline />
        <Header
          open={open}
          drawerWidth={drawerWidth}
          handleDrawerOpen={handleDrawerOpen}
          theme={theme}
          themeToggle={themeToggle}
        />

        {/* Layout for SidePanel + MainContent + Footer */}
        <Box sx={{ display: 'flex', flex: '1', overflow: 'hidden' }}>
          {/* SidePanel */}
          <SidePanel
            handleDrawerClose={handleDrawerClose}
            theme={theme}
            open={open}
            openedMixin={openedMixin}
            closedMixin={closedMixin}
            DrawerHeader={DrawerHeader}
          />

          {/* Main Content Area */}
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
            <Box sx={{ flex: '1', overflowY: 'auto', p: 3, pt: 10 }}>
              <MainContent />
            </Box>

            {/* Footer */}
            <Box sx={{}}>
              <Footer />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
