import { motion } from "framer-motion";
import { AlertCircle, Recycle, Users, Sparkles, CircleCheck, CircleX, AlertTriangle, Ban, Recycle as RecycleIcon, Truck, CheckCircle2, CalendarClock, PartyPopper, Shield, Compass, CheckSquare, LifeBuoy, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import LayananHero from "@/components/LayananHero";

const programSteps = [
  {
    title: "Survei & Pemetaan",
    description: "Identifikasi lokasi dan tingkat kepadatan bintang laut berduri.",
  },
  {
    title: "Koordinasi Tim",
    description: "Penentuan area kerja dan briefing keselamatan tim.",
  },
  {
    title: "Penanganan Terarah",
    description: "Pengambilan sesuai SOP oleh petugas terlatih.",
  },
  {
    title: "Pencatatan Data",
    description: "Jumlah, lokasi, waktu, dan dokumentasi lengkap.",
  },
  {
    title: "Monitoring",
    description: "Evaluasi berkala untuk mencegah kejadian berulang.",
  },
];

const programDos = [
  "Laporkan temuan ke pengelola/guide (lokasi + foto bila aman).",
  "Jaga jarak, ikuti arahan pemandu.",
];

const programDonts = [
  "Jangan memegang/mengambil sendiri (beracun/berisiko).",
  "Jangan menyebarkan lokasi sensitif tanpa konteks.",
];

const program02 = {
  title: "Program 02",
  subtitle: "Penanganan Sampah",
  challenge:
    "Sampah plastik dan residu mengancam biota laut, merusak estetika alam, dan membahayakan kesehatan ekosistem Raja Ampat. Penanganan yang terkoordinasi dari sumber hingga pengolahan adalah kunci solusi.",
  phases: [
    {
      title: "Pencegahan di Sumber",
      items: [
        "Refill station air minum",
        "Larangan plastik sekali pakai",
        "Edukasi tamu dan operator",
      ],
      icon: Ban,
    },
    {
      title: "Pengumpulan & Pemilahan",
      items: [
        "Clean-up rutin terjadwal",
        "Titik kumpul strategis",
        "Pemilahan organik/anorganik",
      ],
      icon: RecycleIcon,
    },
    {
      title: "Pengangkutan & Pengolahan",
      items: [
        "Kolaborasi logistik",
        "Bank sampah/daur ulang",
        "Residu dikelola aman",
      ],
      icon: Truck,
    },
  ],
  aksi: [
    "Bawa botol isi ulang + tas kain",
    "Tolak sedotan & kemasan sekali pakai",
    "Pilah sampah selama trip",
    "Ikut bersih pantai/laut terjadwal",
  ],
  jadwal: [
    { title: "Bersih Pantai", meta: "Mingguan" },
    { title: "Bersih Laut", meta: "Bulanan" },
  ],
};

const patroliGabungan = {
  title: "Patroli Gabungan",
  label: "Patroli Gabungan",
  intro:
    "Patroli gabungan dilakukan untuk menjaga kepatuhan aturan kawasan, keselamatan pengunjung, dan konservasi ekosistem laut. Kolaborasi antara pengelola, masyarakat, dan operator menciptakan sistem pengawasan yang efektif.",
  pillars: [
    {
      title: "Pencegahan",
      items: ["Edukasi pengunjung", "Sosialisasi rute & aturan", "Briefing keselamatan"],
      icon: Shield,
    },
    {
      title: "Pengawasan",
      items: ["Patroli rutin terjadwal", "Pengecekan titik rawan", "Dokumentasi aktivitas"],
      icon: Compass,
    },
    {
      title: "Tindak Lanjut",
      items: ["Koordinasi pihak terkait", "Penanganan pelanggaran", "Evaluasi berkelanjutan"],
      icon: CheckSquare,
    },
  ],
  laporanSteps: [
    {
      title: "Temukan Indikasi",
      description: "Aktivitas merusak, ilegal, atau berbahaya.",
    },
    {
      title: "Catat Aman",
      description: "Lokasi, waktu, deskripsi (tanpa konfrontasi).",
    },
    {
      title: "Laporkan",
      description: "Ke kontak resmi/pengelola/pos.",
    },
    {
      title: "Tindak Lanjut",
      description: "Verifikasi & respon tim.",
    },
  ],
  safety: [
    "Jangan konfrontasi langsung dengan pelaku.",
    "Utamakan keselamatan, lapor setelah di tempat aman.",
    "Dokumentasi dari jarak aman tanpa membahayakan diri.",
  ],
};

export default function Kolaborasi() {
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Kolaborasi.jpg')", backgroundPosition: "center 120%" }}
    >
      <Navbar />

      <LayananHero title="Layanan Kami" subtitle="Kolaborasi" />

      <section className="bg-black/40 py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="bg-[#004267]/80 rounded-3xl p-10 text-gray-200 space-y-10">
          <div className="pt-4 space-y-10">
            <div className="text-center space-y-3">
              <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Cara Berkontribusi</h3>
              <p className="text-white text-lg font-light">
                Setiap tindakan kecil Anda membuat perbedaan besar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Laporkan",
                  description:
                    "Temuan bintang laut berduri, penumpukan sampah, atau aktivitas mencurigakan.",
                  accent: "text-sky-300",
                  border: "border-sky-300/30",
                  icon: AlertCircle,
                },
                {
                  title: "Kurangi",
                  description:
                    "Bawa ulang pakai, pilah sampah, dan bawa pulang sampah Anda.",
                  accent: "text-emerald-300",
                  border: "border-emerald-300/30",
                  icon: Recycle,
                },
                {
                  title: "Dukung",
                  description:
                    "Ikut bersih pantai, donasi alat, dan edukasi tamu.",
                  accent: "text-amber-300",
                  border: "border-amber-300/30",
                  icon: Users,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`rounded-3xl border ${item.border} bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl`}
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className={`h-7 w-7 ${item.accent}`} />
                    </div>
                    <h4 className="text-white text-2xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">{item.description}</p>
                    <div className={`mt-6 text-sm font-semibold ${item.accent}`}>
                      Pelajari lebih lanjut
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-10 space-y-8">
              <div className="text-center space-y-3">
                <span className="text-white/70 text-xs uppercase tracking-[0.4em]">SOP Penanganan Bintang Laut Berduri</span>
                <h3 className="text-white text-4xl md:text-5xl font-bold">Penanganan Bintang Laut Berduri</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <div className="space-y-6">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                    <h4 className="text-white text-lg font-semibold mb-3">Mengapa Penting?</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Bintang laut berduri (crown-of-thorns) dapat merusak terumbu karang saat populasinya
                      meningkat. Penanganan yang terkoordinasi membantu meminimalkan risiko dan menjaga
                      ekosistem terumbu karang tetap sehat.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                    <img
                      src="/images/Foto 7-2 oleh Nikka Gunadharma.jpg"
                      alt="Penanganan Bintang Laut Berduri"
                      className="h-56 w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md h-full">
                  <div className="text-white text-lg font-semibold">Alur Penanganan</div>
                  <p className="text-gray-300 text-sm mt-1">
                    Proses terkoordinasi untuk melindungi terumbu karang
                  </p>
                  <div className="mt-6 space-y-4">
                    {programSteps.map((item, index) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <h5 className="text-white text-sm font-semibold">{item.title}</h5>
                          <p className="text-gray-300 text-xs leading-relaxed mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <h4 className="text-white text-lg font-semibold mb-4">Untuk Wisatawan & Operator</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-200">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                      <CircleCheck className="h-4 w-4" />
                      <span>Do (Lakukan)</span>
                    </div>
                    <ul className="space-y-2">
                      {programDos.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-rose-300 font-semibold">
                      <CircleX className="h-4 w-4" />
                      <span>Don't (Jangan)</span>
                    </div>
                    <ul className="space-y-2">
                      {programDonts.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-2xl bg-rose-500/90 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Laporkan Bintang Laut Berduri
                </span>
              </button>
            </div>

            <div className="pt-12 space-y-8">
              <div className="text-center space-y-3">
                <span className="text-white/70 text-xs uppercase tracking-[0.4em]">SOP Penanganan Sampah</span>
                <h3 className="text-white text-4xl md:text-5xl font-bold">{program02.subtitle}</h3>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="flex items-center gap-2 text-rose-300 font-semibold">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Tantangan</span>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed mt-2">
                  {program02.challenge}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {program02.phases.map((phase) => {
                  const Icon = phase.icon;
                  return (
                    <div
                      key={phase.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-white text-lg font-semibold mb-3">{phase.title}</h4>
                      <ul className="space-y-2 text-sm text-gray-200">
                        {phase.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-white font-semibold mb-4">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Aksi Wisatawan & Operator</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-200">
                    {program02.aksi.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-white font-semibold mb-4">
                    <CalendarClock className="h-4 w-4" />
                    <span>Jadwal Kegiatan</span>
                  </div>
                  <div className="space-y-3">
                    {program02.jadwal.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <div className="text-white text-sm font-semibold">{item.title}</div>
                        <div className="text-gray-300 text-xs">{item.meta}</div>
                      </div>
                    ))}
                    <p className="text-gray-300 text-xs italic">
                      * Jadwal menyesuaikan lokasi & kondisi cuaca
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="flex-1 rounded-2xl bg-emerald-500/90 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <PartyPopper className="h-4 w-4" />
                    Ikut Bersih Pantai
                  </span>
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-2xl border border-emerald-400/40 bg-white/5 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-white/10"
                >
                  Panduan Bawa Ulang Pakai
                </button>
              </div>
            </div>

            <div className="pt-12 space-y-8">
              <div className="text-center space-y-3">
                <span className="text-white/70 text-xs uppercase tracking-[0.4em]">{patroliGabungan.label}</span>
                <h3 className="text-white text-4xl md:text-5xl font-bold">{patroliGabungan.title}</h3>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-gray-200 text-sm leading-relaxed">{patroliGabungan.intro}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {patroliGabungan.pillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-white text-lg font-semibold mb-3">{item.title}</h4>
                      <ul className="space-y-2 text-sm text-gray-200">
                        {item.items.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md space-y-4">
                <div>
                  <div className="text-white text-lg font-semibold">Alur Pelaporan</div>
                  <p className="text-gray-300 text-sm mt-1">Langkah-langkah melaporkan aktivitas mencurigakan dengan aman</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {patroliGabungan.laporanSteps.map((step, index) => (
                    <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold">
                        {index + 1}
                      </div>
                      <h5 className="text-white text-sm font-semibold mt-3">{step.title}</h5>
                      <p className="text-gray-300 text-xs mt-1 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="flex items-center gap-2 text-white font-semibold mb-4">
                  <LifeBuoy className="h-4 w-4" />
                  <span>Keselamatan Pelapor</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-200">
                  {patroliGabungan.safety.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="flex-1 rounded-2xl bg-amber-400/90 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-400"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Laporkan Aktivitas
                  </span>
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-2xl border border-amber-300/40 bg-white/5 px-6 py-3 text-sm font-semibold text-amber-200 transition hover:bg-white/10"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    <CheckSquare className="h-4 w-4" />
                    Baca Aturan Kawasan
                  </span>
                </button>
              </div>
            </div>

            <div className="pt-12">
              <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md text-gray-200">
                <div className="text-center space-y-2">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-white text-3xl md:text-4xl font-bold">Laporkan Temuan</h3>
                  <p className="text-gray-300 text-sm">
                    Bantu kami menjaga Raja Ampat dengan melaporkan temuan Anda
                  </p>
                </div>

                <form className="mt-8 space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Jenis Laporan</label>
                    <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-300/20">
                      <option value="">Pilih jenis laporan...</option>
                      <option value="bintang-laut">Bintang laut berduri</option>
                      <option value="sampah">Penumpukan sampah</option>
                      <option value="aktivitas">Aktivitas mencurigakan</option>
                      <option value="kerusakan">Kerusakan terumbu karang</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Lokasi *</label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-300/20"
                      placeholder="Contoh: Pulau Wayag, Pantai Arborek..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Waktu</label>
                    <input
                      type="date"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-300/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Deskripsi</label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-300/20"
                      placeholder="Jelaskan temuan Anda secara detail..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Upload Foto (opsional)</label>
                    <input
                      type="file"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white/80 hover:file:bg-white/20 focus:border-sky-300/60 focus:outline-none focus:ring-2 focus:ring-sky-300/20"
                    />
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-gray-300">
                    Catatan: Gunakan jalur resmi yang disediakan pengelola. Jika darurat, hubungi kontak setempat.
                    Laporan Anda akan ditindaklanjuti oleh tim konservasi.
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-sky-500/90 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      Kirim Laporan
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
