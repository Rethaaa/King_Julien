import React from "react";
import { Container, Typography, Box, Grid, Paper, Avatar, List, ListItem, ListItemText } from "@mui/material";

const MEMBERS = [
    { name: "Aretha Hartono", role: "X-1/5", img: "/assets/ret.png" },
    { name: "Gabriella Michelle Budojo", role: "X-1/16", img: "/assets/mich.png" },
    { name: "Maria Renata Gwynne Allena", role: "X-1/27", img: "/assets/gwyn.png" },
    { name: "Rafaella Gratia Juean Riyarso", role: "X-1/31", img: "/assets/ju.png" },
    { name: "Valika Arum Murtani", role: "X-1/36", img: "/assets/val.png" },
];

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* 1. Welcome */}
      <Box mb={6} textAlign="center">
        <Typography variant="h3" fontWeight={700} gutterBottom color="tertiary" >
          King Julien
        </Typography>
        <Typography variant="h6" color="secondary">
          Transmitting Ooh Ooh Aah Aah Energy!
        </Typography>
      </Box>

      {/* 2. Members Introduction */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Meet Our Team!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {MEMBERS.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 3. Background */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Latar Belakang
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <Typography sx={{ textIndent: 50 }}>
            Menurut data yang ditemukan, sekitar 50-60% sampah di Indonesia yang banyak dibuang adalah sampah limbah organik. Limbah organik merupakan jenis limbah yang dihasilkan oleh sisa makhluk hidup yang dapat diuraikan dengan mudah oleh mikroorganisme, seperti bakteri atau jamur. Walaupun limbah dapat diurai dengan mudah, masih banyak limbah organik yang ditemukan dari hasil kegiatan rumah tangga. Masyarakat masih membuang limbah organik tanpa pengelolaan yang benar. Hal ini dapat mengganggu keseimbangan ekosistem dan mencemari lingkungan. Oleh karena itu, diperlukan kesadaran dari diri masing-masing mengenai pengolahan limbah organik.
          </Typography>
          <Typography sx={{ textIndent: 50 }}>
            Limbah organik yang tidak dikelola dengan baik membawa banyak dampak negatif bagi lingkungan. Hal ini meningkatkan persentase jumlah orang yang terjangkit penyakit akibat bakteri, pencemaran lingkungan, dan bau yang ditimbulkan akibat limbah organik yang menumpuk. Pencegahan yang paling tepat untuk masalah ini adalah pemilahan sampah dan  pengolahan sisa makanan menjadi produk yang lebih bermanfaat seperti kertas dan sabun daur ulang. Kami sebagai generasi muda di tengah perkembangan pendidikan dan teknologi akan menerapkan cara pengolahan sampah yang baik agar lingkungan tetap sehat dan berkelanjutan di masa depan.
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
}
