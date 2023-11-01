import MuiAppBar from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import { Button, IconButton, Typography } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Search from '../Search/Search'
import couch from '../../src/assets/potato.png'
import LoadingButton from '@mui/lab/LoadingButton'
import LoginIcon from '@mui/icons-material/Login'
import CircularProgress from '@mui/material/CircularProgress'
import './index.css'
import { Link } from 'react-router-dom'
const Header = ({
  handleDrawerOpen,
  open,
  theme,
  drawerWidth,
  themeToggle,
}) => {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ open, theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }))

  const isLoggedin = false
  const isLoading = false
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img
            style={{ width: 60, height: 60 }}
            src={couch}
            alt="couch"
            className="couch"
          />
          <Search />
        </Box>

        <Box
          sx={{
            marginLeft: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {!isLoggedin &&
            (isLoading ? (
              <Link to="/signup">
                <LoadingButton loading variant="outlined">
                  <Typography variant="button">Sign In</Typography>
                </LoadingButton>
              </Link>
            ) : (
              <>
                {/* For larger screens */}
                <Link to="/signin">
                  <Button
                    variant="outlined"
                    sx={{
                      color: theme.palette.loginButton.text,
                      borderColor: theme.palette.loginButton.border,
                      backgroundColor: theme.palette.loginButton.main,
                      '&:hover': {
                        backgroundColor:
                          theme.palette.loginButton.hoverBackground,
                        borderColor: theme.palette.loginButton.hoverBackground,
                      },
                      transition: 'all 0.3s ease', // Smooth transition for all changes
                      '@media (max-width:600px)': { display: 'none' }, // Hide on small screens
                    }}
                  >
                    {' '}
                    <Typography variant="button">Sign In</Typography>
                  </Button>
                </Link>
                {/* For smaller screens */}

                <Link to="/signin">
                  <IconButton
                    sx={{
                      '@media (min-width:601px)': { display: 'none' }, // Hide on larger screens
                      color: theme.palette.loginButton.text, // Adjust color as needed
                      borderColor: theme.palette.loginButton.border, // Adjust border as needed
                      backgroundColor: theme.palette.loginButton.main, // Adjust background as needed
                      '&:hover': {
                        backgroundColor:
                          theme.palette.loginButton.hoverBackground, // Adjust hover as needed
                      },
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? <CircularProgress size={24} /> : <LoginIcon />}
                  </IconButton>
                </Link>
              </>
            ))}
          <IconButton sx={{ ml: 1 }} onClick={themeToggle} color="inherit">
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
