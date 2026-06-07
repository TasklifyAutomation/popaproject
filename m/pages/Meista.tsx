import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ExternalLink,
  Users,
  Target,
  Heart,
  TrendingUp,
  Leaf,
  Zap,
  FileCheck,
  TreePine,
  Printer,
  Instagram,
  Facebook,
} from 'lucide-react';

import porukka from '../pics/porukka.jpg';
import { Link } from 'react-router-dom'; 

import AnimatedSection from '../components/AnimatedSection'; 
import NumberTicker from '../components/NumberTicker'; 
import LivingBackground from '../components/LivingBackground'; 
import designi from '../pics/popatietokone.jpg'; 
import jenna from '../pics/jennaantinmaa.png'; 
import Storefront from '../pics/Chocostorefront.jpg'; 
import paku from '../pics/akvatekpaku.jpg'; 
import akvatekukko from '../pics/akvatekukko.jpg'; 
import hakukone from '../pics/hakukoneoptimointi.jpg'; 
import markkinointi from '../pics/markkinointisuunnitelma.jpg'; 
import ads from '../pics/ads.jpg';


export default function Meista() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'YDIN',
      subtitle: 'Mitä on oikeasti meneillään',
      description:
        'Aloitamme kuuntelemalla ja ymmärtämällä, mikä on asiakkaan todellinen tilanne. Ei oletuksia, ei valmiita ratkaisuja – vain rehellinen keskustelu siitä, mikä toimii ja mikä ei.',
      bullets: [
        'Mikä ei toimi ja miksi',
        'Mikä on asiakkaan todellinen tilanne',
        'Missä kohtaa viesti ja todellisuus eivät kohtaa',
      ],
      result: 'Jaettu ymmärrys, ei vielä ratkaisuja',
    },
    {
      number: '02',
      title: 'SUUNTA',
      subtitle: 'Mihin kannattaa keskittyä',
      description:
        'Kun ydin on selvä, valitsemme yhdessä suunnan. Kaikkea ei voi tehdä kerralla – tärkeintä on tunnistaa se yksi asia, joka todella liikuttaa asiakkaan liiketoimintaa eteenpäin.',
      bullets: [
        'Kohderyhmän kirkastaminen',
        'Kärjen valinta – mihin panostamme ensin',
        'Strateginen rajaus, joka tuntuu helpotukselta',
      ],
      result: 'Selkeä suunta, joka tuntuu helpotukselta',
    },
    {
      number: '03',
      title: 'KONSEPTI',
      subtitle: 'Miten tämä muuttuu ymmärrettäväksi',
      description:
        'Suunta tarvitsee muodon. Teemme ideasta jotain konkreettista: visuaalista, kielellistä, tunnistettavaa. Konsepti on se, minkä asiakas tunnistaa omakseen ja mikä erottaa kilpailijoista.',
      bullets: [
        'Ydinviesti ja tarina',
        'Visuaalinen ja kielellinen logiikka',
        'Kokonaisidea, joka toimii kaikissa kanavissa',
      ],
      result: 'Idea, jonka asiakas tunnistaa omakseen',
    },
    {
      number: '04',
      title: 'TEKEMINEN',
      subtitle: 'Näkyvä ja toimiva toteutus',
      description:
        'Ideat eivät riitä – ne pitää tehdä todeksi. Toteutamme markkinoinnin, joka näkyy, toimii ja tuntuu aidolta. Yhtenäinen linja kaikissa kanavissa, mutta joustavuus tarpeen mukaan.',
      bullets: [
        'Verkkosivut, sisällöt, mainonta – kaiken tekeminen',
        'Yhtenäinen tekeminen kaikissa kanavissa',
        'Paikallisuus ja realismi, ei pääkaupunkityyliä',
      ],
      result: 'Markkinointi, joka tuntuu aidolta',
    },
    {
      number: '05',
      title: 'VAIKUTUS',
      subtitle: 'Mitä oikeasti tapahtui',
      description:
        'Lopussa mitataan se, mikä merkitsee. Ei pelkkiä numeroita vaan todellista vaikutusta: mitä ihmiset sanoivat, mitä tapahtui, mitä opittiin. Jokainen projekti on oppimista seuraavaa varten.',
      bullets: [
        'Reaktiot, palautteet, tunnelataukset',
        'Myynti, yhteydenotot, konkreettiset tulokset',
        'Opit seuraavaa kierrosta varten',
      ],
      result: 'Jatkuva kehittyminen, ei kertaluonteinen temppu',
    },
  ];

  const team = [
  { name: 'Sakke Gustafsson', title: 'Toimitusjohtaja', phone: '040 351 7181', email: 'sakke@popa.fi', image: '/henkilokunta/sakkeotayhteytta.jpg' },
  { name: 'Jyrki Anttila', title: 'Yhteyspäällikkö', phone: '040 749 4449', email: 'jyrki@popa.fi', image: '/henkilokunta/jyrkiyhteyspaallikko.jpg' },
  { name: 'Jesse Anttila', title: 'Myyntipäällikkö', phone: '040 160 4128', email: 'jesse@popa.fi', image: '/henkilokunta/jessemyyntipaallikko.png' },
  { name: 'Frans Gustafsson', title: 'Sisällöntuottaja', phone: '044 491 5889', email: 'frans@popa.fi', image: '/henkilokunta/franssisallontuottaja.jpg' },
  { name: 'Rauli', title: 'Graafinen suunnittelija', image: '/henkilokunta/rauligraafinensuunnittelija.jpg' },
  { name: 'Vesa', title: 'Konseptoija', image: '/henkilokunta/vesakonseptoija.png' },
  { name: 'Tuomas', title: 'Tuotantopäällikkö', image: '/henkilokunta/tuomastuotantopaallikko.jpg' },
  { name: 'Joni', title: 'Digioperaattori', image: '/henkilokunta/jonidigioperaattori.jpg' },
  { name: 'Minna', title: 'Graafinen suunnittelija', image: '/henkilokunta/minnagraafinensuunnittelija.jpg' },
];

  const timeline = [
    {
      year: '1956',
      title: 'Alku pohjoisessa',
      description: 'Toiminta käynnistyy Rovaniemellä nimellä Pohjolan Painotuote.',
    },
    {
      year: '1960-luku',
      title: 'Käsityöllä kasvuun',
      description: 'Ammattitaito ja henkilökohtainen palvelu rakentavat vankan asiakasluottamuksen.',
    },
    {
      year: '1970-luku',
      title: 'Vakiintunut asema',
      description: 'Arvostettu pohjoisen yritys- ja kulttuurimaailman palvelija.',
    },
    {
      year: '1980-luku',
      title: 'Kasvu kiihtyy',
      description: 'Suuremmat painokset ja laajeneva asiakaskunta.',
    },
    {
      year: '1988',
      title: 'Uusi johto, uusi sijainti',
      description: 'Kari Gustafsson vetovastuuseen, toimisto Lapin Kansan tiloihin.',
    },
    {
      year: '1988–1993',
      title: 'Laajoja investointeja',
      description: 'Tietotekniikka uudistuu ja uudet painokoneet kasvattavat kapasiteettia.',
    },
    {
      year: '1990-luku',
      title: 'Teknologinen harppaus',
      description: 'Lama selätettiin ja siirryttiin moderniin offset-painoon.',
    },
    {
      year: '2007',
      title: 'Sukupolvenvaihdos',
      description: 'Sakke Gustafsson ottaa yrityksen pääomistajuuden.',
    },
    {
      year: '2010-luku',
      title: 'Digitaalinen loikka',
      description: 'Markkinointi- ja suunnittelupalvelut laajenevat osaksi tarjontaa.',
    },
    {
      year: '2015',
      title: 'Uusi nimi',
      description: 'Yritys saa uuden nimen: Pohjolan Palvelut Oy.',
    },
    {
      year: '2020',
      title: 'Brändiuudistus',
      description: '“Popa” — kokonaisvaltainen markkinointikumppani syntyy.',
    },
    {
      year: '2026',
      title: 'Juhlavuosi',
      description: 'Kumppanuuksia ja kasvua, erilaisten näkyvyystuotteiden kysyntä kirittää tulevaan.',
    },
  ];

  const values = [
    {
      icon: Users,
      title: 'Asiakaslähtöisyys',
      description: 'Asiakkaan menestys on meidän menestys',
    },
    {
      icon: Heart,
      title: 'Luottamus',
      description: 'Rehellisyys ja avoimuus kaikessa tekemisessä',
    },
    {
      icon: Zap,
      title: 'Positiivisuus',
      description: 'Ratkaisukeskeinen asenne ja tekemisen meininki',
    },
    {
      icon: TrendingUp,
      title: 'Tuloksellisuus',
      description: 'Tavoitteena mitattavat tulokset ja todellinen vaikutus',
    },
  ];

  const references = [
    {
      company: 'Vesivek',
      quote:
        'Meille näkyvyys on elinehto. Popa on ymmärtänyt, että brändin pitää näkyä kauas ja kestää kovia oloja. Arvostamme sitä, että saamme samalta luukulta kaiken tarvitsemamme.',
    },
    {
      company: 'K-Rauta Äimänrautio',
      quote:
        'Kaupan arjessa tilanteet muuttuvat nopeasti. Popan lyhytvideot on pelastanut meidät monesti, kun kampanjamateriaalit on tarvittu pian.',
    },
    {
      company: 'Ideko',
      quote:
        'Arvostamme selkeyttä. Popa auttoi meitä selkiyttämään esimerkiksi katalogimme ja jalkauttamaan ilmeemme muutoinkin tyylikkäisiin myyntimateriaaleihin. Lopputulos on vakuuttava ja ammattimainen.',
    },
    {
      company: 'Secatto',
      quote:
        'Popan kanssa yhteistyö on mutkatonta. He yhdistävät perinteisen ja modernin otteen tavalla, joka tukee meidän liiketoimintaa saumattomasti.',
    },
    {
      company: 'Kailatec',
      quote:
        'Kun tuote on tekninen, markkinoinnin pitää olla ymmärrettävää. Popa on onnistunut luomaan meille näkyvyyden sisällä ja ulkona, joka viestii luottamusta ja asiantuntijuuttamme.',
    },
    {
      company: 'Viasatek',
      quote:
        'Popan vahvuus on monipuolisuus. Emme tarvitse useaa toimijaa, kun yksi talo hoitaa kaiken tarvitsemamme luotettavasti ja asiantuntevasti.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-black to-transparent">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold text-[#F9EE6B] tracking-wider">MEISTÄ</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Pohjoissuomalainen markkinointitoimisto
              </h1>
              <p className="text-lg text-white/70 mb-4">
                POPA on täyden palvelun markkinointitoimisto, joka yhdistää strategian, luovuuden ja toteutuksen.
                Autamme yrityksiä kasvamaan ja erottumaan markkinoilla aidolla pohjoisella otteella.
              </p>
              <p className="text-lg text-white/70 mb-8">
                Toimipisteemme sijaitsevat Oulussa ja Rovaniemellä. Olemme palvelleet pohjoisia yrityksiä vuodesta 1956 lähtien.
                Yhdistämme perinteisen painotalon osaamisen modernin digitaalisen markkinoinnin mahdollisuuksiin.
              </p>
              <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
                Ota yhteyttä
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src={porukka}
                  alt="Popa tiimi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-6 right-6 bg-[#F9EE6B] text-[#0B0B0B] rounded-2xl p-6 shadow-2xl">
                <div className="text-5xl font-bold">1956</div>
                <div className="text-sm font-semibold mt-1">perustettu</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#F9EE6B] mb-2">1956</div>
              <div className="text-white/60">Perustettu</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#F9EE6B] mb-2">2</div>
              <div className="text-white/60">Toimipistettä</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#F9EE6B] mb-2">150+</div>
              <div className="text-white/60">Asiakasta</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-[#F9EE6B] mb-2">∞</div>
              <div className="text-white/60">Ideoita</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#F9EE6B] tracking-wider">TOIMINTATAPA</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Popa aloittaa ytimestä</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Emme tee markkinointia kaavan mukaan. Jokainen projekti alkaa ymmärtämisestä ja päättyy vaikutukseen.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeStep === idx
                    ? 'bg-[#F9EE6B] text-[#0B0B0B]'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:border-[#F9EE6B]/50'
                }`}
              >
                {step.number} {step.title}
              </button>
            ))}
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-2">{steps[activeStep].title}</h3>
                <p className="text-[#F9EE6B] font-semibold mb-4">{steps[activeStep].subtitle}</p>
                <p className="text-white/70 mb-8">{steps[activeStep].description}</p>

                <div className="bg-gradient-to-br from-[#F9EE6B]/10 to-transparent border border-[#F9EE6B]/30 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#F9EE6B]" />
                    <span className="text-[#F9EE6B] font-bold">TULOS</span>
                  </div>
                  <p className="text-white">{steps[activeStep].result}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white/80">Keskiössä:</h4>
                <ul className="space-y-4">
                  {steps[activeStep].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#F9EE6B] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/70">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-semibold text-[#F9EE6B] tracking-wider">MISSIO</span>
              <h2 className="text-3xl font-bold mt-4 mb-4">Olemassaolomme tarkoitus</h2>
              <p className="text-lg text-white/70">
                Autamme pohjoisia yrityksiä kasvamaan ja menestymään tarjoamalla markkinointia, joka toimii
                oikeassa elämässä – ei vain PowerPointissa. Yhdistämme strategisen ajattelun käytännön tekemiseen.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold text-[#F9EE6B] tracking-wider">ARVOT</span>
              <h2 className="text-3xl font-bold mt-4 mb-6">Toimintamme perusta</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#F9EE6B]/50 transition-all"
                  >
                    <value.icon className="w-8 h-8 text-[#F9EE6B] mb-4" />
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-white/60">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#F9EE6B] tracking-wider">TIIMI</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Popalaiset</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Moniosaava tiimimme tuo yhteen strategian, luovuuden ja teknisen toteutuksen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="text-left"
              >
                <div className="aspect-square rounded-2xl mb-4 overflow-hidden bg-gradient-to-br from-[#F9EE6B]/20 to-[#F9EE6B]/5">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-white/55">{member.title}</p>

                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="block text-sm text-white/45 hover:text-[#F9EE6B] transition-colors mt-2"
                  >
                    {member.phone}
                  </a>
                )}

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="block text-sm text-white/45 hover:text-[#F9EE6B] transition-colors"
                  >
                    {member.email}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#F9EE6B] tracking-wider">TOIMIPISTEET</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Löydät meidät</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Oulu</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-1" />
                  <div>
                    <p>Limingankuja 4</p>
                    <p>90400 Oulu</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#F9EE6B]" />
                  <a href="tel:0400550443" className="hover:text-[#F9EE6B] transition-colors">
                    0400 550 443
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#F9EE6B]" />
                  <a href="mailto:oulu@popa.fi" className="hover:text-[#F9EE6B] transition-colors">
                    oulu@popa.fi
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#F9EE6B]" />
                  <span className="text-white/70">Avoinna arkisin 8–16</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Rovaniemi</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-1" />
                  <div>
                    <p>Teollisuustie 16</p>
                    <p>96320 Rovaniemi</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#F9EE6B]" />
                  <a href="tel:0400550440" className="hover:text-[#F9EE6B] transition-colors">
                    0400 550 440
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#F9EE6B]" />
                  <a href="mailto:rovaniemi@popa.fi" className="hover:text-[#F9EE6B] transition-colors">
                    rovaniemi@popa.fi
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#F9EE6B]" />
                  <span className="text-white/70">Avoinna arkisin 8–15.30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#F9EE6B] text-[#0B0B0B] rounded-3xl px-12 py-6 mb-6">
              <div className="text-7xl md:text-8xl font-bold">70</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">vuotta pohjoista palvelua</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Vuodesta 1956 lähtien painotalosta markkinointikumppaniksi — säilyttäen pohjoisen tekemisen luotettavuuden ja asiakaslähtöisyyden.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F9EE6B]/70 via-[#F9EE6B]/30 to-transparent hidden md:block" />

            {timeline.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="mb-12 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 md:items-center"
              >
                <div className={`hidden md:block ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                  {idx % 2 === 0 ? (
                    <div>
                      <span className="text-[#F9EE6B] font-bold text-sm">{event.year}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-2">{event.title}</h3>
                      <p className="text-white/55">{event.description}</p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#F9EE6B] rounded-full shadow-[0_0_20px_rgba(249,238,107,0.55)]" />
                </div>

                <div className={`hidden md:block ${idx % 2 !== 0 ? 'md:text-left' : ''}`}>
                  {idx % 2 !== 0 ? (
                    <div>
                      <span className="text-[#F9EE6B] font-bold text-sm">{event.year}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-2">{event.title}</h3>
                      <p className="text-white/55">{event.description}</p>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>

                <div className="md:hidden pl-6 border-l border-[#F9EE6B]/40">
                  <span className="text-[#F9EE6B] font-bold text-sm">{event.year}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-2">{event.title}</h3>
                  <p className="text-white/55">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#F9EE6B] tracking-wider">REFERENSSIT</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Asiakkaiden sanat</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Ei turhaa hienostelua — nämä ovat suoria kokemuksia yhteistyöstä.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.map((ref, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="h-full"
              >
                <div className="h-full min-h-[280px] bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-[#F9EE6B]/40 transition-all flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="text-lg font-bold text-[#F9EE6B]">{ref.company}</div>
                    <div className="text-[#F9EE6B]/40 text-5xl leading-none select-none">❝</div>
                  </div>

                  <p className="text-white/70 leading-relaxed flex-1">
                    {ref.quote}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-[#F9EE6B] tracking-wider">VASTUULLISUUS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">ClimateCalc-sertifioitu painotalo</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Tunnemme vastuumme toimintaympäristöstämme ja teemme oman osuutemme valitsemalla ekologisesti kestäviä ratkaisuja.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-all">
              <FileCheck className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-6">ClimateCalc-sertifikaatti</h3>
              <p className="text-white/65 mb-5">
                Graafinen Teollisuus ry on myöntänyt ClimateCalc-sertifikaatin Pohjolan Palvelut Oy:lle.
                Sertifikaatti perustuu ISO 14064- ja ISO 16759 -standardien tiukat vaatimukset täyttävään ClimateCalc-laskuriin.
              </p>
              <p className="text-white/55">
                Sertifikaatti kattaa myynnin, digipainamisen, jälkikäsittelyprosessit sekä toimitukset asiakkaalle.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-all">
              <TreePine className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-6">HiiliPlus+ ilmastoyksiköt</h3>
              <p className="text-white/65 mb-5">
                Olemme lunastaneet HiiliPlus+ ilmastoyksiköitä, jotka kohdistuvat yrityksemme päästöihin.
                Nämä yksiköt on tuotettu Suomessa hankkeissa, jotka kasvattavat metsien hiilensidontakykyä ja edistävät Suomen 2035 hiilineutraaliustavoitetta.
              </p>
              <p className="text-white/55">
                Hankkeet sijaitsevat Kemijärvellä Lapissa ja keskittyvät havupuuvaltaisiin talousmetsiin.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: 'Tuhlailemattomuus',
                description: 'Pyrimme jatkuvaan energian säästämiseen ja päästöjen vähentämiseen.',
                icon: Leaf,
              },
              {
                title: 'Vastuullinen painaminen',
                description: 'Ympäristösertifioidut paperit ja elintarvikehyväksytyt painovärit.',
                icon: Printer,
              },
              {
                title: 'Kestävä metsänhoito',
                description: 'Raaka-aineet FSC- ja PEFC-sertifioiduista metsistä.',
                icon: TreePine,
              },
              {
                title: 'Energy Star -laitteet',
                description: 'Tuotantokoneemme käyttävät jopa 50% vähemmän energiaa.',
                icon: FileCheck,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all"
              >
                <item.icon className="w-8 h-8 text-green-500 mb-5" />
                <h4 className="font-bold text-white mb-3">{item.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#F9EE6B] tracking-wider">SOSIAALINEN MEDIA</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Seuraa meitä somessa</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Pysy ajan tasalla uusimmista projekteistamme ja vinkeistämme Instagramissa ja Facebookissa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Instagram</h3>
                  <p className="text-white/60">@pohjolanpalvelut</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.instagram.com/pohjolanpalvelut/embed"
                  title="POPA Instagram"
                  className="w-full h-[520px]"
                  loading="lazy"
                />
              </div>

              <a
                href="https://www.instagram.com/pohjolanpalvelut/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 text-[#F9EE6B] font-semibold hover:gap-4 transition-all w-full"
              >
                Seuraa Instagramissa <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Facebook className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Facebook</h3>
                  <p className="text-white/60">@popamarkkinoi</p>
                </div>
              </div>

              <div className="bg-black rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpopamarkkinoi%2F&tabs=timeline&width=500&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                  title="POPA Facebook"
                  className="w-full h-[520px] border-0"
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>

              <a
                href="https://www.facebook.com/popamarkkinoi/?locale=fi_FI"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 text-[#F9EE6B] font-semibold hover:gap-4 transition-all w-full"
              >
                Seuraa Facebookissa <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-[#F9EE6B] tracking-wider">ASIAKASLEHTI</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Popaganda 2025</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Tutustu uuteen asiakaslehteemme, jossa kerromme vastuullisuudesta, lyhytvideoista ja kulttuurin muutoksesta.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <iframe
              src="https://view.taiqa.com/popa/popaganda-2025#/page=1"
              title="Popaganda 2025 asiakaslehti"
              className="w-full h-[520px] md:h-[720px] bg-black"
              loading="lazy"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="https://view.taiqa.com/popa/popaganda-2025#/page=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Avaa lehti uuteen välilehteen
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-gradient-to-b from-transparent to-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tehdäänkö yhdessä?</h2>
            <p className="text-xl text-white/70 mb-8">
              Ota yhteyttä ja kerro tarpeistasi – autamme mielellämme!
            </p>
            <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
              Ota yhteyttä
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}