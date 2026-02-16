import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Speedometer({ value = 75, lang = "ID" }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + "%");

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  const labels = {
    ID: "Efektivitas",
    EN: "Effectiveness"
  };
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[240px] mx-auto group">
      <svg
        viewBox="0 0 240 140"
        className="w-full h-auto drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Jalur Dasar (Garis-garis Biru Tua sesuai screenshot Anda) */}
        <path
          d="M20 120 A100 100 0 0 1 220 120"
          stroke="#002057"
          strokeWidth="16"
          strokeDasharray="2,12"
          fill="none"
        />

        {/* Jalur Animasi (Garis Putih yang Mengisi Sesuai Nilai) */}
        <motion.path
          d="M20 120 A100 100 0 0 1 220 120"
          stroke="#ffffff"
          strokeWidth="16"
          strokeDasharray="2, 12"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: value / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "circOut" }}
        />
      </svg>

      {/* Kontainer Angka - PERBAIKAN: Posisi Flex ditingkatkan agar tidak menumpuk */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
        <motion.span className="text-5xl font-black text-white tracking-tighter">
          {rounded}
        </motion.span>
        <span className="text-[10px] font-bold text-cyan-400/60 uppercase tracking-[0.2em] mt-1">
          {labels[lang]}
        </span>
      </div>

      {/* Glow Effect */}
      <div className="absolute bottom-6 w-24 h-4 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}