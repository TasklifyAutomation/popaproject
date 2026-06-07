import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Megaphone,
  TrendingUp,
  Users,
  Target,
  Award,
  CheckCircle2,
  PenTool,
  Code,
  Star,
  Clock,
  ThumbsUp,
  Layers,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import NumberTicker from '../components/NumberTicker';
import LivingBackground from '../components/LivingBackground';
import designi from '../pics/popatietokone.jpg';
import jenna from '../pics/jennaantinmaa.png';
import Storefront from '../pics/Chocostorefront.jpg';
import paku from '../pics/akvatekpaku.jpg';
import akvatekukko from '../pics/akvatekukko.jpg';
import muskettikoiratarra from '../pics/muskettikoiraseinatarra2.jpg';
import kirsihuttunen from '../pics/kirsihuttunen2.png';
import lumitranssivut from '../pics/lumitranssivut.jpg';

export default function Home() {
  const clientLogos = [
    { src: '/asiakaslogot/akvatek.png', alt: 'Akvatek' },
    { src: '/asiakaslogot/apukka.png', alt: 'Apukka' },
    { src: '/asiakaslogot/chocosomnia.png', alt: 'ChocoSomnia' },
    { src: '/asiakaslogot/eurofins.png', alt: 'Eurofins' },
    { src: '/asiakaslogot/invera.png', alt: 'Invera' },
    { src: '/asiakaslogot/k-rautaaaimaarautio.png', alt: 'K-Rauta A. A. Määttä / Rautio' },
    { src: '/asiakaslogot/nallikari.png', alt: 'Nallikari' },
    { src: '/asiakaslogot/snowhotel.png', alt: 'SnowHotel' },
    { src: '/asiakaslogot/vesivek.png', alt: 'Vesivek' },
    { src: '/asiakaslogot/lappituote.png', alt: 'Lappituote' },
  ];

  const caseCards = [
    {
      category: 'Brändi & Markkinointi',
      company: 'ChocoSomnia Oy',
      quote:
        'Popan kanssa yhteistyö on ollut sujuvaa ja joustavaa. Tiimi reagoi nopeasti, aikataulut pitävät ja lopputulos on aina laadukas.',
      image: Storefront,
      personImage: jenna,
      person: 'Jenna Antinmaa',
      role: 'Myyntipäällikkö, ChocoSomnia Oy',
      highlights: [
        { icon: Star, title: 'Brändi-uudistus', text: 'Selkeämpi visuaalinen linja' },
        { icon: Clock, title: 'Nopea toteutus', text: 'Projektit aikataulussa' },
      ],
    },
    {
      category: 'Painotuotteet',
      company: 'Akvatek Oy',
      quote:
        'Yhteistyö Popan kanssa on sujunut jouhevasti. Tilaukset hoituvat helposti, yhteydenpito on nopeaa ja ystävällistä.',
      image: paku,
      personImage: akvatekukko,
      person: 'Joonatan Koskelo',
      role: 'Taloushallinto, Akvatek Oy',
      highlights: [
        { icon: Award, title: 'Huippulaatu', text: 'Ensiluokkainen painojälki' },
        { icon: CheckCircle2, title: 'Täsmätoimitukset', text: 'Aina aikataulussa' },
      ],
    },
    {
      category: 'Kampanja',
      company: 'Muskettikoira',
      quote:
        'Popa tuntee toimialamme erityispiirteet. Kampanjamme tavoitti juuri oikean kohderyhmän ja uusia asiakkaita alkoi virrata sisään.',
      image: muskettikoiratarra,
      personImage: kirsihuttunen,
      person: 'Kirsi Huttunen',
      role: 'Kauppias, Muskettikoira',
      highlights: [
        { icon: Layers, title: 'Monikanavainen', text: 'Some, printti ja ulkomainonta' },
        { icon: TrendingUp, title: 'Jatkuva yhteistyö', text: 'Vuosien kumppanuus' },
      ],
    },
    {
      category: 'Verkkosivut',
      company: 'Lumitrans',
      quote:
        'Uudet verkkosivut tekivät yrityksestämme uskottavamman myös verkossa. Asiakkaat löytävät meidät helpommin ja yhteydenotot ovat lisääntyneet.',
      image: lumitranssivut,
      personImage: '',
      person: 'Marko Luminen',
      role: 'Toimitusjohtaja, Lumitrans',
      highlights: [
        { icon: ThumbsUp, title: 'Käyttäjäystävällinen', text: 'Selkeä ja moderni rakenne' },
        { icon: ArrowRight, title: 'Löydettävyys', text: 'Parempi hakukonenäkyvyys' },
      ],
    },
  ];

  const latestPosts = [
    {
      slug: 'pohjoisuus-kilpailuetuna',
      category: 'BRÄNDI & TARINANKERRONTA',
      title: 'Pohjoisuus kilpailuetuna',
      excerpt:
        'AI-aikakaudella yritykset alkavat näyttää samalta. Pohjoisuus voi olla kilpailuetu, jota kilpailijasi ei pysty kopioimaan.',
      date: '13.05.2026',
      image: '/kuvat/oulu26.jpg',
    },
    {
      slug: 'painotuotteet-2026',
      category: 'PAINOTUOTTEET',
      title: 'Painotuotteet 2026',
      excerpt:
        'Painotuotteet eivät ole kuolleet. Fyysinen materiaali erottuu juuri siksi, että kaikki muu on muuttunut digitaaliseksi kohinaksi.',
      date: '13.05.2026',
      image: '/kuvat/painoasettu.png',
    },
    {
      slug: 'oulu2026-yhteistyo',
      category: 'TAPAHTUMAT & REFERENSSIT',
      title: 'Mitä opimme Oulu2026-yhteistyöstä',
      excerpt:
        'Tapahtumamateriaalit, opasteet ja suurtulosteet vaativat suunnittelua ennen kuin kalenteri täyttyy kiireestä.',
      date: '13.05.2026',
      image: '/kuvat/oulu26.jpg',
    },
  ];

  return (
    <div className="relative">
      <LivingBackground />

      <section className="relative min-h-screen flex items-center justify-center bg-[#0B0B0B]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Modernia markkinointia,{' '}
              <span className="text-gradient">joka saa yrityksesi erottumaan</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Yhdistämme brändin, sisällön ja digin tulokselliseksi kokonaisuudeksi
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#contact" className="btn-primary">
                Pyydä kartoitus
              </a>
              <a href="#services" className="btn-secondary">
                Tutustu palveluihin
              </a>
            </motion.div>

            <motion.p
              className="text-sm text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Perustettu 1956 — luotettu kymmenien brändien toimesta
            </motion.p>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-[#F9EE6B] mb-2">LUOTETTU KUMPPANI</h3>
            <p className="text-white/60">Yhteistyössä johtavien brändien kanssa</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 items-center justify-items-center">
            {clientLogos.map((logo, i) => (
              <div key={i} className="w-40 h-20 flex items-center justify-center p-2 bg-white/5 rounded-lg">
                <img src={logo.src} alt={logo.alt} className="max-h-16 object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Mitä teemme</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Kokonaisvaltaista markkinointia, joka tuottaa tulosta
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-[#F9EE6B]/50 transition-all"
            >
              <Code className="w-12 h-12 text-[#F9EE6B] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Markkinointi &amp; suunnittelu</h3>
              <p className="text-white/70 mb-6">
                Strategiasta toteutukseen — brändit, sisällöt ja kampanjat, jotka erottuvat ja tuottavat tulosta.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Brändi- ja markkinointistrategiat</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Konseptit ja kampanjat</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Sisällöt ja graafinen ilme</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Videot ja valokuvat</span>
                </li>
              </ul>
              <Link to="/tuotannot" className="inline-flex items-center gap-2 text-[#F9EE6B] font-semibold hover:gap-4 transition-all">
                Tutustu palveluihin <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-[#F9EE6B]/50 transition-all"
            >
              <PenTool className="w-12 h-12 text-[#F9EE6B] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Paino- &amp; tuotantopalvelut</h3>
              <p className="text-white/70 mb-6">
                Laaja valikoima painotuotteita ja näkyvyysratkaisuja eri koossa ja eri pintaan. Autamme ja neuvomme
                valinnoissa.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Yrityksen peruspainotuotteet</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Messu- ja tapahtumatuotteet</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Valomainokset, kyltit ja suurtulosteet</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">Kirjat ja katalogit</span>
                </li>
              </ul>
              <Link to="/tuotannot" className="inline-flex items-center gap-2 text-[#F9EE6B] font-semibold hover:gap-4 transition-all">
                Tutustu tuotevalikoimaan <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Video ja valokuvaus</h2>
              <p className="text-xl text-white/70 mb-8">
                Kuvaamme ja tuotamme laadukkaat sisällöt kaikkiin tarpeisiin — mainoksista yritysesittelyihin, tuotteista someen.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Globe className="w-6 h-6 text-[#F9EE6B] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Videotuotanto</h4>
                    <p className="text-white/60">Mainokset, imagovideot, yritys- ja tuotevideot — suunnittelusta editointiin.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <TrendingUp className="w-6 h-6 text-[#F9EE6B] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Valokuvaus</h4>
                    <p className="text-white/60">Tuote-, henkilöstö- ja tilakuvaus, joka näyttää brändin parhaat puolet.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Megaphone className="w-6 h-6 text-[#F9EE6B] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Some-sisältö</h4>
                    <p className="text-white/60">Videoita ja kuvia sosiaaliseen mediaan — valmiiksi julkaistavaan muotoon.</p>
                  </div>
                </div>
              </div>

              <Link to="/video-ja-valokuvaus" className="inline-flex items-center gap-2 text-[#F9EE6B] font-semibold mt-8 hover:gap-4 transition-all">
                Katso video- ja kuvaustuotannot <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-square bg-gradient-to-br from-[#F9EE6B]/20 to-transparent rounded-2xl border border-[#F9EE6B]/30 overflow-hidden">
                <img src={designi} alt="Design element" className="absolute inset-0 w-full h-full object-cover rounded-2xl" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <div className="text-xs tracking-widest text-[#F9EE6B] font-semibold mb-3">ASIAKASCASET</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tuloksia oikeille yrityksille</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseCards.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#F9EE6B]/50 transition-all"
              >
                <div className="aspect-[16/8] relative overflow-hidden bg-gradient-to-br from-[#F9EE6B]/20 to-white/5">
                  <img src={item.image} alt={item.company} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/45 to-transparent" />
                  <div className="absolute top-5 left-5 bg-[#F9EE6B] text-black text-sm font-bold px-4 py-2 rounded-full">
                    {item.category}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-4">{item.company}</h3>
                  <p className="text-white/70 mb-6">“{item.quote}”</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="bg-black/20 border border-white/10 rounded-xl p-4 flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F9EE6B]/15 flex items-center justify-center flex-shrink-0">
                          <highlight.icon className="w-5 h-5 text-[#F9EE6B]" />
                        </div>
                        <div>
                          <div className="font-bold text-sm">{highlight.title}</div>
                          <div className="text-white/50 text-xs">{highlight.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {item.personImage ? (
                      <img src={item.personImage} alt={item.person} className="w-10 h-10 rounded-full object-cover border border-white/20" loading="lazy" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-[#F9EE6B]/20 text-[#F9EE6B] flex items-center justify-center font-bold">
                        {item.person.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-medium">{item.person}</p>
                      <p className="text-sm text-white/60">{item.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/referenssit" className="inline-flex items-center gap-2 text-[#F9EE6B] font-semibold hover:gap-4 transition-all">
              Katso kaikki referenssit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meistä</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Luovuus, tulokset ja yhteistyö Popan ytimessä
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold text-[#F9EE6B] mb-2">
                <NumberTicker end={1956} duration={2} />
              </div>
              <p className="text-white/60">Perustettu</p>
            </div>
            <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold text-[#F9EE6B] mb-2">70v</div>
              <p className="text-white/60">Kokemusta 2026</p>
            </div>
            <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold text-[#F9EE6B] mb-2">
                <NumberTicker end={2} duration={2} />
              </div>
              <p className="text-white/60">Toimipistettä</p>
            </div>
            <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold text-[#F9EE6B] mb-2">
                <NumberTicker end={150} duration={2} suffix="+" />
              </div>
              <p className="text-white/60">Asiakasta</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <Target className="w-12 h-12 text-[#F9EE6B] mb-6" />
              <h3 className="text-xl font-bold mb-3">Asiakaslähtöisyys</h3>
              <p className="text-white/60">Toimintamme ytimessä on aina asiakas ja hänen tarpeensa</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <Users className="w-12 h-12 text-[#F9EE6B] mb-6" />
              <h3 className="text-xl font-bold mb-3">Luottamus</h3>
              <p className="text-white/60">Rakennamme pitkäaikaisia kumppanuuksia rehellisyyden pohjalta</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <Award className="w-12 h-12 text-[#F9EE6B] mb-6" />
              <h3 className="text-xl font-bold mb-3">Tuloksellisuus</h3>
              <p className="text-white/60">Keskitymme mitattaviin tuloksiin ja asiakkaan menestykseen</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ajankohtaista</h2>
            <p className="text-xl text-white/60">Tuoreimmat ajatukset ja opit</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {latestPosts.map((post) => (
              <Link key={post.slug} to={`/blogi/${post.slug}`} className="block">
                <motion.article
                  whileHover={{ y: -10 }}
                  className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#F9EE6B]/50 transition-all cursor-pointer h-full"
                >
                  <div className="aspect-video bg-white/5 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-[#F9EE6B] font-semibold">{post.category}</span>
                    <h3 className="text-lg font-bold mt-2 mb-2">{post.title}</h3>
                    <p className="text-sm text-white/60 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>{post.date}</span>
                      <ArrowRight className="w-4 h-4 text-[#F9EE6B]" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blogi" className="inline-flex items-center gap-2 text-[#F9EE6B] font-semibold hover:gap-4 transition-all">
              Lue lisää blogista <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="section-padding bg-gradient-to-b from-transparent to-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Valmiina kasvattamaan yrityksesi näkyvyyttä?</h2>
            <p className="text-xl text-white/60">
              Ota yhteyttä ja pyydä maksuton kartoitus — keskustellaan miten voimme auttaa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Lähetä viesti</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nimi</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors" placeholder="Nimesi" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sähköposti</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors" placeholder="sahkoposti@esimerkki.fi" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Viesti</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors resize-none" placeholder="Kerro lisää projektistasi..." />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Pyydä maksuton kartoitus
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F9EE6B] rounded-full" />
                  Oulu
                </h4>
                <p className="text-white/60 mb-4">
                  Limingankuja 4<br />
                  90400 Oulu
                </p>
                <a href="tel:0407237192" className="text-[#F9EE6B] hover:underline">
                  040 7237192
                </a>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F9EE6B] rounded-full" />
                  Rovaniemi
                </h4>
                <p className="text-white/60 mb-4">
                  Teollisuustie 16<br />
                  96300 Rovaniemi
                </p>
                <a href="tel:0400550440" className="text-[#F9EE6B] hover:underline">
                  040 0550440
                </a>
              </div>

              <div className="bg-gradient-to-br from-[#F9EE6B]/10 to-transparent rounded-2xl p-6 border border-[#F9EE6B]/30">
                <h4 className="font-bold text-lg mb-2">Nopea vastaus</h4>
                <p className="text-white/70 text-sm">
                  Vastaamme kaikkiin yhteydenottoihin 24 tunnin kuluessa arkipäivisin
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}