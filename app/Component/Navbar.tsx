"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
    const [openTentang, setOpenTentang] = useState(false);
    const [openLayanan, setOpenLayanan] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-[#004267]/90 backdrop-blur-md py-4 shadow-2xl">
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-white">

                {/* LOGO */}
                <div className="text-xl font-bold tracking-[0.2em] cursor-pointer">
                    <img src="/images/[Logo] BLUD UPTD Pengelolaan KK di Perairan Kepulauan Raja Ampat Latest - Transparent.png" className="h-[60px] w-auto" alt="Logo" />
                </div>

                {/* MENU UTAMA */}
                <ul className="hidden xl:flex gap-10 text-[11px] tracking-[0.2em] uppercase font-medium items-center">

                    {/* DROPDOWN TENTANG */}
                    <li
                        className="relative py-2"
                        onMouseEnter={() => setOpenTentang(true)}
                        onMouseLeave={() => setOpenTentang(false)}
                    >
                        <div className="hover:opacity-60 cursor-pointer transition-opacity border-b-2 border-white pb-1 flex items-center gap-1">
                            Tentang
                            <svg className={`w-3 h-3 transition-transform ${openTentang ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <AnimatePresence>
                            {openTentang && (
                                <motion.ul
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 bg-[#004267] min-w-[220px] rounded-xl mt-2 py-4 shadow-2xl border border-white/10"
                                >
                                    <li className="hover:bg-black/40 transition-all cursor-pointer">
                                        <Link href="/tentang/pengelolaan-kawasan" className="block px-6 py-2 normal-case tracking-normal">Pengelolaan Kawasan</Link>
                                    </li>                                 
                                    <li className="hover:bg-black/40 transition-all cursor-pointer">
                                        <Link href="/tentang/keindahan-raja-ampat" className="block px-6 py-2 normal-case tracking-normal">Keindahan Raja Ampat</Link>
                                    </li>
                                     <li className="hover:bg-black/40 transition-all cursor-pointer">
                                        <Link href="/tentang/sejarah" className="block px-6 py-2 normal-case tracking-normal">Sejarah</Link>
                                    </li>
                                     <li className="hover:bg-black/40 transition-all cursor-pointer">
                                        <Link href="/tentang/sosial-budaya" className="block px-6 py-2 normal-case tracking-normal">Sosial Budaya</Link>
                                    </li>
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>

                    <li className="hover:opacity-60 cursor-pointer transition-opacity pb-1">Pengelolaan Kawasan</li>
                    <li className="hover:opacity-60 cursor-pointer transition-opacity pb-1 whitespace-nowrap">Kawasan Konservasi</li>

                    {/* DROPDOWN LAYANAN */}
                    <li
                        className="relative py-2"
                        onMouseEnter={() => setOpenLayanan(true)}
                        onMouseLeave={() => setOpenLayanan(false)}
                    >
                        <div className="hover:opacity-60 cursor-pointer transition-opacity pb-1 flex items-center gap-1">
                            Layanan
                            <svg className={`w-3 h-3 transition-transform ${openLayanan ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        <AnimatePresence>
                            {openLayanan && (
                                <motion.ul
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 bg-[#004267] min-w-[220px] rounded-xl mt-2 py-4 shadow-2xl border border-white/10"
                                >
                                    <li className="px-6 py-2 hover:bg-black/40 transition-all cursor-pointer normal-case tracking-normal">Izin Masuk (TARIF)</li>
                                    <li className="px-6 py-2 hover:bg-black/40 transition-all cursor-pointer normal-case tracking-normal">Penelitian</li>
                                    <li className="px-6 py-2 hover:bg-black/40 transition-all cursor-pointer normal-case tracking-normal">Pengaduan</li>
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>

                    <li className="hover:opacity-60 cursor-pointer transition-opacity pb-1">Publikasi</li>
                    <li className="hover:opacity-60 cursor-pointer transition-opacity pb-1">Kontak</li>
                </ul>

                {/* LANGUAGE */}
                <div className="font-bold text-xs tracking-widest cursor-pointer hover:bg-white hover:text-[#004267] px-3 py-1 border border-white/30 rounded transition-all">ID | EN</div>
            </div>
        </nav>
    )
}