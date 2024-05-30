import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await register(email, password, name);
            navigate('/');
        } catch (error: any) {
            setError(error.message || 'An error occurred during registration');
        }
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Register
                </Typography>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                />
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
                    onClick={handleRegister}
                    sx={{ marginTop: '1rem' }}
                >
                    Register
                </Button>
                {error && (
                    <Typography variant="body2" color="error" sx={{ marginTop: '1rem' }}>
                        {error}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default RegisterPage;
