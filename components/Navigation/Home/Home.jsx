import MainContent from '../../MainContent/MainContent'
import { Grid, Box, Typography, Divider, Pagination } from '@mui/material'

const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      {/* Left Vertical Divider */}
      <Divider orientation="vertical" flexItem sx={{ mr: 2, ml: 2 }} />

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h2" gutterBottom align="center">
          Your Feed
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {/* Your Cards Here */}
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <MainContent />
            </Grid>
          ))}
        </Grid>

        <Divider orientation="horizontal" sx={{ width: '100%', my: 2 }} />

        <Pagination
          count={10}
          color="primary"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            marginBottom: 10,
          }}
        />
      </Box>

      {/* Right Vertical Divider */}
      <Divider orientation="vertical" flexItem sx={{ ml: 1 }} />
    </Box>
  )
}

export default Home
