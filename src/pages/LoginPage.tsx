import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await login(email, password);
            navigate('/');
        } catch (error: any) {
            setError(error.message || 'An error occurred during login');
        }
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                />
                <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                    sx={{ marginTop: '1rem' }}
                >
                    Login
                </Button>
                {error && (
                    <Typography variant="body2" color="error" sx={{ marginTop: '1rem' }}>
                        {error}
                    </Typography>
                )}
                <Box sx={{ marginTop: '2rem' }}>
                    <Typography variant="body2">
                        Don't have an account?{' '}
                        <Link to="/register" style={{ color: '#1976d2', textDecoration: 'none' }}>
                            Register
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;
