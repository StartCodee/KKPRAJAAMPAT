import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Settings2,
  FileText,
  Search,
  Map,
  ClipboardCheck,
  Archive,
  MoreHorizontal,
  Activity,
  Users,
  FilePieChart,
  LayoutDashboard,
  ArrowRight,
  Download
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function TugasPokokDanFungsi() {

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
      heroTitle: "Pengelolaan Kawasan",
      heroSub: "Tugas Pokok dan Fungsi",
      mainTitle: "Tugas Pokok",
      mainDesc: "Berdasarkan dokumen Rencana Strategis Tahun 2024-2029, tugas utama dari SUOP adalah membantu Kepala Dinas P2KP Papua Barat Daya untuk melaksanakan tugas teknis perlindungan, pemanfaatan, dan pelestarian KKP Kepulauan Raja Ampat. Tugas pokok dari BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat sebagai SUOP tersebut diperinci melalui beragam fungsi yang tidak dapat dipisahkan satu dengan lainnya.",
      functionTitle: "Fungsi",
      btnDoc: "RENSTRA 2024-2029 (PDF)",
      dashboardTitle: "Data & Informasi",
      dashboardDesc: "Untuk data dan informasi lebih terperinci dari layanan kami, silakan buka dasbor yang disajikan secara real-time.",
      btnDashboard: "Buka Dasbor",
      functions: [
        {
          title: "Penyusunan Rencana dan Program Kerja",
          desc: "Sebelum menyelenggarakan aktivitasnya, SUOP KKP Kepulauan Raja Ampat mesti merumuskan rencana dan program kerjanya, baik itu deskripsi, penganggaran, sumber daya manusia, hingga linimasa.",
          icon: <Settings2 className="w-6 h-6" />,
        },
        {
          title: "Penyiapan Materi, Petunjuk Teknis, dan Prosedur",
          desc: "Dalam menyelenggarakan setiap kegiatannya, SUOP KKP Kepulauan Raja Ampat berpedoman terhadap materi dan/atau petunjuk teknis dan/atau prosedur operasional standar.",
          icon: <FileText className="w-6 h-6" />,
        },
        {
          title: "Perlindungan Habitat, Jenis Ikan dan Biota Lain",
          desc: "Fungsi utama ini diwujudkan ke dalam beberapa aktivitas, mulai dari survei populasi jenis ikan dan biota laut tertentu seperti pari manta, hiu berjalan, mamalia laut, dan penyu, serta inisiatif-inisiatif pengelolaan terhadap aktivitas pemanfaatan di dalam kawasan.",
          icon: <ShieldCheck className="w-6 h-6" />,
        },
        {
          title: "Pemantauan Sumber Daya Kelautan dan Perikanan",
          desc: (
            <>
              SUOP KKP Kepulauan Raja Ampat mewujudkan fungsi pemantauan ke dalam beberapa aktivitas yang diselenggarakan secara rutin seperti pemantauan ekologis terumbu karang, survei populasi spesies laut penting <span className="italic">(focal)</span>, maupun beberapa inisiatif yang diselenggarakan berkesinambungan seperti Peneliti Warga.
            </>
          ),
          icon: <Activity className="w-6 h-6" />,
        },
        {
          title: "Pemantauan Pemanfaatan Sumber Daya Kelautan dan Perikanan",
          desc: "Fungsi ini secara garis besar bertujuan untuk mengawasi aktivitas pemanfaatan baik dari sektor perikanan maupun pariwisata, dan diwujudkan ke dalam aktivitas yang diselenggarakan rutin seperti Jaga Laut dan pengumpulan data pemanfaatan, serta inisiatif berkesinambungan seperti Sispandalwas dan RAMS.",
          icon: <Search className="w-6 h-6" />,
        },
        {
          title: "Penegakan Aturan Zonasi",
          desc: "KKP merupakan kawasan yang dikelola berdasarkan sistem zonasi, atau sederhananya: ada aktivitas yang boleh dan tidak boleh dilakukan di dalam KKP Kepulauan Raja Ampat. Fungsi ini utamanya diwujudkan melalui kegiatan Jaga Laut.",
          icon: <Map className="w-6 h-6" />,
        },
        {
          title: "Koordinasi Pengawasan dan Perlindungan",
          desc: "Dalam menyelenggarakan fungsinya, BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat tidak dapat bekerja sendirian, dan memerlukan peran serta dari beragam pemangku kepentingan berikut kapasitasnya, mulai dari aparat penegak hukum, perwakilan pemerintah dari sektor terkait lainnya, pelaku industri, hingga kepada pengunjung.",
          icon: <Users className="w-6 h-6" />,
        },
        {
          title: "Pemantauan dan Evaluasi",
          desc: "Sebagai institusi yang menyediakan beragam jenis layanan, BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat berkewajiban untuk meningkatkan mutu layanan dengan menyelenggarakan upaya pemantauan dan evaluasi terhadap kinerja baik secara internal maupun yang melibatkan pihak eksternal, untuk selanjutnya dituangkan ke dalam beragam laporan.",
          icon: <ClipboardCheck className="w-6 h-6" />,
        },
        {
          title: "Pelaporan",
          desc: "Selain pelaporan hasil pemantauan dan evaluasi kinerja, SUOP KKP Kepulauan Raja Ampat berkewajiban untuk menyusun laporan kinerja rutin, laporan keuangan, penerimaan dan pemanfaatan hibah, serta laporan lain yang diwajibkan oleh peraturan perundang-undangan yang berlaku, yang disampaikan kepada gubernur melalui Kepala Dinas Kelautan dan Perikanan.",
          icon: <FilePieChart className="w-6 h-6" />,
        },
        {
          title: "Pelaksanaan Administrasi",
          desc: "Fungsi ini mencakup penyelenggaraan pengelolaan, pengaruran dan penataan dokumen, tata laksana organisasi, keuangan, kepegawaian, hubungan masyarakat, serta penyediaan perlengkapan dan rumah tangga.",
          icon: <Archive className="w-6 h-6" />,
        },
        {
          title: "Fungsi Lainnya",
          desc: "Fungsi lain BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat mencakup fungsi lainnya yang dipandang mendesak dan/atau relevan oleh Pemerintah Provinsi Papua Barat Daya melalui Kepala Dinas Kelautan dan Perikanan.",
          icon: <MoreHorizontal className="w-6 h-6" />,
        }
      ]
    },
    EN: {
      heroTitle: "MPAs Management",
      heroSub: "Tasks and Functions",
      mainTitle: "Tasks",
      mainDesc: "According to Raja Ampat MPAs Management Authority’s Strategic Plan Document for 2024 to 2029 , the tasks of the management authority are to assist the Southwest Papua’s Head of Marine and Fisheries to technically implement efforts of protection, utilisation, and preservation of Raja Ampat MPAs. Those tasks are then specified as various functions that are inseparable from one another.",
      functionTitle: "Functions",
      btnDoc: "Strategic Plan Document for 2024 to 2029 (PDF)",
      dashboardTitle: "Data & Information",
      dashboardDesc: "For detailed data and information of our services, please visit our real-time dashboard.",
      btnDashboard: "Explore Dashboard",
      functions: [
        { title: "Developing Work and Program Plans", desc: "Before implementing its activities, the Raja Ampat MPAs Management Authority is obliged to develop work and program plans, including their descriptions, budgets, human resources, and timelines.", icon: <Settings2 /> },
        { title: "Preparing Materials, Technical Guidelines, and Procedures", desc: "For implementation, the Raja Ampat MPAs Management Authority must base all its activities on materials/or technical guidelines and standard operating procedures.", icon: <FileText /> },
        { title: "Protecting Habitat, Fish Species, and Other Biota", desc: "This function is implemented across several activities, including surveys of particular marine biota and fish species, such as manta rays, walking sharks, marine mammals, and turtles, as well as management initiatives on utilisation activities within the MPAs.", icon: <ShieldCheck /> },
        { title: "Marine and Fisheries Resources Monitoring", desc: "Raja Ampat MPAs Management Authority implements this function across various routine activities, such as reef health monitoring, focal species population surveys, and several initiatives implemented sustainably, including Citizen Science.", icon: <Activity /> },
        { title: "Utilization Monitoring", desc: "In general, this function aims to monitor all utilisation activities, including tourism and fisheries, and to implement routine activities such as the Jaga Laut and resource use monitoring, as well as initiatives such as Sispandalwas and RAMS.", icon: <Search /> },
        { title: "Enforcing Zoning Rule", desc: "MPAs are areas managed through a zoning system; all must obey some dos and don’ts.", icon: <Map /> },
        { title: "Coordinating Protection and Monitoring", desc: "In implementing its functions, the Raja Ampat MPAs Management Authority must work with stakeholders; it needs the roles and capacities of various parties, including law enforcers, cross-sectoral government representatives, the private sector, community members, and visitors.", icon: <Users /> },
        { title: "Monitoring and Evaluation", desc: "As an institution that provides various services, Raja Ampat MPAs Management Authority is obliged to improve the quality of its services by conducting monitoring and evaluation of its performance, both internally and with external parties, which will then be reported.", icon: <ClipboardCheck /> },
        { title: "Reporting", desc: "Apart from the evaluation report, the Raja Ampat MPAs Management Authority is obliged to prepare routine activity, financial, grant, and other reports required by law, which will then be conveyed by the Head of the Marine and Fisheries Agency to the governor.", icon: <FilePieChart /> },
        { title: "Administration", desc: "This function covers document management, organisational governance, financial records, personnel management, public relations, and equipment and household provision.", icon: <Archive /> },
        { title: "Other Functions", desc: "Raja Ampat MPAs Management Authority is also obliged to perform other functions deemed urgent and/or relevant by the Head of Marine and Fisheries Agency and the provincial government.", icon: <MoreHorizontal /> }
      ]
    }
  };

  const t = content[lang];

  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/pengelolaan-kawasan/Foto 02 oleh Nikka Gunadharma.jpg')" }}
    >
      <Navbar color="#194484" />

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
        <div className="bg-[#194484]/80 rounded-xl p-10 text-gray-200 space-y-24">
          {/* 1. Main Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/10 rounded-[3rem] p-10 md:p-16 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <ShieldCheck size={200} className="text-blue-400" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <h3 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-8">
                {t.mainTitle}
              </h3>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                {t.mainDesc}
              </p>

              <motion.a
                href="/pengelolaan-kawasan/tugas-pokok-dan-fungsi/Rencana Strategis SUOP KKP Kepulauan Raja Ampat Tahun 2024-2028.pdf"
                whileHover={{ scale: 1.05 }}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all"
              >
                <Download size={18} />
                {t.btnDoc}
              </motion.a>
            </div>
          </motion.div>

          {/* 2. Functions Grid */}
          <div className="space-y-8">
            <p className="text-center text-white text-5xl font-bold">{t.functionTitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.functions.map((f, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white/10 border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/20 transition-all duration-500"
                >
                  <div className="bg-blue-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <div className="text-blue-400">{f.icon}</div>
                  </div>
                  <h4 className="text-white text-xl font-bold mb-4">{f.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}

              {/* 3. Dashboard Link Card (Special Design) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-linear-to-br from-blue-600 to-blue-900 p-8 rounded-[2.5rem] flex flex-col justify-between text-white shadow-2xl shadow-blue-900/40 relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 opacity-20 group-hover:rotate-12 transition-transform duration-700">
                  <LayoutDashboard size={150} />
                </div>

                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-2">{t.dashboardTitle}</h4>
                  <p className="text-blue-100 text-sm font-light opacity-80">
                    {t.dashboardDesc}
                  </p>
                </div>

                <button className="relative z-10 mt-8 w-fit flex items-center gap-3 bg-white text-blue-900 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:gap-5 transition-all">
                  {t.btnDashboard} <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
