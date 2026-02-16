import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import DasarHukum from "@/pages/pengelolaan-kawasan/DasarHukum";
import Evika from "@/pages/pengelolaan-kawasan/Evika";
import AturanRegulasi from "@/pages/pengelolaan-kawasan/AturanRegulasi";
import TugasPokokFungsi from "@/pages/pengelolaan-kawasan/TugasPokokFungsi";
import Ancaman from "@/pages/tentang/Ancaman";
import KeindahanRajaAmpat from "@/pages/tentang/KeindahanRajaAmpat";
import PengelolaanKawasan from "@/pages/tentang/PengelolaanKawasan";
import Sejarah from "@/pages/tentang/Sejarah";
import SosialBudaya from "@/pages/tentang/SosialBudaya";
import Berita from "@/pages/informasi-terkini/Berita";
import KalenderKegiatan from "@/pages/informasi-terkini/KalenderKegiatan";
import KawasanKonservasi from "@/pages/KawasanKonservasi";
import PetaKawasan from "@/pages/PetaKawasan";
import PanduanKunjungan from "@/pages/layanan/PanduanKunjungan";
import Kolaborasi from "@/pages/layanan/Kolaborasi";
import Rams from "@/pages/layanan/Rams";
import NotFound from "@/pages/NotFound";
import KepulauanAsiaDanAyau from "@/pages/kawasan-kelola-kami/KepulauanAsiaDanAyau";
import TelukMayalibit from "@/pages/kawasan-kelola-kami/TelukMayanlibit";
import SelatDampier from "@/pages/kawasan-kelola-kami/SelatDampier";
import KepulauanMisool from "@/pages/kawasan-kelola-kami/KepulauanMisool";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kawasan-kelola-kami/kepulauan-ayau-asia" element={<KepulauanAsiaDanAyau />} />
        <Route path="/kawasan-kelola-kami/teluk-mayalibit" element={<TelukMayalibit />} />
        <Route path="/kawasan-kelola-kami/selat-dampier" element={<SelatDampier />} />
        <Route path="/kawasan-kelola-kami/kepulauan-misool" element={<KepulauanMisool />} />
        <Route path="/pengelolaan-kawasan/dasar-hukum" element={<DasarHukum />} />
        <Route path="/pengelolaan-kawasan/aturan-dan-regulasi" element={<AturanRegulasi />} />
        <Route path="/pengelolaan-kawasan/tugas-pokok-dan-fungsi" element={<TugasPokokFungsi />} />
        <Route path="/pengelolaan-kawasan/evika" element={<Evika />} />
        <Route path="/tentang/ancaman" element={<Ancaman />} />
        <Route path="/tentang/keindahan-raja-ampat" element={<KeindahanRajaAmpat />} />
        <Route path="/tentang/pengelolaan-kawasan" element={<PengelolaanKawasan />} />
        <Route path="/tentang/sejarah" element={<Sejarah />} />
        <Route path="/tentang/sosial-budaya" element={<SosialBudaya />} />
        <Route path="/informasi-terkini/berita" element={<Berita />} />
        <Route path="/informasi-terkini/kalender-kegiatan" element={<KalenderKegiatan />} />
        <Route path="/layanan/panduan-kunjungan" element={<PanduanKunjungan />} />
        <Route path="/layanan/kolaborasi" element={<Kolaborasi />} />
        <Route path="/layanan/rams" element={<Rams />} />
        <Route path="/kawasan-konservasi" element={<KawasanKonservasi />} />
        <Route path="/peta-kawasan" element={<PetaKawasan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
