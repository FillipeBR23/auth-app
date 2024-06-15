
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Box, Button } from '@mui/material';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/protected" component={ProtectedComponent} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

function ProtectedComponent() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Container>
      <Box my={4}>
        <h2>Protected Page</h2>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
}

export default App;
