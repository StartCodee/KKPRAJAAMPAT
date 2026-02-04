"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/Component/Navbar";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Foto 4-1 oleh Nikka Gunadharma.jpg')" }}
    >
      <Navbar/>

      {/* Hero Section (Transparan, hanya konten) */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay gelap untuk keterbacaan */}
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tight"
          >
            Tentang
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mt-2 font-light italic"
          >
            Sejarah
          </motion.p>
        </div>
      </section>

    </main>
  );
}
