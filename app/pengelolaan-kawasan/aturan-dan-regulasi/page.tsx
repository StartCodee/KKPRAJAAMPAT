"use client";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/app/Component/Navbar";
import { FileText, Download, ChevronDown, Scale, Map, Landmark } from "lucide-react";
import { useState } from "react";

export default function AturanDanRegulasi() {
  const [activeTab, setActiveTab] = useState("Nasional");

  const categories = ["Nasional", "Kementerian", "Regional"];

  const legalData = {
    Nasional: [
      {
        no: "PP No. 60 Tahun 2007",
        title: "Konservasi Sumber Daya Ikan",
        desc: "Memperinci UU Perikanan mengenai KKP sebagai pendekatan pelestarian sumber daya.",
        link: "https://ug.link/nusantara/filemgr/share-download/?id=0926418a0cd24a1b89144b4f7603b804"
      }
    ],
    Kementerian: [
      {
        no: "Kepmen-KP No. 13/2021",
        title: "Penetapan KKP Raja Ampat (Area I-VI)",
        desc: "Mengesahkan status kawasan konservasi di perairan Kepulauan Raja Ampat.",
        link: "https://ug.link/nusantara/filemgr/share-download/?id=63f56cfbc8d24b53955a8eb552ffa977"
      },
      {
        no: "Kepmen-KP No. 191/2023",
        title: "KKP Misool Utara (Area VII)",
        desc: "Penetapan kawasan konservasi khusus untuk wilayah Misool Utara.",
        link: "https://ug.link/nusantara/filemgr/share-download/?id=0a251524d4b6466981f0a27a05ee0c2b"
      },
      {
        no: "Permen-KP No. 30/2010",
        title: "Rencana Pengelolaan & Zonasi",
        desc: "Aturan mengenai prosedur teknis penyusunan rencana pengelolaan dan zonasi KKP.",
        link: "https://ug.link/nusantara/filemgr/share-download/?id=1e98f9a96573444080a6e22fb966cbeb"
      }
    ],
    Regional: [
      {
        no: "Pergub PBD No. 31/2024",
        title: "Tata Kelola, SPM & Renstra",
        desc: "Mengatur Pola Tata Kelola, Standar Pelayanan Minimal, dan Rencana Strategis SUOP.",
        link: "https://ug.link/nusantara/filemgr/share-download/?id=e7e878262320438c8c6c2a498d233a5d"
      },
      {
        no: "Perda PBD No. 3/2025",
        title: "Pajak & Retribusi Daerah (PDRD)",
        desc: "Mengatur tarif retribusi layanan di kawasan konservasi Raja Ampat.",
        link: "https://ug.link/nusantara/filemgr/share-download/?id=6b910ac119ec4008bca55f766fda123e"
      },
      {
        no: "Pergub PBD No. 33/2024",
        title: "Remunerasi SUOP KKP",
        desc: "Aturan mengenai sistem pengupahan/remunerasi pada unit pengelola.",
        link: "https://ug.link/nusantara/filemgr/share-download/?id=3a2fada854de47aabf6d89f0a3f3283d"
      }
    ]
  };

  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/pengelolaan-kawasan/Foto 04 oleh Nikka Gunadharma.JPG')" }}
    >

      <Navbar />

      {/* Hero Section (Transparan, hanya konten) */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-gray-200">
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay gelap untuk keterbacaan */}
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            Pengelolaan Kawasan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mt-2 font-light italic"
          >
            Aturan dan Regulasi
          </motion.p>
        </div>
      </section>


      <section className="bg-black/40 py-20 px-6 space-y-32 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/80 rounded-xl p-10 text-gray-200 space-y-24">
          <div className="space-y-8">
            <p>Legalitas keberadaan dan pengelolaan tentang KKP pada umumnya, maupun yang terperinci mengatur tentang KKP Kepulauan Raja Ampat, diatur melalui aturan di beragam tingkatan pemerintah, mulai dari tingkat nasional hingga provinsi, mulai dari peraturan pemerintah, peraturan dan keputusan Menteri Kelautan dan Perikanan, hingga kepada Peraturan Gubernur (Pergub) Provinsi Papua Barat Daya.</p>
            <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === cat ? "bg-white text-[#004267] shadow-lg" : "text-white hover:bg-white/10"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {legalData[activeTab as keyof typeof legalData].map((item, idx) => (
                <motion.div
                  key={item.no}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-[#004267]/40 hover:bg-[#004267]/60 border border-white/10 p-8 rounded-[2.5rem] transition-all duration-500 backdrop-blur-md flex flex-col justify-between overflow-hidden"
                >
                  {/* Background Watermark Logo */}
                  <img
                    src="/images/[Logo] BLUD UPTD Pengelolaan KK di Perairan Kepulauan Raja Ampat Latest - Transparent.png"
                    className="absolute -right-8 -bottom-8 w-40 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none"
                    alt=""
                  />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-blue-500/20 rounded-2xl">
                        {activeTab === "Nasional" && <Landmark className="text-blue-400 w-6 h-6" />}
                        {activeTab === "Kementerian" && <FileText className="text-blue-400 w-6 h-6" />}
                        {activeTab === "Regional" && <Map className="text-blue-400 w-6 h-6" />}
                      </div>
                      <span className="text-[10px] text-blue-300 font-bold tracking-widest uppercase py-1 px-3 border border-blue-300/30 rounded-full">
                        {item.no}
                      </span>
                    </div>

                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                      {item.desc}
                    </p>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    className="relative z-10 w-full flex items-center justify-center gap-3 bg-white text-[#004267] py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-400 hover:text-white transition-all shadow-xl"
                  >
                    <Download className="w-4 h-4" />
                    Dapatkan Dokumen PDF
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Info Status DOB */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 p-8 bg-white/5 rounded-[2.5rem] border border-dashed border-white/20 text-center"
          >
            <p className="text-gray-300 text-sm font-light italic">
              Sebagai Daerah Otonomi Baru (DOB) yang resmi terbentuk pada akhir tahun 2022, Papua Barat Daya kini sedang mempersiapkan RZWP-3-K serta revisi atas Rencana Pengelolaan dan Rencana Zonasi KKP Kepulauan Raja Ampat.
            </p>
          </motion.div>
        </div>
      </section>
    </main >
  );
}
