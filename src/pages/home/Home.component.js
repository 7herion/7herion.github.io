import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';

export const HOME_PAGE_TITLE = "STELLA SKY HOLDING";

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
                        <Typography variant="h6"
                            sx={{
                                paddingTop: { xs: "50px", md: "0px" },
                                paddingInline: "30px",
                                textAlign: "left"
                            }}>Fondata nel 2019...</Typography>
                        <Divider
                            sx={{
                                borderWidth: "1px",
                                borderColor: "red",
                                marginInline: "30px",
                                marginBottom: '20px',
                            }} />

                        <Typography sx={{
                            paddingBottom: { xs: "50px", md: "0px" },
                            paddingInline: "30px",
                            textAlign: "justify"
                        }}>
                            Fondata nel 2019 e specializzata nella produzione e nella fornitura di maglieria, Stella Sky Holding ha avuto una rapida e costante crescita ed è attualmente fornitrice di marchi nazionali e internazionali, arrivando ad una produzione annuale di circa cinquecento mila capi.
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
                        <Typography variant="h6"
                            sx={{
                                paddingTop: { xs: "50px", md: "0px" },
                                paddingInline: "30px",
                                textAlign: "left"
                            }}>La Holding nasce...</Typography>
                        <Divider
                            sx={{
                                borderWidth: "1px",
                                borderColor: "red",
                                marginInline: "30px",
                                marginBottom: '20px',
                            }} />
                        <Typography sx={{
                            paddingBottom: { xs: "50px", md: "0px" },
                            paddingInline: "30px",
                            textAlign: 'justify',
                            // overflow: "hidden",
                            // whiteSpace: "wrap"
                        }}>
                            La Holding nasce dall'esperienza del suo CEO, Sig. ChengJun Jiang che, arrivato in Italia nel 2004, ha poi creato diverse attività sempre nell'ambito dell'abbigliamento, unendo magistralmente inventiva cinese con maestranza e management italiano.
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