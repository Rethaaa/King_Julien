import React from "react";
import { Container, Typography, Box, Grid, Paper, Avatar, List, ListItem, ListItemText } from "@mui/material";

const PROJECTS = [
{ id: "model", title: "Model Jakarta", description: "Miniatur perbandingan antara Kota Jakarta di masa kini dan harapan Kota Jakarta di masa depan yang bebas dari polusi." },
{ id: "indonesia-info", title: "Infografis Bahasa Indonesia", description: "Infografis yang menjelaskan harapan dan visi kami serta upaya yang akan dilakukan untuk mencapai Kota Jakarta yang bersih dan hijau." },
{ id: "math-info", title: "Infografis Matematika", description: "Infografis yang menjelaskan tentang tingkat pencemaran udara dan air di Jakarta selama tahun 2024." },
{ id: "website", title: "Website", description: "Website kami berisi produk steam, upaya yang akan dilakukan untuk mencapai Kota Jakarta yang bersih dan hijau, dan seluruh isi dokumen rencana proyek STEAM." },
];


export default function Projects() {
    return (
        <>
            <Box mb={6}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    SDGs 12
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Typography sx={{ textIndent: 50 }}>
                        Sustainable Development Goals (SDGs) 12 berbunyi “Konsumsi dan Produksi yang Bertanggung Jawab”, dengan tujuan memastikan pola konsumsi dan produksi yang berkelanjutan. Fokusnya mencakup efisiensi sumber daya, produksi ramah lingkungan, serta pengurangan limbah. Santa Ursula mengangkat tema ini dalam Bazaar Projek STEAM untuk membantu mempromosikan SDGs 12 agar masyarakat lebih memahami dan peka terhadap permasalahan produksi dan konsumsi yang sedang berlangsung.
                    </Typography>
                </Typography>
            </Box>
            <Box mb={6}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Packaging Zero Waste
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Typography sx={{ textIndent: 50 }}>
                        Konsep zero waste bertujuan untuk meminimalisir produksi sampah dengan memakai produk yang dapat dipakai berkali-kali atau bisa didaur ulang. Hal ini dilakukan untuk mengurangi sampah yang mempengaruhi lingkungan secara signifikan. Memakai produk minim limbah dan yang bisa dipakai berulang kali akan menciptakan ekosistem yang lebih baik untuk hidup berkelanjutan. Prinsip ini berakar dari upaya masyarakat menghadapi dampak buruk limbah. Respon cepat terhadap konsumsi berlebihan dan peningkatan limbah plastik ini sangat dibutuhkan. Tetapi tindakan nyata dari masyarakat sehingga dipopulerkan oleh organisasi besar seperti Zero Waste International Alliance. 
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Zero waste menerapkan prinsip 5R: Refuse (menolak), Reduce (Mengurangi), Reuse (Menggunakan Kembali), Recycle (Mendaur Ulang), dan Rot (Mengompos). Prinsip ini menyarankan kita untuk menolak produk tidak ramah lingkungan, mengurangi konsumsi, tidak memakai barang sekali pakai, mendaur ulang bahan organik dengan mengompos, hal-hal tersebut dapat mengurangi dampak negatif limbah terhadap lingkungan secara signifikan. 
                    </Typography>
                </Typography>
            </Box>
            <Box mb={6}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Pemilihan Packaging
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Typography sx={{ textIndent: 50 }}>
                        Kami memilih besek bambu karena kami mengetahui bahwa besek bambu dan daun pisang ramah lingkungan serta mudah terurai, sehingga tidak mencemari lingkungan seperti plastik. Berdasarkan siaran pers kementerian lingkungan hidup dan kehutanan nomor SR.123/HUMAS/KLH-BPLH/6/2025. Sekitar 10,8 juta ton atau hampir 20% dari total sampah nasional merupakan plastik. Timbulan sampah Indonesia pada tahun 2023 mencapai 56,63 juta ton. Namun, baru 39,01% (22,09 juta ton) yang dikelola secara layak. 
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Hal ini menjadi kesadaran kami bahwa Indonesia sudah tercemar dengan sampah, khususnya sampah plastik. Kami ingin berpartisipasi untuk pengurangan sampah plastik, sehingga kami menggunakan besek bambu dan daun pisang untuk kemasan. 
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Besek bambu berbahan dasar bambu dan daun pisang, tentunya tidak mengandung bahan kimia yang membahayakan. Kami khawatir akan mikroplastik pada kemasan jika kami memilih menggunakan plastik. Makanan yang kami berikan kemasan bambu tidak akan mengandung mikroplastik dan tentunya aman untuk digunakan oleh pelanggan.
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Kepentingan estetika menjadi salah satu syarat mengapa kami memilih besek bambu dan daun pisang sebagai kemasan produk kami. Saat kami melihat desain besek bambu di e-commerce, kami melihat bahwa besek bambu ini memiliki tampilan yang sederhana namun tetap unik. Menurut kami, motif anyaman besek bambu sangat tersusun. Serta, motif anyaman besek bambu menunjukkan nilai tradisional. Gagang besek bambu membuat kemasan mudah dibawa (val nanti ini di tanda panahin)
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Besek bambu dan daun pisang kuat dan aman untuk digunakan sebagai kemasan. Besek bambu bertahan selama kurang lebih 5-7 bulan, sedangkan daun pisang segar hanya bertahan selama 3 hari.
                    </Typography>
                </Typography>
            </Box>
            <Box mb={6}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Penjelasan Bahan
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                        Besek Bambu
                    </Typography>
                    <Box>
                        <Box
                            component="img"
                            src="/assets/pack-frenana.jpeg"
                            alt="Besek Bambu"
                            sx={{
                                width: 300,
                                height: 400,
                                objectFit: "cover",
                                display: "block",
                                mx: "auto",
                                p: 2,
                            }}
                        />
                        <Typography sx={{ textIndent: 50 }}>
                            Besek bambu adalah kemasan anyaman bambu yang berasal dari Jawa. Masyarakat Jawa seringkali menggunakan kemasan ini untuk wadah nasi gudeg dan beberapa hidangan yang lainnya. Kemasan ini berbahan dasar bambu apus. Pembuatan besek bambu ini harus menggunakan bambu yang tidak terlalu muda, namun juga tidak terlalu tua. Hal ini membuat bambu mudah untuk dianyam. Saat dianyam, bambu ini akan menciptakan rongga-rongga yang membantu udara keluar maupun masuk. Sehingga, makanan tidak mudah basi dan uap panas cepat keluar.  Cara pembuatan besek bambu ini adalah menyayat tipis bambu untuk menghasilkan potongan lidi, lalu bambu dianyam dengan pola-pola kepangan.
                        </Typography>
                    </Box>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                        Daun Pisang
                    </Typography>
                    <Box>
                        <Box
                            component="img"
                            src="/assets/pack-brenana.jpeg"
                            alt="Besek Bambu"
                            sx={{
                                width: 300,
                                height: 400,
                                objectFit: "cover",
                                display: "block",
                                mx: "auto",
                                p: 2,
                            }}
                        />
                        <Typography sx={{ textIndent: 50 }}>
                            Daun pisang adalah bahan alami yang berasal dari tumbuhan pisang. Daun pisang memiliki karakteristik daun lebar, panjang, dan berlapis lilin. Daun pisang mengandung tanin dan antioksidan membantu menjaga makanan tidak cepat basi. Tentunya, daun pisang ramah lingkungan dan 100% biodegradable.
                        </Typography>
                    </Box>
                </Typography>
            </Box>
            <Box mb={6}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Cara Daur Ulang
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Typography sx={{ textIndent: 50 }}>
                        Besek bambu dapat di daur ulang menjadi beberapa hal seperti tempat penyimpanan, pot tanaman, tempat hampers, kreativitas, maupun menjadi kompos. Besek bambu dapat dipakai berulang kali dikarenakan kemasan ini dapat dicuci. Bahkan, jika disimpan terlalu lama, besek bambu akan layu sehingga bisa diurai dan menjadi kompos. 
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Daun pisang dapat di daur ulang menjadi pupuk kompos organik, pakan ternak/ikan, kerajinan tangan seperti anyaman, dan daun pisang dapat diolah menjadi biomaterial ramah lingkungan pengganti plastik.
                    </Typography>
                </Typography>
            </Box>
        </>
    );
}