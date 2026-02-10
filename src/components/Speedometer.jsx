import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Speedometer({ value = 75 }) {
  // Animasi Angka
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + "%");

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value]);

  // Perhitungan Lingkaran (Setengah Lingkaran)
  const radius = 80;
  const circumference = radius * Math.PI; // Setengah keliling
  const dashOffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[240px] mx-auto group">
      <svg
        viewBox="0 0 200 120"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Lingkaran Abu-abu */}
        <path
          d="M20 100 A80 80 0 0 1 180 100"
          stroke="#E5E7EB"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Ticks / Garis Putus-putus Penanda */}
        <path
          d="M20 100 A80 80 0 0 1 180 100"
          stroke="white"
          strokeWidth="14"
          strokeDasharray="1, 10" // Membuat garis kecil-kecil
          className="opacity-50"
        />

        {/* Jalur Progress (Warna Utama) */}
        <motion.path
          d="M20 100 A80 80 0 0 1 180 100"
          stroke="url(#gradientGauge)" // Menggunakan Gradasi
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: dashOffset }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "circOut" }}
          style={{
            strokeDasharray: circumference,
          }}
        />

        {/* Definisi Gradasi Warna */}
        <defs>
          <linearGradient id="gradientGauge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
      </svg>

      {/* Angka di Tengah */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
        <motion.span className="text-5xl font-semibold text-[#004267] tracking-tighter">
          {rounded}
        </motion.span>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          Efektivitas
        </span>
      </div>
      
      {/* Efek Glow di bawah angka saat hover */}
      <div className="absolute bottom-4 w-20 h-4 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}