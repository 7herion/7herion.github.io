import React from 'react';
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AnchorDrawer from '../menu/AnchorDrawer.component';

const Navbar = (props) => {

    return (
        <React.Fragment>
            <AppBar position="sticky" sx={{ boxShadow: "none" }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box sx={{ width: "40px" }}>
                        <AnchorDrawer navigate={props.navigate} />
                    </Box>
                    <Typography variant="h5">
                        {props.title}
                    </Typography>
                    <Box sx={{ width: "40px" }}>
                        {/* Serve solo a pareggiare */}
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar;