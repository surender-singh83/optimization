import './App.css';
import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Login from './component/Login';
import { Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Dashboard } from './component/Dashboard';
import CustomRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/publicRoute';

const Login = React.lazy(()=> import('./component/Login'));
const Dashboard = React.lazy(()=> import('./component/Dashboard'))
const theme = createTheme();
function App() {
  const isLoggedin = localStorage.getItem('token');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <Box
            className="my2"
            sx={{
              my: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            {isLoggedin ? (
              <Button variant="contained" onClick={logout} sx={{
                minWidth: 100
              }}>
                Logout
              </Button>
            ) : (
              <Link to="/">Login</Link>
            )}
          </Box>
        </header>
        <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<CustomRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route exact path="/" element={<Login />} />
          </Route>
        </Routes>
        </React.Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
