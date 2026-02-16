import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CornerSVG from "@/components/CornerSVG";

export default function Keindahan() {
  // 1. Logika Sinkronisasi Bahasa
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

  // 2. Data Terjemahan Konten
  const content = {
    ID: {
      heroTitle: "Tentang",
      heroSub: "Keindahan Raja Ampat",
      sec1Title: <>Memesona daratannya,<br />menakjubkan lautannya</>,
      sec1Desc: "Terletak di barat laut Pulau Papua, ada lebih dari 1.500 pulau dengan empat pulau besar di Raja Ampat, yaitu Salawati, Waigeo, Batanta, dan Misool. Sebagian pulau di Raja Ampat terbentuk dari gugusan atau formasi batu, dan hampir semuanya masih rapat akan hutan tropis dataran rendah dengan keanekaragaman hayati yang tinggi, termasuk beberapa jenis yang endemik seperti Cendrawasih Merah, Cendrawasih Botak, dan Kuskus Waigeo.",
      sec1Cap: "KKP Kepulauan Raja Ampat adalah habitat penting bagi populasi pari manta.",
      sec2Desc: "Beberapa sungai dan air terjun di Raja Ampat kini berkembang menjadi destinasi wisata yang dikelola oleh masyarakat lokal, seperti air terjun War Inkabom di Pulau Batanta atau Malol di Pulau Misool. Sungai di Raja Ampat juga menjadi tempat berenang yang kini populer, salah satunya adalah Kalibiru di Teluk Mayalibit. Selain sungai dan air terjun, di Misool juga terdapat Danau Lenmakana; habitat bagi ubur-ubur yang tak menyengat.",
      sec2Cap: "Air terjun War Inkabom yang berada di Kawasan Konservasi Area III Selat Dampier.",
      sec3Desc: "Di pesisirnya, sebagian besar pulau di Raja Ampat memiliki pantai berpasir putih; di beberapa kampung pesisir di Kepulauan Ayau pasir putihnya begitu halus menyerupai terigu. Hutan mangrove yang masih utuh dapat ditemui empat pulau besar di Raja Ampat, sementara padang lamun dapat ditemukan di beberapa lokasi di Misool dan di beberapa pulau kecil.",
      sec3Cap: "Salah satu pantai di Kepulauan Ayau.",
      bottomDesc: "75% jenis terumbu karang yang ada di dunia dapat ditemukan di bawah permukaan laut Raja Ampat, menjadikannya ‘rumah’ bagi lebih dari 1.600 jenis ikan karang, 699 jenis moluska, setidak-tidaknya 15 jenis mamalia laut, 5 jenis penyu, dan beragam spesies penting (focal) seperti pari dan hiu. Raja Ampat adalah satu dari sedikit lokasi di dunia yang mana pari manta karang dan pari manta oseanik berbagi habitat yang sama.",
      bookAlert: "Baca buku ini sebelum kamu mengunjungi Raja Ampat!",
      btnDownload: "Unduh Buku Etika Berwisata di Raja Ampat",
      welcome: "Selamat datang di Raja Ampat."
    },
    EN: {
      heroTitle: "About",
      heroSub: "The Beauty of Raja Ampat",
      sec1Title: <>Enchanting, above and below</>,
      sec1Desc: "Residing in the southwest of Papua Island with 1,500 islands and the four larger ones that are Salawati, Waigeo, Batanta and Misool. Some of the islands in Raja Ampat are composed of clusters of rock formations, covered in lush, lowland tropical forests with extraordinary biodiversity, and some are endemic, such as the Red Bird of Paradise, Wilson’s Bird of Paradise, and Waigeo Cuscus.",
      sec1Cap: "Raja Ampat MPAs are essential for the manta rays’ population.",
      sec2Desc: "Some of the rivers and waterfalls in Raja Ampat are now popular and managed by local communities as tourism destinations, such as War Inkabom waterfall on Batanta Island and Malol on Misool Island. One of the more popular rivers in Raja Ampat is the Kalibiru in Mayalibit Bay. Apart from rivers and waterfalls, there is Lenmakana Lake in Misool, which is home to stingless jellyfish.",
      sec2Cap: "War Inkabom waterfall is located within Area III Dampier Strait MPA.",
      sec3Desc: "Coastal areas in Raja Ampat typically have white-sand beaches; in several villages in the Ayau Islands, the sand is so fine it almost feels like wheat. Intact mangrove forests can be found in the four larger islands, while seagrass is located in some parts of Misool and the islets.",
      sec3Cap: "One of the beaches in Ayau Islands.",
      bottomDesc: "75% of the world’s coral reefs can be found beneath Raja Ampat waters, making it the ‘home’ for more than 1,600 species of reef fish, 699 molluscs, at least 15 species of marine mammals, 5 species of turtles, and focal species such as sharks and rays. Raja Ampat is one of the few places known where reef and oceanic mantas share a common habitat.",
      bookAlert: "Read this before visiting Raja Ampat.",
      btnDownload: "Download Traveling Etiquette in Raja Ampat",
      welcome: "Welcome to Raja Ampat."
    }
  };

  const t = content[lang];
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Foto 1-1 oleh Rens Lewerissa.JPG')" }}
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
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mt-2 font-light italic"
          >
            {t.heroSub}
          </motion.p>
        </div>
      </section>


      <section className="bg-black/40 py-20 px-6 space-y-32 md:px-20 backdrop-blur-sm">
        <section className="bg-[#004267]/80 rounded-xl p-10 text-gray-200 space-y-24">
          {/* Section 1: Teks Kiri, muncul dari arah foto (X diperbesar) */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 200 }, // Muncul dari jauh di kanan (posisi foto)
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="md:w-1/2 space-y-6"
            >
              <h2 className="text-white text-4xl font-bold leading-tight">
                {t.sec1Title}
              </h2>
              <p className="text-gray-200 leading-relaxed text-justify">
               {t.sec1Desc}
              </p>
            </motion.div>

            <div className="md:w-1/2 flex flex-col items-center justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 8-1 oleh Abdi Hasan.JPG" alt="Manta Ray" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
              </div>
              <div className="w-3/4 px-8">
                <p className="mt-4 text-sm opacity-60 italic text-center font-light">
                  {t.sec1Cap}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Teks Kanan, muncul dari arah foto di kiri (X diperbesar) */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row-reverse items-center gap-12"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -200 }, // Muncul dari jauh di kiri (posisi foto)
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="md:w-1/2 space-y-6"
            >
              <p className="text-gray-200 leading-relaxed text-justify">
                {t.sec2Desc}
              </p>
            </motion.div>

            <div className="md:w-1/2 flex flex-col items-center justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 5-1 oleh Rens Lewerissa.JPG" alt="Waterfall" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
              </div>
              <div className="w-3/4 px-8">
                <p className="mt-4 text-sm opacity-60 italic text-center font-light">
                  {t.sec2Cap}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Sama seperti Section 1 */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 200 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="md:w-1/2 space-y-6"
            >
              <p className="text-gray-200 leading-relaxed text-justify">
                {t.sec3Desc}
              </p>
            </motion.div>

            <div className="md:w-1/2 flex flex-col items-center justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 6-3 oleh Rens Lewerissa.JPG" alt="Coastal View" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
              </div>
              <div className="w-3/4 px-8">
                <p className="mt-4 text-sm opacity-60 italic text-center font-light">
                  {t.sec3Cap}
                </p>
              </div>
            </div>
          </motion.section>
        </section>

        <section className="max-w-7xl mx-auto px-8 pb-20">
          <div className="bg-[#004267]/80 rounded-xl p-10 text-center text-gray-200 space-y-8">
            <p className="text-lg leading-relaxed max-w-5xl mx-auto font-light">
              {t.bottomDesc}
            </p>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest opacity-60">{t.bookAlert}</p>
              <button className="bg-white text-[#004267] px-8 py-3 rounded-md font-bold hover:bg-gray-100 hover:scale-110 transition-colors">
                {t.btnDownload}
              </button>
            </div>
          </div>
          {/* WELCOME FOOTER */}
          <section className="py-24 text-center">
            <h2 className="text-white text-5xl font-bold tracking-tight">
              {t.welcome}
            </h2>
          </section>
        </section>


      </section>
    </main>
  );
}
