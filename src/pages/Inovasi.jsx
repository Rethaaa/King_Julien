import React from "react";
import { Grid, Paper, Typography, Button, Stack, List, ListItem, Box, AppBar, Toolbar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const PROJECTS = [
{ id: "sabun", ref: "/kim", title: "Sabun dari Kulit Pisang dan Minyak Jelantah", description: "Sabun dari kulit pisang dan minyak jelantah ini inovasi ramah lingkungan yang memanfaatkan limbah menjadi produk serbaguna, karena dapat digunakan untuk mencuci piring dan pakaian sekaligus, serta membantu mengurangi pencemaran lingkungan. " },
{ id: "dompet", ref: "/kim", title: "Dompet Plastik dari Kemasan Plastik", description: "Dompet dari kemasan plastik ini merupakan inovasi dikarenakan mampu untuk mengubah limbah menjadi hal yang berguna. Inovasi ini tidak hanya mengurangi sampah plastik yang sulit terurai di lingkungan, namun juga memberikan manfaatnya sendiri. Dompet ini memiliki desain yang unik karena mengikuti motif kemasan plastik. Proses pembuatan dompet dari kemasan plastik ini juga sangat mudah dan ramah lingkungan. " },
{ id: "kapur", ref: "/kim", title: "Kapur dari Cangkang Telur", description: "Kapur ini inovatif karena sangat mudah dibuat dan aman untuk digunakan oleh anak-anak. Semua bahannya organik, alami, dan mudah diperoleh. Limbah yang diolah juga merupakan limbah yang biasa dihasilkan oleh rumah tangga." },
];
const LIMBAH = [
    { name: "Dari cangkang telur terurai sebanyak 40 dari 40" },
    { name: "Dari kemasan plastik terurai sebanyak 5 dari 5" },
    { name: "Dari minyak jelantah terurai sebanyak 1 botol dari 1 botol (1 botol = 1L)" },
    { name: "Dari kulit pisang terurai sebanyak 40 dari 40" },
    { name: "Dari baking paper 2 (30x30) yang tidak terurai" },
];

export default function Projects() {
    return (
        <>
            <Box mb={6}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Pengolahan Limbah
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Typography sx={{ textIndent: 50 }}>
                        Kami menyimpulkan bahwa persentase limbah yang terolah adalah sebesar 98% karena hampir seluruh limbah yang terproduksi telah berhasil diurai dan didaur ulang. Satu-satunya limbah yang tidak terolah berasal dari sisa baking paper dari proses pembuatan Brenana yang kami gunakan berkali-kali (reuse) untuk meminimalisir limbah.  
                    </Typography>
                    <List dense variant="body1">
                        <Typography variant="body1" color="text.secondary">
                            
                            {LIMBAH.map((m) => (
                                <ListItem
                                key={m.name} 
                                sx={{ py: 0 }}>
                                    {m.name}
                                </ListItem>
                            ))}
                        </Typography>
                    </List>
                </Typography>
            </Box>
            <Typography variant="h4" fontWeight={600} gutterBottom>Inovasi</Typography>
            <Grid container spacing={2}>
                {PROJECTS.map((p) => (
                    <Grid item xs={12} md={6} key={p.id} sx={{ width: "100%" }}>
                        <Paper variant="outlined" sx={{ p: 3 }}>
                            <Typography variant="h6">{p.title}</Typography>
                            <Typography variant="body1" color="text.secondary" mb={2}>{p.description}</Typography>
                            <Stack direction="row" spacing={1}>
                                <Button component={RouterLink} to={p.ref} variant="outlined" size="small" color="tertiary">More Info</Button>
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}