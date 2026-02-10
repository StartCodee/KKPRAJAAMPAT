"use client";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/Component/Navbar";
import { FileText, Download, ChevronDown } from "lucide-react";
import { useState } from "react";


const DownloadButton = ({ links, label }: { links: any, label: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Jika links hanya berupa string tunggal (1 file)
  if (typeof links === "string") {
    return (
      <a
        href={links}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-[#004267] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-white/10"
      >
        <Download className="w-4 h-4" />
        Unduh PDF
      </a>
    );
  }

  // Jika links berupa object (banyak file)
  const fileEntries = Object.entries(links);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex-shrink-0 flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-[#004267] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-white/10"
      >
        <Download className="w-4 h-4" />
        Unduh PDF ({fileEntries.length})
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop transparan untuk menutup dropdown saat klik di luar */}
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-64 bg-[#004267] border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl"
            >
              {fileEntries.map(([key, url]: any, index) => (
                <a
                  key={key}
                  href={url.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 text-white hover:bg-white/10 transition-colors text-[10px] uppercase font-bold tracking-wider border-b border-white/5 last:border-0"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  {url.namafile ? url.namafile : key}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function DasarHukum() {
  const hukumData = [
    {
      uu: "UU No. 23 Tahun 2014",
      tentang: "Pemerintahan Daerah",
      deskripsi: "Mengatur peralihan kewenangan pengelolaan laut kepada pemerintah provinsi–BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat sekarang berada dalam naungan Dinas Pertanian, Pangan, Kelautan dan Perikanan (P2KP) Provinsi Papua Barat Daya.",
      link: "/pengelolaan-kawasan/dasar-hukum/UU No. 23 Tahun 2014 tentang Pemerintah Daerah (1).pdf"
    },
    {
      uu: "UU No. 32 Tahun 2014",
      tentang: "Kelautan",
      deskripsi: "Mengatur lebih jauh pengelolaan tersebut sebagai “penyelenggaraan kegiatan, penyediaan, pengusahaan dan pemanfaatan sumber daya kelautan serta konservasi laut.”",
      link: "/pengelolaan-kawasan/dasar-hukum/UU No. 32 Tahun 2014 tentang Kelautan.PDF"
    },
    {
      uu: "UU No. 27 Tahun 2007 yang direvisi melalui UU No. 6 Tahun 2023",
      tentang: "Cipta Kerja (Revisi UU 27/2007)",
      deskripsi: "Menggunakan terminologi ‘kawasan konservasi di wilayah pesisir dan pulau-pulau kecil’ yang, dalam peraturan turunan di tingkat menteri sekarang, berkembang menggunakan istilah ‘kawasan konservasi di perairan’ untuk merujuk kepada penetapan kawasan tertentu, termasuk bagi KKP Kepulauan Raja Ampat.",
      link: "/pengelolaan-kawasan/dasar-hukum/UU No. 27 Tahun 2007 tentang Pengelolaan WP-3-K (1).PDF"
    },
    {
      uu: "UU No. 31/2004 yang direvisi melalui UU No. 45/2009",
      tentang: "Perikanan",
      deskripsi: "Memperinci fungsi KKP sebagai salah satu pendekatan pengelolaan untuk melestarikan sumber daya perikanan. Dalam revisi UU ini terminologi ‘kawasan konservasi perairan’ sudah digunakan.",
      link: {
        1: {
          namafile: "UU No. 31 Tahun 2004 tentang Perikanan",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 31 Tahun 2004 tentang Perikanan.pdf"
        },
        2: {
          namafile: "UU No. 45 Tahun 2009 tentang Perubahan Atas UU 31 Tahun 2004 tentang Perikanan",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 45 Tahun 2009 tentang Perubahan Atas UU Perikanan.pdf"
        }
      }
    },
    {
      uu: "UU No. 32 Tahun 2024",
      tentang: "KSDAE (Revisi UU 5/1990)",
      deskripsi: "Menjabarkan “kawasan konservasi di perairan , wilayah pesisir dan pulau-pulau kecil” sebagai bagian dari “pengelolaan sumber daya alam hayati” dan “perlindungan sistem penyangga kehidupan.”",
      link: "/pengelolaan-kawasan/dasar-hukum/UU No. 32 Tahun 2024 tentang KSDAE.pdf"
    }, 
    {
      uu: "UU No. 27 Tahun 2007  dan perubahannya, UU No. 1 Tahun 2014 .",
      tentang: "Pengelolaan Wilayah Pesisir dan Pulau-Pulau Kecil",
      deskripsi: "Keberadaan dan pengelolaan KKP juga termasuk ke dalam Rencana Zonasi Wilayah Pesisir dan Pulau-pulau Kecil (RZWP-3-K). Selain kawasan konservasi, RZWP-3-K juga mencakup pengelolaan kawasan pemanfaatan umum, kawasan strategis nasional tertentu, dan kawasan alur laut.", 
      link: {
        1: {
          namafile: "UU No. 27 Tahun 2007 tentang Pengelolaan Wilayah Pesisir dan Pulau-Pulau Kecil",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 27 Tahun 2007 tentang Pengelolaan WP-3-K.pdf"
        },
        2: {
          namafile: "UU No. 1 Tahun 2014 tentang Perubahan Atas UU No. 27 Tahun 2007 tentang Pengelolaan Wilayah Pesisir dan Pulau-Pulau Kecil",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 1 Tahun 2014 tentang Perubahan Atas UU No. 27 Tahun 2007 Tentang Pengelolaan WP-3-K.pdf"
        }
      }
    }
  ];
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/pengelolaan-kawasan/Foto 03 oleh Nikka Gunadharma.JPG')" }}
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
            Dasar Hukum
          </motion.p>
        </div>
      </section>


      <section className="bg-black/40 py-20 px-6 space-y-32 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/80 rounded-xl p-10 text-gray-200 space-y-24">
          {/* Grid List Hukum */}
          <div className="grid grid-cols-1 gap-6">
            {hukumData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#3B99AA]/40 hover:bg-[#3B99AA]/50 border border-white/10 rounded-[2rem] p-8 transition-all duration-500 backdrop-blur-sm flex flex-col md:flex-row gap-8 items-start md:items-center"
              >
                {/* Logo Transparan Background (Watermark gaya sebelumnya) */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                  <img src="/images/[Logo] BLUD UPTD Pengelolaan KK di Perairan Kepulauan Raja Ampat Latest - Transparent.png" className="w-40 h-auto" alt="" />
                </div>

                {/* Ikon File */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500">
                  <FileText className="text-white w-8 h-8" />
                </div>

                {/* Konten Teks */}
                <div className="flex-grow space-y-2">
                  <h3 className="text-blue-400 font-bold text-xl tracking-wide">{item.uu}</h3>
                  <h4 className="text-white text-lg font-medium">Tentang {item.tentang}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-3xl font-light">
                    {item.deskripsi}
                  </p>
                </div>

                {/* Tombol Download */}
                <DownloadButton links={item.link} label={item.uu} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main >
  );
}
