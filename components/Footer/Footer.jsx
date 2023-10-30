import Box from '@mui/material/Box'
const Footer = () => {
  
  return (
    <footer style={{ padding: 1, borderTop: '1px solid #ccc' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p style={{ }}>@Copyright Pratik Upreti</p>
      </Box>
    </footer>
  )
}

export default Footer
