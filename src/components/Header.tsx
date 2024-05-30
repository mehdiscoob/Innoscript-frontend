import React from 'react';
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { logout } from '../services/authService';
import {Newspaper} from "@mui/icons-material";

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    const userName = localStorage.getItem('user_name');
    const navigate = useNavigate();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout().then(() => {
            navigate('/');
        });
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2',mb:2 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <Newspaper sx={{mr:1}}/>
                        <Typography variant="h6" component="div">
                            My Articles
                        </Typography>
                    </Link>
                </Box>
                <Box component="nav" sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Link to="/articles" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                    {isLoggedIn ? (
                        <>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to="/personalized-feed" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        Personalized Feed
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/preference-from" style={{ color: 'inherit', textDecoration: 'none' }}>
                                       Update Feed
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Typography>{userName}</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
                            <Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>Register</Link>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
