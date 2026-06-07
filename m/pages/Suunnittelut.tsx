import { motion } from 'framer-motion';
import { Palette, Target, Layout, FileText, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

 export default function Suunnittelut() {
 const services = [
    {
      icon: Target,
      title: 'Brändi & strategia',
      description: 'Rakennamme brändi-identiteetin, joka erottuu ja resonoi kohdeyleisön kanssa',
      features: [
        'Brändistrategia ja -positiointi',
        'Kilpailija-analyysi',
        'Kohderyhmätutkimus',
        'Brändin ääni ja viestintä',
      ],
    },
    {
      icon: Palette,
      title: 'Visuaalinen ilme',
      description: 'Suunnittelemme tunnistettavan visuaalisen identiteetin, joka kestää aikaa',
      features: [
        'Logo ja tunnusmerkit',
        'Typografia ja väripaletti',
        'Kuvakieli ja ikonografia',
        'Graafinen ohjeisto',
      ],
    },
    {
      icon: Layout,
      title: 'Web design',
      description: 'Käyttäjäystävällisiä ja muuntavia digitaalisia kokemuksia',
      features: [
        'UI/UX-suunnittelu',
        'Prototyypit ja wireframet',
        'Responsiivinen design',
        'Käytettävyystestaus',
      ],
    },
    {
      icon: FileText,
      title: 'Sisältösuunnitelmat',
      description: 'Strateginen sisältösuunnittelu, joka tukee liiketoiminnan tavoitteita',
      features: [
        'Sisältöstrategia',
        'Copywriting',
        'Visuaalinen sisältö',
        'Sosiaalisen median suunnittelu',
      ],
    },
  ]; 

  const packages = [
    {
      name: 'Aloitus',
      price: 'Alkaen 2.500€',
      description: 'Pienyrityksille ja startup-yrityksille',
      features: [
        'Brändikartoitus',
        'Logo ja perusvisuaalit',
        'Väripaletti ja typografia',
        '1 kk tukea',
      ],
      highlight: false,
    },
    {
      name: 'Kasvu',
      price: 'Alkaen 5.000€',
      description: 'Kasvuyrityksille',
      features: [
        'Kattava brändistrategia',
        'Visuaalinen identiteetti',
        'Graafinen ohjeisto',
        'Web design -konseptit',
        'Sisältösuunnitelma',
        '3 kk tukea',
      ],
      highlight: true,
    },
    {
      name: 'Voittaja',
      price: 'Räätälöity',
      description: 'Suuremmille organisaatioille',
      features: [
        'Kokonaisvaltainen brändäys',
        'Kaikki edellä mainitut',
        'Kampanjasuunnittelu',
        'Jatkuva yhteistyö',
        'Dedikoitu tiimi',
      ],
      highlight: false,
    },
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-b from-black to-transparent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Rakennamme <span className="text-gradient">tunnistettavan brändin</span>, joka kestää aikaa
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Suunnittelemme brändit, ilmeet ja digitaaliset kokemukset, jotka puhuttelevat, erottuvat ja jäävät mieleen.
            </p>
            <a href="#contact" className="btn-primary">
              Pyydä kartoitus
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Palvelumme</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Kokonaisvaltaista suunnittelua brändi-identiteetistä digitaalisiin ratkaisuihin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-[#F9EE6B]/50 transition-all"
              >
                <service.icon className="w-12 h-12 text-[#F9EE6B] mb-6" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/60 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Paketit</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Valitse yrityksellesi sopiva paketti tai räätälöidään juuri teille sopiva ratkaisu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-2xl p-8 border transition-all ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-[#F9EE6B]/10 to-transparent border-[#F9EE6B] scale-105'
                    : 'bg-white/5 border-white/10 hover:border-[#F9EE6B]/50'
                }`}
              >
                {pkg.highlight && (
                  <div className="inline-block bg-[#F9EE6B] text-[#0B0B0B] text-xs font-bold px-3 py-1 rounded-full mb-4">
                    SUOSITUIN
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-[#F9EE6B] mb-2">{pkg.price}</div>
                <p className="text-white/60 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F9EE6B] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center font-semibold px-6 py-3 rounded-full transition-all ${
                    pkg.highlight
                      ? 'bg-[#F9EE6B] text-[#0B0B0B] hover:scale-105'
                      : 'border-2 border-white/20 text-white hover:border-[#F9EE6B] hover:text-[#F9EE6B]'
                  }`}
                >
                  Aloita tästä
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Miksi brändi on tärkeä?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Zap className="w-6 h-6 text-[#F9EE6B] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Erottuvuus</h4>
                      <p className="text-white/60">
                        Vahva brändi erottaa sinut kilpailijoista ja jää asiakkaiden mieleen
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Zap className="w-6 h-6 text-[#F9EE6B] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Luottamus</h4>
                      <p className="text-white/60">
                        Ammattimaisuus ja johdonmukaisuus rakentavat asiakasluottamusta
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Zap className="w-6 h-6 text-[#F9EE6B] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Kasvu</h4>
                      <p className="text-white/60">
                        Hyvä brändi tukee myyntiä ja mahdollistaa liiketoiminnan kasvun
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#F9EE6B]/20 to-transparent rounded-2xl border border-[#F9EE6B]/30 p-12 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Halutko sparrata ilmeestäsi?
                </h3>
                <p className="text-white/70 mb-6">
                  Varaa 30 minuutin maksuton kartoituskeskustelu
                </p>
                <a href="#contact" className="btn-primary">
                  Varaa aika
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Aloitetaan keskustelu</h2>
              <p className="text-white/60">Kerro brändistäsi ja tavoitteistasi</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nimi</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors"
                      placeholder="Nimesi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Yritys</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors"
                      placeholder="Yrityksen nimi"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sähköposti</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors"
                    placeholder="sahkoposti@esimerkki.fi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Kiinnostuksen kohde</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors">
                    <option>Brändistrategia</option>
                    <option>Visuaalinen identiteetti</option>
                    <option>Web design</option>
                    <option>Kokonaisvaltainen paketti</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Kerro projektistasi</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors resize-none"
                    placeholder="Mitä tavoittelet brändillesi?"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Lähetä viesti
                </button>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
