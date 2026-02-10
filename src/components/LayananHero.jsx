import { motion } from "framer-motion";

export default function LayananHero({ title, subtitle }) {
  return (
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
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl mt-2 font-light italic"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
