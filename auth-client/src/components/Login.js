
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://auth-api-zyji.onrender.com/login', { username, password });
      localStorage.setItem('token', response.data.token);
      history.push('/protected');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4">ENTRAR</Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
