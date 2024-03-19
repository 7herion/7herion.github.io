import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export default function AnchorDrawer(props) {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setState(open);
    };

    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer(true)} >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor={"top"}
                open={state}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: "auto", paddingBlock: "100px",
                        paddingInline: { xs: "70px", md: "200px", lg: "400px" }
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem key={'HOME'} onClick={() => props.navigate('home')}>
                            <ListItemButton>
                                <ListItemText sx={{ textAlign: 'center' }} primary={'HOME'} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem key={'HISTORY'} onClick={() => props.navigate('history')}>
                            <ListItemButton>
                                <ListItemText sx={{ textAlign: 'center' }} primary={'HISTORY'} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem key={'CONTACT-INFO'} onClick={() => props.navigate('details')}>
                            <ListItemButton>
                                <ListItemText sx={{ textAlign: 'center' }} primary={'CONTACT INFO'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}