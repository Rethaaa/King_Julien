import React from "react";
import { Grid, Box, Typography, List, ListItem, Paper } from "@mui/material";


const MEMBERS = [
    { name: "Aretha Hartono/5" },
    { name: "Gabriella Michelle Budojo/16" },
    { name: "Maria Renata Gwynne Allena/27" },
    { name: "Rafaella Gratia Juean Riyarso/31" },
    { name: "Valika Arum Murtani/36" },
];


export default function Footer() {
    return (
        <Paper square sx={{ mt: 4, p: 3, pl:7, pr:10, borderTop: 1, borderColor: 'divider', backgroundColor:"quaternary.main" }}>
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight={600} color="secondary">About King Julien</Typography>
                    <Typography variant="body2" sx={{ width: 500 }}>
                        King Julien merupakan kelompok STEAM X-1/Kelompok 4 yang beranggotakan Aretha/5, Michelle/16, Gwynne/27, Juean/31, dan Valika/36. Kami memilih tema monyet, khususnya Julius dari Paul Frank, karena ingin menghadirkan maskot bertema monyet serta produk bernuansa pisang. Julius dari Paul Frank dikenal sebagai salah satu karakter monyet paling ikonik dalam dunia fashion. Kami berharap maskot kami, King Julien, dapat menarik perhatian dan dikenal luas seperti Julius.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" fontWeight={600} color="secondary">Members</Typography>
                    <List dense variant="body2">
                        <Typography variant="body2">
                            {MEMBERS.map((m) => (<ListItem key={m.name} sx={{ py: 0 }}>{m.name}</ListItem>))}
                        </Typography>
                    </List>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" fontWeight={600} color="secondary">Feedback!</Typography>
                    <Box
                        component="img"
                        src="/assets/qr.png"
                        alt="QR Code"
                        sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 2,
                        objectFit: "cover",
                        display: "block",
                        mx: "auto",
                        }}
                    />
                    <Typography variant="caption" color="secondary">Let us know what you think!</Typography>
                </Grid>
            </Grid>
            <Typography variant="caption" display="block" mt={2} color="tertiary">
                © {new Date().getFullYear()} King Julien
            </Typography>
        </Paper>
    );
}