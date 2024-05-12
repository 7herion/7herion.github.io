import { Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';

export const HISTORY_PAGE_TITLE = "COMPANY PROFILE";

const HistoryPage = () => {

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
                    xs: "url('./assets/studio2_vertical.webp')",
                    md: "url('./assets/studio2_horizontal.webp')"
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
                        width: { xs: "90%", lg: "60%" },
                        minWidth: "300px",
                        maxWidth: "600px",
                        height: "100%",
                        overflow: "scroll",
                        paddingTop: { xs: "100px", md: "120px" },
                        paddingBottom: { xs: "80px", md: "80px" },
                        paddingInline: { xs: "30px", md: "100px" },
                        // marginTop: "56px",
                        // borderRadius: "9px",
                        backgroundColor: "white",
                        opacity: 0.85,
                    }}>
                    {/* TODO: gestire text overflow */}
                    {/* <Typography variant='h6'>
                        Certificati
                    </Typography> */}
                    {/* <br /> */}
                    <Typography sx={{ textAlign: "justify" }}>
                        Il gruppo, giovane e dinamico è suddiviso tra reparto campionario, ufficio tecnico e produttivo con tutte le varie fasi di lavorazione. L'azienda è specializzata nella realizzazione di campionari, fornendo una vasta gamma di punti maglia e costruzione capi sia calati che tagliati.
                        <br /><br />
                        Le collezioni autunno/inverno e primavera/estate sono costantemente aggiornate durante la stagione con nuovi articoli e sviluppi speciali.
                        <br /><br />
                        La ricerca di materiali e di lavorazioni con attenzione al mercato Luxury e supporto, ed il continuo investimento del suo CEO, ha permesso la nascita di "FILO", working table di idee per il segmento alto della maglieria.
                        <br /><br />
                        Rispecchiando i tempi in cui viviamo, possiamo inoltre offrire un accurato servizio di personalizzazione del capo ad ogni livello (stampe, ricami, trattamenti di ogni genere) e a livello di etichettatura quali packaging di ogni modo e tipo, rispettando anche le richieste di certificazioni sia della materia prima che delle personalizzazioni stesse.
                        <br /><br />
                        La eco sostenibilità è parte integrante dell'intera Holding, compresa la acquisizione della certificazione SA8000 a chiusura del progetto.
                        <br /><br />
                        I nostri responsabili alla vendita unitamente ai tecnici di produzione e confezione, offrono un costante supporto agli uffici acquisti al fine di garantire lo sviluppo di disegni esclusivi e prodotti personalizzati.
                        <br /><br />
                        I nostri uffici e magazzini, per una superficie coperta di circa 2.300 mq sono situati a Prato nell'area industriale denominata Macrolotto 2, a brevissima distanza dal casello Prato Est dell'autostrada A11, a soli 15 minuti dall'aeroporto di Firenze e circa 50 minuti dall'aeroporto di Pisa.
                    </Typography>
                    {/* <Box >
                        <a href="./assets/cert-sa8000.pdf" target="_blank" rel="noopener noreferrer">SA8000 certificate</a>
                    </Box> */}
                </Container>

            </Box>

        </React.Fragment>
    )
}

export default HistoryPage;