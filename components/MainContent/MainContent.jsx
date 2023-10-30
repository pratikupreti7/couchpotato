import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

const MainContent = () => {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
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
  )
}

export default MainContent
