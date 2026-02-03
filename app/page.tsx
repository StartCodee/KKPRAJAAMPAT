"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const timelineData = [
    {
      year: "55.000",
      subYear: "tahun lalu",
      title: "Jejak Awal Manusia Modern",
      description: "Manusia modern (Homo sapiens) diperkirakan telah mengunjungi Raja Ampat sekitar 55.000 tahun lalu, berdasarkan temuan arkeologis di Gua Mololo, Pulau Waigeo."
    },
    {
      year: "Abad",
      subYear: "ke-15",
      title: "Pengaruh Kesultanan Tidore",
      description: "Migrasi dan interaksi pesisir berlanjut hingga abad ke-15, ketika Kesultanan Tidore memperluas pengaruhnya di Raja Ampat dan pesisir Papua."
    },
    {
      year: "1860",
      title: "Ekspedisi Wallacea",
      description: "Raja Ampat menjadi bagian dari ekspedisi ilmiah Alfred Russel Wallace pada tahun 1860. Kunjungan ini menempatkan Raja Ampat dalam peta ilmiah dunia."
    },
    {
      year: "1869",
      title: "The Malay Archipelago",
      description: "Hasil ekspedisi Wallace diterbitkan dalam buku The Malay Archipelago, yang mengonfirmasi kekayaan hayati Raja Ampat sebagai pusat studi evolusi."
    },
    {
      year: "Era Modern",
      title: "Warisan Wallacea",
      description: "Untuk memperingati ekspedisi Wallacea, mitra pembangunan membangun ulang gubuk di lokasi yang diyakini pernah disinggahi Wallace di sekitar Kampung Pulau."
    }
  ];
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Foto 4-1 oleh Nikka Gunadharma.jpg')" }}
    >
      {/* Hero Section (Transparan, hanya konten) */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay gelap untuk keterbacaan */}
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            Tentang
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mt-2 font-light italic"
          >
            Sejarah
          </motion.p>
        </div>
      </section>

      {/* Timeline Section dengan background putih 10% */}
      <section className="bg-white/10 py-20 px-6 md:px-20 backdrop-blur-sm">
        {/* Card Biru dengan opacity 80% seperti kode Anda */}
        <section className="bg-[#004267]/80 py-20 px-6 md:px-20 rounded-3xl relative overflow-hidden shadow-2xl">

          <div className="max-w-5xl mx-auto relative">
            {/* ANIMASI GARIS TENGAH */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="absolute left-[40%] md:left-[50%] top-0 bottom-0 w-1 bg-white/30 -translate-x-1/2"
            />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex mb-20 last:mb-0 relative z-10"
              >
                {/* Kolom Kiri: Tahun */}
                <div className="w-[40%] md:w-[50%] pr-8 md:pr-16 text-right flex flex-col justify-center">
                  <h2 className="text-white text-4xl md:text-6xl font-bold leading-none">
                    {item.year}
                  </h2>
                  {item.subYear && (
                    <p className="text-white text-xl md:text-2xl mt-2">{item.subYear}</p>
                  )}
                </div>

                {/* ANIMASI TITIK PUTIH */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="absolute left-[40%] md:left-[50%] w-4 h-4 bg-white rounded-full -translate-x-1/2 mt-4 shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                />

                {/* Kolom Kanan: Konten */}
                <div className="w-[60%] md:w-[50%] pl-8 md:pl-16">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
