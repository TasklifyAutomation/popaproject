import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';

import Home from './pages/Home';
import VideoJaValokuvaus from './pages/VideoJaValokuvaus';
import Tuotannot from './pages/Tuotannot';
import Referenssit from './pages/Referenssit';
import Suunnittelut from './pages/Suunnittelut';
import Meista from './pages/Meista';
import Blogi from './pages/Blogi';

// Old blog posts — kept active so old direct links do not break
import SosiaaliseMedianStrategia from './pages/blog/SosiaaliseMedianStrategia';
import HakukoneoptimointiMitaSeon from './pages/blog/HakukoneoptimointiMitaSeon';
import MillaisetOvatHyvatNettisivut from './pages/blog/MillaisetOvatHyvatNettisivut';
import ViisiVinkkiaHakukoneoptimointiin from './pages/blog/ViisiVinkkiaHakukoneoptimointiin';
import MarkkinoinninTavoitteetJaKPIt from './pages/blog/MarkkinoinninTavoitteetJaKPIt';
import MitaHyvaMarkkinointisuunnitelmaPitaaSisallaan from './pages/blog/MitaHyvaMarkkinointisuunnitelmaPitaaSisallaan';
import AsiakassuhdemarkkinointiHaltuun from './pages/blog/AsiakassuhdemarkkinointiHaltuun';
import ToimipaikkamainontaTutuksi from './pages/blog/ToimipaikkamainontaTutuksi';
import FacebookAdsinJaGoogleAdsinErot from './pages/blog/FacebookAdsinJaGoogleAdsinErot';
import MarkkinoinninSTPMalli from './pages/blog/MarkkinoinninSTPMalli';
import KetteraMarkkinointi from './pages/blog/KetteraMarkkinointi';
import HakukonemarkkinointiPahkinankuoressa from './pages/blog/HakukonemarkkinointiPahkinankuoressa';
import Oulu2026 from './pages/blog/Oulu2026';

// New blog posts
import PohjoisuusKilpailuetuna from './pages/blog/PohjoisuusKilpailuetuna';
import TekoalyMarkkinoinnissa from './pages/blog/TekoalyMarkkinoinnissa';
import Painotuotteet2026 from './pages/blog/Painotuotteet2026';
import MarkkinointiOmatoimisestiVaiUlkoistettuna from './pages/blog/MarkkinointiOmatoimisestiVaiUlkoistettuna';
import JulkisivuPaivityksenTarpeessa from './pages/blog/JulkisivuPaivityksenTarpeessa';
import EpayhtenainenYritysilme from './pages/blog/EpayhtenainenYritysilme';
import MessuosastoJokaPysayttaa from './pages/blog/MessuosastoJokaPysayttaa';
import TarinanVoimaMarkkinoinnissa from './pages/blog/TarinanVoimaMarkkinoinnissa';
import Oulu2026Yhteistyo from './pages/blog/Oulu2026Yhteistyo';
import MilloinTeippausKannattaa from './pages/blog/MilloinTeippausKannattaa';
import PainotuoteVsDigitaalinenMarkkinointi from './pages/blog/PainotuoteVsDigitaalinenMarkkinointi';
import YksiMarkkinointikumppani from './pages/blog/YksiMarkkinointikumppani';
import ValomainosopasOstajalle from './pages/blog/ValomainosopasOstajalle';
import TekoalypromptitMarkkinoinnissa from './pages/blog/TekoalypromptitMarkkinoinnissa';
import ValomainosostajanMuistilista from './pages/blog/ValomainosostajanMuistilista';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
        <ScrollProgress />
        <CursorGlow />
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tuotannot" element={<Tuotannot />} />
            <Route path="/video-ja-valokuvaus" element={<VideoJaValokuvaus />} />
            <Route path="/suunnittelut" element={<Suunnittelut />} />
            <Route path="/referenssit" element={<Referenssit />} />
            <Route path="/meista" element={<Meista />} />
            <Route path="/blogi" element={<Blogi />} />

            {/* Old blog routes — kept available, but removed from Blogi.tsx listing later */}
            <Route path="/blogi/sosiaalisen-median-strategia-opas-someen" element={<SosiaaliseMedianStrategia />} />
            <Route path="/blogi/hakukoneoptimointi-mita-se-on" element={<HakukoneoptimointiMitaSeon />} />
            <Route path="/blogi/millaiset-ovat-hyvat-nettisivut" element={<MillaisetOvatHyvatNettisivut />} />
            <Route path="/blogi/5-vinkkia-nettisivujen-hakukoneoptimointiin" element={<ViisiVinkkiaHakukoneoptimointiin />} />
            <Route path="/blogi/markkinoinnin-tavoitteet-ja-kpit" element={<MarkkinoinninTavoitteetJaKPIt />} />
            <Route path="/blogi/mita-hyva-markkinointisuunnitelma-pitaa-sisallaan" element={<MitaHyvaMarkkinointisuunnitelmaPitaaSisallaan />} />
            <Route path="/blogi/asiakassuhdemarkkinointi-haltuun" element={<AsiakassuhdemarkkinointiHaltuun />} />
            <Route path="/blogi/toimipaikkamainonta-tutuksi" element={<ToimipaikkamainontaTutuksi />} />
            <Route path="/blogi/facebook-adsin-ja-google-adsin-erot" element={<FacebookAdsinJaGoogleAdsinErot />} />
            <Route path="/blogi/markkinoinnin-stp-malli" element={<MarkkinoinninSTPMalli />} />
            <Route path="/blogi/kettera-markkinointi" element={<KetteraMarkkinointi />} />
            <Route path="/blogi/hakukonemarkkinointi-pahkinankuoressa" element={<HakukonemarkkinointiPahkinankuoressa />} />
            <Route path="/blogi/oulu-2026-referenssi" element={<Oulu2026 />} />

            {/* New blog routes */}
            <Route path="/blogi/pohjoisuus-kilpailuetuna" element={<PohjoisuusKilpailuetuna />} />
            <Route path="/blogi/tekoaly-markkinoinnissa" element={<TekoalyMarkkinoinnissa />} />
            <Route path="/blogi/painotuotteet-2026" element={<Painotuotteet2026 />} />
            <Route path="/blogi/markkinointi-omatoimisesti-vai-ulkoistettuna" element={<MarkkinointiOmatoimisestiVaiUlkoistettuna />} />
            <Route path="/blogi/julkisivu-paivityksen-tarpeessa" element={<JulkisivuPaivityksenTarpeessa />} />
            <Route path="/blogi/epayhtenainen-yritysilme" element={<EpayhtenainenYritysilme />} />
            <Route path="/blogi/messuosasto-joka-pysayttaa" element={<MessuosastoJokaPysayttaa />} />
            <Route path="/blogi/tarinan-voima-markkinoinnissa" element={<TarinanVoimaMarkkinoinnissa />} />
            <Route path="/blogi/oulu2026-yhteistyo" element={<Oulu2026Yhteistyo />} />
            <Route path="/blogi/milloin-teippaus-kannattaa" element={<MilloinTeippausKannattaa />} />
            <Route path="/blogi/painotuote-vs-digitaalinen-markkinointi" element={<PainotuoteVsDigitaalinenMarkkinointi />} />
            <Route path="/blogi/yksi-markkinointikumppani" element={<YksiMarkkinointikumppani />} />
            <Route path="/blogi/valomainosopas-ostajalle" element={<ValomainosopasOstajalle />} />
            <Route path="/blogi/tekoalypromptit-markkinoinnissa" element={<TekoalypromptitMarkkinoinnissa />} />
            <Route path="/blogi/valomainosostajan-muistilista" element={<ValomainosostajanMuistilista />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;