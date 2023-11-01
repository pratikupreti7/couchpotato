import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
const Footer = () => {
  return (
    <footer style={{ padding: 1 }}>
      <Divider orientation="horizontal" sx={{ width: '100%', my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p style={{}}>@Copyright Pratik Upreti</p>
      </Box>
    </footer>
  )
}

export default Footer
