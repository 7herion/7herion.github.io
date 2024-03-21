import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';

const HomePage = () => {

    return (
        <React.Fragment>
            <Divider />

            <Box sx={{
                paddingInline: { md: "100px" },
                paddingBlock: "50px",
            }}>
                <Container sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row"
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Box sx={{ width: { xs: "90%", md: "60%" }, }}>
                        <img src='./assets/modelx600.webp'
                            style={{
                                width: "100%",
                                minWidth: "300px",
                                maxWidth: "600px"
                            }} alt='' />
                    </Box>
                    <Box sx={{ width: { xs: "90%", md: "40%" }, }}>
                        <Typography sx={{
                            paddingBlock: { xs: "50px", md: "0px" },
                            paddingInline: "30px",
                            textAlign: "left"
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori
                        </Typography>
                    </Box>
                </Container>

                <Container sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column-reverse",
                        md: "row"
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                    // marginTop: { md: "-30px" }
                    paddingBlock: "10px",
                }}>
                    <Box sx={{ width: { xs: "90%", md: "40%" }, maxHeight: "350px" }}>
                        <Typography sx={{
                            paddingBlock: { xs: "50px", md: "0px" },
                            paddingInline: "30px",
                            textAlign: { xs: "left", md: "right" },
                            overflow: "hidden",
                            whiteSpace: "wrap"
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: { xs: "90%", md: "60%" },
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}>
                        <img src='./assets/detailsx600.webp'
                            style={{
                                width: "100%",
                                minWidth: "300px",
                                maxWidth: "600px"
                            }} alt='' />
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default HomePage;