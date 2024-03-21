import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';

const DetailsPage = () => {

    return (
        <React.Fragment>
            <Divider />
            <Box sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: {
                    xs: "url('./assets/studio1_vertical.webp')",
                    md: "url('./assets/studio1_horizontal.webp')"
                },
                backgroundSize: "cover",
                opacity: 0.5,
            }} />
            <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }} >
                <Container
                    sx={{
                        width: { xs: "90%", md: "55%", lg: "40%" },
                        minWidth: "300px",
                        maxWidth: "600px",
                        paddingBlock: "100px",
                        paddingInline: { xs: "10px", md: "100px" },
                        borderRadius: "9px",
                        backgroundColor: "white",
                        opacity: 0.85
                    }}>
                    <Typography variant='h6'>
                        ciao123
                    </Typography>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default DetailsPage;