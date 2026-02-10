"use client";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/app/Component/Navbar";
import { FileText, Download, ChevronDown, Scale, Map, Landmark } from "lucide-react";
import { useState } from "react";

const DownloadButton = ({ links }: { links: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Jika links hanya berupa string tunggal (1 file)
  if (typeof links === "string") {
    return (
      <a
        href={links}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 w-full flex items-center justify-center gap-3 bg-white text-[#194484] py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-400 hover:text-white transition-all shadow-xl"
      >
        <Download className="w-4 h-4" />
        Dapatkan Dokumen PDF
      </a>
    );
  }

  // Jika links berupa array (banyak file)
  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-full flex items-center justify-center gap-3 bg-white text-[#194484] py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-gray-100 transition-all shadow-xl"
      >
        <Download className="w-4 h-4" />
        Unduh Dokumen ({links.length})
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay transparan untuk menutup dropdown saat klik di luar area */}
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100"
            >
              {links.map((file: any, index: number) => (
                <a
                  key={index}
                  href={file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 px-5 py-4 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-0"
                >
                  <FileText className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-[10px] font-bold text-[#194484] uppercase tracking-wider text-left leading-tight">
                    {file.namafile}
                  </span>
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AturanDanRegulasi() {
  const [activeTab, setActiveTab] = useState("Nasional");

  const categories = ["Nasional", "Regional"];

  const legalData = {
    Nasional: [
      {
        no: "PP No. 60 Tahun 2007",
        title: "Konservasi Sumber Daya Ikan",
        desc: "Regulasi ini memperinci UU No. 31 Tahun 2004 dan UU No. 45 Tahun 2009, dan mengatur KKP sebagai pendekatan untuk melestarikan sumber daya perikanan. Peraturan perundang-undangan tersebut lalu diperinci melalui peraturan dan keputusan di tingkat Kementerian Kelautan dan Perikanan",
        link: "/pengelolaan-kawasan/aturan-dan-regulasi/PP No. 60 Tahun 2007 tentang Konservasi Sumber Daya Ikan.pdf"
      },
      {
        no: "Permen-KP No. 17/2008",
        title: "Kawasan Konservasi di WP-3-K",
        desc: "Peraturan ini mendefinisikan KKP sebagai “upaya perlindungan, pelestarian, dan pemanfaatan wilayah pesisir dan pulau-pulau kecil serta ekosistemnya untuk menjamin keberadaan, ketersediaan, dan kesinambungan sumber daya pesisir dan pulau-pulau kecil dengan tetap memelihara dan meningkatkan kualitas nilai dan keanekaragamannya.”",
        link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 17 Tahun 2008 tentang Kawasan Konservasi di WP-3-K.pdf"
      },
      {
        title: "Regulasi Terkait Tugas Pokok dan Fungsi  ",
        desc: "Regulasi di tingkat Kementerian Kelautan dan Perikanan yang terkait KKP pada umumnya mencakup beragam prosedur seperti penetapan KKP, penetapan status perlindungan jenis ikan, pemanfaatan jenis ikan dan genetik ikan, serta aturan mengenai rencana pengelolaan dan zonasi KKP.",
        link: [
          {
            namafile: "Permen-KP No. 2 Tahun 2009 tentang Tata Cara Penetapan KKP",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 2 Tahun 2009 tentang Tata Cara Penetapan KKP.pdf"
          },
          {
            namafile: "Permen-KP No. 3 Tahun 2010 tentang Tata Cara Status Perlindungan Jenis Ikan",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 3 Tahun 2010 tentang Tata Cara Status Perlindungan Jenis Ikan.pdf"
          },
          {
            namafile: "Permen-KP No. 4 Tahun 2010 tentang Tata Cara Pemanfaatan Jenis Ikan dan Genetik Ikan",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP Nomor 4 Tahun 2010 tentang Tata Cara Pemanfaatan Jenis Ikan dan Genetik Ikan.pdf"
          },
          {
            namafile: "Permen-KP No. 30 Tahun 2010 tentang Rencana Pengelolaan dan Zonasi KKP",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 30 Tahun 2010 Tentang Rencana Pengelolaan dan Zonasi KKP.pdf"
          }
        ]
      },
      {
        no: "Kepmen-KP No. 13/2021",
        title: "Penetapan KKP Raja Ampat (Area I-VI)",
        desc: "Peraturan ini menetapkan KKP Kepulauan Raja Ampat yang mencakup Area I Kepulauan Ayau-Asia hingga Area VI Kepulauan Fam, sementara Area VII Misool Utara ditetapkan melalui Kepmen-KP No. 191 Tahun 2023. Kedua aturan mengesahkan tujuh area kawasan konservasi perairan ke dalam Jejaring KKP Kepulauan Raja Ampat.",
        link: [
          {
            namafile: "Kepmen-KP No. 13 Tahun 2021 tentang Penetapan KKP Raja Ampat (Area I-VI)",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/Kepmen KP No. 13 Tahun 2021 tentang Penetapan KKP Raja Ampat (Area I-VI).pdf"
          },
          {
            namafile: "Peta KKP Raja Ampat (Area I-VI)",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/KEPMEN KP tentang KKP di Misool Utara.pdf"
          }
        ]
      },
    ],
    Regional: [
      {
        no: "Pergub PBD No. 26/2023",
        title: "UPTD Pengelolaan KKP Kepulauan Raja Ampat",
        desc: "Pergub ini mengatur keberadaan dari BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat sebagai SUOP yang berada di bawah Organisasi Perangkat Daerah (OPD) Papua Barat Daya, sekaligus turunan dari keputusan menteri terkait penetapan kawasan.",
        link: "/pengelolaan-kawasan/aturan-dan-regulasi/Peraturan Gubernur Papua Barat Daya No 26 Tahun 2023 tentang UPTD Pengelolaan KK di Perairan Kepulauan Raja Ampat pada Dinas P2KP.pdf"
      },
      {
        no: "Pergub PBD No. 31/2024",
        title: "Pola Tata Kelola, SPM, dan Rencana Strategis",
        desc: "Aturan ini mengatur tiga aspek pengelolaan utama dari BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat. Mulai dari pola pengelolaan keuangannya sebagai Badan Layanan Umum Daerah, jenis dan mutu layanan dasar dalam Standar Pelayanan Minimum (SPM), serta dokumen perencanaan lima tahunan bagi SUOP dan kawasan kelolanya.",
        link: "/pengelolaan-kawasan/aturan-dan-regulasi/Pergub PBD No. 31 Tahun 2024 tentang Pola Tata Kelola, SPM dan Renstra SUOP KKP Kepulauan Raja Ampat.pdf"
      },
      {
        no: "Pergub PBD No. 32/2024",
        title: "Tarif Layanan",
        desc: "Peraturan regional mengenai tarif bagi layanan dasar yang disediakan oleh SUOP KKP Kepulauan Raja Ampat, yang mencakup tarif bagi pengunjung maupun peneliti domestik dan mancanegara, layanan labuh tambat, serta aktivitas wisata minat khusus.",
        link: "/pengelolaan-kawasan/aturan-dan-regulasi/Pergub PBD No. 32 Tahun 2024 tentang Tarif Layanan KKP Kepulauan Raja Ampat.pdf"
      },
      {
        no: "Pergub PBD No. 33/2024",
        title: "Remunerasi Pada SUOP KKP Kepulauan Raja Ampat",
        desc: "Mengatur mengenai imbalan kerja bagi pegawai BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat berupa upah, honorarium, tunjangan, insentif, bonus, pesangon dan/atau dana pensiun.",
        link: "/pengelolaan-kawasan/aturan-dan-regulasi/Pergub PBD No. 33 Tahun 2024 tentang Remunerasi pada SUOP KKP Kepulauan Raja Ampat.pdf"
      },
      {
        no: "Pergub PBD No. 34",
        title: "Penerimaan Hibah SUOP KKP Kepulauan Raja Ampat",
        desc: "Mengatur prosedur dan legalitas penerimaan hibah untuk mendukung operasional SUOP KKP Raja Ampat.",
        link: "/pengelolaan-kawasan/aturan-dan-regulasi/Pergub PBD No. 34 tentang Penerimaan Hibah untuk SUOP KKP Kepulauan Raja Ampat.pdf"
      },
    ]
  };

  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/pengelolaan-kawasan/Foto 04 oleh Nikka Gunadharma.jpg')" }}
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
        <div className="bg-[#194484]/80 rounded-xl p-10 text-gray-200 space-y-24">
          <div className="space-y-8">
            <div className="space-y-4">
              <p>
                Legalitas keberadaan dan pengelolaan tentang KKP pada umumnya, maupun yang terperinci mengatur tentang KKP Kepulauan Raja Ampat, diatur melalui aturan di beragam tingkatan pemerintah, mulai dari tingkat nasional hingga provinsi, mulai dari peraturan pemerintah, peraturan dan keputusan Menteri Kelautan dan Perikanan, hingga kepada Peraturan Gubernur (Pergub) Provinsi Papua Barat Daya.
              </p>
              <p>
                Di tingkat regional, KKP Kepulauan Raja Ampat dan unit pengelolanya diatur melalui beragam Peraturan Gubernur (Pergub) Papua Barat Daya. Sebagai Daerah Otonomi Baru (DOB) yang resmi terbentuk pada akhir tahun 2022, Papua Barat Daya kini sedang mempersiapkan RZWP-3-K serta revisi atas Rencana Pengelolaan dan Rencana Zonasi KKP Kepulauan Raja Ampat.
              </p>
            </div>
            <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold tracking-widest transition-all ${activeTab === cat ? "bg-white text-[#194484] shadow-lg" : "text-white hover:bg-white/10"
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
                  className="group relative bg-white/10 hover:bg-white/20 border border-white/10 p-8 rounded-[2.5rem] transition-all duration-500 backdrop-blur-md flex flex-col justify-between overflow-hidden"
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
                      {item.no && (
                        <span className="text-[10px] text-blue-300 font-bold tracking-widest uppercase py-1 px-3 border border-blue-300/30 rounded-full">
                          {item.no}
                        </span>
                      )}
                    </div>

                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                      {item.desc}
                    </p>
                  </div>

                  <DownloadButton links={item.link} />
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
