import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface BlogPost {
  id: number;
  slug: string;
  category: string;
  filterCategory: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export default function Blogi() {
  const [activeFilter, setActiveFilter] = useState('Kaikki');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['Kaikki', 'Brändi', 'Painotuotteet', 'Näkyvyys', 'Tapahtumat', 'Tekoäly', 'Referenssit'];

  const articles: BlogPost[] = [
    {
      id: 1,
      slug: 'pohjoisuus-kilpailuetuna',
      category: 'BRÄNDI & TARINANKERRONTA',
      filterCategory: 'Brändi',
      title: 'Pohjoisuus kilpailuetuna – miten rakennat erottuvan yritysilmeen ja tarinan',
      excerpt: 'AI-aikakaudella yritysten materiaalit alkavat helposti näyttää samalta. Pohjoisuus voi olla kilpailuetu, jota ei voi kopioida.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/oulu26.jpg',
    },
    {
      id: 2,
      slug: 'tekoaly-markkinoinnissa',
      category: 'DIGIMARKKINOINTI',
      filterCategory: 'Tekoäly',
      title: 'Tekoäly markkinoinnissa – kirjoittaako AI ihmistä paremmin?',
      excerpt: 'Tekoäly nopeuttaa markkinointia, mutta paras lopputulos syntyy edelleen ihmisen suunnasta, kontekstista ja viimeistelystä.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/kannykkakuva.png',
    },
    {
      id: 3,
      slug: 'painotuotteet-2026',
      category: 'PAINOTUOTTEET',
      filterCategory: 'Painotuotteet',
      title: 'Painotuotteet 2026 – miksi yhä useampi yritys painattaa enemmän',
      excerpt: 'Painotuotteet eivät ole kadonneet. Digitaalisen kyllästymisen keskellä fyysinen materiaali voi erottua paremmin kuin koskaan.',
      date: '13.05.2026',
      readTime: '7 min',
      image: '/kuvat/painoasettu.png',
    },
    {
      id: 4,
      slug: 'markkinointi-omatoimisesti-vai-ulkoistettuna',
      category: 'MARKKINOINTI',
      filterCategory: 'Vinkit',
      title: 'Markkinointi omatoimisesti vai ulkoistettuna – mitä se maksaa?',
      excerpt: 'Kaikkea markkinointia ei kannata ulkoistaa. Mutta markkinoimatta jättäminenkin maksaa enemmän kuin moni yrittäjä ajattelee.',
      date: '13.05.2026',
      readTime: '8 min',
      image: '/kuvat/muistiokuva.png',
    },
    {
      id: 5,
      slug: 'julkisivu-paivityksen-tarpeessa',
      category: 'NÄKYVYYS',
      filterCategory: 'Näkyvyys',
      title: 'Julkisivu päivityksen tarpeessa – 3 merkkiä, joihin kannattaa reagoida',
      excerpt: 'Julkisivu kertoo yrityksestä ennen ensimmäistäkään asiakaskohtaamista. Nämä merkit kertovat, milloin näkyvyys kaipaa päivitystä.',
      date: '13.05.2026',
      readTime: '5 min',
      image: '/kuvat/julkisivupopa.png',
    },
    {
      id: 6,
      slug: 'epayhtenainen-yritysilme',
      category: 'BRÄNDI',
      filterCategory: 'Brändi',
      title: 'Epäyhtenäinen yritysilme – 5 kohtaa, joissa linja yleensä rakoilee',
      excerpt: 'Yritysilme hajoaa harvoin kerralla. Usein se rapistuu pienissä päätöksissä, joita kukaan ei huomaa ajoissa.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/popaesilla.png',
    },
    {
      id: 7,
      slug: 'messuosasto-joka-pysayttaa',
      category: 'MESSUT & TAPAHTUMAT',
      filterCategory: 'Tapahtumat',
      title: 'Messuosasto joka pysäyttää – mitä tarvitset roll-upin lisäksi',
      excerpt: 'Hyvä messuosasto ei synny pelkästä roll-upista. Katso, mitkä tekijät saavat ihmiset pysähtymään.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/messujakokuva.png',
    },
    {
      id: 8,
      slug: 'tarinan-voima-markkinoinnissa',
      category: 'BRÄNDI & TARINANKERRONTA',
      filterCategory: 'Brändi',
      title: 'Tarinan voima markkinoinnissa – mitä 70 vuotta on opettanut meille',
      excerpt: 'Kanavat muuttuvat, mutta hyvä tarina säilyy. Seitsemän vuosikymmentä markkinoinnin parissa on opettanut sen hyvin.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/oulu26.jpg',
    },
    {
      id: 9,
      slug: 'oulu2026-yhteistyo',
      category: 'TAPAHTUMAT & REFERENSSIT',
      filterCategory: 'Referenssit',
      title: 'Tapahtumamateriaalit isossa mittakaavassa – mitä opimme Oulu2026-yhteistyöstä',
      excerpt: 'Iso tapahtumavuosi vaatii muutakin kuin yksittäisiä painotilauksia. Ennakointi ja selkeä kokonaisuus ratkaisevat.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/oulu26.jpg',
    },
    {
      id: 10,
      slug: 'milloin-teippaus-kannattaa',
      category: 'TEIPPAUKSET & NÄKYVYYS',
      filterCategory: 'Näkyvyys',
      title: 'Milloin tila tai auto kannattaa teipata?',
      excerpt: 'Teippaus on nopea tapa muuttaa ikkuna, seinä, auto tai liiketila näkyväksi markkinointipinnaksi.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/myymalakuva.png',
    },
    {
      id: 11,
      slug: 'painotuote-vs-digitaalinen-markkinointi',
      category: 'PAINOTUOTTEET & MARKKINOINTI',
      filterCategory: 'Painotuotteet',
      title: 'Painotuote vs. digitaalinen markkinointi – tilanteita jolloin painotuote on parhaimmillaan',
      excerpt: 'Digitaalinen markkinointi on nopeaa ja mitattavaa, mutta tietyissä tilanteissa painotuote tekee työn, johon ruutu ei pysty.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/kirjekuori.png',
    },
    {
      id: 12,
      slug: 'yksi-markkinointikumppani',
      category: 'MARKKINOINTIKUMPPANUUS',
      filterCategory: 'Vinkit',
      title: 'Yksi markkinointikumppani vai monta eri toimistoa – näin kokonaisuus pysyy kasassa',
      excerpt: 'Kun painotuotteet, videot, opasteet ja ilme tulevat samasta paikasta, kokonaisuus pysyy helpommin yhtenäisenä.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/julkisivupopa.png',
    },
    {
      id: 13,
      slug: 'valomainosopas-ostajalle',
      category: 'VALOMAINOKSET',
      filterCategory: 'Näkyvyys',
      title: 'Valomainosopas ostajalle – mitä on hyvä tietää ennen tilausta',
      excerpt: 'Valomainos auttaa asiakasta löytämään perille, rakentaa tunnistettavuutta ja tekee yrityksestä näkyvän myös pimeällä.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/valomainos.png',
    },
    {
      id: 14,
      slug: 'tekoalypromptit-markkinoinnissa',
      category: 'TEKOÄLY & MARKKINOINTI',
      filterCategory: 'Tekoäly',
      title: 'Tekoälypromptit markkinoinnissa – 4 syytä, miksi somevinkit huijaavat',
      excerpt: 'Valmis tekoälyprompti voi näyttää oikotieltä, mutta usein se tuottaa geneeristä sisältöä ilman oikeaa yrityksen ääntä.',
      date: '13.05.2026',
      readTime: '6 min',
      image: '/kuvat/kannykkakuva2.png',
    },
    {
      id: 15,
      slug: 'valomainosostajan-muistilista',
      category: 'VALOMAINOKSET',
      filterCategory: 'Näkyvyys',
      title: 'Valomainosostajan lyhyt muistilista',
      excerpt: 'Valomainoksen tilaaminen helpottuu, kun tärkeimmät kysymykset selvitetään ennen tarjousta, tuotantoa ja asennuspäivää.',
      date: '13.05.2026',
      readTime: '5 min',
      image: '/kuvat/valomainos.png',
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesFilter = activeFilter === 'Kaikki' || article.filterCategory === activeFilter;
    const matchesSearch = searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-black to-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Blogi</span> & Opit
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Vinkkejä, oppeja ja ajatuksia brändeistä, näkyvyydestä, painotuotteista ja markkinoinnista
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Etsi artikkeleita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 pl-12 focus:outline-none focus:border-[#F9EE6B] transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-[#F9EE6B] text-[#0B0B0B]'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:border-[#F9EE6B]/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, idx) => (
              <Link
                key={article.id}
                to={`/blogi/${article.slug}`}
                className="block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#F9EE6B]/50 transition-all cursor-pointer group h-full flex flex-col"
                >
                  <div className="aspect-video bg-white/5 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-[#F9EE6B]">
                        {article.category}
                      </span>
                      <span className="text-xs text-white/40">•</span>
                      <span className="text-xs text-white/40">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#F9EE6B] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-white/60 mb-4 line-clamp-3 flex-1">{article.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-white/50">{article.date}</span>
                      <ArrowRight className="w-4 h-4 text-[#F9EE6B] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">Ei hakutuloksia.</p>
            </div>
          )}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#F9EE6B]/10 to-transparent rounded-2xl border border-[#F9EE6B]/30 p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Tilaa uutiskirjeemme</h2>
            <p className="text-white/70 mb-6">
              Saat tuoreimmat artikkelit ja vinkit suoraan sähköpostiisi. Ilmoitamme vain olennaisesta, ei roskapostia.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Sähköpostiosoitteesi"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Tilaa
              </button>
            </form>
            <p className="text-xs text-white/40 mt-4">
              Voit perua tilauksen milloin tahansa. Lue lisää{' '}
              <a href="#" className="underline hover:text-[#F9EE6B]">
                tietosuojastamme
              </a>
              .
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}