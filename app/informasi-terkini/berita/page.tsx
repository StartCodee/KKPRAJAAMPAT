"use client";
import { motion } from "framer-motion";
import Navbar from "@/app/Component/Navbar";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

export default function Berita() {
  const beritaList = [
    {
      id: 1,
      title: "BLUD UPTD KKP Raja Ampat dan Pemprov Papua Barat Daya Perkuat Konservasi Laut dan Pariwisata Berkelanjutan",
      date: "23 Januari 2026",
      category: "Category",
      excerpt: "Sebagai wujud komitmen bersama dalam menjaga kelestarian ekosistem laut, memperkuat pariwisata berkelanjutan, serta meningkatkan kesejahteraan masyarakat di kawasan konservasi perairan, BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat bersama dengan Pemerintah Provinsi Papua Barat Daya melaksanakan serangkaian kegiatan pada 21 Januari 2026. Kegiatan ini meliputi pemberian bantuan kepada beberapa pengelola homestay dan yayasan pendidikan di kawasan konservasi perairan, sekolah, dan kampung, peluncuran tambat labuh (mooring), serta pelepasliaran Hiu Zebra di kawasan konservasi perairan Kepulauan Fam dan Kri.",
      image: "/images/informasi-terkini/berita/WhatsApp-Image-2026-02-02-at-11.39.20-2.jpeg"
    },
    {
      id: 2,
      title: "BLUD UPTD KKP Raja Ampat dan Pemprov Papua Barat Daya Perkuat Konservasi Laut dan Pariwisata Berkelanjutan",
      date: "23 Januari 2026",
      category: "Category",
      excerpt: "Sebagai wujud komitmen bersama dalam menjaga kelestarian ekosistem laut, memperkuat pariwisata berkelanjutan, serta meningkatkan kesejahteraan masyarakat di kawasan konservasi perairan, BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat bersama dengan Pemerintah Provinsi Papua Barat Daya melaksanakan serangkaian kegiatan pada 21 Januari 2026. Kegiatan ini meliputi pemberian bantuan kepada beberapa pengelola homestay dan yayasan pendidikan di kawasan konservasi perairan, sekolah, dan kampung, peluncuran tambat labuh (mooring), serta pelepasliaran Hiu Zebra di kawasan konservasi perairan Kepulauan Fam dan Kri.",
      image: "/images/informasi-terkini/berita/WhatsApp-Image-2026-02-02-at-11.39.20-2.jpeg"
    },
    {
      id: 3,
      title: "BLUD UPTD KKP Raja Ampat dan Pemprov Papua Barat Daya Perkuat Konservasi Laut dan Pariwisata Berkelanjutan",
      date: "23 Januari 2026",
      category: "Category",
      excerpt: "Sebagai wujud komitmen bersama dalam menjaga kelestarian ekosistem laut, memperkuat pariwisata berkelanjutan, serta meningkatkan kesejahteraan masyarakat di kawasan konservasi perairan, BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat bersama dengan Pemerintah Provinsi Papua Barat Daya melaksanakan serangkaian kegiatan pada 21 Januari 2026. Kegiatan ini meliputi pemberian bantuan kepada beberapa pengelola homestay dan yayasan pendidikan di kawasan konservasi perairan, sekolah, dan kampung, peluncuran tambat labuh (mooring), serta pelepasliaran Hiu Zebra di kawasan konservasi perairan Kepulauan Fam dan Kri.",
      image: "/images/informasi-terkini/berita/WhatsApp-Image-2026-02-02-at-11.39.20-2.jpeg"
    },
  ];

  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/informasi-terkini/berita/Foto 06 oleh Rens Lewerissa.JPG')" }}
    >
      <Navbar color="#004267" />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-gray-200">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            Informasi Terkini
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mt-2 font-light italic"
          >
            Berita dari Lapangan
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black/40 py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/80 rounded-[3rem] p-8 md:p-16 text-gray-200 shadow-2xl border border-white/10">
          
          {/* Header Konten */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">Berita Terbaru</h2>
              <p className="text-gray-400 font-light">Pantau terus perkembangan pengelolaan dan pelestarian di Kepulauan Raja Ampat.</p>
            </div>
            {/* <div className="flex items-center gap-4">
               <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-blue-400">Filter: Terkini</span>
            </div> */}
          </div>

          {/* Grid Berita */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {beritaList.map((berita, idx) => (
              <motion.article
                key={berita.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                {/* Thumbnail Berita */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={berita.image} 
                    alt={berita.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="flex items-center gap-2 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                      <Tag size={12} /> {berita.category}
                    </span>
                  </div>
                </div>

                {/* Konten Berita */}
                <div className="p-8 space-y-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <Calendar size={14} />
                    {berita.date}
                  </div>
                  <h3 className="text-xl font-bold leading-snug group-hover:text-blue-400 transition-colors">
                    {berita.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-3">
                    {berita.excerpt}
                  </p>
                  
                  <div className="pt-6 mt-auto">
                    <Link 
                      href={`/informasi-terkini/berita/${berita.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:gap-4 transition-all"
                    >
                      Baca Selengkapnya <ArrowRight size={16} className="text-blue-400" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-20 flex justify-center">
             <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#004267] transition-all">
               Tampilkan Lebih Banyak
             </button>
          </div>

        </div>
      </section>

      {/* Footer Quote */}
      <footer className="py-20 text-center opacity-30">
         <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-white">
           Menjaga Warisan Dunia • Kepulauan Raja Ampat
         </p>
      </footer>
    </main>
  );
}