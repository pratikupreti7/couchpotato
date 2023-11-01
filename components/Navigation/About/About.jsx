import { Box, Typography, Divider } from '@mui/material'
import couch from '../../../src/assets/potato.png'
const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        px: 3, // Padding to prevent content from sticking to the dividers
      }}
    >
      {/* Left Vertical Divider */}
      <Divider orientation="vertical" flexItem sx={{ mr: 3 }} />

      {/* Main Content */}
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <img
          style={{ width: 96, height: 96 }}
          src={couch}
          alt="couch"
          className="couch"
        />
        <Typography variant="h2" gutterBottom>
          Welcome to Couch Potato!
        </Typography>
        <Typography variant="h5">
          Explore the amazing features and functionalities we have to offer.
          Navigate using the side panel to explore different sections of the
          application.
        </Typography>
      </Box>

      {/* Right Vertical Divider */}
      <Divider orientation="vertical" flexItem />
    </Box>
  )
}

export default About
