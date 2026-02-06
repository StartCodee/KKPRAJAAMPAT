"use client";
import { motion } from "framer-motion";
import Navbar from "@/app/Component/Navbar";
import CornerSVG from "@/app/Component/CornerSVG";

export default function SosialBudaya() {
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Foto 1-1 oleh Nikka Gunadharma.jpg')" }}
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
            Sosial Budaya
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
              <p className="text-gray-200 leading-relaxed text-justify">
                Proses perpindahan dan permukiman menyiratkan perpaduan hingga menjadikan Raja Ampat unik, yang merupakan rumah bagi manusia dengan beragam adat dan budaya, mulai dari masyarakat setempat–termasuk yang berasal dari daerah lain di Pulau Papua, masyarakat dari belahan lain Indonesia, hingga kepada warga negara asing yang berdatangan seiring dengan berkembangnya industri pariwisata.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-1/2 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 1-2 oleh Nikka Gunadharma.jpg" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
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
                Proses ratusan tahun tersebut juga memengaruhi kepercayaan asli–yaitu animisme dan dinamisme yang khas seperti daerah lainnya di Papua maupun Indonesia bagian timur pada umumnya–masyarakat Raja Ampat. Aktivitas perdagangan lazimnya diiringi dengan syiar Islam, sementara orang Eropa datang membawa ajaran Kristen. Sekarang, sebagian besar masyarakat di Raja Ampat memeluk Kristen, sementara sebagian lagi adalah muslim.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 2-4 oleh Yakonias Thonak.jpg" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 h-full object-cover relative z-20" />
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
                Meskipun Bahasa Indonesia merupakan bahasa bagi semua warga Raja Ampat, namun pada umumnya masyarakat Raja Ampat juga menguasai bahasa daerah yang jumlahnya cukup banyak.
              </p>
              <p className="text-gray-200 leading-relaxed text-justify">
                Masyarakat di Pulau Waigeo bagian tengah dan bagian timur Teluk Mayalibit berbicara Bahasa Ambel, Bahasa Biak dikuasai oleh masyarakat Suku Biak yang sudah mendiami Raja Ampat selama ratusan tahun, hingga Bahasa Ma’ya bagi sebagian penduduk di kampung-kampung di Teluk Kabui, dan bahasa daerah lainnya, termasuk bahasa daerah penduduk yang berasal dari daerah lain di Indonesia selain Papua.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 4-3 oleh Nikka Gunadharma.jpg" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
              </div>
            </div>
          </motion.section>

          {/* Section 4: Teks Kanan, muncul dari arah foto di kiri (X diperbesar) */}
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
                Masyarakat adat di Raja Ampat, seperti halnya dengan daerah lainnya di Pulau Papua, mendasari kepemilikan atas tanah dan air–baik di darat maupun di laut–secara turun temurun berdasarkan informasi yang disampaikan secara lisan melalui para tetua adat, yang biasanya adalah anak laki-laki tertua dari marga pemilik, dan lazimnya berdomisili di kampung induk–atau ‘kampung tua.’
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 1-4 oleh Nikka Gunadharma.jpg" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
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
                Entitas adat di Raja Ampat juga mengurusi hal-hal terkait dengan pengelolaan sumber daya alam hayati yang merupakan komoditas bernilai tinggi sekaligus penting bagi penghidupan masyarakat, perusakan lingkungan yang dilakukan oleh orang dari luar komunitas, hingga kepada hibah pakai untuk tujuan-tujuan yang dinilai penting bagi kepentingan umum.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 6-1 oleh Rens Lewerissa.JPG" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
              </div>
            </div>
          </motion.section>
        </section>
      </section>
    </main>
  );
}
