import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "800", fontStyle: "italic" }}>
                        Vision  World
                    </Typography>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/home">
                                    <Button color="inherit">Home</Button>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/dashboard">
                                    <Button color="inherit">Dash-Board</Button>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/explore">
                                    <Button color="inherit">Explore</Button>
                                </NavLink>
                                <Button style={{ textDecoration: 'none', color: 'black' }} onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/register">
                                    <Button color="inherit">Register</Button>
                                </NavLink>
                            </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;