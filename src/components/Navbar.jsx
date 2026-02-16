import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

export default function Navbar({ color = '#004267' }) {
    // Ambil bahasa dari localStorage saat pertama kali load, jika tidak ada pakai 'ID'
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('app_lang') || 'ID';
    });

    // Update localStorage setiap kali bahasa diubah
    const handleLangChange = (newLang) => {
        setLang(newLang);
        localStorage.setItem('app_lang', newLang);
    };

    // State untuk kontrol buka/tutup dropdown
    const [openDropdown, setOpenDropdown] = useState(null);

    // Objek Data Menu (Terjemahan & Link)
    const menuData = {
        ID: {
            tentang: {
                label: "Tentang",
                items: [
                    { name: "Pengelolaan Kawasan", path: "/tentang/pengelolaan-kawasan" },
                    { name: "Keindahan Raja Ampat", path: "/tentang/keindahan-raja-ampat" },
                    { name: "Sejarah", path: "/tentang/sejarah" },
                    { name: "Sosial Budaya", path: "/tentang/sosial-budaya" },
                    { name: "Ancaman", path: "/tentang/ancaman" }
                ]
            },
            pengelolaan: {
                label: "Pengelolaan Kawasan",
                items: [
                    { name: "Dasar Hukum", path: "/pengelolaan-kawasan/dasar-hukum" },
                    { name: "Aturan dan Regulasi", path: "/pengelolaan-kawasan/aturan-dan-regulasi" },
                    { name: "Tugas Pokok dan Fungsi", path: "/pengelolaan-kawasan/tugas-pokok-dan-fungsi" },
                    { name: "EVIKA", path: "/pengelolaan-kawasan/evika" }
                ]
            },
            kawasan: {
                label: "Kawasan Kelola Kami",
                items: [
                    { name: "Area I Kepulauan Ayau-Asia", path: "/kawasan-kelola-kami/kepulauan-ayau-asia" },
                    { name: "Area II Teluk Mayalibit", path: "/kawasan-kelola-kami/teluk-mayalibit" },
                    { name: "Area III Selat Dampier", path: "/kawasan-kelola-kami/selat-dampier" },
                    { name: "Area IV Kepulauan Misool", path: "/kawasan-kelola-kami/kepulauan-misool" }
                ]
            },
            layanan: {
                label: "Layanan",
                items: [
                    { name: "Panduan Kunjungan", path: "/layanan/panduan-kunjungan" },
                    { name: "Marine Park Fee", path: "/layanan/marine-park-fee" },
                    { name: "Raja Ampat Mooring System", path: "/layanan/rams" },
                    { name: "SISPANDALWAS", path: "/layanan/sispandalwas" },
                    { name: "Kolaborasi", path: "/layanan/kolaborasi" }
                ]
            },
            informasi: {
                label: "Informasi Terkini",
                items: [
                    { name: "Berita dari Lapangan", path: "/informasi-terkini/berita" },
                    { name: "Kalender Kegiatan", path: "/informasi-terkini/kalender-kegiatan" }
                ]
            }
        },
        EN: {
            tentang: {
                label: "About",
                items: [
                    { name: "MPAs Management", path: "/tentang/pengelolaan-kawasan" },
                    { name: "The Beauty of Raja Ampat", path: "/tentang/keindahan-raja-ampat" },
                    { name: "History", path: "/tentang/sejarah" },
                    { name: "Sociocultural", path: "/tentang/sosial-budaya" },
                    { name: "Threats", path: "/tentang/ancaman" }
                ]
            },
            pengelolaan: {
                label: "MPAs Management",
                items: [
                    { name: "Legal Basis", path: "/pengelolaan-kawasan/dasar-hukum" },
                    { name: "Regulations", path: "/pengelolaan-kawasan/aturan-dan-regulasi" },
                    { name: "Tasks and Functions", path: "/pengelolaan-kawasan/tugas-pokok-dan-fungsi" },
                    { name: "EVIKA", path: "/pengelolaan-kawasan/evika" }
                ]
            },
            kawasan: {
                label: "Our MPA",
                items: [
                    { name: "Area I Ayau-Asia Islands", path: "/kawasan-kelola-kami/kepulauan-ayau-asia" },
                    { name: "Area II Mayalibit Bay", path: "/kawasan-kelola-kami/teluk-mayalibit" },
                    { name: "Area III Dampier Strait", path: "/kawasan-kelola-kami/selat-dampier" },
                    { name: "Area IV Misool Islands", path: "/kawasan-kelola-kami/kepulauan-misool" }
                ]
            },
            layanan: {
                label: "Our Services",
                items: [
                    { name: "Visit Guide", path: "/layanan/panduan-kunjungan" },
                    { name: "Marine Park Fee", path: "/layanan/marine-park-fee" },
                    { name: "Raja Ampat Mooring System", path: "/layanan/rams" },
                    { name: "SISPANDALWAS", path: "/layanan/sispandalwas" },
                    { name: "Collaboration", path: "/layanan/kolaborasi" }
                ]
            },
            informasi: {
                label: "Updates",
                items: [
                    { name: "News from the Field", path: "/informasi-terkini/berita" },
                    { name: "Activity Calendar", path: "/informasi-terkini/kalender-kegiatan" }
                ]
            }
        }
    };

    const t = menuData[lang];

    return (
        <nav style={{ backgroundColor: `${color}E6` }} className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-md py-4 shadow-2xl`}>
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-white">

                {/* LOGO */}
                <div className="text-xl font-bold tracking-[0.2em] cursor-pointer">
                    <img src="/images/[Logo] BLUD UPTD Pengelolaan KK di Perairan Kepulauan Raja Ampat Latest - Putih.png" className="h-15 w-auto" alt="Logo" />
                </div>

                {/* MENU UTAMA */}
                <ul className="hidden xl:flex gap-8 text-[10px] tracking-[0.2em] uppercase font-bold items-center">

                    {Object.keys(t).map((key) => (
                        <li
                            key={key}
                            className="relative py-2"
                            onMouseEnter={() => setOpenDropdown(key)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <div className={`hover:opacity-60 cursor-pointer transition-opacity ${openDropdown === key ? "border-b-2 border-white" : ""} pb-1 flex items-center gap-1`}>
                                {t[key].label}
                                <svg className={`w-3 h-3 transition-transform ${openDropdown === key ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                            </div>

                            <AnimatePresence>
                                {openDropdown === key && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        style={{ backgroundColor: `${color}F2` }}
                                        className="absolute top-full left-0 min-w-[240px] rounded-xl mt-2 py-4 shadow-2xl border border-white/10"
                                    >
                                        {t[key].items.map((item, idx) => (
                                            <li key={idx} className="hover:bg-black/20 transition-all">
                                                <Link to={item.path} className="block px-6 py-2.5 normal-case tracking-normal font-medium text-[12px] hover:translate-x-1 transition-transform">
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>

                {/* LANGUAGE TOGGLE */}
                <div className="flex gap-2 font-bold text-xs tracking-widest uppercase">
                    <span
                        onClick={() => handleLangChange('ID')}
                        className={`cursor-pointer px-2 py-1 rounded transition-all ${lang === 'ID' ? 'bg-white text-[#004267]' : 'hover:opacity-60'}`}
                    >
                        ID
                    </span>
                    <span className="opacity-40">|</span>
                    <span
                        onClick={() => handleLangChange('EN')}
                        className={`cursor-pointer px-2 py-1 rounded transition-all ${lang === 'EN' ? 'bg-white text-[#004267]' : 'hover:opacity-60'}`}
                    >
                        EN
                    </span>
                </div>
            </div>
        </nav>
    )
}
