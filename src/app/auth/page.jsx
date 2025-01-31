'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import { useRouter } from 'next/navigation';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Google from '../components/GoogleButton';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from '../components/ForgotPassword';




const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn() {
  const router = useRouter();
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
      router.push('/home'); 
      // if (!validateInputs()) return; // Prevent login if validation fails
    
      // try {
      //   const response = await fetch('/api/auth/login', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ email, password }),
      //   });
    
      //   const data = await response.json();
    
      //   if (response.ok) {
      //     console.log('Login successful:', data);
      //     router.push('/home'); // Redirect after successful login
      //   } else {
      //     setPasswordError(true);
      //     setPasswordErrorMessage(data.message || 'Invalid email or password.');
      //   }
      // } catch (error) {
      //   console.error('Login error:', error);
      //   setPasswordError(true);
      //   setPasswordErrorMessage('Something went wrong. Please try again.');
      // }
    };
    
  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }
    router.push('/home');
    return isValid;
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        {/* <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} /> */}
        <Card variant="outlined">
          <Typography component="h1" variant="h4" sx={{ fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField error={emailError} helperText={emailErrorMessage} id="email" type="email" name="email" required fullWidth />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField error={passwordError} helperText={passwordErrorMessage} id="password" type="password" name="password" required fullWidth />
            </FormControl>
            <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
            {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
            <Button type="submit" fullWidth variant="contained" onClick={handleSubmit}>
              Sign in
            </Button>
            <Link component="button" onClick={handleClickOpen} variant="body2" sx={{ alignSelf: 'center' }}>
              Forgot your password?
            </Link>
          </Box>
          <Divider>or</Divider>
          <Google/>
          <Typography sx={{ textAlign: 'center' }}>Don't have an account? <Link href="/signup" variant="body2">Sign up</Link></Typography>
        </Card>
      </SignInContainer>
    </>
  );
}
