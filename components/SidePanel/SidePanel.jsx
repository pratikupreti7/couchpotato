import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import MuiDrawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'
import React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import InfoIcon from '@mui/icons-material/Info'
import ContactsIcon from '@mui/icons-material/Contacts'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// ... (You can import more icons as necessary)
import { Link } from 'react-router-dom'
const SidePanel = ({
  drawerWidth,
  theme,
  open,
  openedMixin,
  closedMixin,
  DrawerHeader,
  handleDrawerClose,
}) => {
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(() => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }))

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem key="Profile" disablePadding>
          <ListItemButton
            onClick={(event) => {
              if (open) handleOpenUserMenu(event)
            }}
          >
            <ListItemIcon style={{ fontSize: 30 }}>
              {!open ? (
                <Tooltip title={'Profile'} arrow>
                  <AccountCircleIcon
                    style={{ fontSize: 28 }} // Adjust the icon size here
                    onClick={(event) => handleOpenUserMenu(event)}
                  />
                </Tooltip>
              ) : (
                <AccountCircleIcon style={{ fontSize: 28 }} />
              )}
            </ListItemIcon>

            {open && <ListItemText primary="User Name" />}
          </ListItemButton>

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                {setting}
              </MenuItem>
            ))}
          </Menu>
        </ListItem>

        {[
          { text: 'Home', icon: <HomeIcon />, path: '/home' },
          { text: 'About Us', icon: <InfoIcon />, path: '/aboutus' },
          { text: 'Contacts', icon: <ContactsIcon />, path: '/contactus' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon style={{ fontSize: 30 }}>
                {!open ? (
                  <Tooltip title={item.text} arrow>
                    {item.icon}
                  </Tooltip>
                ) : (
                  item.icon
                )}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Drawer>
  )
}

export default SidePanel
