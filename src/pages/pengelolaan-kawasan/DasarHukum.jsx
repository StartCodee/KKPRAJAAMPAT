import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";


const DownloadButton = ({ links, lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Jika links hanya berupa string tunggal (1 file)
  if (typeof links === "string") {
    return (
      <a
        href={links}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-[#194484] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-white/10"
      >
        <Download className="w-4 h-4" />
        {lang === 'ID' ? 'Unduh PDF' : 'Download PDF'}
      </a>
    );
  }

  // Jika links berupa object (banyak file)
  const fileEntries = Object.entries(links);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="shrink-0 flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-[#194484] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-white/10"
      >
        <Download className="w-4 h-4" />
        {lang === 'ID' ? 'Unduh PDF' : 'Download PDF'} ({fileEntries.length})
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
              className="absolute right-0 mt-2 w-64 bg-[#194484] border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl"
            >
              {fileEntries.map(([key, url]) => (
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
  // Logika Sinkronisasi Bahasa
  const [lang, setLang] = useState(localStorage.getItem('app_lang') || 'ID');

  useEffect(() => {
    const handleStorageChange = () => {
      setLang(localStorage.getItem('app_lang') || 'ID');
    };
    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 500);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const content = {
    ID: {
      heroTitle: "Pengelolaan Kawasan",
      heroSub: "Dasar Hukum",
      intro: "Berikut ini adalah beberapa peraturan perundang-undangan tertinggi berdasarkan kronologi, yang merupakan dasar hukum mengenai keberadaan dari kawasan konservasi perairan serta tugas pokok dan fungsi dari pengelolaannya.",
      data: [
        {
          uu: "UU No. 23 Tahun 2014",
          tentang: "Tentang Pemerintahan Daerah",
          deskripsi: "UU ini merevisi UU No. 32 Tahun 2004 yang merupakan peraturan perundang-undangan kunci dalam proses desentralisasi kewenangan pemerintah pusat kepada pemerintah daerah. Revisi ini juga mencakup peralihan kewenangan pengelolaan laut kepada pemerintah provinsi.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 23 Tahun 2014 tentang Pemerintah Daerah (1).pdf"
        },
        {
          uu: "UU No. 27 Tahun 2007",
          tentang: "Tentang Pengelolaan Wilayah Pesisir dan Pulau-Pulau Kecil",
          deskripsi: "UU ini menggunakan terminologi ‘kawasan konservasi di wilayah pesisir dan pulau-pulau kecil’ yang merujuk kepada penetapan kawasan tertentu, termasuk bagi KKP Kepulauan Raja Ampat.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 27 Tahun 2007 tentang Pengelolaan WP-3-K (1).PDF"
        },
        {
          uu: "UU No. 45 Tahun 2009",
          tentang: "Tentang Perikanan",
          deskripsi: "UU ini merevisi UU No. 31 Tahun 2004, dan memperinci fungsi KKP sebagai salah satu pendekatan pengelolaan untuk melestarikan sumber daya perikanan.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 45 Tahun 2009 tentang Perubahan Atas UU Perikanan.pdf"
        },
        {
          uu: "UU No. 1 Tahun 2014",
          tentang: "Tentang Pengelolaan Wilayah Pesisir dan Pulau-pulau Kecil",
          deskripsi: "Mengatur Rencana Zonasi Wilayah Pesisir dan Pulau-pulau Kecil (RZWP-3-K) sebagai dokumen tata ruang laut. UU ini merevisi UU No. 27 Tahun 2007.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 1 Tahun 2014 tentang Perubahan Atas UU No. 27 Tahun 2007.pdf"
        },
        {
          uu: "UU No. 32 Tahun 2014",
          tentang: "Tentang Kelautan",
          deskripsi: "Mengatur pemanfaatan sumber daya kelautan serta konservasi laut, aspek pertahanan, penegakan hukum, dan keselamatan di laut.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 32 Tahun 2014 tentang Kelautan.PDF"
        },
        {
          uu: "UU No. 32 Tahun 2024",
          tentang: "Tentang Konservasi Sumber Daya Alam Hayati dan Ekosistemnya",
          deskripsi: "Menjabarkan kawasan konservasi perairan sebagai bagian dari perlindungan sistem penyangga kehidupan. UU ini merevisi UU No. 5 Tahun 1990.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 32 Tahun 2024 tentang KSDAE.pdf"
        }
      ]
    },
    EN: {
      heroTitle: "MPAs Management",
      heroSub: "Legal Basis",
      intro: "These are some of the legislations, in chronological order, related to the existence of MPA and it’s management unit’s tasks and functions. We apologise because there are no official translation to English.",
      data: [
        {
          uu: "Act 23 Year 2014",
          tentang: "Regional Government",
          deskripsi: "This law revised Act 32 Year 2004, which was the key legislation in the decentralisation process from central to regional government: province, regency, and municipality governments. The revision included the transfer of authority for marine management from the regency/municipal government to the provincial government, with the Raja Ampat MPAs Management Authority currently embedded under the Southwest Papua’s Marine and Fisheries Agency.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 23 Tahun 2014 tentang Pemerintah Daerah (1).pdf"
        },
        {
          uu: "Act 27 Year 2007",
          tentang: "Islets and Coastal Management",
          deskripsi: "This law used the term “conservation area in islets and coastal areas,’ which, in the ministry level’s regulations have now developed to ‘marine protected areas’ that refer to the designation of a particular area, including the Raja Ampat MPAs. This law has been revised to Act 6 Year 2023 on Job Creation.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 27 Tahun 2007 tentang Pengelolaan WP-3-K (1).PDF"
        },
        {
          uu: "Act 45 Year 2009",
          tentang: "Fisheries",
          deskripsi: "This law revised Act 31 Year 2004, and specified the function of MPA as one of the management approaches to preserve fisheries resources. The revision began using the term ‘marine protected area.’",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 45 Tahun 2009 tentang Perubahan Atas UU Perikanan.pdf"
        },
        {
          uu: "Act 1 Year 2014",
          tentang: "Islets and Coastal Managemen",
          deskripsi: "The existence and management of MPAs were included in the Islets and Coastal Zoning Plan–Indonesia’s marine spatial planning document. Besides MPA, marine spatial planning includes general utilisation areas, specific national strategic areas, and sea lane areas.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 1 Tahun 2014 tentang Perubahan Atas UU No. 27 Tahun 2007.pdf"
        },
        {
          uu: "Act 32 Year 2014",
          tentang: "Maritime Affairs ",
          deskripsi: "This law further regulates ‘marine management’ as ‘implementation of activities, provisions, efforts, utilizations and conservation of marine resources. This law also regulates marine development, marine spatial management, aspects of security and defence, law enforcement, safety at sea, governance and institutionalisation, and communities’ roles.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 32 Tahun 2014 tentang Kelautan.PDF"
        },
        {
          uu: "Act 32 Year 2024",
          tentang: "Ecosystem and Natural Resources Conservation",
          deskripsi: "This law stated “marine protected areas” as a part of “natural resources management” and “life buffer system protection.” This law revised Act 5 of Year 1990 and hinted at a shift in tasks and functions toward a more cross-sectoral approach.",
          link: "/pengelolaan-kawasan/dasar-hukum/UU No. 32 Tahun 2024 tentang KSDAE.pdf"
        }
      ]
    }
  };

  const t = content[lang];

  const hukumData = t.data;

  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/pengelolaan-kawasan/Foto 03 oleh Nikka Gunadharma.JPG')" }}
    >

      <Navbar color="#194484" />

      {/* Hero Section (Transparan, hanya konten) */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-gray-200">
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay gelap untuk keterbacaan */}
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mt-2 font-light italic"
          >
            {t.heroSub}
          </motion.p>
        </div>
      </section>


      <section className="bg-black/40 py-20 px-6 space-y-32 md:px-20 backdrop-blur-sm">
        <div className="bg-[#194484]/80 rounded-xl p-10 text-gray-200 space-y-24">
          <div className="space-y-8">
            <p>{t.intro}</p>
            {/* Grid List Hukum */}
            <div className="grid grid-cols-1 gap-6">
              {hukumData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/10 hover:bg-white/10 border border-white/10 rounded-4xl p-8 transition-all duration-500 backdrop-blur-sm flex flex-col md:flex-row gap-8 items-start md:items-center"
                >
                  {/* Logo Transparan Background (Watermark gaya sebelumnya) */}
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                    <img src="/images/[Logo] BLUD UPTD Pengelolaan KK di Perairan Kepulauan Raja Ampat Latest - Transparent.png" className="w-40 h-auto" alt="" />
                  </div>

                  {/* Ikon File */}
                  <div className="shrink-0 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500">
                    <FileText className="text-white w-8 h-8" />
                  </div>

                  {/* Konten Teks */}
                  <div className="grow space-y-2">
                    <h3 className="text-blue-400 font-bold text-xl tracking-wide">{item.uu}</h3>
                    <h4 className="text-white text-lg font-medium">{item.tentang}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-3xl font-light">
                      {item.deskripsi}
                    </p>
                  </div>

                  {/* Tombol Download */}
                  <DownloadButton links={item.link} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}