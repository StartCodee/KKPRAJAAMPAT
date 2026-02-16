import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CornerSVG from "@/components/CornerSVG";

export default function SosialBudaya() {
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
      heroSub: "Sosial Budaya",
      sec1Desc: "Proses perpindahan dan permukiman menyiratkan perpaduan hingga menjadikan Raja Ampat unik, yang merupakan rumah bagi manusia dengan beragam adat dan budaya, mulai dari masyarakat setempat–termasuk yang berasal dari daerah lain di Pulau Papua, masyarakat dari belahan lain Indonesia, hingga kepada warga negara asing yang berdatangan seiring dengan berkembangnya industri pariwisata.",
      sec1Cap: "Salah satu tetua Suku Maya di Teluk Mayalibit di tengah prosesi adat untuk melindungi kawasan lautnya.",
      sec2Desc: "Proses ratusan tahun tersebut juga memengaruhi kepercayaan asli–yaitu animisme dan dinamisme yang khas seperti daerah lainnya di Papua maupun Indonesia bagian timur pada umumnya–masyarakat Raja Ampat. Aktivitas perdagangan lazimnya diiringi dengan syiar Islam, sementara orang Eropa datang membawa ajaran Kristen. Sekarang, sebagian besar masyarakat di Raja Ampat memeluk Kristen, sementara sebagian lagi adalah muslim.",
      sec2Cap: "Tari Lelayon yang dipertunjukkan kelompok penari dari Kepulauan Misool. Masyarakat dari Maluku Utara diperkirakan telah berlayar ke Raja Ampat sejak tahun 1400-an.",
      sec3Desc1: "Meskipun Bahasa Indonesia merupakan bahasa bagi semua warga Raja Ampat, namun pada umumnya masyarakat Raja Ampat juga menguasai bahasa daerah yang jumlahnya cukup banyak.",
      sec3Desc2: "Masyarakat di Pulau Waigeo bagian tengah dan bagian timur Teluk Mayalibit berbicara Bahasa Ambel, Bahasa Biak dikuasai oleh masyarakat Suku Biak yang sudah mendiami Raja Ampat selama ratusan tahun, hingga Bahasa Ma’ya bagi sebagian penduduk di kampung-kampung di Teluk Kabui, dan bahasa daerah lainnya, termasuk bahasa daerah penduduk yang berasal dari daerah lain di Indonesia selain Papua.",
      sec3Cap: "Suling merupakan alat musik utama dalam Suling Tambur yang lazim dipertunjukkan oleh masyarakat adat Raja Ampat dalam kesempatan tertentu.",
      sec4Desc: "Masyarakat adat di Raja Ampat, seperti halnya dengan daerah lainnya di Pulau Papua, mendasari kepemilikan atas tanah dan air–baik di darat maupun di laut–secara turun temurun berdasarkan informasi yang disampaikan secara lisan melalui para tetua adat, yang biasanya adalah anak laki-laki tertua dari marga pemilik, dan lazimnya berdomisili di kampung induk–atau ‘kampung tua.’",
      sec4Cap: "Masyarakat adat di Pulau Salawati menyelenggarakan prosesi adat untuk melindungi tiga biota laut, yaitu teripang, kerang, dan lobster, sekaligus melarang penggunaan alat tangkap perikanan yang merusak.",
      sec5Desc: "Entitas adat di Raja Ampat juga mengurusi hal-hal terkait dengan pengelolaan sumber daya alam hayati yang merupakan komoditas bernilai tinggi sekaligus penting bagi penghidupan masyarakat, perusakan lingkungan yang dilakukan oleh orang dari luar komunitas, hingga kepada hibah pakai untuk tujuan-tujuan yang dinilai penting bagi kepentingan umum.",
      sec5Cap: "Kerja sama antara masyarakat, pemerintah serta pengelola kawasan adalah kunci dalam mengelola KKP Kepulauan Raja Ampat."
    },
    EN: {
      heroTitle: "About",
      heroSub: "Sociocultural",
      sec1Desc: "The migration and settlement process implies assimilation, which makes Raja Ampat unique: a home for people with various customs and cultures, including Indigenous Papuans, people from other parts of Papua Island, people from different areas in Indonesia, and foreigners who came with the development of the tourism industry.",
      sec1Cap: "One of the Maya Tribe’s elders in Mayalibit Bay amidst a traditional procession to protect their ocean.",
      sec2Desc: "That hundreds of years' process has influenced the Raja Ampat’s Indigenous belief system as well, with unique animism and dynamism, similarities found in other communities in Papua and the eastern part of Indonesia. Europeans introduced Christianity, while Muslim traders introduced Islam. Nowadays, the majority of people in Raja Ampat are Christians, while some others are Muslims.",
      sec2Cap: "The Lelayon dance performed by a troubadour from Misool Island. People from North Maluku were considered to have sailed to Raja Ampat since the 1400s.",
      sec3Desc1: "People in Raja Ampat speak Bahasa Indonesia, but they also typically speak other local languages. Communities in central Waigeo Islands and eastern Mayalibity Bay speak Ambel, while Biak is spoken by the Biak Tribe, which has lived in Raja Ampat for hundreds of years. The Ma’ya Language is spoken by some communities in Kabui Bay. There are many other local languages, including those spoken by communities originating from different parts of Indonesia.",
      // sec3Desc2: "Communities in central Waigeo and eastern Mayalibit Bay speak Ambel; the Biak language is spoken by the Biak people who have inhabited Raja Ampat for centuries; while the Ma’ya language is used by residents in the villages of Kabui Bay, among many other local dialects brought by migrants from across the Indonesian archipelago.",
      sec3Cap: "Flute, or ‘Suling’ in Bahasa Indonesia, is the main instrument in Suling Tambur, which is commonly performed by Raja Ampat’s Indigenous people for specific occasions.",
      sec4Desc: "Indigenous people in Raja Ampat, similar to other areas in Papua Island, based their ownership in land and water, both terrestrial and ocean, on hereditary rights passed on verbally by the elders, which usually is the oldest son of the owner families, and is usually domiciled in the main or ‘old’ village.",
      sec4Cap: "Indigenous community in Salawati Island organised a customary procession to protect three marine biota, sea cucumber, seashell and lobster, and banned all destructive fishing gears.",
      sec5Desc: "Customary entities in Raja Ampat also take care of natural resource management issues, which are essential and high-value commodities for the Indigenous people’s livelihood, address environmental degradation caused by outsiders, and grant a piece of their ownership for the community’s interests.",
      sec5Cap: "The collaboration among communities, the government, and the management authority is key to managing Raja Ampat MPAs."
    }
  };

  const t = content[lang];
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
              <p className="text-gray-200 leading-relaxed text-justify">
                {t.sec1Desc}
              </p>
            </motion.div>

            <div className="md:w-1/2 flex flex-col items-center justify-center"> {/* Gambar Diam */}
              <div className="w-1/2 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 1-2 oleh Nikka Gunadharma.jpg" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 h-full object-cover relative z-20" />
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
                <img src="/images/Foto 2-4 oleh Yakonias Thonak.jpg" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
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
                {t.sec3Desc1}
              </p>
              <p className="text-gray-200 leading-relaxed text-justify">
                {t.sec3Desc2}
              </p>
            </motion.div>

            <div className="md:w-1/2 flex flex-col items-center justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 4-3 oleh Nikka Gunadharma.jpg" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
              </div>
              <div className="w-3/4 px-8">
                <p className="mt-4 text-sm opacity-60 italic text-center font-light">
                  {t.sec3Cap}
                </p>
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
                {t.sec4Desc}
              </p>
            </motion.div>

            <div className="md:w-1/2 flex flex-col items-center justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 1-4 oleh Nikka Gunadharma.jpg" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
              </div>
              <div className="w-3/4 px-8">
                <p className="mt-4 text-sm opacity-60 italic text-center font-light">
                  {t.sec4Cap}
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
                {t.sec5Desc}
              </p>
            </motion.div>

            <div className="md:w-1/2 flex flex-col items-center justify-center"> {/* Gambar Diam */}
              <div className="w-3/4 relative">
                {/* SVG di Sudut Gambar */}
                <CornerSVG className="-scale-x-100 -top-2 -left-2 flip" />
                <CornerSVG className="-top-2 -right-2" />
                <CornerSVG className="-bottom-2 -left-2 rotate-180" />
                <CornerSVG className="-scale-x-100 -bottom-2 -right-2 rotate-180" />
                <img src="/images/Foto 6-1 oleh Rens Lewerissa.JPG" className="rounded-xl shadow-2xl border-4 border-[#3B99AA]/80 w-full object-cover relative z-20" />
              </div>
              <div className="w-3/4 px-8">
                <p className="mt-4 text-sm opacity-60 italic text-center font-light">
                  {t.sec5Cap}
                </p>
              </div>
            </div>
          </motion.section>
        </section>
      </section>
    </main>
  );
}
