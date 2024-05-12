import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';

export const DETAILS_PAGE_TITLE = "CONTATTI";

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
                // TODO: Background image da cambiare
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
                        STELLA SKY HOLDING srl
                    </Typography>
                    <Divider variant="middle"
                        sx={{
                            borderWidth: "1px",
                            borderColor: "red",
                            marginBottom: "20px",
                            marginInline: "50px",
                        }} />
                    <Typography>
                        Via Chemnitz, 154/9
                        <br />
                        59100 Prato PO Italy
                        {/* <br />
                        P.IVA - 1234567890 */}
                        <br />
                        Tel.: 0574 754043
                        <br />
                        Mail: stellaskyholding@outlook.it
                    </Typography>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default DetailsPage;