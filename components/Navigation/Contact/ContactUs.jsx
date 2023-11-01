import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Grid,
  Divider,
} from '@mui/material'

const ContactUs = () => {
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
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" gutterBottom align="center">
            Contact Us
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              p: 3,
              width: '100%',
              mb: 3,
            }}
          >
            <form noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Full Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>

          <Divider orientation="horizontal" sx={{ width: '100%', my: 2 }} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom align="center">
              Visit Us
            </Typography>
            <Typography variant="body1" align="center">
              123 Main Street, Anytown, USA
            </Typography>

            <Typography variant="h6" gutterBottom align="center" sx={{ mt: 3 }}>
              Email Us
            </Typography>
            <Typography variant="body1" align="center">
              support@example.com
            </Typography>

            <Typography variant="h6" gutterBottom align="center" sx={{ mt: 3 }}>
              Call Us
            </Typography>
            <Typography variant="body1" align="center">
              (123) 456-7890
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Vertical Divider */}
      <Divider orientation="vertical" flexItem sx={{ ml: 3 }} />
    </Box>
  )
}

export default ContactUs
