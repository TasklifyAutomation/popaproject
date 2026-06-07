import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Camera,
  Video,
  Plane,
  Smartphone,
  Play,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export default function VideoJaValokuvaus() {
  const horizontalVideos = [
    {
      title: 'Henkilöhaastattelu — Tuotantoyksikön päällikkö',
      type: 'Vaakavideo',
      embed: 'https://www.youtube.com/embed/rQapLlgYAcl',
    },
    {
      title: 'Henkilöhaastattelu — Palveluanalyysipäällikkö',
      type: 'Vaakavideo',
      embed: 'https://www.youtube.com/embed/i6cN7HCQgLk',
    },
    {
      title: 'Henkilöhaastattelu — Markkinointipäällikkö',
      type: 'Vaakavideo',
      embed: 'https://www.youtube.com/embed/dcJwXCvk8dc',
    },
    {
      title: 'Henkilöhaastattelu — Laborantti',
      type: 'Vaakavideo',
      embed: 'https://www.youtube.com/embed/Jrepuj42ObA',
    },
  ];

  const verticalVideos = [
    {
      title: 'Sesonkitöihin Lappiin — Bondata',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/UZm8rRpfiGU',
    },
    {
      title: 'Remppapäivät — K-Rauta Äimärautio',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/5PRCs6e7IdU',
    },
    {
      title: 'Pohjarakentaminen — Invera',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/8FtztFe-VA0',
    },
    {
      title: 'Moukarimarkkinat — K-Rauta Äimärautio',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/boR_z2L6Iq0',
    },
    {
      title: 'Koulunpihasaneeraus — Invera',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/Zc8kruhtMrI',
    },
    {
      title: 'Keittiösuunnittelija — K-Rauta Äimärautio',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/ohHSLX_o4SU',
    },
    {
      title: 'Kaluston esittelyä — Invera',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/x5yjSgdL1pU',
    },
    {
      title: 'Grillin ostaminen — K-Rauta Äimärautio',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/ZgTa-NMrpv0',
    },
    {
      title: 'Blackweek — K-Rauta Äimärautio',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/TSCUSJSgPSU',
    },
    {
      title: 'Sesonkitöihin Lappiin Go-On vol 2',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/sBdi9ylSyzQ',
    },
    {
      title: 'Oulun kauppahalli esittely',
      type: 'Pystyvideo',
      embed: 'https://www.youtube.com/embed/wReJhgWRmME',
    },
  ];

  const droneImages = [
    {
      title: 'Autoklinikka kevät',
      src: '/dronekuvaus/autoklinikka_kevat.jpg',
    },
    {
      title: 'Autoklinikka talvi',
      src: '/dronekuvaus/autoklinikka_talvi.jpg',
    },
    {
      title: 'Autoklinikka talvi 2',
      src: '/dronekuvaus/autoklinikka_talvi2.jpg',
    },
    {
      title: 'Koulunpihasaneeraus Invera',
      src: '/dronekuvaus/koulunpihasaneeraus_invera.jpg',
    },
    {
      title: 'Koulunpihasaneeraus Invera 2',
      src: '/dronekuvaus/koulunpihasaneeraus_invera2.jpg',
    },
    {
      title: 'Pohjarakennus Invera',
      src: '/dronekuvaus/pohjarakennus_invera.jpg',
    },
    {
      title: 'Pohjarakennus Invera 2',
      src: '/dronekuvaus/pohjarakennus_invera_2.jpg',
    },
  ];

  const services = [
    {
      icon: Video,
      title: 'Videotuotanto',
      text: 'Mainokset, esittelyvideot, yritysvideot, haastattelut ja tuotevideot suunnittelusta editointiin.',
    },
    {
      icon: Smartphone,
      title: 'Lyhytvideot someen',
      text: 'Pystyvideot Reelsiin, TikTokiin, YouTube Shortseihin ja kampanjakäyttöön.',
    },
    {
      icon: Camera,
      title: 'Valokuvaus',
      text: 'Henkilöstö-, tuote-, tila-, työmaa- ja brändikuvaus yrityksen käyttöön.',
    },
    {
      icon: Plane,
      title: 'Dronekuvaus',
      text: 'Ilmakuvat ja ilmavideot kohteista, työmaista, kiinteistöistä ja kampanjoista.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-[88vh] flex items-center bg-[#0B0B0B] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/dronekuvaus/pohjarakennus_invera.jpg"
            alt="Dronekuvaus"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,238,107,0.14),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06),transparent_28%)]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9EE6B]/10 border border-[#F9EE6B]/30 text-[#F9EE6B] text-sm font-bold mb-6">
                <Camera className="w-4 h-4" />
                VIDEO JA VALOKUVAUS
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Sisällöt, jotka näyttävät <span className="text-gradient">yrityksesi oikeasti hyvältä</span>
              </h1>

              <p className="text-xl text-white/70 max-w-2xl mb-8">
                Kuvaamme ja tuotamme videot, valokuvat, some-sisällöt ja dronekuvat yrityksille,
                jotka haluavat näyttää tekemisensä selkeästi, uskottavasti ja kiinnostavasti.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#portfolio" className="btn-primary">
                  Katso esimerkit
                </a>
                <a href="#contact" className="btn-secondary">
                  Pyydä tarjous
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {droneImages.slice(0, 4).map((image, idx) => (
                  <div
                    key={idx}
                    className={`aspect-video rounded-2xl border border-white/10 bg-white/5 overflow-hidden ${
                      idx === 0 ? 'col-span-2' : ''
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-[#F9EE6B]/50 transition-all"
              >
                <item.icon className="w-10 h-10 text-[#F9EE6B] mb-5" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="text-xs tracking-widest text-[#F9EE6B] font-semibold mb-3">
              VIDEOTUOTANTO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Vaakavideot ja yrityssisällöt</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Esittelyvideot, haastattelut, yrityssisällöt ja kampanjavideot verkkosivuille, myyntiin ja someen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {horizontalVideos.map((video, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#F9EE6B]/50 transition-all"
              >
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#F9EE6B] font-bold mb-2">{video.type}</div>
                  <h3 className="text-xl font-bold">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="text-xs tracking-widest text-[#F9EE6B] font-semibold mb-3">
              LYHYTVIDEOT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pystyvideot someen</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Nopeat, selkeät ja kanavaan sopivat videot kampanjoihin, sesonkeihin ja jatkuvaan näkyvyyteen.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {verticalVideos.map((video, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-[#F9EE6B]/50 transition-all"
              >
                <div className="relative aspect-[9/16] bg-black">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#F9EE6B] font-bold mb-2">{video.type}</div>
                  <h3 className="text-xl font-bold">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="text-xs tracking-widest text-[#F9EE6B] font-semibold mb-3">
              DRONEKUVAUS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ilmasta kuvattu näkökulma</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Dronekuvaus toimii erityisen hyvin työmaille, kiinteistöille, kampanjoihin, maisemiin ja yritysesittelyihin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {droneImages.map((image, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className={`group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#F9EE6B]/50 transition-all ${
                  idx === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#F9EE6B] font-bold mb-2">DRONEKUVAUS</div>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs tracking-widest text-[#F9EE6B] font-semibold mb-3">
                MITEN ETENEMME
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Selkeä tuotanto alusta loppuun</h2>
              <p className="text-white/70 text-lg mb-8">
                Sisältö ei saa jäädä vain hienoksi kuvaksi. Mietimme käyttötarkoituksen, kanavat,
                viestin ja toteutuksen niin, että materiaali palvelee oikeaa tavoitetta.
              </p>

              <div className="space-y-4">
                {[
                  'Käyttötarkoitus ja tavoite kirkastetaan ensin',
                  'Kuvaus suunnitellaan yrityksen arkeen sopivaksi',
                  'Videoista ja kuvista tehdään kanaviin sopivat versiot',
                  'Lopputulos toimitetaan valmiina käyttöön',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-1" />
                    <span className="text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-3xl p-8">
              <Sparkles className="w-10 h-10 text-[#F9EE6B] mb-5" />
              <h3 className="text-2xl font-bold mb-4">Sopii erityisesti</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Yritysesittelyt',
                  'Mainoskampanjat',
                  'Some-sisällöt',
                  'Työmaat ja kohteet',
                  'Henkilöstökuvat',
                  'Tuote- ja tilakuvat',
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/75">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <Link
                  to="/referenssit"
                  className="inline-flex items-center gap-2 text-[#F9EE6B] font-semibold hover:gap-4 transition-all"
                >
                  Katso referenssit <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-gradient-to-b from-transparent to-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#F9EE6B]/10 to-transparent border border-[#F9EE6B]/30 rounded-3xl p-10 md:p-14">
            <Play className="w-12 h-12 text-[#F9EE6B] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tarvitsetko videot tai kuvat yrityksellesi?</h2>
            <p className="text-xl text-white/70 mb-8">
              Kerro mitä haluat näyttää, niin suunnitellaan siihen sopiva kuvaus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="btn-primary">
                Pyydä tarjous
              </a>
              <Link to="/referenssit" className="btn-secondary">
                Katso referenssit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}