import { AnimatePresence, motion } from "framer-motion";
import { FileText, Download, ChevronDown, Map, Landmark } from "lucide-react";
import { useState, useEffect } from "react";
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
        className="relative z-10 w-full flex items-center justify-center gap-3 bg-white text-[#194484] py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-400 hover:text-white transition-all shadow-xl"
      >
        <Download className="w-4 h-4" />
        {lang === 'ID' ? 'Dapatkan Dokumen PDF' : 'Get PDF Document'}
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
        {lang === 'ID' ? `Unduh Dokumen (${links.length})` : `Download Documents (${links.length})`}
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
              {links.map((file, index) => (
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
  const [lang, setLang] = useState(localStorage.getItem('app_lang') || 'ID');
  const [activeTabIndex, setActiveTabIndex] = useState(0);

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
      heroSub: "Aturan dan Regulasi",
      intro1: "Legalitas keberadaan dan pengelolaan tentang KKP pada umumnya, maupun yang terperinci mengatur tentang KKP Kepulauan Raja Ampat, diatur melalui aturan di beragam tingkatan pemerintah, mulai dari peraturan pemerintah, peraturan dan keputusan Menteri Kelautan dan Perikanan, hingga kepada Peraturan Gubernur (Pergub) Provinsi Papua Barat Daya.",
      intro2: "Di tingkat regional, KKP Kepulauan Raja Ampat dan unit pengelolanya diatur melalui beragam Peraturan Gubernur (Pergub) Papua Barat Daya. Sebagai Daerah Otonomi Baru (DOB) yang resmi terbentuk pada akhir tahun 2022, Papua Barat Daya kini sedang mempersiapkan RZWP-3-K serta revisi atas Rencana Pengelolaan dan Rencana Zonasi KKP Kepulauan Raja Ampat.",
      tabs: ["Nasional", "Regional"],
      dataKeys: ["Nasional", "Regional"],
      dobInfo: "Sebagai Daerah Otonomi Baru (DOB) yang resmi terbentuk pada akhir tahun 2022, Papua Barat Daya kini sedang mempersiapkan RZWP-3-K serta revisi atas Rencana Pengelolaan dan Rencana Zonasi KKP Kepulauan Raja Ampat.",
      data: {
        Nasional: [
          {
            no: "PP No. 60 Tahun 2007",
            title: "Konservasi Sumber Daya Ikan",
            desc: "Regulasi ini memperinci UU No. 31 Tahun 2004 dan UU No. 45 Tahun 2009, dan mengatur KKP sebagai pendekatan untuk melestarikan sumber daya perikanan.",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/PP No. 60 Tahun 2007 tentang Konservasi Sumber Daya Ikan.pdf"
          },
          {
            no: "Permen-KP No. 17/2008",
            title: "Kawasan Konservasi di WP-3-K",
            desc: "Peraturan ini mendefinisikan KKP sebagai upaya perlindungan, pelestarian, dan pemanfaatan wilayah pesisir dan pulau-pulau kecil serta ekosistemnya.",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 17 Tahun 2008 tentang Kawasan Konservasi di WP-3-K.pdf"
          },
          {
            title: "Regulasi Terkait Tugas Pokok dan Fungsi",
            desc: "Regulasi di tingkat Kementerian Kelautan dan Perikanan mencakup prosedur penetapan KKP, status perlindungan jenis ikan, hingga rencana pengelolaan.",
            link: [
              { namafile: "Tata Cara Penetapan KKP", link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 2 Tahun 2009 tentang Tata Cara Penetapan KKP.pdf" },
              { namafile: "Status Perlindungan Jenis Ikan", link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 3 Tahun 2010 tentang Tata Cara Status Perlindungan Jenis Ikan.pdf" },
              { namafile: "Pemanfaatan Jenis & Genetik Ikan", link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP Nomor 4 Tahun 2010 tentang Tata Cara Pemanfaatan Jenis Ikan dan Genetik Ikan.pdf" },
              { namafile: "Rencana Pengelolaan & Zonasi KKP", link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 30 Tahun 2010 Tentang Rencana Pengelolaan dan Zonasi KKP.pdf" }
            ]
          },
          {
            no: "Kepmen-KP No. 13/2021",
            title: "Penetapan KKP Kepulauan Raja Ampat",
            desc: "Mengesahkan tujuh area kawasan konservasi perairan ke dalam Jejaring KKP Kepulauan Raja Ampat (Area I - VII).",
            link: [
              { namafile: "Penetapan Area I-VI", link: "/pengelolaan-kawasan/aturan-dan-regulasi/Kepmen KP No. 13 Tahun 2021 tentang Penetapan KKP Raja Ampat (Area I-VI).pdf" },
              { namafile: "Penetapan Area VII (Misool Utara)", link: "/pengelolaan-kawasan/aturan-dan-regulasi/KEPMEN KP tentang KKP di Misool Utara.pdf" }
            ]
          }
        ],
        Regional: [{
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
      }
    },
    EN: {
      heroTitle: "MPAs Management",
      heroSub: "Regulations",
      intro1: "More specific legalities on the existence and management of MPAs in general, and those specified to Raja Ampat MPAs, are regulated through various regulations in different levels of governments, from the national to the provincial level, from government regulation, Ministry of Marine and Fisheries’ regulations and decrees, to Southwest Papua Governor’s regulations.",
      intro2: "In the provincial level, the Raja Ampat MPAs Network and its management authority are regulated through various governor’s regulations. As a newly-established province, Southwest Papua is currently working on its marine spatial planning document and the revision of Raja Ampat MPAs’ zoning and management plan documents.",
      tabs: ["National", "Regional"],
      dataKeys: ["Nasional", "Regional"],
      dobInfo: "As a New Autonomous Region officially formed in late 2022, Southwest Papua is currently preparing the Marine Spatial Plan (RZWP-3-K) and revised Management and Zoning Plans for Raja Ampat MPAs.",
      data: {
        Nasional: [
          {
            no: "GR No. 60/2007",
            title: "Fisheries",
            desc: "This regulation details Law No. 31/2004 and Law No. 45/2009, establishing MPAs as an approach to preserve fishery resources.",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/PP No. 60 Tahun 2007 tentang Konservasi Sumber Daya Ikan.pdf"
          },
          {
            no: "MAFR Reg No. 17/2008",
            title: "Islets and Coastal Conservation Area",
            desc: "Defines MPAs as efforts to protect, conserve, and utilize coastal areas and small islands along with their ecosystems.",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 17 Tahun 2008 tentang Kawasan Konservasi di WP-3-K.pdf"
          },
          {
            title: "Regulations on Tasks and Functions",
            desc: "MMF’s regulations on MPAs in general cover various procedures such as MPAs’ designation, designation of fish species protection status, fish genetic and species utilisation, and regulations on MPAs’ zoning and management plans.",
            link: [
              { namafile: "MPA Establishment Procedures", link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 2 Tahun 2009 tentang Tata Cara Penetapan KKP.pdf" },
              { namafile: "Fish Species Protection Status", link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 3 Tahun 2010 tentang Tata Cara Status Perlindungan Jenis Ikan.pdf" },
              { namafile: "Utilization of Fish Species & Genetics", link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP Nomor 4 Tahun 2010 tentang Tata Cara Pemanfaatan Jenis Ikan dan Genetik Ikan.pdf" },
              { namafile: "MPA Management & Zoning Plans", link: "/pengelolaan-kawasan/aturan-dan-regulasi/PERMEN KP No. 30 Tahun 2010 Tentang Rencana Pengelolaan dan Zonasi KKP.pdf" }
            ]
          },
          {
            no: "MAFR Decree No. 13/2021",
            title: "MMF Decree",
            desc: "This regulation designated Raja Ampat MPAs, covering Area I Ayau-Asia MPA to Area VI Fam Islands MPA, while Area VII North Misool was designated through MMF Decree 191 Year 2023. Both decrees officially included seven MPAs in the Raja Ampat MPAs Network.",
            link: [
              { namafile: "Establishment of Area I-VI", link: "/pengelolaan-kawasan/aturan-dan-regulasi/Kepmen KP No. 13 Tahun 2021 tentang Penetapan KKP Raja Ampat (Area I-VI).pdf" },
              { namafile: "Establishment of Area VII (N. Misool)", link: "/pengelolaan-kawasan/aturan-dan-regulasi/KEPMEN KP tentang KKP di Misool Utara.pdf" }
            ]
          }
        ],
        Regional: [
          {
            no: "Gov Reg PBD No. 26/2023",
            title: "MPA’s Management Authority",
            desc: "This regulation officially embed Raja Ampat MPAs Management Authority under the Southwest Papua’s Marine and Fisheries Agency, as well as specifies the MMF’s decree on Raja Ampat MPAs.",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/Peraturan Gubernur Papua Barat Daya No 26 Tahun 2023 tentang UPTD Pengelolaan KK di Perairan Kepulauan Raja Ampat pada Dinas P2KP.pdf"
          },
          {
            no: "Gov Reg PBD No. 31/2024",
            title: "Governance, Minimum Service Standards and Strategic Plan",
            desc: "This SPG governs three aspects of the management of Raja Ampat MPAs. From financial management patterns as a regional general service institution, types and qualities of basic services, and five-yearly planning for Raja Ampat MPAs and their management authority.",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/Pergub PBD No. 31 Tahun 2024 tentang Pola Tata Kelola, SPM dan Renstra SUOP KKP Kepulauan Raja Ampat.pdf"
          },
          {
            no: "Gov Reg PBD No. 32/2024",
            title: "Service Tariffs",
            desc: "Regional regulation on basic services tariffs provided by Raja Ampat MPAs Management Authority, which includes entrance fees for both foreign and Indonesian visitors and researchers, mooring-buoy service, and specific tourism activities.",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/Pergub PBD No. 32 Tahun 2024 tentang Tarif Layanan KKP Kepulauan Raja Ampat.pdf"
          },
          {
            no: "Gov Reg PBD No. 33/2024",
            title: "Remuneration",
            desc: "This regulation governs work rewards for the staff of the Raja Ampat MPAs Management Authority, including salary, honorarium, allowance, incentive, bonus, and severance pay.",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/Pergub PBD No. 33 Tahun 2024 tentang Remunerasi pada SUOP KKP Kepulauan Raja Ampat.pdf"
          },
          {
            no: "Gov Reg PBD No. 34/2024",
            title: "Grant Acceptance",
            desc: "The SPG regulates the legality, principles, forms and nature, types and sources, agreement and receipt, mechanism, and accountability of grant receipt as one of the legal revenues of the Raja Ampat MPAs Management Authority.",
            link: "/pengelolaan-kawasan/aturan-dan-regulasi/Pergub PBD No. 34 tentang Penerimaan Hibah untuk SUOP KKP Kepulauan Raja Ampat.pdf"
          }
        ]
      }
    }
  };

  const t = content[lang];
  const currentKey = t.dataKeys[activeTabIndex];
  const currentData = t.data[currentKey] || [];

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
            <div className="space-y-4">
              <p>{t.intro1}</p>
              <p>{t.intro2}</p>
            </div>
            <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md w-fit">
              {t.tabs.map((tabLabel, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTabIndex(index)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold tracking-widest transition-all ${activeTabIndex === index ? "bg-white text-[#194484] shadow-lg" : "text-white hover:bg-white/10"}`}
                >
                  {tabLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {currentData.map((item, idx) => (
                <motion.div
                  key={idx}
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
                        {activeTabIndex === 0 ? <Landmark className="text-blue-400 w-6 h-6" /> : <Map className="text-blue-400 w-6 h-6" />}
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

                  <DownloadButton links={item.link} lang={lang} />
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
              {t.dobInfo}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

