"use client";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/app/Component/Navbar";
import {
  ShieldCheck,
  Settings2,
  Activity,
  Users,
  FilePieChart,
  LayoutDashboard,
  ArrowRight,
  Download
} from "lucide-react";

export default function TugasPokokDanFungsi() {
  const functions = [
    {
      title: "Perencanaan & Teknis",
      desc: "Menyusun program kerja, juknis, dan prosedur perlindungan serta pelestarian kawasan.",
      icon: <Settings2 className="w-6 h-6" />,
    },
    {
      title: "Jaga Laut & Pengawasan",
      desc: "Pemantauan aktivitas pariwisata dan perikanan serta penegakan aturan zonasi di lapangan.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Pemantauan Ekologis",
      desc: "Monitoring habitat, biota laut, dan inisiatif ilmuwan warga (citizen science).",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Kemitraan & Kolaborasi",
      desc: "Pengembangan kerja sama dengan pemangku kepentingan untuk perlindungan sumber daya hayati.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Administrasi & Pelaporan",
      desc: "Penyelenggaraan tugas keuangan, kepegawaian, humas, dan pelaporan berkala ke Dinas P2KP.",
      icon: <FilePieChart className="w-6 h-6" />,
    }
  ];

  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/pengelolaan-kawasan/Foto 05 oleh Nikka Gunadharma.JPG')" }}
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
            Tugas Pokok dan Fungsi
          </motion.p>
        </div>
      </section>


      <section className="bg-black/40 py-20 px-6 space-y-32 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/80 rounded-xl p-10 text-gray-200 space-y-24">
          {/* 1. Main Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#3B99AA]/20 border border-white/10 rounded-[3rem] p-10 md:p-16 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <ShieldCheck size={200} className="text-blue-400" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-6">Tugas Utama SUOP</h2>
              <h3 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-8">
                Melaksanakan tugas teknis perlindungan, pemanfaatan, dan pelestarian KKP Kepulauan Raja Ampat.
              </h3>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                Berdasarkan Rencana Strategis 2024-2029, BLUD UPTD membantu Kepala Dinas P2KP Papua Barat Daya dalam menjaga integritas ekosistem laut kelas dunia.
              </p>

              <motion.a
                href="/pengelolaan-kawasan\tugas-pokok-dan-fungsi\Rencana Strategis SUOP KKP Kepulauan Raja Ampat Tahun 2024-2028.pdf"
                whileHover={{ scale: 1.05 }}
                target="_blank"
                className="mt-10 inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all"
              >
                <Download size={18} />
                RENSTRA 2024-2029 (PDF)
              </motion.a>
            </div>
          </motion.div>

          {/* 2. Functions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {functions.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#3B99AA]/20 border border-white/5 p-8 rounded-[2.5rem] hover:bg-[#3B99AA]/40 transition-all duration-500"
              >
                <div className="bg-blue-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <div className="text-blue-400">{f.icon}</div>
                </div>
                <h4 className="text-white text-xl font-bold mb-4">{f.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}

            {/* 3. Dashboard Link Card (Special Design) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-blue-600 to-blue-900 p-8 rounded-[2.5rem] flex flex-col justify-between text-white shadow-2xl shadow-blue-900/40 relative overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 opacity-20 group-hover:rotate-12 transition-transform duration-700">
                <LayoutDashboard size={150} />
              </div>

              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-2">Data & Informasi</h4>
                <p className="text-blue-100 text-sm font-light opacity-80">
                  Akses dashboard layanan kami untuk melihat data real-time aktivitas kawasan.
                </p>
              </div>

              <button className="relative z-10 mt-8 w-fit flex items-center gap-3 bg-white text-blue-900 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:gap-5 transition-all">
                Buka Dashboard <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </main >
  );
}
