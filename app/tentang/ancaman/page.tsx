"use client";
import { motion } from "framer-motion";
import Navbar from "@/app/Component/Navbar";
import CornerSVG from "@/app/Component/CornerSVG";
import Link from "next/link";

export default function Ancaman() {
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Foto 2-1 oleh Nikka Gunadharma.jpg')" }}
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
            Ancaman
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
                Sebelum membentuk dan mengelola kawasan-kawasan konservasi, ancaman terbesar yang terjadi di perairan Raja Ampat utamanya adalah aktivitas perikanan merusak dengan menggunakan bahan peledak dan potasium, serta penangkapan ikan berlebih yang dilakukan oleh kapal-kapal ikan besar–baik kapal berbendera Indonesia maupun bendera asing–yang sebagian berlabuh di Kota Sorong dan sekitarnya.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 0-1.JPG" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 h-full object-cover relative z-20" />
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
                Aktivitas pemanfaatan yang tidak berkelanjutan tersebut dampaknya masih dirasakan hingga sekarang, dan dapat dilihat dari puing terumbu karang yang rusak, yang tersebar di kawasan konservasi perairan Area III Selat Dampier, Area IV Kepulauan Misol, Area V Kepulauan Kofiau-Boo, Area VI Kepulauan Fam, dan Area VII Misool Utara, serta belum pulihnya populasi ikan target di perairan pesisir yang menyebabkan nelayan lokal mesti berlayar jauh dari perairan kampungnya
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 2-1 oleh Nikka Gunadharma.jpg" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
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
                Keberadaan pengelolaan kawasan-kawasan konservasi perairan di Raja Ampat dengan signifikan mengurangi aktivitas perikanan merusak dan penangkapan fauna laut yang penting dan/atau dilindungi, dan membatasi aktivitas perikanan berlebih yang kini sebagian besar masih dilakukan oleh kapal-kapal bagan, terutama di Area IV Kepulauan Misool dan Area VII Misool Utara. <Link href="/" className="underline font-bold">Klik di sini</Link> untuk memantau aktivitas pengawasan kami.
              </p>
            </motion.div>

            <div className="md:w-1/2 flex justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 5-1 oleh Nikka Gunadharma.jpg" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
              </div>
            </div>
          </motion.section>
        </section>
        <div className="bg-[#004267]/80 rounded-xl p-10 text-center text-gray-200 space-y-8 flex flex-col items-center">
          <p className="text-lg leading-relaxed max-w-5xl mx-auto font-light">
            Selain dari beragam aktivitas perikanan, dan seiring dengan berkembangnya industri pariwisata, laut Raja Ampat kini juga menghadapi ancaman dari aktivitas pariwisata yang tidak bertanggung jawab. Mulai dari konsentrasi aktivitas wisata yang melebihi kapasitas di satu destinasi wisata, perilaku pengunjung yang merusak, hingga kepada masalah volume dan pengelolaan sampah.
          </p>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest opacity-60">Baca buku ini sebelum kamu mengunjungi Raja Ampat!</p>
            <button className="bg-white text-2xl text-[#004267] px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors">
              Unduh Buku Etika Berwisata di Raja Ampat
            </button>
          </div>
          <p className="text-lg leading-relaxed max-w-5xl mx-auto font-light">
            Sebagai SUOP KKP Kepulauan Raja Ampat, kami menyadari kekurangan dan keterbatasan kami untuk memberikan solusi terhadap semua permasalahan yang dihadapi di dalam wilayah kelola kami. Oleh karena itu peran serta dari semua pemangku kepentingan, termasuk pengunjung, sangat kami harapkan. Mari bersama-sama mewujudkan laut Raja Ampat yang sehat melalui pengelolaan kolaboratif yang berkelanjutan.
          </p>
          <button className="flex gap-4 items-center bg-white text-2xl text-[#004267] px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#004267] w-10" viewBox="0 0 60 60">
              <path fillRule="evenodd" clipRule="evenodd" d="M46.8886 14.4856C42.6589 10.2739 37.0336 7.95331 31.0398 7.95117C18.6892 7.95117 8.63762 17.9461 8.63332 30.2318C8.63117 34.1592 9.66362 37.9926 11.6243 41.371L8.44531 52.9184L20.3233 49.8199C23.5957 51.5957 27.2807 52.5305 31.0302 52.5316H31.0398C43.3883 52.5316 53.4411 42.5355 53.4453 30.2499C53.4474 24.2957 51.1193 18.6983 46.8886 14.4866V14.4856ZM31.0398 48.7687H31.0323C27.6911 48.7677 24.4133 47.8744 21.5534 46.1874L20.8733 45.7857L13.8246 47.6244L15.7057 40.7897L15.2631 40.0889C13.3991 37.1401 12.4139 33.7318 12.4161 30.2329C12.4204 20.0221 20.7745 11.7141 31.0474 11.7141C36.0216 11.7162 40.6972 13.6447 44.2134 17.1459C47.7298 20.646 49.6647 25.3 49.6626 30.2478C49.6582 40.4597 41.3042 48.7677 31.0398 48.7677V48.7687ZM41.2547 34.8986C40.6949 34.6198 37.9426 33.2735 37.4289 33.0876C36.9154 32.9017 36.5427 32.8088 36.1698 33.3665C35.7971 33.9242 34.7238 35.1785 34.3972 35.5492C34.0706 35.921 33.7439 35.967 33.1842 35.6881C32.6246 35.4093 30.8207 34.8216 28.6817 32.9252C27.0176 31.4486 25.8937 29.626 25.5672 29.0682C25.2406 28.5106 25.5328 28.2092 25.8121 27.9325C26.0634 27.6826 26.3718 27.2819 26.6522 26.9571C26.9327 26.6323 27.0251 26.3994 27.2119 26.0286C27.3989 25.6568 27.3054 25.3321 27.1658 25.0532C27.0261 24.7743 25.9067 22.0338 25.4393 20.9195C24.9848 19.834 24.5229 19.9815 24.1802 19.9633C23.8536 19.9473 23.4808 19.9441 23.1069 19.9441C22.7331 19.9441 22.1271 20.083 21.6136 20.6407C21.1001 21.1983 19.6539 22.5456 19.6539 25.285C19.6539 28.0244 21.6598 30.6731 21.9402 31.0449C22.2206 31.4167 25.8883 37.0397 31.5039 39.4522C32.8394 40.0259 33.8826 40.3688 34.6958 40.6253C36.0367 41.0494 37.2571 40.9896 38.2218 40.8464C39.2973 40.6862 41.5341 39.4992 42.0003 38.1989C42.4666 36.8986 42.4666 35.7832 42.3269 35.5513C42.1873 35.3195 41.8134 35.1795 41.2537 34.9007L41.2547 34.8986Z" />
            </svg>
            Call Center
          </button>
        </div>
      </section >
    </main >
  );
}
