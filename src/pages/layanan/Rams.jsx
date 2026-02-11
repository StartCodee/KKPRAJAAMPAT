import { motion } from "framer-motion";
import { ShieldCheck, Anchor, Zap, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Rams() {
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/RAMS.png')" }}
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
            Layanan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mt-2 font-light italic"
          >
            Raja Ampat Mooring System
          </motion.p>
        </div>
      </section>

      <section className="bg-black/40 py-20 px-6 space-y-32 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/80 rounded-xl p-10 text-gray-200 space-y-24">
          {/* Deskripsi RAMS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="mb-24"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-white text-4xl md:text-5xl font-bold mb-8"
            >
              Apa itu Raja Ampat Mooring System?
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-gray-200 text-lg leading-relaxed text-justify font-light"
            >
              Raja Ampat Mooring System (RAMS) adalah sistem tambat labuh ramah lingkungan berupa pelampung tambat (mooring buoy) yang dipasang di kawasan konservasi perairan Raja Ampat. Sistem ini bertujuan melindungi terumbu karang dari kerusakan akibat jangkar kapal wisata, meningkatkan keamanan tambat, serta mendukung pariwisata berkelanjutan.
            </motion.p>
          </motion.div>

          {/* Kenapa itu Penting Section */}
          <div className="space-y-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white text-4xl font-bold text-center mb-12"
            >
              Kenapa itu penting?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Melindungi Ekosistem",
                  desc: "Mencegah kapal menjatuhkan jangkar di terumbu karang.",
                  icon: <ShieldCheck className="w-10 h-10 text-blue-400" />
                },
                {
                  title: "Keamanan Kapal",
                  desc: "Tambatan yang dirancang khusus lebih stabil dan aman dibanding jangkar.",
                  icon: <Anchor className="w-10 h-10 text-blue-400" />
                },
                {
                  title: "Kenyamanan Operasional",
                  desc: "Proses sandar lebih cepat dan minim risiko bagi kru kapal.",
                  icon: <Zap className="w-10 h-10 text-blue-400" />
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md text-center group"
                >
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quote / Warning Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-32 mb-32 relative"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-blue-400/20">
              <Quote size={80} fill="currentColor" />
            </div>
            <div className="bg-linear-to-br from-blue-900/40 to-black/40 border border-white/10 p-12 rounded-[3rem] text-center">
              <p className="text-gray-200 text-xl md:text-2xl font-light leading-relaxed italic max-w-4xl mx-auto">
                "Merusak karang adalah kejahatan di Raja Ampat dan akan mengakibatkan tindakan terhadap pelaku, yang, tergantung pada parahnya kerusakan dapat mengakibatkan denda hingga <span className="text-blue-400 font-bold">200 juta Rupiah Indonesia</span> per unit kerusakan, dan / atau hukuman penjara hingga <span className="text-blue-400 font-bold">sepuluh tahun</span>."
              </p>
            </div>
          </motion.div>

          {/* Peta RAMS Section */}
          <div className="space-y-12">
            <h2 className="text-white text-4xl font-bold text-center">Peta RAMS</h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-4 rounded-[3rem] shadow-2xl overflow-hidden aspect-video md:aspect-21/9"
            >
              {/* Tempatkan Iframe Peta atau Image Peta di sini */}
              <div className="w-full h-full bg-gray-200 rounded-[2.5rem] flex items-center justify-center relative group cursor-crosshair">
                <img
                  src="/images/map-placeholder.jpg"
                  alt="Peta RAMS"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#004267]/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-8 right-8 bg-[#004267] text-white px-6 py-3 rounded-2xl text-xs font-bold tracking-widest uppercase shadow-xl">
                  Interaktif Map
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
