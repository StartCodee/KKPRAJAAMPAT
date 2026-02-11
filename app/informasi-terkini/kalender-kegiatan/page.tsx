"use client";
import { motion } from "framer-motion";
import Navbar from "@/app/Component/Navbar";
import { Calendar, ArrowRight, Tag, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function KalenderKegiatan() {
  const agendaList = [
    {
      id: 1,
      title: "Penguatan Konservasi Laut dan Pariwisata Berkelanjutan",
      date: "21 Januari 2026",
      time: "08:00 - Selesai",
      location: "Kepulauan Fam dan Kri",
      category: "Konservasi",
      desc: "Pemberian bantuan homestay, peluncuran tambat labuh (mooring), serta pelepasliaran Hiu Zebra bersama Pemprov Papua Barat Daya.",
      image: "/images/informasi-terkini/berita/WhatsApp-Image-2026-02-02-at-11.39.20-2.jpeg"
    },
    {
      id: 2,
      title: "Monitoring Ekosistem Terumbu Karang Rutin",
      date: "15 Februari 2026",
      time: "09:00 - 15:00",
      location: "Kawasan Konservasi Perairan Kepulauan Ayau",
      category: "Monitoring",
      desc: "Kegiatan rutin pemantauan kondisi kesehatan karang dan biota asosiasi oleh tim teknis SUOP.",
      image: "/images/informasi-terkini/berita/WhatsApp-Image-2026-02-02-at-11.39.20-2.jpeg"
    },
    {
      id: 3,
      title: "Sosialisasi Standar Pelayanan Minimal (SPM) KKP",
      date: "02 Maret 2026",
      time: "10:00 - 13:00",
      location: "Waisai, Raja Ampat",
      category: "Edukasi",
      desc: "Pertemuan bersama masyarakat lokal mengenai tata laksana pelayanan dan hak-hak akses di wilayah konservasi.",
      image: "/images/informasi-terkini/berita/WhatsApp-Image-2026-02-02-at-11.39.20-2.jpeg"
    },
  ];

  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover font-sans"
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
            Kalender Kegiatan
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black/40 py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/80 rounded-[3rem] p-8 md:p-16 text-gray-200 shadow-2xl border border-white/10">
          
          {/* Header Konten */}
          <div className="mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Agenda Mendatang</h2>
            <p className="text-gray-400 max-w-2xl font-light">
              Daftar kegiatan, sosialisasi, dan aksi lapangan yang dilaksanakan oleh BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat.
            </p>
          </div>

          {/* List Agenda */}
          <div className="space-y-8">
            {agendaList.map((agenda, idx) => (
              <motion.div
                key={agenda.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col lg:flex-row bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all duration-500"
              >
                {/* Visual / Gambar Agenda */}
                <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden relative">
                  <img 
                    src={agenda.image} 
                    alt={agenda.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      {agenda.category}
                    </span>
                  </div>
                </div>

                {/* Detail Agenda */}
                <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex flex-wrap gap-6 text-xs text-blue-300 font-medium uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} /> {agenda.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} /> {agenda.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} /> {agenda.location}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-blue-400 transition-colors">
                    {agenda.title}
                  </h3>
                  
                  <p className="text-gray-400 font-light leading-relaxed max-w-3xl">
                    {agenda.desc}
                  </p>

                  <div className="pt-4">
                    <Link 
                      href={`/informasi-terkini/kalender-kegiatan/${agenda.id}`}
                      className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white border-b border-white/20 pb-2 hover:border-blue-400 hover:text-blue-400 transition-all"
                    >
                      Lihat Detail Agenda <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Archive Link */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 text-sm font-light italic">
              Ingin melihat arsip kegiatan tahun sebelumnya? 
              <Link href="/arsip" className="text-blue-400 ml-2 hover:underline not-italic font-bold uppercase tracking-widest text-[10px]">Klik di sini</Link>
            </p>
          </div>

        </div>
      </section>    
    </main>
  );
}