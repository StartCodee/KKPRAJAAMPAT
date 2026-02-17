"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Map as MapIcon, ArrowRight, Waves, Landmark, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export default function KawasanKelolaKami() {
    const [lang, setLang] = useState(localStorage.getItem('app_lang') || 'ID');

    useEffect(() => {
        const handleStorageChange = () => {
            setLang(localStorage.getItem('app_lang') || 'ID');
        };
        window.addEventListener('storage', handleStorageChange);
        const interval = setInterval(handleStorageChange, 500);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    const content = {
        ID: {
            heroTitle: "Kawasan Kelola Kami",
            heroSub: "Jejaring Kawasan Konservasi Perairan Kepulauan Raja Ampat",
            intro: "Kami mengelola tujuh area konservasi perairan dengan total luas hampir 2 juta hektar. Jejaring ini dirancang untuk melindungi keanekaragaman hayati laut sekaligus mendukung mata pencaharian masyarakat lokal secara berkelanjutan.",
            btnExplore: "Lihat Detail Area",
            footerNote: "Semua rincian koordinat dan aturan zonasi mengacu pada Keputusan Menteri Kelautan dan Perikanan Republik Indonesia.",
            areas: [
                { id: "I", name: "Kepulauan Ayau-Asia", size: "100.008,99 Ha", feat: "Pusat Pemijahan Kerapu Dunia", path: "/kawasan-kelola-kami/kepulauan-ayau-asia", tags: ["Atol", "Spawning Ground"] },
                { id: "II", name: "Teluk Mayalibit", size: "49.786,82 Ha", feat: "Habitat Endemik Lumba-lumba", path: "/kawasan-kelola-kami/teluk-mayalibit", tags: ["Budaya", "Endemik"] },
                { id: "III", name: "Selat Dampier", size: "353.440,54 Ha", feat: "Koridor Megabiodiversitas Laut", path: "/kawasan-kelola-kami/selat-dampier", tags: ["Wisata", "Arus Kaya"] },
                { id: "IV", name: "Kepulauan Misool", size: "348.518,74 Ha", feat: "Labirin Karst & Padang Lamun Dugong", path: "/kawasan-kelola-kami/kepulauan-misool", tags: ["Karst", "Dugong"] },
                { id: "V", name: "Kepulauan Kofiau-Boo", size: "137.318,73 Ha", feat: "Evolusi & Endemisme Spesies", path: "/kawasan-kelola-kami/kofiau-boo", tags: ["Evolusi", "Coral"] },
                { id: "VI", name: "Kepulauan Fam", size: "359.385,65 Ha", feat: "Ikon Wisata Berbasis Konservasi Rakyat", path: "/kawasan-kelola-kami/kepulauan-fam", tags: ["Ikonik", "Rakyat"] },
                { id: "VII", name: "Misool Utara", size: "308.852,00 Ha", feat: "Hutan Mangrove & Perlindungan Pesisir", path: "/kawasan-kelola-kami/misool-utara", tags: ["Mangrove", "Terbaru"] }
            ]
        },
        EN: {
            heroTitle: "Our MPA",
            heroSub: "Raja Ampat Islands Marine Protected Area Network",
            intro: "We manage seven marine conservation areas totaling nearly 2 million hectares. This network is designed to protect marine biodiversity while supporting the sustainable livelihoods of local communities.",
            btnExplore: "View Area Details",
            footerNote: "All coordinate details and zoning rules refer to the Decrees of the Minister of Marine Affairs and Fisheries of the Republic of Indonesia.",
            areas: [
                { id: "I", name: "Ayau-Asia Islands", size: "100,008.99 Ha", feat: "Global Grouper Spawning Hub", path: "/kawasan-kelola-kami/kepulauan-ayau-asia", tags: ["Atoll", "Spawning Ground"] },
                { id: "II", name: "Mayalibit Bay", size: "49,786.82 Ha", feat: "Endemic Dolphin Habitat", path: "/kawasan-kelola-kami/teluk-mayalibit", tags: ["Culture", "Endemic"] },
                { id: "III", name: "Dampier Strait", size: "353,440.54 Ha", feat: "Marine Megabiodiversity Corridor", path: "/kawasan-kelola-kami/selat-dampier", tags: ["Tourism", "Nutrient-Rich"] },
                { id: "IV", name: "Misool Islands", size: "348,518.74 Ha", feat: "Karst Labyrinth & Dugong Seagrass", path: "/kawasan-kelola-kami/kepulauan-misool", tags: ["Karst", "Dugong"] },
                { id: "V", name: "Kofiau-Boo Islands", size: "137,318.73 Ha", feat: "Evolutionary & Species Endemism", path: "/kawasan-kelola-kami/kofiau-boo", tags: ["Evolution", "Coral"] },
                { id: "VI", name: "Fam Islands", size: "359,385.65 Ha", feat: "Iconic Community-Based Conservation", path: "/kawasan-kelola-kami/kepulauan-fam", tags: ["Iconic", "Community"] },
                { id: "VII", name: "North Misool", size: "308,852.00 Ha", feat: "Mangrove Forest & Coastal Protection", path: "/kawasan-kelola-kami/misool-utara", tags: ["Mangrove", "Latest"] }
            ]
        }
    };

    const t = content[lang];

    return (
        <main
            className="min-h-screen bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/images/Foto 8-4 oleh Abdi Hasan.JPG')" }}
        >
            <Navbar color="#004267" />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex flex-col items-center justify-center text-gray-200 text-center px-6">
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight"
                    >
                        {t.heroTitle}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl mt-4 font-light italic opacity-90"
                    >
                        {t.heroSub}
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-black/40 py-20 px-6 md:px-20 backdrop-blur-sm">
                <div className="bg-[#004267]/90 rounded-[3rem] p-8 md:p-16 text-gray-200 shadow-2xl border border-white/10 max-w-7xl mx-auto space-y-20">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-20 mb-20 shadow-3xl overflow-hidden group"
                    >
                        {/* DECORATIVE BACKGROUND ELEMENTS */}
                        {/* Ikon Map di kiri bawah */}
                        <div className="absolute -left-10 -bottom-10 opacity-[0.1] text-white rotate-12 group-hover:opacity-[0.2] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                            <MapIcon size={320} strokeWidth={1} />
                        </div>

                        {/* Ikon Compass di kanan atas */}
                        <div className="absolute -right-16 -top-16 opacity-[0.1] text-blue-400 -rotate-12 group-hover:opacity-[0.2] group-hover:rotate-0 transition-all duration-1000 pointer-events-none">
                            <Compass size={400} strokeWidth={0.5} />
                        </div>

                        {/* Lingkaran Glow Lembut untuk efek kedalaman */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                        {/* CONTENT */}
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <motion.div
                                initial={{ scale: 0.95 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col items-center"
                            >

                                <p className="text-center text-gray-200 text-2xl md:text-3xl font-light leading-relaxed tracking-tight">
                                    {t.intro}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Grid Area */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.areas.map((area, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link
                                    to={area.path}
                                    className="group relative block h-[450px] rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-lg]"
                                >
                                    {/* GAMBAR LATAR BELAKANG - Menggunakan img tag agar lebih stabil daripada CSS bg-url */}
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src={area.image || "/images/Foto 8-4 oleh Abdi Hasan.JPG"}
                                            alt={area.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                                        />
                                        {/* Overlay Gradient agar teks terbaca jelas */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#001229] via-[#001229]/40 to-transparent" />
                                    </div>

                                    {/* WATERMARK DEKORATIF */}
                                    {/* <Landmark className="absolute -right-12 -top-12 w-64 h-64 text-white opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none" /> */}

                                    {/* KONTEN KARTU */}
                                    <div className="relative z-20 p-10 h-full flex flex-col justify-between">

                                        {/* Bagian Atas: Badge & Ikon Kompas */}
                                        <div className="flex justify-between items-start">
                                            <span className="bg-blue-600/30 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/10">
                                                Area {area.id}
                                            </span>
                                            <Compass
                                                size={24}
                                                className="text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45"
                                            />
                                        </div>

                                        {/* Bagian Bawah: Info Area */}
                                        <div>
                                            {/* Tags Kecil */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {area.tags.map((tag, i) => (
                                                    <span key={i} className="text-[8px] font-bold text-blue-300 uppercase border border-blue-400/30 px-2 py-1 rounded-md bg-blue-500/10 backdrop-blur-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <h2 className="text-3xl font-bold text-white leading-tight mb-2 group-hover:text-blue-300 transition-colors">
                                                {area.name}
                                            </h2>
                                            <p className="text-gray-300 text-xs font-light leading-relaxed mb-6 line-clamp-2 italic">
                                                {area.feat}
                                            </p>

                                            {/* Garis Pembatas & Footer Kartu */}
                                            <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                                <div className="flex items-center gap-2 text-gray-300 text-[10px] font-bold uppercase tracking-[0.1em]">
                                                    <MapIcon size={14} className="text-blue-400" />
                                                    {area.size}
                                                </div>

                                                {/* Tombol Panah yang muncul saat hover */}
                                                <div className="bg-white text-[#001229] p-3 rounded-2xl transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                                                    <ArrowRight size={18} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="pt-20 text-center border-t border-white/10"
                    >
                        <Landmark className="mx-auto text-blue-400 mb-6 opacity-50" size={40} />
                        <p className="text-gray-400 text-sm font-light italic max-w-2xl mx-auto">
                            {t.footerNote}
                        </p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}