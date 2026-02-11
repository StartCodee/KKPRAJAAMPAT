import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import {
  LogIn,
  RefreshCcw,
  LogOut,
  BarChart3
} from "lucide-react";
import Speedometer from "@/components/Speedometer";

export default function Evika() {
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Foto 7-2 oleh Nikka Gunadharma.jpg')" }}
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
            Evaluasi Efektivitas Pengelolaan Kawasan Konservasi
          </motion.p>
        </div>
      </section>


      <section className="bg-black/40 py-20 px-6 space-y-32 md:px-20 backdrop-blur-sm">
        <div className="bg-[#194484]/80 rounded-xl p-10 text-gray-200 space-y-24">
          {/* Statistik & Siapa Kami */}
          <section className="max-w-7xl mx-auto py-24 px-8 space-y-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2 // Memberikan efek muncul berurutan antar elemen
                  }
                }
              }}
              className="flex flex-col md:flex-row gap-16 items-start"
            >
              <div className="space-y-6">
                <motion.h2 variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }} className="text-white text-5xl font-bold">
                  Apa itu EVIKA?
                </motion.h2>
                <motion.p variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }} className="text-gray-200 text-lg leading-relaxed text-justify">
                  Evika adalah singkatan dari Evaluasi Efektivitas Pengelolaan Kawasan Konservasi, yang merupakan perangkat ukur yang bertujuan untuk menilai “efektivitas pengelolaan kawasan” yang “mempunyai standar yang sama dan layak untuk dijadikan acuan” untuk meningkatkan “kualitas pengelolaan, kualitas kinerja, kualitas perencanaan, dan menjadi sistem pemantauan pengelolaan kawasan konservasi bagi pengambil kebijakan, SUOP dan pemangku kepentingan terkait” (disadur dari Pedoman Teknis EVIKA).
                </motion.p>
              </div>
            </motion.div>

            {/* Aspek Penilaian */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <motion.h2 variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }} className="text-white text-4xl font-bold">
                  Aspek Penilaian EVIKA
                </motion.h2>
                <motion.p variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
                }} className="text-gray-300 mt-4 max-w-5xl mx-auto font-light leading-relaxed">
                  Penilaian EVIKA meliputi beberapa aspek, mulai dari tata kelola, sumber daya kawasan, target konservasi, sosial, ekonomi, dan budaya, yang lalu diperinci menjadi beragam kriteria dan indikator yang dinilai oleh sebuah tim yang dibentuk oleh Direktur Jenderal Pengelolaan Ruang Laut dan terdiri atas perwakilan dari Kementerian Kelautan dan Perikanan serta pemangku kepentingan lainnya.
                </motion.p>
              </div>

              {/* Grid Kartu Aspek */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Input", icon: <LogIn className="w-8 h-8 text-blue-400" />, items: ["Status kawasan", "Rencana zonasi", "Rencana Pengelolaan", "Sumber daya manusia", "Anggaran", "Sarana dan prasarana"] },
                  { title: "Proses", icon: <RefreshCcw className="w-8 h-8 text-green-400" />, items: ["SOP Pengelolaan", "Pengawasan", "Penjangkauan", "Kemitraan", "Pemantauan sumber daya", "Pengelolaan sarana", "Perizinan"] },
                  { title: "Output", icon: <LogOut className="w-8 h-8 text-yellow-400" />, items: ["Pemanfaatan terkendali", "Ancaman", "Tingkat kepatuhan", "Pengetahuan masyarakat", "Pemberdayaan masyarakat", "Data dan informasi"] },
                  { title: "Outcome", icon: <BarChart3 className="w-8 h-8 text-purple-400" />, items: ["Kondisi target konservasi", "Kondisi zona inti", "Kondisi sosial ekonomi", "Partisipasi masyarakat"] },
                ].map((aspek, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="bg-white/10 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/20 transition-all group"
                  >
                    <div className="mb-6">{aspek.icon}</div>
                    <h3 className="text-white text-2xl font-bold mb-6">{aspek.title}</h3>
                    <ul className="space-y-3 text-gray-300 text-sm font-light leading-snug">
                      {aspek.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Capaian Kami Section */}
            <div className="mt-40 border-t border-white/10 pt-24 space-y-16">
              <div className="flex justify-between items-end">
                <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Nilai Pengelolaan Kami – Tahun 2026</h2>
                <button className="text-blue-400 hover:text-white transition-colors text-sm font-medium tracking-widest flex items-center gap-2">
                  SELENGKAPNYA <span>→</span>
                </button>
              </div>

              {/* Grid Capaian */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: "Dasbor Input", val: 75, icon: <LogIn className="w-6 h-6 text-blue-400" /> },
                  { label: "Dasbor Proses", val: 82, icon: <RefreshCcw className="w-6 h-6 text-green-400" /> },
                  { label: "Dasbor Output", val: 68, icon: <LogOut className="w-6 h-6 text-yellow-400" /> },
                  { label: "Dasbor Outcome", val: 90, icon: <BarChart3 className="w-6 h-6 text-purple-400" /> },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="bg-white/10 p-8 rounded-3xl flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
                  >
                    {/* Logo/Icon di bagian atas label */}
                    <div className="w-full flex flex-col items-start gap-8 mb-8">
                      <div className="p-2 bg-white/20 rounded-lg">
                        {item.icon}
                      </div>
                      <span className="text 2xl text-white font-bold uppercase tracking-widest">
                        {item.label}
                      </span>
                    </div>

                    {/* Speedometer yang sudah kita buat sebelumnya */}
                    <Speedometer value={item.val} />

                    {/* Dekorasi Logo Transparan di Background Kartu (Opsional) */}
                    <div className="absolute -bottom-6 -right-6 opacity-[0.03] pointer-events-none">
                      <img
                        src="/images/[Logo] BLUD UPTD Pengelolaan KK di Perairan Kepulauan Raja Ampat Latest - Transparent.png"
                        className="w-32 h-auto"
                        alt=""
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="italic">Klik <a href="/Pedoman Teknis Evika.pdf" target="_blank" className="underline">di sini</a>  untuk mengunduh Pedoman Teknis Evika.</p>
            </div>
          </section>
        </div>
      </section>
    </main >
  );
}
