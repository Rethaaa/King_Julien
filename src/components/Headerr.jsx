import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


export default function Header() {
    return (
        <AppBar position="fixed" color="primary" elevation={1} sx={{width: "100vw"}}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="h6" fontWeight={700} sx={{ pl:5 }}>King Julien</Typography>
                <Stack direction="row" spacing={2} sx={{ pr:2 }}>
                    <Button component={RouterLink} to="/" color="inherit">Home</Button>
                    <Button component={RouterLink} to="/products" color="inherit">Products</Button>
                    <Button component={RouterLink} to="/inovasi" color="inherit">Inovasi</Button>
                    <Button component={RouterLink} to="/bio" color="inherit">Bio</Button>
                    <Button component={RouterLink} to="/kim" color="inherit">Kim</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}