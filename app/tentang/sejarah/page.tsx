"use client";
import { motion } from "framer-motion";
import Navbar from "@/app/Component/Navbar";
import Link from "next/link";

export default function Sejarah() {

  const timelineData = [
    {
      year: "55.000",
      subYear: "tahun lalu",
      title: "Jejak Awal Manusia Modern",
      description: "Berdasarkan jurnal ilmiah yang terbit pada tahun 2024 lalu, manusia modern (Homo sapiens) sudah ‘mengunjungi Raja Ampat sekitar 55.000 tahun lalu.’ Tim arkeologis yang terdiri atas peneliti dari Australia, Selandia Baru dan Indonesia tersebut didasari atas penemuan di Gua Mololo di Pulau Waigeo yang lalu dikembangkan menjadi dua teori rute migrasi, yaitu rute utara dan rute selatan (Disadur dari National Geographic, 4 September 2024)."
    },
    {
      year: "Abad",
      subYear: "ke-15",
      title: "Pengaruh Kesultanan Tidore",
      description: "pada abad ke-15 Kesultanan Tidore mulai mengembangkan pengaruhnya di Raja Ampat dan daerah pesisir Papua lainnya baik di utara maupun selatan (dari berbagai sumber). Asimilasi adat istiadat dan tradisi Tidore dengan masyarakat Raja Ampat menjadi suatu keniscayaan, suatu keunikan yang hari ini dapat dilihat pada, contohnya, masyarakat di Kepulauan Misool."
    },
    {
      year: "1860-1869",
      title: "Ekspedisi Wallacea dan the Malay Archipelago",
      description: "Kepulauan Raja Ampat merupakan salah satu daerah yang menjadi fokus dari ekspedisi Alfred Russel Wallace, atau yang dikenal dengan Ekspedisi Wallacea, pada tahun 1860 (dari berbagai sumber). Hasil ekspedisinya tersebut tertuang dalam “The Malay Archipelago” (terbit 1869), dan sekaligus mengonfirmasi keberlimpahan keanekaragaman hayati Raja Ampat dan beberapa tempat lain di Indonesia."
    }
  ];

  const CustomMarker = () => (
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
  return (
    <main
      className="min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Foto 4-1 oleh Nikka Gunadharma.jpg')" }}
    >
      <Navbar />

      {/* Hero Section (Transparan, hanya konten) */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-white">
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
            Sejarah
          </motion.p>
        </div>
      </section>

      {/* Timeline Section dengan background putih 10% */}
      <section className="bg-black/40 py-20 px-6 md:px-20 backdrop-blur-sm">
        {/* Card Biru dengan opacity 80% seperti kode Anda */}
        <section className="bg-[#004267]/80 py-20 px-6 md:px-20 rounded-3xl relative overflow-hidden shadow-2xl">

          <div className="max-w-5xl mx-auto relative">
            {/* ANIMASI GARIS TENGAH */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ originY: 0 }}
              /* mt-8 agar garis mulai dari ikon pertama, mb-24 agar berhenti di ikon terakhir */
              className="absolute left-[40%] md:left-[50%] top-0 bottom-0 w-1 bg-white/30 -translate-x-1/2 my-28"
            />

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center mb-20 last:mb-0 relative z-10"
              >
                {/* Kolom Kiri: Tahun */}
                <div className="w-[40%] md:w-[50%] pr-8 md:pr-16 text-right flex flex-col justify-center">
                  <h2 className="text-white text-4xl md:text-6xl font-bold leading-none">
                    {item.year}
                  </h2>
                  {item.subYear && (
                    <p className="text-white text-xl md:text-2xl mt-2">{item.subYear}</p>
                  )}
                </div>

                {/* ANIMASI TITIK PUTIH */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                  className="absolute left-[40px] md:left-1/2 -translate-x-1/2 -mt-2"
                >
                  <CustomMarker />
                </motion.div>

                {/* Kolom Kanan: Konten */}
                <div className="w-[60%] md:w-[50%] pl-8 md:pl-16">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div

              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 3 * 0.1 }}
              className="flex items-center mb-20 last:mb-0 relative z-10"
            >
              {/* Kolom Kiri: Tahun */}
              <div className="w-[40%] md:w-[50%] pr-8 md:pr-16 text-right flex flex-col justify-center">
                <h2 className="text-white text-4xl md:text-6xl font-bold leading-none">
                  Raja Ampat Hari ini
                </h2>
              </div>

              {/* ANIMASI TITIK PUTIH */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                className="absolute left-[40px] md:left-1/2 -translate-x-1/2 -mt-2"
              >
                <CustomMarker />
              </motion.div>

              {/* Kolom Kanan: Konten */}
              <div className="w-[60%] md:w-[50%] pl-8 md:pl-16">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                  Jantung' Segi Tiga Terumbu Karang
                </h3>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  Pada tahun 2002, sebuah tim yang terdiri atas ilmuwan dari Indonesia dan mancanegara memublikasikan <a target="_blank" className="underline" href={'/A Marine Rapid Assessment of the Raja Ampat Islands, Papua Province, Indonesia.pdf'}>“A Marine Rapid Assessment of the Raja Ampat Islands, Papua Province, Indonesia”</a>. Penelitian tersebut merupakan tonggak awal masyarakat dan pemangku kepentingan di Raja Ampat dalam mengembangkan pengelolaan kawasan konservasi perairan beserta pemanfaatannya yang berkelanjutan.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </section>
    </main>
  );
}
