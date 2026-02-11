import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Fish, BookOpen, Leaf, CloudSun, Shield, Check, X, Waves, Turtle, Bird, Ship, Home, Compass, CheckSquare, Cloud, Square, Sun, LifeBuoy, Sparkles, HeartPulse, BatteryCharging, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import LayananHero from "@/components/LayananHero";

const TimelineMarker = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.319 10.2334C23.1476 11.0089 23.8591 12.2984 24.1828 15.307C24.2578 15.7881 24.1828 15.757 23.817 15.7332C22.9519 15.596 22.288 15.7936 22.1819 16.9202C21.999 18.1182 22.3648 19.3107 22.9135 20.4685C23.5092 21.4488 23.8581 22.5591 23.9304 23.7039C23.9443 24.3092 23.8419 24.9115 23.6286 25.4781C23.0722 26.6899 22.7323 27.9898 22.6245 29.3189C22.2477 33.4616 23.1732 38.2078 22.7726 41.2074C22.3776 36.8562 22.041 34.5206 21.7082 31.9929C21.6478 30.5535 21.6076 29.1068 21.8398 27.5851C21.9185 26.2828 22.6684 25.1946 22.7031 23.9856C22.7092 23.4188 22.5932 22.8574 22.3629 22.3395C21.0826 19.4406 17.5874 16.3532 21.5381 10.2554C21.8234 9.81825 21.9752 9.90787 22.3154 10.2261L22.319 10.2334Z" fill="white" />
    <path d="M22.319 10.2317C23.1476 11.0072 23.8591 12.2966 24.1828 15.3053C24.2578 15.7864 24.1828 15.7553 23.817 15.7315C22.9519 15.5943 22.288 15.7918 22.1819 16.9185C21.999 18.1165 22.3648 19.309 22.9135 20.4667C23.5092 21.4471 23.8581 22.5573 23.9304 23.7022C23.9443 24.3075 23.8419 24.9098 23.6286 25.4763C23.0722 26.6882 22.7323 27.9881 22.6245 29.3172C22.2477 33.4599 23.1732 38.2061 22.7726 41.2148C22.3776 36.8618 22.041 34.5262 21.7082 31.9985C21.6478 30.5591 21.6076 29.1124 21.8398 27.5907C21.9185 26.2884 22.6684 25.2002 22.7031 23.9912C22.7092 23.4244 22.5932 22.863 22.3629 22.3451C21.0826 19.4462 17.5874 16.3588 21.5381 10.2628C21.8234 9.82385 21.9752 9.91347 22.3154 10.2317H22.319Z" stroke="white" strokeWidth="0.146319" />
    <path d="M24.3964 2.56201C24.903 3.19708 25.1767 3.98653 25.1719 4.79887C25.1719 6.67724 23.7673 8.20079 22.0352 8.20079C20.3032 8.20079 18.8985 6.67724 18.8985 4.79887C18.8938 3.98623 19.1682 3.19662 19.6758 2.56201C19.6758 2.56201 19.6758 2.55287 19.7124 2.53458C19.749 2.51629 19.7563 2.5236 19.7636 2.53458C20.6562 2.6809 21.1061 3.2991 21.0439 4.1258C21.042 4.14164 21.0349 4.15641 21.0238 4.16787L20.9854 4.1953C20.6372 4.42064 20.3703 4.7514 20.2235 5.13926C20.0767 5.52711 20.0578 5.95175 20.1695 6.35113C20.2812 6.75051 20.5176 7.1037 20.8443 7.35913C21.1711 7.61455 21.5709 7.75881 21.9854 7.77085C22.3999 7.78288 22.8075 7.66204 23.1484 7.426C23.4894 7.18995 23.746 6.85106 23.8807 6.45883C24.0153 6.0666 24.0211 5.64159 23.897 5.24587C23.773 4.85015 23.5256 4.50447 23.1911 4.25931C23.1697 4.24286 23.1517 4.22235 23.1381 4.19896C23.1259 4.17058 23.1191 4.1402 23.118 4.10934C23.0558 3.3119 23.4838 2.70833 24.3288 2.54555C24.3426 2.54259 24.357 2.54259 24.3708 2.54555C24.3837 2.55298 24.3949 2.56294 24.4038 2.57482L24.3964 2.56201Z" fill="white" />
    <path d="M24.3964 2.56201C24.903 3.19708 25.1767 3.98653 25.1719 4.79887C25.1719 6.67724 23.7673 8.20079 22.0352 8.20079C20.3032 8.20079 18.8985 6.67724 18.8985 4.79887C18.8938 3.98623 19.1682 3.19662 19.6758 2.56201C19.6758 2.56201 19.6758 2.55287 19.7124 2.53458C19.749 2.51629 19.7563 2.5236 19.7636 2.53458C20.6562 2.6809 21.1061 3.2991 21.0439 4.1258C21.042 4.14164 21.0349 4.15641 21.0238 4.16787L20.9854 4.1953C20.6372 4.42064 20.3703 4.7514 20.2235 5.13926C20.0767 5.52711 20.0578 5.95175 20.1695 6.35113C20.2812 6.75051 20.5176 7.1037 20.8443 7.35913C21.1711 7.61455 21.5709 7.75881 21.9854 7.77085C22.3999 7.78288 22.8075 7.66204 23.1484 7.426C23.4894 7.18995 23.746 6.85106 23.8807 6.45883C24.0153 6.0666 24.0211 5.64159 23.897 5.24587C23.773 4.85015 23.5256 4.50447 23.1911 4.25931C23.1697 4.24286 23.1517 4.22235 23.1381 4.19896C23.1259 4.17058 23.1191 4.1402 23.118 4.10934C23.0558 3.3119 23.4838 2.70833 24.3288 2.54555C24.3426 2.54259 24.357 2.54259 24.3708 2.54555C24.3837 2.55298 24.3949 2.56294 24.4038 2.57482L24.3964 2.56201Z" stroke="white" strokeWidth="0.166438" strokeLinecap="round" />
    <path d="M25.5862 16.6547C25.8038 15.0086 25.4654 13.4887 24.8418 12.0255C24.368 10.6172 24.5948 10.5769 25.5733 10.2166C29.63 8.98938 34.2684 11.7713 31.1335 13.635C30.4494 14.0831 29.588 14.1508 29.0228 13.732C28.5491 13.3662 28.6424 13.1046 28.9844 12.8815C29.246 12.726 29.63 12.6163 29.9227 12.4059C30.4714 11.9066 30.4074 11.4091 29.716 11.2427C29.5629 11.2047 29.4041 11.196 29.2478 11.2171C24.6113 11.9908 27.7005 17.3076 31.4133 15.1421C32.615 14.4105 33.866 13.3954 33.791 11.7091C33.7537 11.2051 33.5621 10.7249 33.2423 10.3337C31.77 8.5047 26.4165 8.48824 23.9327 8.84489C23.4517 8.90525 23.395 8.93085 23.7608 8.53762C24.2693 8.03465 24.6241 7.38353 25.3447 7.325C27.962 7.12747 36.6003 8.73149 35.8468 11.1659C34.4952 15.1366 30.4403 17.3552 27.4188 17.4375C26.4074 17.4375 25.4453 17.6094 25.5752 16.6565L25.5862 16.6547Z" fill="white" />
    <path d="M25.5862 16.6547C25.8038 15.0086 25.4654 13.4887 24.8418 12.0255C24.368 10.6172 24.5948 10.5769 25.5733 10.2185C29.63 8.98938 34.2684 11.7713 31.1335 13.635C30.4494 14.0831 29.588 14.1508 29.0228 13.732C28.5491 13.3662 28.6424 13.1046 28.9844 12.8815C29.246 12.726 29.63 12.6163 29.9227 12.4059C30.4714 11.9066 30.4074 11.4091 29.716 11.2427C29.5629 11.2047 29.4041 11.196 29.2478 11.2171C24.6113 11.9908 27.7005 17.3076 31.4133 15.1421C32.615 14.4105 33.866 13.3954 33.791 11.7109C33.754 11.2064 33.5624 10.7255 33.2423 10.3337C31.77 8.5047 26.4165 8.49007 23.9327 8.84672C23.4517 8.90525 23.395 8.93085 23.7608 8.53762C24.2693 8.03465 24.6241 7.38353 25.3447 7.325C27.962 7.12747 36.6003 8.73149 35.8468 11.1659C34.4952 15.1366 30.4403 17.3552 27.4188 17.4375C26.4074 17.4375 25.4453 17.6094 25.5752 16.6565L25.5862 16.6547Z" stroke="white" strokeWidth="0.146319" />
    <path d="M18.3414 16.6536C18.1238 15.0075 18.4621 13.4876 19.0858 12.0244C19.5577 10.6161 19.3327 10.5759 18.3542 10.2156C14.2975 8.98831 9.65922 11.7702 12.7941 13.6339C13.48 14.082 14.3414 14.1497 14.9048 13.7309C15.3803 13.3651 15.287 13.1035 14.945 12.8804C14.6816 12.7249 14.2975 12.6152 14.0067 12.4049C13.458 11.9055 13.5202 11.4081 14.2134 11.2416C14.3659 11.2037 14.5241 11.195 14.6798 11.216C19.3181 11.9897 16.2271 17.3066 12.5143 15.141C11.3145 14.4094 10.0634 13.3943 10.1366 11.708C10.1748 11.2043 10.3663 10.7243 10.6853 10.3326C12.1594 8.50363 17.5111 8.48716 19.9948 8.84382C20.4759 8.90417 20.5435 8.92978 20.1668 8.53655C19.6601 8.03357 19.3035 7.38245 18.5847 7.32393C15.9546 7.13371 7.31629 8.73042 8.06983 11.1575C9.42145 15.1337 13.4763 17.3523 16.4978 17.4346C17.5074 17.4346 18.4713 17.6065 18.3414 16.6536Z" fill="white" />
    <path d="M18.3414 16.6536C18.1238 15.0075 18.4621 13.4876 19.0858 12.0244C19.5577 10.6161 19.3327 10.5759 18.3542 10.2174C14.2975 8.98831 9.65922 11.7702 12.7941 13.6339C13.48 14.082 14.3414 14.1497 14.9048 13.7309C15.3803 13.3651 15.287 13.1035 14.945 12.8804C14.6816 12.7249 14.2975 12.6152 14.0067 12.4049C13.458 11.9055 13.5202 11.4081 14.2134 11.2416C14.3659 11.2037 14.5241 11.195 14.6798 11.216C19.3181 11.9897 16.2271 17.3066 12.5143 15.141C11.3145 14.4094 10.0634 13.3943 10.1366 11.7098C10.1744 11.2055 10.3659 10.7248 10.6853 10.3326C12.1594 8.50363 17.5111 8.48899 19.9948 8.84565C20.4759 8.90417 20.5435 8.92978 20.1668 8.53655C19.6601 8.03357 19.3035 7.38245 18.5847 7.32393C15.9546 7.13371 7.31629 8.73042 8.06983 11.1575C9.42145 15.1337 13.4763 17.3523 16.4978 17.4346C17.5074 17.4346 18.4713 17.6065 18.3414 16.6536Z" stroke="white" strokeWidth="0.146319" />
  </svg>
);

const langkahPembayaran = [
  {
    step: "01",
    title: "Isi dokumen kunjungan",
    description: "Wisatawan mengisi dokumen kunjungan sebagai syarat penerbitan izin masuk kawasan.",
  },
  {
    step: "02",
    title: "Invoice pembayaran via email",
    description: "Setelah dokumen diverifikasi, invoice pembayaran dikirim ke email wisatawan.",
  },
  {
    step: "03",
    title: "Bukti pembayaran via email",
    description: "Setelah pembayaran berhasil, bukti pembayaran dikirim melalui email.",
  },
  {
    step: "04",
    title: "Kartu TJL perorangan",
    description: "Kartu TJL perorangan dikirim melalui email sebagai bukti izin masuk kawasan.",
  },
];

const panduanLainnya = [
  {
    title: "Memahami Masyarakat",
    summary: "Hormati adat dan budaya lokal, serta ikuti arahan pengelola kawasan dan masyarakat setempat.",
    points: [
      "Pahami tata krama di kampung dan ikuti arahan tokoh adat.",
      "Minta izin sebelum mengambil foto atau dokumentasi kegiatan warga.",
      "Gunakan pemandu lokal bila tersedia untuk pengalaman yang lebih beretika.",
      "Hargai ruang privat dan area yang dianggap sakral oleh masyarakat.",
    ],
    icon: Users,
  },
  {
    title: "Memahami Biota Raja Ampat",
    summary: "Kenali satwa laut dan habitatnya. Jangan menyentuh, mengejar, atau memberi makan biota laut.",
    points: [
      "Jaga jarak aman dari biota, terutama pari manta, penyu, dan hiu karang.",
      "Hindari menyentuh karang atau berdiri di atas substrat.",
      "Jangan memberi makan satwa laut atau mengubah perilakunya.",
      "Gunakan fin dan peralatan snorkeling/diving dengan hati-hati.",
    ],
    icon: Fish,
  },
  {
    title: "Kode Etik Berwisata di Raja Ampat",
    summary: "Patuhi aturan berkunjung, batasi jejak ekologis, dan jaga kebersihan di setiap lokasi.",
    points: [
      "Ikuti aturan zonasi dan rambu yang berlaku di kawasan.",
      "Tidak mengambil flora/fauna atau benda alam sebagai suvenir.",
      "Gunakan tempat tambat resmi, jangan melempar jangkar sembarangan.",
      "Bawa kembali sampah pribadi dan kurangi plastik sekali pakai.",
    ],
    icon: BookOpen,
  },
  {
    title: "Pariwisata yang Bertanggung Jawab",
    summary: "Dukung ekonomi lokal, gunakan jasa pemandu resmi, dan pilih operator yang berkomitmen pada konservasi.",
    points: [
      "Pilih operator berizin yang memiliki komitmen konservasi.",
      "Prioritaskan produk dan layanan lokal untuk menguatkan ekonomi warga.",
      "Kurangi konsumsi sekali pakai dan hemat air selama perjalanan.",
      "Dukung program konservasi melalui donasi atau partisipasi edukasi.",
    ],
    icon: Leaf,
  },
  {
    title: "Musim dan Cuaca",
    summary: "Rencanakan perjalanan dengan fleksibel dan periksa prakiraan cuaca sebelum berangkat.",
    points: [
      "Cuaca laut dapat berubah cepat, siapkan rencana cadangan perjalanan.",
      "Ikuti arahan nakhoda/pemandu terkait keselamatan pelayaran.",
      "Bawa pelindung hujan dan perlindungan dari sinar matahari.",
      "Atur waktu aktivitas laut saat kondisi paling aman.",
    ],
    icon: CloudSun,
  },
  {
    title: "Kesehatan dan Keselamatan",
    summary: "Bawa perlengkapan pribadi, ikuti prosedur keselamatan, dan informasikan kondisi kesehatan Anda.",
    points: [
      "Siapkan obat pribadi dan perlengkapan P3K dasar selama perjalanan.",
      "Gunakan pelampung saat berada di kapal atau aktivitas air.",
      "Informasikan alergi/kondisi medis kepada pemandu atau operator.",
      "Pastikan komunikasi darurat dan kontak penting tersimpan.",
    ],
    icon: Shield,
  },
];

const etikaSosial = {
  title: "Memahami Masyarakat",
  label: "Etika Sosial",
  dianjurkan: [
    "Sapa dan minta izin sebelum memotret warga.",
    "Gunakan bahasa sopan dan hargai ruang privat.",
    "Dukung ekonomi lokal (homestay, pemandu, produk lokal).",
    "Patuhi aturan kampung/adat setempat.",
  ],
  dihindari: [
    "Memotret anak-anak tanpa izin orang tua.",
    "Masuk area sakral atau rumah warga tanpa izin.",
    "Menganggap semua area adalah spot wisata.",
    "Menawar berlebihan hingga merugikan warga.",
  ],
};

const biotaInfo = {
  title: "Memahami Biota Raja Ampat",
  label: "Biota Laut & Darat",
  cards: [
    {
      title: "Terumbu Karang",
      description: "Jangan diinjak/dipegang. Jaga buoyancy saat snorkeling/diving.",
      icon: Waves,
    },
    {
      title: "Manta Ray",
      description: "Jaga jarak, jangan mengejar. Ikuti instruksi pemandu.",
      icon: Fish,
    },
    {
      title: "Penyu",
      description: "Jangan sentuh/beri makan. Hindari flash foto.",
      icon: Turtle,
    },
    {
      title: "Burung & Satwa Darat",
      description: "Jangan memancing dengan makanan. Tetap di jalur.",
      icon: Bird,
    },
  ],
  rule: {
    title: "Aturan Emas",
    text: "Lihat, jangan sentuh. Ambil foto, jangan ambil apa pun.",
  },
};

const kodeEtik = {
  title: "Kode Etik Berwisata di Raja Ampat",
  label: "Kode Etik",
  items: [
    "Tidak membuang sampah, bawa pulang sampahmu.",
    "Tidak mengambil karang, pasir, kerang, atau biota.",
    "Tidak menyentuh atau mengejar satwa laut.",
    "Tidak menginjak karang dan jaga jarak saat snorkeling/diving.",
    "Gunakan sunscreen ramah laut (reef-safe) bila memungkinkan.",
    "Minta izin sebelum masuk kampung/area tertentu.",
    "Minta izin sebelum memotret orang.",
    "Hemat air dan listrik.",
    "Dukung ekonomi lokal.",
    "Patuhi instruksi pemandu dan rambu konservasi.",
  ],
};

const wisataHijau = {
  title: "Pariwisata yang Bertanggung Jawab",
  label: "Wisata Hijau",
  pillars: [
    {
      title: "Transport",
      description: "Gabung trip untuk mengurangi perjalanan terpisah.",
      icon: Ship,
    },
    {
      title: "Akomodasi",
      description: "Pilih homestay/eco-lodge yang mengelola sampah.",
      icon: Home,
    },
    {
      title: "Aktivitas",
      description: "Pilih operator yang patuh aturan konservasi.",
      icon: Compass,
    },
  ],
  checklist: [
    "Bawa botol minum isi ulang.",
    "Bawa dry bag untuk sampah.",
    "Bawa alat makan/tumbler bila perlu.",
    "Jangan beli souvenir dari biota laut.",
  ],
};

const musimCuaca = {
  title: "Musim dan Cuaca",
  label: "Musim & Cuaca",
  overview: [
    "Cuaca bisa berubah cepat, terutama di laut.",
    "Angin/gelombang dapat memengaruhi rute speedboat.",
    "Selalu cek info operator/pemandu sebelum berangkat.",
  ],
  checklist: [
    "Jas hujan tipis/ponco.",
    "Dry bag + pelindung HP.",
    "Topi/kacamata hitam.",
    "Baju cepat kering.",
    "Obat anti-mabuk (opsional).",
  ],
};

const kesehatanKeselamatan = {
  title: "Kesehatan dan Keselamatan",
  label: "Kesehatan",
  items: [
    {
      title: "Dehidrasi & panas",
      description:
        "Minum cukup air sepanjang hari. Gunakan pelindung matahari: topi, kacamata hitam, dan sunscreen ramah laut.",
      icon: Sun,
    },
    {
      title: "Keselamatan laut",
      description:
        "Pakai pelampung bila perlu, jangan berenang sendiri. Selalu ikuti arahan pemandu lokal.",
      icon: LifeBuoy,
    },
    {
      title: "Luka karang/tersengat",
      description:
        "Bilas dengan air bersih, jangan digaruk. Segera lapor pemandu untuk pertolongan pertama.",
      icon: Sparkles,
    },
    {
      title: "P3K mini",
      description:
        "Bawa plester, antiseptik, obat pribadi. Fasilitas medis terbatas di beberapa lokasi.",
      icon: HeartPulse,
    },
    {
      title: "Sinyal & listrik",
      description:
        "Beberapa area terbatas sinyal dan listrik. Siapkan peta offline dan power bank.",
      icon: BatteryCharging,
    },
  ],
};

export default function PanduanKunjungan() {
  const [openKesehatan, setOpenKesehatan] = useState(-1);
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/Layanan Kami.jpg')",
        backgroundPosition: "center 120%",
      }}
    >
      <Navbar />

      <LayananHero title="Layanan Kami" subtitle="Panduan Kunjungan" />

      <section className="bg-black/40 py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/80 rounded-3xl p-10 text-gray-200 space-y-16">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-4xl md:text-5xl font-bold"
            >
              Pembayaran Tiket Izin Masuk Kawasan
            </motion.h2>
            <p className="text-gray-300 text-lg max-w-4xl font-light">
              Berikut alur singkat pembelian tiket izin masuk kawasan yang dikirim melalui email secara bertahap.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-6 bottom-6 w-1 bg-white/20 -translate-x-1/2" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-6">
              <TimelineMarker />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 rotate-180">
              <TimelineMarker />
            </div>
            <div className="space-y-10">
              {langkahPembayaran.map((item, index) => {
                const isLeft = index % 2 === 0;
                const content = (
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
                      Step {item.step}
                    </span>
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                );

                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start"
                  >
                    <div className="w-1/2 pr-10 text-right">{isLeft ? content : null}</div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="h-10 w-10 rounded-full bg-white/10 border border-white/40 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{item.step}</span>
                      </div>
                    </div>

                    <div className="w-1/2 pl-10">{isLeft ? null : content}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-white/70 text-xs uppercase tracking-[0.4em]">{etikaSosial.label}</span>
              <h3 className="mt-4 text-4xl md:text-5xl font-bold text-white">{etikaSosial.title}</h3>
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Check className="h-5 w-5" />
                    </span>
                    <h4 className="text-white text-lg font-semibold">Yang Dianjurkan</h4>
                  </div>
                  <ul className="space-y-4 text-gray-200 text-sm leading-relaxed">
                    {etikaSosial.dianjurkan.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <X className="h-5 w-5" />
                    </span>
                    <h4 className="text-white text-lg font-semibold">Yang Dihindari</h4>
                  </div>
                  <ul className="space-y-4 text-gray-200 text-sm leading-relaxed">
                    {etikaSosial.dihindari.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-white/70 text-xs uppercase tracking-[0.4em]">{biotaInfo.label}</span>
              <h3 className="mt-4 text-4xl md:text-5xl font-bold text-white">{biotaInfo.title}</h3>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {biotaInfo.cards.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
                    >
                      <div className="mb-6 mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-white text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <span className="block text-white text-xs uppercase tracking-[0.3em]">{biotaInfo.rule.title}</span>
                <p className="mt-3 text-base font-medium leading-relaxed text-white/90">{biotaInfo.rule.text}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-white/70 text-xs uppercase tracking-[0.4em]">{kodeEtik.label}</span>
              <h3 className="mt-4 text-4xl md:text-5xl font-bold text-white">{kodeEtik.title}</h3>
              <div className="mt-10 max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <ul className="space-y-4 text-gray-200 text-base leading-relaxed">
                  {kodeEtik.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white text-xs font-semibold">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-white/70 text-xs uppercase tracking-[0.4em]">{wisataHijau.label}</span>
              <h3 className="mt-4 text-4xl md:text-5xl font-bold text-white">{wisataHijau.title}</h3>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {wisataHijau.pillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
                    >
                      <div className="mb-6 mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 max-w-2xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                <div className="flex items-center gap-3 text-white mb-4">
                  <CheckSquare className="h-5 w-5" />
                  <h4 className="text-lg font-semibold">Checklist Wisata Bertanggung Jawab</h4>
                </div>
                <ul className="space-y-3 text-gray-200 text-base leading-relaxed">
                  {wisataHijau.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-white/70 text-xs uppercase tracking-[0.4em]">{musimCuaca.label}</span>
              <h3 className="mt-4 text-4xl md:text-5xl font-bold text-white">{musimCuaca.title}</h3>
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                  <div className="flex items-center gap-3 mb-6 text-white">
                    <Cloud className="h-5 w-5" />
                    <h4 className="text-lg font-semibold">Gambaran Umum</h4>
                  </div>
                  <ul className="space-y-4 text-gray-200 text-base leading-relaxed">
                    {musimCuaca.overview.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl">
                  <div className="flex items-center gap-3 mb-6 text-white">
                    <Check className="h-5 w-5" />
                    <h4 className="text-lg font-semibold">Checklist Persiapan</h4>
                  </div>
                  <ul className="space-y-4 text-gray-200 text-base leading-relaxed">
                    {musimCuaca.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1.5 flex h-6 w-6 items-center justify-center rounded-md border border-white/20 bg-white/5 text-white text-xs">
                          <Square className="h-3 w-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-white/70 text-xs uppercase tracking-[0.4em]">{kesehatanKeselamatan.label}</span>
              <h3 className="mt-4 text-4xl md:text-5xl font-bold text-white">{kesehatanKeselamatan.title}</h3>
              <div className="mt-10 space-y-4 text-left max-w-4xl mx-auto">
                {kesehatanKeselamatan.items.map((item, index) => {
                  const Icon = item.icon;
                  const isOpen = openKesehatan === index;
                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenKesehatan(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center gap-3 text-white">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="text-lg font-semibold">{item.title}</span>
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-white/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 text-gray-200 text-base leading-relaxed">{item.description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {panduanLainnya.slice(6).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex items-start gap-4 lg:w-1/3">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mt-2">{item.summary}</p>
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <ul className="space-y-3 text-gray-200 text-sm font-light leading-relaxed">
                        {item.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
