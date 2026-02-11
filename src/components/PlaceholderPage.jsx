import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function PlaceholderPage({ title, subtitle, description }) {
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Foto 4-1 oleh Nikka Gunadharma.jpg')" }}
    >
      <Navbar />

      <section className="relative h-[60vh] flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            {title}
          </motion.h1>
          {subtitle ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl mt-2 font-light italic"
            >
              {subtitle}
            </motion.p>
          ) : null}
        </div>
      </section>

      <section className="bg-black/40 py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/80 rounded-xl p-10 text-gray-200 space-y-6 text-center">
          <p className="text-lg leading-relaxed max-w-4xl mx-auto font-light">
            {description || "Halaman ini sedang dalam pengembangan. Silakan kembali lagi nanti."}
          </p>
        </div>
      </section>
    </main>
  );
}
