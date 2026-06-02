import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Lightbulb, Target } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const caseStudies = [
  {
    title: 'Oulu2026',
    subtitle: 'Kun kulttuuri näkyy vuoden koko Pohjois-Suomesta Eurooppaan asti',
    image: '/kuvat/oulu26.jpg',
    imageTitle: 'Oulu2026 - Euroopan kulttuuripääkaupunki',
    imageCategory: 'Kulttuurihanke',
    challenge:
      'Euroopan kulttuuripääkaupunkivuosi ei ole yksittäinen tapahtuma, vaan pitkä ketju kohtaamisia: työpajoja, esityksiä, näyttelyitä ja ihmisiä. Oulu2026-hankkeessa näkyvyyden tehtävä oli tehdä tästä kaikesta ymmärrettävää, saavutettavaa ja kutsuvaa. Popa valittiin paikalliseksi näkyvyys- ja painokumppaniksi.',
    solutionTitleLeft: 'Näkyvyyttä eri tiloissa ja materiaaleissa',
    solutionLeft: [
      'Tilakohtaiset visuaaliset ratkaisut',
      'Ikkunateippaukset, banderollit ja opasteet',
      'Näkyvyystuotteet, jotka tukevat tapahtumien tarinaa',
    ],
    solutionTitleRight: 'Yhteistyön ydin',
    solutionRight: [
      'Paikallinen kumppani, joka ymmärtää pohjoisen mittakaavan',
      'Ketterä reagointi kulttuurikentän muuttuviin tarpeisiin',
      'Vastuullisuus osana jokaista tuotantoa',
      'Luotettava toteuttaminen, joka ei vie huomiota itse sisällöltä',
      'Selkeä yhden palveluluukun toimintamalli ilman turhaa byrokratiaa',
    ],
    ctaTitle: 'Kokonaisvaltaiset näkyvyysratkaisut',
    ctaText:
      'Popa auttaa Oulu2026:a tekemään kulttuuripääkaupungista näkyvän siellä missä pitääkin. Tarjoamme kokonaisvaltaiset näkyvyysratkaisut, jotka toimivat kentällä oikeaan aikaan, oikeassa paikassa ja oikeassa mittakaavassa.',
  },
  {
    title: 'Invera',
    subtitle: 'Kun tekeminen on kunnossa, markkinoinnin pitää kertoa siitä selkeästi',
    image: '/referenssit/invera.jpg',
    imageTitle: 'Invera Oy',
    imageCategory: 'Rakentaminen ja pihasaneeraus',
    challenge:
      'Invera on tehnyt töitä kymmenen vuotta ja saanut asiakkailtaan kiitosta työn laadusta pihasaneerauksissa ja kotien rakentamisessa. Haaste ei ollut tekeminen, vaan näkyminen: kaikki palvelut eivät tulleet esiin markkinoinnissa, eikä yrityksen koko osaaminen ollut asiakkaiden tiedossa.',
    solutionTitleLeft: 'Mitä tehtiin',
    solutionLeft: [
      'Palveluiden selkeämpi strateginen tuotteistus',
      'Videot ja kuvat oikeista työmaakohteista',
      'Some-sisällöt, jotka tukevat myös myyntiä',
      'Työmaat, kyltit ja kalusto osana brändiä',
    ],
    solutionTitleRight: 'Miksi tämä toimii',
    solutionRight: [
      'Viesti perustuu oikeaan tekemiseen',
      'Markkinointi ei lupaa liikaa, vaan näyttää sen mitä tehdään',
      'Jatkuva sparraus, ei vain irrallisia kampanjoita',
      'Markkinointi, joka elää yrityksen tekemisen mukana',
      'Ulkoistettu sisällöntuotanto, joka keventää yrittäjien arkea',
    ],
    ctaTitle: 'Tarvitsetko selkeyttä markkinointiin?',
    ctaText:
      'Popan tehtävä ei ollut keksiä Inveraa uudelleen, vaan tehdä näkyväksi ne vahvuudet ja osaaminen, mikä oli jo totta. Invera näkyy nyt siellä missä pitääkin — työmailla ja somessa.',
  },
  {
    title: 'Muskettikoira',
    subtitle: 'Kun markkinointi näkyy tuloksena',
    image: '/kuvat/muskettikoiraseinatarra.jpg',
    imageTitle: 'Muskettikoira',
    imageCategory: 'Kivijalkamyymälä',
    challenge:
      'Muskettikoira on kivijalkamyymälä, jossa yrittäjä näkee markkinoinnin vaikutuksen välittömästi arjessa. Kun kampanjaviritys osuu kohdalleen, se näkyy suoraan asiakasvirrassa.',
    solutionTitleLeft: 'Yhteistyön ydin',
    solutionLeft: [
      'Tuloksellinen kumppanuusmarkkinointi',
      'Nopea reagointi kampanjatarpeisiin',
      'Myymälänäkyvyys',
    ],
    solutionTitleRight: 'Lopputulos',
    solutionRight: [
      'Yrittäjällä on usein vain ajatus tai aavistus, Popa auttaa täyttämään puuttuvat kohdat',
      'Tämä tekee yhteistyöstä kevyttä, luontevaa ja tuloksellista',
      'Markkinointi ei jää näkyvyyesteoksi vaan näkyy kassalla ja asiakaskohtaamisissa',
    ],
    ctaTitle: 'Haluatko markkinoinnin, joka tuntuu arjessa?',
    ctaText:
      'Kun markkinointi on oikein suunniteltu ja oikeaan aikaan toteutettu, se ei jää pelkäksi näkyvyydeksi — se näkyy liikkeessä, myynnissä ja asiakkaiden reaktioissa.',
  },
];

const testimonials = [
  {
    company: 'Chocosomnia',
    quote:
      'Popa on ollut merkittävä yhteistyökumppani ChocoSomnian näkyvyyden kannalta. Olemme saaneet heidän kauttaan edustavat käyntikortit, lahjakortit ja roll-upit. Meidän omat asiakkaat toivovat meiltä usein personoituja pakkauksia ja Popan ammattilaisten kanssa niidenkin toteutus onnistuu helposti. Näyttävin tilaamamme kokonaisuus on ikkunateippaukset ja valomainokset myymälän sisä- ja ulkopintoihin. Popan kanssa yhteydenpito on helppoa ja aikataulut pitävät kutinsa.',
    person: 'Mika Lähteenmäki',
    role: 'Toimitusjohtaja',
    location: 'Oulu',
    avatar: '/referenssihenkilot/mikachocosomnia.jpg',
  },
  {
    company: 'Visor',
    quote:
      'Olemme erityisen tyytyväisiä saamaamme palveluun, reagointiin ja vastaajan nopeuteen. Vaikka materiaalitarpeemme voi tulla yhtäkkisesti, saamme laadukkaan toteutuksen ja toimituksen pyyntöömme ennätysajassa.',
    person: 'Tiia Haapakoski',
    role: 'Ostopäällikkö',
    location: '',
    avatar: '/referenssihenkilot/tiia_visor.jpg',
  },
  {
    company: 'Kailatec',
    quote:
      'Popan kanssa ollaan tehty yhteistyötä parin vuoden ajan ja koska talo on niin monipuolinen, yhteistyön määrä on lisääntynyt jatkuvasti. Asiat tapahtuu nopeasti ja täsmällisesti, kommunikointi ja yhteydenpito asiakkaaseen on ensiluokkaista.',
    person: 'Terhi Kailasuo',
    role: 'Markkinointi',
    location: 'Oulu',
    avatar: '/referenssihenkilot/terhikailatec.jpg',
  },
  {
    company: 'Nallikari Lomakylä',
    quote:
      'Yhteistyömme Popan kanssa alkoi vuosia sitten pienistä projekteista kuten aluekarttojen painattamisesta. Ajan myötä yhteistyö on kasvanut markkinointikumppanuudeksi esitteiden, opasteiden ja muun näkyvyyspalvelujen myötä.',
    person: 'Katja Vuorio',
    role: 'Markkinointipäällikkö',
    location: 'Oulu',
    avatar: '/referenssihenkilot/katjavuorio.jpeg',
  },
  {
    company: 'Pohjoisen Laatumaalaus Oy',
    quote:
      'Yhteistyömme Popan kanssa lähti aika hauskasti käyntiin. Ensin piti tehdä vain muutamia juttuja, mutta sitten riks, raks ja poks he suunnittelivat meille logosta tienvarsimainontaan ja visuaaliseen ilmeeseen kaiken.',
    person: 'Oliver Majuri',
    role: 'Toimitusjohtaja',
    location: 'Vantaa',
    avatar: '/referenssihenkilot/olivermajuri.png',
  },
  {
    company: 'Akvatek Oy',
    quote:
      'Yhteistyö Popan kanssa on sujunut jouhevasti. Tilaukset onnistuvat helposti ja yhteyden ottaminen on helppoa. Tarvittaessa kiireellisemmätkin hommat on aina saatu hoidettua.',
    person: 'Joonatan Koskelo',
    role: 'Taloushallinto',
    location: 'Oulu',
    avatar: '/referenssihenkilot/joonatankoskelo.jpeg',
  },
  {
    company: 'Muskettikoira',
    quote:
      'Popan digimarkkinoinnin myötä uusia asiakkaita tulee myymälään joinakin viikkoina ihan ryppäinä eli silloin tiedän että digivelhot on väännelleet namikoita johonkin suuntaan.',
    person: 'Kirsi Huttunen',
    role: 'Kauppias',
    location: 'Oulu',
    avatar: '/referenssihenkilot/kirsihuttunen.png',
  },
];

function CaseStudy({ item }: { item: (typeof caseStudies)[number] }) {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="vertical-rl text-[#F9EE6B]/25 tracking-[0.45em] text-sm font-bold uppercase">
          
        </div>
      </div>

      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.35em] text-[#F9EE6B] font-bold mb-4">CASE</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h2>
          <p className="text-white/55 text-lg max-w-3xl mx-auto">{item.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src={item.image}
              alt={item.imageTitle}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/45 to-transparent">
              <h3 className="text-2xl font-bold">{item.imageTitle}</h3>
              <p className="text-[#F9EE6B] font-semibold mt-1">{item.imageCategory}</p>
            </div>
          </div>

          <div className="bg-white/[0.035] border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <Target className="w-7 h-7 text-[#F9EE6B]" />
              <h3 className="text-2xl font-bold">Haaste</h3>
            </div>
            <p className="text-white/65 leading-relaxed">{item.challenge}</p>
          </div>
        </div>

        <div className="bg-white/[0.035] border border-white/10 rounded-3xl p-8 md:p-12 mb-14">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-7 h-7 text-[#F9EE6B]" />
            <h3 className="text-2xl font-bold">Ratkaisu</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-[#F9EE6B] font-bold mb-5">{item.solutionTitleLeft}</h4>
              <ul className="space-y-4">
                {item.solutionLeft.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/65">
                    <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#F9EE6B] font-bold mb-5">{item.solutionTitleRight}</h4>
              <ul className="space-y-4">
                {item.solutionRight.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/65">
                    <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.ctaTitle}</h3>
          <p className="text-white/55 leading-relaxed mb-8">{item.ctaText}</p>
          <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
            Ota yhteyttä
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Referenssit() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-black to-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="text-xs tracking-[0.45em] text-[#F9EE6B] font-bold mb-6">REFERENSSIT</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Tyytyväisiä asiakkaita</h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Lue mitä asiakkaamme sanovat yhteistyöstämme. Olemme ylpeitä pitkäaikaisista kumppanuuksistamme.
            </p>
          </motion.div>
        </div>
      </section>

      {caseStudies.map((item) => (
        <CaseStudy key={item.title} item={item} />
      ))}

      <AnimatedSection className="section-padding bg-white/[0.03]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.35em] text-[#F9EE6B] font-bold mb-4">PALAUTE</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Asiakkaiden kokemuksia</h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              Suoria kommentteja asiakkailta, joiden kanssa Popa on rakentanut näkyvyyttä, materiaaleja ja markkinointia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {testimonials.map((item) => (
              <motion.article
                key={item.company}
                whileHover={{ y: -6 }}
                className="bg-white/[0.035] border border-white/10 rounded-3xl p-8 min-h-[420px] flex flex-col hover:border-[#F9EE6B]/40 transition-all"
              >
                <h3 className="text-xl font-bold text-[#F9EE6B] mb-6">{item.company}</h3>
                <div className="text-[#F9EE6B]/25 text-6xl leading-none mb-2">”</div>
                <p className="text-white/65 leading-relaxed flex-1">"{item.quote}"</p>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.person}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="font-bold">{item.person}</div>
                    <div className="text-sm text-white/45">{item.role}</div>
                    {item.location && <div className="text-sm text-white/35">{item.location}</div>}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-gradient-to-b from-transparent to-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Haluatko liittyä tyytyväisten asiakkaidemme joukkoon?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Ota yhteyttä ja kerro tarpeistasi — rakennetaan yhdessä markkinointisi menestystarina.
            </p>
            <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
              Ota yhteyttä
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}