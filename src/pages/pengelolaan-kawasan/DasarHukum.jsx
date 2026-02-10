import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FileText, Download, Gavel } from "lucide-react";
import Speedometer from "@/components/Speedometer";

export default function DasarHukum() {
  const hukumData = [
    {
      uu: "UU No. 23 Tahun 2014",
      tentang: "Pemerintahan Daerah",
      deskripsi: "Mengatur peralihan kewenangan pengelolaan laut kepada pemerintah provinsi–BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat sekarang berada dalam naungan Dinas Pertanian, Pangan, Kelautan dan Perikanan (P2KP) Provinsi Papua Barat Daya.",
      link: "https://ug.link/nusantara/filemgr/share-download/?id=79d7cde024ae415d9e61d906f9736575"
    },
    {
      uu: "UU No. 32 Tahun 2014",
      tentang: "Kelautan",
      deskripsi: "Mengatur lebih jauh pengelolaan tersebut sebagai “penyelenggaraan kegiatan, penyediaan, pengusahaan dan pemanfaatan sumber daya kelautan serta konservasi laut.”",
      link: "https://ug.link/nusantara/filemgr/share-download/?id=bb995a92a18e46a89a9af28c1950d9f9"
    },
    {
      uu: "UU No. 6 Tahun 2023",
      tentang: "Cipta Kerja (Revisi UU 27/2007)",
      deskripsi: "Menggunakan terminologi ‘kawasan konservasi di wilayah pesisir dan pulau-pulau kecil’ yang, dalam peraturan turunan di tingkat menteri sekarang, berkembang menggunakan istilah ‘kawasan konservasi di perairan’ untuk merujuk kepada penetapan kawasan tertentu, termasuk bagi KKP Kepulauan Raja Ampat.",
      link: "https://ug.link/nusantara/filemgr/share-download/?id=fc28e6b2f4624b6096b549a851286dd6"
    },
    {
      uu: "UU No. 31/2004 & UU No. 45/2009",
      tentang: "Perikanan",
      deskripsi: "Memperinci fungsi KKP sebagai salah satu pendekatan pengelolaan untuk melestarikan sumber daya perikanan. Dalam revisi UU ini terminologi ‘kawasan konservasi perairan’ sudah digunakan.",
      link: "https://ug.link/nusantara/filemgr/share-download/?id=4f6d03eae79a437e9029e2b1c392e022"
    },
    {
      uu: "UU No. 32 Tahun 2024",
      tentang: "KSDAE (Revisi UU 5/1990)",
      deskripsi: "Menjabarkan kawasan konservasi perairan sebagai bagian dari perlindungan sistem penyangga kehidupan dan pengelolaan sumber daya alam hayati.",
      link: "https://ug.link/nusantara/filemgr/share-download/?id=b9e2e2f1445c463686e6acb4bae6e950"
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
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-[#004267] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-white/10"
                >
                  <Download className="w-4 h-4" />
                  Unduh PDF
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main >
  );
}
