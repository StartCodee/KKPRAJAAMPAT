"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Anchor, Fish, Users, Info, Map as MapIcon, Waves, ShieldAlert, Check, X } from "lucide-react";

export default function KepulauanAsiaDanAyau() {

  const stats = [
    { label: "Luas Kawasan", value: "99.339 Hektar", icon: <MapIcon className="w-6 h-6" /> },
    { label: "Populasi", value: "2.000+ Jiwa", icon: <Users className="w-6 h-6" /> },
    { label: "Lokasi", value: "Utara Raja Ampat", icon: <Anchor className="w-6 h-6" /> },
  ];

  const zonasi = [
    {
      nama: "Zona Inti",
      desc: "Nilai ekologis tinggi, akses hanya untuk penelitian/pendidikan dengan izin ketat.",
      diving: false, snorkel: false, fishing: false, anchor: false
    },
    {
      nama: "Sub-zona Ketahanan Pangan & Pariwisata",
      desc: "Zona Larang Tangkap. Perikanan dilarang, pariwisata berkelanjutan diperbolehkan.",
      diving: true, snorkel: true, fishing: false, anchor: false
    },
    {
      nama: "Sub-zona Sasi & Pemanfaatan Tradisional",
      desc: "Pemanfaatan bagi masyarakat lokal (perikanan berkelanjutan & budaya) serta pariwisata.",
      diving: true, snorkel: true, fishing: "Lokal/Izin", anchor: false
    },
  ];

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
            Kawasan Kelola Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mt-4 font-light italic opacity-90"
          >
            KKP Kepulauan Asia dan Ayau
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black/40 py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/90 rounded-[3rem] p-8 md:p-16 text-gray-200 shadow-2xl border border-white/10 max-w-7xl mx-auto space-y-20">

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
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
                Terletak di ujung utara Raja Ampat, KKP Kepulauan Asia dan Ayau merupakan salah satu gugusan kepulauan terdepan Indonesia yang mencakup atol sangat luas di antara pulau-pulau di sekitarnya.
              </p>
              <p>
                Kawasan ini dikenal sebagai **situs pemijahan ikan kerapu terbesar di Indonesia Timur**, menyediakan telur dan pasokan ikan ke wilayah perairan Maluku hingga Halmahera. Lokasi **Abor** di Ayau Besar menjadi titik pemijahan multi-spesies yang sangat produktif bagi Kerapu Saiseng dan Kerapu Macan.
              </p>
              <div className="bg-blue-900/30 p-8 rounded-3xl border-l-4 border-blue-400">
                <p className="italic text-blue-100">
                  "Pada tahun 2015, spesies baru <strong>Cirrhilabrus marinda</strong> ditemukan di sini, dinamai sebagai bentuk apresiasi terhadap pimpinan daerah Raja Ampat (Marinda)."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                <h4 className="flex items-center gap-3 text-xl font-bold mb-4 text-blue-400">
                  <Fish size={24} /> Keanekaragaman Hayati
                </h4>
                <ul className="space-y-4 text-sm text-gray-300">
                  <li className="flex gap-3"><Waves className="w-4 h-4 text-blue-400 flex-shrink-0" /> Habitat ikan bernilai ekonomi: Napoleon, Tuna, Cakalang, dan Tenggiri.</li>
                  <li className="flex gap-3"><Waves className="w-4 h-4 text-blue-400 flex-shrink-0" /> Pantai peneluran penting bagi Penyu Hijau dan Penyu Belimbing.</li>
                  <li className="flex gap-3"><Waves className="w-4 h-4 text-blue-400 flex-shrink-0" /> Lokasi pengamatan Lumba-lumba Hidung Botol, Spinner, dan Paus Sperma.</li>
                  <li className="flex gap-3"><Waves className="w-4 h-4 text-blue-400 flex-shrink-0" /> Rumah bagi cacing laut endemik lokal yang disebut <strong>"Insonem"</strong>.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                <h4 className="flex items-center gap-3 text-xl font-bold mb-4 text-blue-400">
                  <Users size={24} /> Masyarakat & Budaya
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Dihuni oleh keturunan Suku Biak (Wardo dan Usba), masyarakat di sini mempraktikkan sistem **Sasi** tradisional (Sasi Gereja dan Sasi Suku) untuk mengelola sumber daya laut secara berkelanjutan.
                </p>
              </div>
            </div>
          </div>

          {/* Peta Kawasan Section */}
          <div className="space-y-10 pt-10 border-t border-white/10">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold uppercase tracking-tighter text-white">Peta Kawasan</h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-light">
                Klik peta di bawah ini untuk melihat detail pembagian zona di dalam KKP Kepulauan Asia dan Ayau.
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
              <h2 className="text-4xl font-bold uppercase tracking-tighter text-white">Panduan Zonasi & Aktivitas</h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-light">
                KKP ini dikelola berdasarkan sistem zonasi untuk menjaga keseimbangan ekosistem dan penghidupan masyarakat.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-black/20">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-white/5 text-blue-300 uppercase tracking-widest text-[10px]">
                  <tr>
                    <th className="p-6 border-b border-white/10">Deskripsi Zona</th>
                    <th className="p-6 border-b border-white/10 text-center">Diving</th>
                    <th className="p-6 border-b border-white/10 text-center">Snorkeling</th>
                    <th className="p-6 border-b border-white/10 text-center">Memancing</th>
                    <th className="p-6 border-b border-white/10 text-center">Jangkar</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {zonasi.map((z, idx) => (
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
                <p>• Dilarang menggunakan Jetski atau kendaraan olahraga air bermotor lainnya di dalam KKP.</p>
                <p>• Sebisa mungkin gunakan tambatan (Mooring). Jika melepas jangkar terpaksa dilakukan, harus sesuai dengan <i>Code of Conduct</i>.</p>
                <p>• Wisatawan hanya diperkenankan memancing atas izin Kepala Adat dan di bawah pengawasan lokal.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}