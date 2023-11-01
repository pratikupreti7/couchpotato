import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
} from '@mui/material'
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link component={RouterLink} to="/home" variant="body2">
        Couch Potato
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleChange = (e, index) => {
    let value = e.target.value

    if (/[^0-9]/.test(value)) {
      return
    }

    otp[index] = value

    if (index < otp.length - 1 && value !== '') {
      document.getElementById(`otp-input-${index + 1}`).focus()
    }

    setOtp([...otp])
  }

  const handleSubmit = () => {
    const otpCode = otp.join('')
    console.log('Submitted OTP:', otpCode)
    // You can add further actions such as verifying the OTP
  }
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus()
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 3,
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          OTP Verification
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          paragraph
        >
          Enter the 6-digit code sent to your email pra**@gmail.com
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {Array(6)
            .fill()
            .map((_, index) => (
              <Grid item key={index}>
                <TextField
                  id={`otp-input-${index}`}
                  variant="outlined"
                  type="text"
                  inputProps={{ maxLength: 1 }}
                  value={otp[index]}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  sx={{
                    width: '3rem',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                  }}
                />
              </Grid>
            ))}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 3, width: '100%' }}
        >
          Verify
        </Button>
      </Box>
      <Copyright />
    </Container>
  )
}
