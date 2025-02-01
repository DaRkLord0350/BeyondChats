'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { GoogleIcon, SitemarkIcon } from '../components/CustomIcons';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.05)',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

export default function SignUp() {
  const { registerWithEmail, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const validateInputs = (name, email, password) => {
    let tempErrors = { name: '', email: '', password: '' };
    let isValid = true;

    if (!name) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Enter a valid email';
      isValid = false;
    }
    if (!password || password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    if (!validateInputs(name, email, password)) return;

    try {
      await registerWithEmail(email, password);
      router.push('/home'); // Redirect to home page
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <>
      <CssBaseline />
      <SignUpContainer direction="column" justifyContent="center">
        <Card variant="outlined">
          <SitemarkIcon />
          <Typography component="h1" variant="h4">Sign up</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField name="name" fullWidth id="name" error={!!errors.name} helperText={errors.name} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField name="email" fullWidth id="email" error={!!errors.email} helperText={errors.email} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField name="password" fullWidth id="password" type="password" error={!!errors.password} helperText={errors.password} />
            </FormControl>
            <FormControlLabel control={<Checkbox />} label="I want to receive updates via email." />
            <Button type="submit" fullWidth variant="contained">Sign up</Button>
          </Box>
          <Divider>
            <Typography>or</Typography>
          </Divider>
          <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} onClick={loginWithGoogle}>Sign up with Google</Button>
          <Typography>Already have an account? <Link href="/auth">Sign in</Link></Typography>
        </Card>
      </SignUpContainer>
    </>
  );
}
