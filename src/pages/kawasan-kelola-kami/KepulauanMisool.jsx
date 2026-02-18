"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Anchor, Fish, Users, Info, Map as MapIcon, Waves, ShieldAlert, Check, X, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function KepulauanMisool() {
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
      heroTitle: "KKP di Raja Ampat",
      heroSub: "Area IV Kepulauan Misool",
      stats: [
        { label: "Luas Kawasan", value: "348.518,74 Hektare", icon: <MapIcon className="w-6 h-6" /> },
        { label: "Pertama Kali Ditetapkan", value: "Tahun 2007", icon: <Calendar className="w-6 h-6" /> },
        { label: "Distrik/Ibu Kota", value: "Misool Timur, Misool Selatan, dan Misool Barat/Kampung Folley, Dabatan, Kapatcol", icon: <Anchor className="w-6 h-6" /> },
      ],
      desc1: (
        <>
          Misool merupakan kepulauan lain di Raja Ampat dengan latar belakang masyarakat beragam, selain suku-suku asli Tanah Papua yang mendiaminya, kepulauan ini juga adalah kampung halaman bagi beragam suku dari Maluku Utara yang memutuskan untuk menetap mulai dari masa Kesultanan Tidore. Di kepulauan yang terbentuk dari bebatuan kapur ini terdapat tiga danau air asin, sungai-sungai dengan muara yang relatif besar, hutan mangrove yang rapat, serta padang lamun tempat duyung (<i>Dugong dugon</i>) mencari makan.
        </>
      ),
      desc2: (
        <>
          Area IV merupakan salah satu kawasan terluas di Jejaring KKP Kepulauan Raja Ampat, dan seperti kawasan lainnya proses kompleks arus laut membawa nutrisi yang melimpah bagi terumbu karang keras maupun lunak, menjadikannya rumah bagi beragam ikan karang, pelagis, dua jenis pari manta, lokasi peneluran dan habitat penting bagi penyu hijau (<i>Chelonia mydas</i>) dan sisik (<i>Eretmochelys imbricata</i>), jalur migrasi bagi beberapa mamalia laut, serta buaya muara.
        </>
      ),
      zonasiTitle: "Luasan Zonasi",
      zonasiData: [
        { label: "Zona Inti", value: "756,34 Hektare" },
        { label: "Zona Pemanfaatan Terbatas", value: "85.025,45 Hektare" },
        { label: "Zona Sasi*", value: " 262.736,95 Hektare" },
      ],
      sasiNote: "* Zona Sasi adalah zona yang didedikasikan untuk aktivitas pemanfaatan perikanan bagi masyarakat lokal dan dapat dimanfaatkan untuk aktivitas non-ekstraktif seperti pariwisata berkelanjutan.",
      adatTitle: "Masyarakat Adat",
      adatDesc: "Suku Matbat, Matlow, Biga, dan suku-suku dari Maluku Utara yang sudah mendiami Kepulauan Misool sejak tahun 1400-an.",
      petaTitle: "Peta Kawasan",
      petaSub: "Klik peta di bawah ini untuk melihat detail pembagian zona di dalam KKP Kepulauan Asia dan Ayau.",
      tableTitle: "Panduan Zonasi & Aktivitas",
      tableSub: "KKP ini dikelola berdasarkan sistem zonasi untuk menjaga keseimbangan ekosistem.",
      tableHeader: ["Deskripsi Zona", "Diving", "Snorkeling", "Memancing", "Jangkar"],
      rules: [
        "Dilarang menggunakan Jetski atau kendaraan air bermotor lainnya.",
        "Gunakan tambatan (Mooring). Buang sauh hanya jika terpaksa sesuai Code of Conduct.",
        "Wisatawan memancing hanya atas izin Kepala Adat."
      ],
      zonasiItems: [
        { nama: "Zona Inti", desc: "Akses hanya untuk penelitian/pendidikan dengan izin ketat.", diving: false, snorkel: false, fishing: false, anchor: false },
        { nama: "Zona Pemanfaatan Terbatas", desc: "Pariwisata berkelanjutan diperbolehkan.", diving: true, snorkel: true, fishing: false, anchor: false },
        { nama: "Zona Sasi", desc: "Pemanfaatan masyarakat lokal & pariwisata.", diving: true, snorkel: true, fishing: "Lokal/Izin", anchor: false },
      ]
    },
    EN: {
      heroTitle: "Our MPA",
      heroSub: "Area IV Misool Islands",
      stats: [
        { label: "Total Area", value: "348,518.74 Hectares", icon: <MapIcon className="w-6 h-6" /> },
        { label: "Established", value: "Year 2007", icon: <Calendar className="w-6 h-6" /> },
        { label: "District/Capital", value: "East, South, and West Misool / Folley, Dabatan, and Kapatcol Village", icon: <Anchor className="w-6 h-6" /> },
      ],
      desc1: (
        <>
          Misool is an archipelago in Raja Ampat with a diverse cultural background. In addition to the indigenous tribes of Papua, these islands are home to various tribes from North Maluku who settled here during the era of the Tidore Sultanate. Formed from limestone karst, the archipelago features three saltwater lakes, rivers with relatively large estuaries, dense mangrove forests, and seagrass meadows where dugongs (<i>Dugong dugon</i>) forage.
        </>
      ),
      desc2: (
        <>
          Area IV is one of the largest sectors within the Raja Ampat MPA Network. Like other areas, complex ocean currents bring abundant nutrients for both hard and soft corals, making it a home for diverse reef and pelagic fish, two species of manta rays, and a critical habitat and nesting site for Green turtles (<i>Chelonia mydas</i>) and Hawksbill turtles (<i>Eretmochelys imbricata</i>). It also serves as a migration path for several marine mammals and saltwater crocodiles.
        </>
      ),
      zonasiTitle: "Zoning Coverage",
      zonasiData: [
        { label: "Core Zone", value: "756.34 Hectares" },
        { label: "Limited Utilization Zone", value: "85,025.45 Hectares" },
        { label: "Sasi Zone*", value: "262,736.95 Hectares" },
      ],
      sasiNote: "* Sasi Zone is dedicated to traditional fishing activities for local communities and can be utilized for sustainable non-extractive activities, such as tourism, with local community consent.",
      adatTitle: "Indigenous Community",
      adatDesc: "The Matbat, Matlow, and Biga tribes, along with ethnic groups from North Maluku who have inhabited the Misool Islands since the 1400s.",
      petaTitle: "Area Map",
      petaSub: "Click the map below to view the detailed zoning divisions within Area IV Misool Islands.",
      tableTitle: "Zoning & Activity Guide",
      tableSub: "This MPA is managed through a zoning system to maintain ecosystem balance.",
      tableHeader: ["Zone Description", "Diving", "Snorkeling", "Fishing", "Anchoring"],
      rules: [
        "The use of Jet Skis or other motorized water vehicles is prohibited.",
        "Use mooring buoys. Anchoring is allowed only when necessary and must follow the Code of Conduct.",
        "Tourists may only fish with the explicit permission of the Traditional Head (Kepala Adat)."
      ],
      zonasiItems: [
        { nama: "Core Zone", desc: "Access limited to research/education with strict permits.", diving: false, snorkel: false, fishing: false, anchor: false },
        { nama: "Limited Use Zone", desc: "Sustainable tourism activities are permitted.", diving: true, snorkel: true, fishing: false, anchor: false },
        { nama: "Sasi Zone", desc: "Local utilization & sustainable tourism.", diving: true, snorkel: true, fishing: "Local/Permit", anchor: false },
      ]
    }
  };

  const t = content[lang];

  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/informasi-terkini/berita/Foto 06 oleh Rens Lewerissa.JPG')" }}
    >
      <Navbar color="#004267" />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-gray-200 text-center px-6">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
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
            className="text-2xl mt-4 font-light italic opacity-90"
          >
            {t.heroSub}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black/40 py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/90 rounded-[3rem] p-8 md:p-16 text-gray-200 shadow-2xl border border-white/10 max-w-7xl mx-auto space-y-20">

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
              >
                <div className="bg-blue-500/20 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          {/* Narasi Ekologis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-lg font-light leading-relaxed text-justify">
              <p>
                {t.desc1}
              </p>
              <p>
                {t.desc2}
              </p>
              <p>
                {t.desc3}
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                <h4 className="flex items-center gap-3 text-xl font-bold mb-4 text-blue-400">
                  <MapIcon size={24} /> {t.zonasiTitle}
                </h4>
                <ul className="space-y-4 text-sm text-gray-300">
                  {t.zonasiData.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="flex gap-3 items-center">
                        <Waves className="w-4 h-4 text-blue-400" /> {item.label}
                      </span>
                      <span className="text-white">{item.value}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[10px] text-gray-400 italic leading-relaxed border-t border-white/10 pt-4">
                  {t.sasiNote}
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                <h4 className="flex items-center gap-3 text-xl font-bold mb-4 text-blue-400">
                  <Users size={24} /> {t.adatTitle}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t.adatDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Peta Kawasan Section */}
          <div className="space-y-10 pt-10 border-t border-white/10">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold uppercase tracking-tighter text-white">{t.petaTitle}</h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-light">
                {t.petaSub}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-[3rem] border border-white/20 shadow-2xl bg-black/40"
            >
              {/* Placeholder Peta - Ganti src dengan path file peta Anda */}
              <img
                src="/images/peta.jpg"
                alt="Peta Zonasi KKP Asia dan Ayau"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Interaktif saat Hover
              <div className="absolute inset-0 bg-[#004267]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white text-[#004267] px-8 py-3 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-xl flex items-center gap-3">
                  <MapIcon size={18} />
                  Perbesar Peta
                </div>
              </div>

              Label Luas Kawasan di Peta 
              <div className="absolute bottom-8 left-8 bg-[#004267]/80 backdrop-blur-md border border-white/20 p-4 rounded-2xl hidden md:block">
                <p className="text-[10px] uppercase tracking-widest text-blue-300 font-bold mb-1">Luas Total</p>
                <p className="text-xl font-bold text-white">99.339 Hektar</p>
              </div> */}
            </motion.div>
          </div>

          {/* Zonasi Table */}
          <div className="space-y-10 pt-10 border-t border-white/10">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold uppercase tracking-tighter text-white">{t.tableTitle}</h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-light">
                {t.tableSub}
              </p>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-black/20">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-white/5 text-blue-300 uppercase tracking-widest text-[10px]">
                  <tr>
                    {t.tableHeader.map((header, idx) => (
                      <th key={idx} className={`p-6 border-b border-white/10 ${idx === 0 ? '' : 'text-center'}`}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {t.zonasiItems.map((z, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-6 border-b border-white/10">
                        <p className="font-bold text-white mb-1">{z.nama}</p>
                        <p className="text-xs font-light leading-relaxed">{z.desc}</p>
                      </td>
                      <td className="p-6 border-b border-white/10 text-center">{z.diving ? <Check /> : <X />}</td>
                      <td className="p-6 border-b border-white/10 text-center">{z.snorkel ? <Check /> : <X />}</td>
                      <td className="p-6 border-b border-white/10 text-center">
                        {typeof z.fishing === "string" ? <span className="text-[10px] bg-blue-500/20 px-2 py-1 rounded text-blue-300">{z.fishing}</span> : z.fishing ? <Check /> : <X />}
                      </td>
                      <td className="p-6 border-b border-white/10 text-center">{z.anchor ? <Check /> : <X />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-3xl flex gap-4 items-start">
              <ShieldAlert className="text-yellow-500 flex-shrink-0" />
              <div className="text-xs text-yellow-200/80 space-y-2 leading-relaxed font-light">
                {t.rules.map((rule, idx) => (
                  <p key={idx}>• {rule}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}