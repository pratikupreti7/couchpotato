import MuiAppBar from '@mui/material/AppBar'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Search from '../Search/Search'
import couch from '../../src/assets/potato.png'
import './index.css'
const Header = ({
  handleDrawerOpen,
  open,
  theme,
  drawerWidth,
  themeToggle,
}) => {
  //   const avatarRef = React.useRef(null)
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ open }) => ({
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

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <IconButton sx={{ ml: 1 }} onClick={themeToggle} color="inherit">
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <div style={{ padding: 1, margin: 5 }}>
            <Box sx={{ display: 'flex' }}>
              <Tooltip title="Open settings">
                <IconButton
                  id="avatar-button" // Added a unique ID
                  onClick={(event) => handleOpenUserMenu(event)}
                  sx={{ p: 0 }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                anchorOrigin={{
                  vertical: 'bottom', // Change 'top' to 'bottom'
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top', // Change 'top' to 'top'
                  horizontal: 'right',
                }}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>
         
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
