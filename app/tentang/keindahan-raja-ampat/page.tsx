"use client";
import { motion } from "framer-motion";
import Navbar from "@/app/Component/Navbar";
import CornerSVG from "@/app/Component/CornerSVG";

export default function Keindahan() {
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
            Tentang
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl mt-2 font-light italic"
          >
            Keindahan Raja Ampat
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
                Memesona daratannya,<br />menakjubkan lautannya
              </h2>
              <p className="text-gray-200 leading-relaxed text-justify">
                Terletak di barat laut Pulau Papua, ada lebih dari 1.500 pulau dengan empat pulau besar di Raja Ampat, yaitu Salawati, Waigeo, Batanta, dan Misool. Sebagian pulau di Raja Ampat terbentuk dari gugusan atau formasi batu, dan hampir semuanya masih rapat akan hutan tropis dataran rendah dengan keanekaragaman hayati yang tinggi, termasuk beberapa jenis yang endemik seperti Cendrawasih Merah, Cendrawasih Botak, dan Kuskus Waigeo.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 8-1 oleh Abdi Hasan.JPG" alt="Manta Ray" className="rounded-xl shadow-2xl border-4 border-white/10 w-full object-cover relative z-20" />
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
                Beberapa sungai dan air terjun di Raja Ampat kini berkembang menjadi destinasi wisata yang dikelola oleh masyarakat lokal, seperti air terjun War Inkabom di Pulau Batanta atau Malol di Pulau Misool. Sungai di Raja Ampat juga menjadi tempat berenang yang kini populer, salah satunya adalah Kalibiru di Teluk Mayalibit. Selain sungai dan air terjun, di Misool juga terdapat Danau Lenmakana; habitat bagi ubur-ubur yang tak menyengat.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 5-1 oleh Rens Lewerissa.JPG" alt="Waterfall" className="rounded-xl shadow-2xl border-4 border-white/10 w-full object-cover relative z-20" />
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
                Di pesisirnya, sebagian besar pulau di Raja Ampat memiliki pantai berpasir putih; di beberapa kampung pesisir di Kepulauan Ayau pasir putihnya begitu halus menyerupai terigu. Hutan mangrove yang masih utuh dapat ditemui empat pulau besar di Raja Ampat, sementara padang lamun dapat ditemukan di beberapa lokasi di Misool dan di beberapa pulau kecil.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 6-3 oleh Rens Lewerissa.JPG" alt="Coastal View" className="rounded-xl shadow-2xl border-4 border-white/10 w-full object-cover relative z-20" />
              </div>
            </div>
          </motion.section>
        </section>

        <section className="max-w-7xl mx-auto px-8 pb-20">
          <div className="bg-[#004267]/80 rounded-xl p-10 text-center text-gray-200 space-y-8">
            <p className="text-lg leading-relaxed max-w-5xl mx-auto font-light">
              75% jenis terumbu karang yang ada di dunia dapat ditemukan di bawah permukaan laut Raja Ampat, menjadikannya ‘rumah’ bagi lebih dari 1.600 jenis ikan karang, 699 jenis moluska, setidak-tidaknya 15 jenis mamalia laut, 5 jenis penyu, dan beragam spesies penting (focal) seperti pari dan hiu. Raja Ampat adalah satu dari sedikit lokasi di dunia yang mana pari manta karang dan pari manta oseanik berbagi habitat yang sama.
            </p>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest opacity-60">Baca buku ini sebelum kamu mengunjungi Raja Ampat!</p>
              <button className="bg-white text-[#004267] px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
                Unduh Buku Etika Berwisata di Raja Ampat
              </button>
            </div>
          </div>
        </section>

        {/* WELCOME FOOTER */}
        <section className="pb-32 text-center">
          <h2 className="text-white text-5xl font-bold tracking-tight">
            Selamat datang di Raja Ampat.
          </h2>
        </section>
      </section>
    </main>
  );
}
