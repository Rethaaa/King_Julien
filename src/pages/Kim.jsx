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
                    Sabun dari Kulit Pisang dan Minyak Jelantah
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Box
                        component="img"
                        src="/assets/sabun.jpeg"
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
                         Pembuatan sabun dari limbah minyak jelantah dan kulit pisang didasari oleh reaksi utama yang disebut saponifikasi, yaitu reaksi antara lemak (trigliserida) dan basa yang menghasilkan sabun serta gliserol.  Dengan demikian, kulit pisang hanya bahan pendukung dalam proses ini untuk mengurangi limbah produksi karena tidak mengandung lemak dan basa tinggi.
                    </Typography>
                    <Typography sx={{ textIndent: 50, textAlign: "center", fontWeight: 600, p:2 }}>
                         Saponifikasi: Trigliserida + 3NaOH → Gliserol + 3 Garam Asam Lemak (Sabun)
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                         Untuk memanfaatkan kulit pisang, kami mengolahnya menjadi abu kulit pisang yang kaya kalium. Dilansir dari YouTube BALI ORGANIK TV, abu ini adalah hasil pembakaran limbah kulit pisang yang kaya akan kalium hingga dapat mencapai 50% tergantung jenis pisang. Abu ini bermanfaat untuk membuat sabun limbah karena mengandung basa meskipun lemah. Pembentukan basa dari abu kulit pisang terjadi melalui proses pembakaran dan pelarutan mineral yang terkandung di dalamnya. Kulit pisang secara alami mengandung berbagai mineral, terutama kalium (K), dalam bentuk senyawa organik. Ketika kulit pisang dibakar, senyawa organik seperti selulosa dan lignin akan terurai, sedangkan mineral anorganiknya tertinggal dalam bentuk abu. Salah satu komponen utama abu tersebut adalah kalium karbonat (K₂CO₃), yang bersifat basa.
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                         Ketika abu kulit pisang dicampurkan dengan air, kalium karbonat akan larut dan mengalami hidrolisis parsial, yaitu proses penguraian garam oleh air di mana hanya sebagian ion saja yang bereaksi dengan air sehingga menghasilkan larutan yang bersifat alkali (basa). Meskipun tidak sekuat natrium hidroksida (NaOH), larutan ini tetap dapat meningkatkan pH dan dapat digunakan sebagai basa dalam proses saponifikasi meskipun lebih lambat dan kurang optimal. Maka dari itu, penggunaan NaOH tetap penting untuk memastikan reaksi berlangsung sempurna. Perbandingan jumlah antara minyak dan NaOH juga harus diperhatikan supaya tidak terjadi kelebihan basa atau lemak sehingga sabun yang dihasilkan tidak terlalu keras maupun lunak.
                    </Typography>
                    <Typography sx={{ textIndent: 50, textAlign: "center", fontWeight: 600, p:2 }}>
                         Pembentukan basa dari abu kulit pisang: K2CO3 + H2O → Larutan Alkali
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                         Sabun yang terbentuk memiliki struktur molekul, yaitu kepala hidrofilik yang berinteraksi dengan air dan ekor hidrofobik yang berinteraksi dengan minyak serta kotoran sehingga dapat membersihkan sesuatu dari kotoran melalui pembentukan misel. Kulit pisang juga dapat menjadi adsorben dan eksfoliator alami. Namun, pemanfaatannya sebagai sabun memiliki kelemahan karena konsentrasi basa/nilai pH yang tidak pasti sehingga berisiko mempengaruhi kualitas dan keamanan sabun. Sabun yang terlalu basa dapat menyebabkan iritasi pada kulit sehingga diperlukan proses curing, yaitu proses pendiaman sabun selama 2-4 minggu supaya reaksi saponifikasi berlangsung sempurna, kadar basa menurun, dan pH menjadi lebih stabil serta aman digunakan. Proses ini sangat penting untuk memastikan sabun tidak mengandung sisa NaOH yang berbahaya bagi kulit. Meskipun demikian, pemakaian tetapi dianjurkan hanya untuk mencuci piring dan baju.
                    </Typography>
                </Typography>
            </Box>
            <Box mb={6}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Dompet Plastik dari Kemasan Plastik
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Box
                        component="img"
                        src="/assets/dompet.jpeg"
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
                        Prosedur ini pada dasarnya memanfaatkan sifat termoplastik dari plastik bekas untuk membentuk material baru tanpa menggunakan reaksi kimia utama. Plastik yang digunakan umumnya termasuk polimer seperti polietilena (PE) atau polipropilena (PP). Dalam kondisi normal, rantai polimer ini tersusun rapat, tetapi masih memiliki ruang gerak terbatas.
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Pada pemanasan plastik menggunakan setrika, terjadi proses pelelehan fisika. Ketika dipanaskan, gaya tarik antar rantai polimer (gaya van der Waals) melemah sehingga rantai-rantai tersebut dapat bergerak lebih bebas. Akibatnya, plastik menjadi lunak dan meleleh sebagian. Namun, tidak terjadi pemutusan rantai atau pembentukan zat baru, sehingga proses ini bukan reaksi kimia, melainkan perubahan fisika akibat energi panas.
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Saat dua lapisan plastik ditekan dalam keadaan panas, terjadi proses fusi (penyatuan termal). Rantai polimer dari kedua lapisan saling berinteraksi dan “terikat” (interdiffusion) di area kontak. Ketika didinginkan, rantai-rantai tersebut kembali mengeras dalam posisi baru, sehingga kedua lapisan menyatu menjadi satu lembaran yang lebih tebal. Proses ini menjelaskan mengapa pengulangan pemanasan dapat meningkatkan ketebalan dan kekuatan material.
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Dengan demikian, konsep kimia utama dalam prosedur ini adalah perubahan sifat polimer akibat panas (termoplastisitas) dan penyatuan melalui fusi rantai polimer, bukan reaksi kimia yang membentuk zat baru. Prosedur ini menunjukkan pemanfaatan prinsip struktur dan gaya antarmolekul dalam polimer untuk mendaur ulang plastik menjadi produk yang lebih berfungsi.
                    </Typography>
                </Typography>
            </Box>
            <Box mb={6} class="kapur">
                <Typography variant="h4" fontWeight={600} gutterBottom>
                    Kapur dari Cangkang Telur
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Box
                        component="img"
                        src="/assets/kapur.jpeg"
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
                        Prosedur sederhana pembuatan kapur ini melibatkan kombinasi antara proses fisika dan perubahan kimia terbatas. Bahan-bahan yang digunakan memiliki peran yang spesifik dan penting. Hasil akhir berupa kapur keras yang merupakan material komposit, yaitu gabungan antara zat organik (pati) dan anorganik (kalsium karbonat).
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Pada tahap awal, cangkang telur dihaluskan. Proses ini merupakan perubahan fisika yang bertujuan memperkecil ukuran partikel sehingga luas permukaan meningkat. Peningkatan luas permukaan ini berperan penting dalam proses pencampuran karena memungkinkan lebih banyak area kontak antara partikel kalsium karbonat dengan pati dari tepung. Maka dari itu, saat adonan diuleni, pati yang telah mengalami gelatinisasi dapat melapisi dan mengikat partikel-partikel tersebut secara lebih merata. Apabila ukuran partikel lebih kecil, kalsium karbonat dapat tercampur lebih merata dalam adonan dan menghasilkan struktur yang lebih homogen (menyatu). Pada tahap ini, tidak terjadi perubahan zat.
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Tahap berikutnya adalah mencampur bubuk kunyit dengan air panas. Air panas membantu proses pelarutan dan penyebaran kurkumin dalam kunyit. Proses ini termasuk perubahan fisika karena hanya melibatkan pelarutan tanpa membentuk zat baru. Kurkumin akan memberikan warna kuning pada produk akhir.
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Ketika campuran tersebut digabungkan dengan tepung terigu, terjadi proses penting yaitu gelatinisasi pati. Ketika pati menyerap air panas, pati mengembang dan berubah menjadi lebih kental dan lengket. Proses ini membuat pati berfungsi sebagai pengikat yang menyatukan partikel-partikel kalsium karbonat dalam campuran.
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Pada tahap berikutnya, menguleni adonan bertujuan untuk memastikan semua komponen tercampur secara merata dan membentuk struktur komposit yang stabil. Pada tahap ini, partikel kalsium karbonat terdistribusi dalam pati yang telah mengalami gelatinisasi. Proses ini bersifat fisika karena tidak melibatkan reaksi kimia baru, tetapi sangat berpengaruh pada kekuatan dan kepadatan kapur.
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Tahap terakhir yaitu pengeringan di bawah sinar matahari selama 1–2 hari. Pada tahap ini terjadi penguapan air dari dalam adonan sehingga struktur menjadi lebih padat dan keras. Selain itu, pati mengalami proses pengerasan (retrogradasi), yaitu pembentukan kembali struktur yang lebih kaku setelah kehilangan air. Proses ini menghasilkan kapur dengan tekstur keras dan padat.
                    </Typography>
                    <Typography sx={{ textIndent: 50 }}>
                        Prosedur ini menghasilkan kapur yang memiliki sifat keras karena kandungan kalsium karbonat yang tinggi. Namun, kapur juga cenderung rapuh karena tidak adanya ikatan kimia yang kuat antarpartikel. Ikatan yang terbentuk hanya berasal dari gaya fisika dengan bantuan pati sebagai perekat. Selain itu, hilangnya air selama pengeringan menyebabkan material kehilangan sifat elastis, sehingga mudah patah ketika diberi tekanan atau benturan.
                    </Typography>
                </Typography>
            </Box>
        </>
    );
}