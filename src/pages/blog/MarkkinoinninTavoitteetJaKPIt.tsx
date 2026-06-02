import BlogPostLayout from '../../components/BlogPostLayout';

export default function MarkkinoinninTavoitteetJaKPIt() {
  const relatedPosts = [
    {
      slug: 'mita-hyva-markkinointisuunnitelma-pitaa-sisallaan',
      title: 'Mitä hyvä markkinointisuunnitelma pitää sisällään?',
      category: 'AJANKOHTAISTA',
      readTime: '10 min',
    },
    {
      slug: 'markkinoinnin-stp-malli',
      title: 'Markkinoinnin STP-malli – mikä se on ja mitä hyötyä siitä on?',
      category: 'MARKKINOINNIN SUUNNITTELU',
      readTime: '8 min',
    },
    {
      slug: 'kettera-markkinointi',
      title: 'Ketterä markkinointi – mitä ja miten?',
      category: 'DIGIMARKKINOINTI',
      readTime: '7 min',
    },
  ];

  return (
    <BlogPostLayout
      category="MARKKINOINNIN SUUNNITTELU"
      title="Markkinoinnin tavoitteet ja KPI:t eli suorituskykymittarit"
      date="10.01.2026"
      readTime="9 min"
      excerpt="Opi asettamaan oikeat mittarit markkinoinnillesi ja seuraamaan tuloksia tehokkaasti dataohjautuvasti."
      image="/kuvat/muistiokuva.png"
      relatedPosts={relatedPosts}
    >
      <h2>Miksi KPI:t ovat tärkeitä?</h2>
      <p>
        Ilman selkeitä mittareita et voi tietää, toimiiko markkinointisi vai ei. KPI:t (Key Performance Indicators)
        eli keskeiset suorituskykymittarit auttavat seuraamaan, mitatako ja optimoimaan markkinointitoimenpiteiden
        vaikuttavuutta. Ne muuttavat abstraktit tavoitteet konkreettisiksi, mitattaviksi luvuiksi.
      </p>

      <h2>SMART-tavoitteet markkinoinnissa</h2>
      <p>
        Hyvät markkinointitavoitteet noudattavat SMART-mallia: Specific (täsmällinen), Measurable (mitattavissa oleva),
        Achievable (saavutettavissa oleva), Relevant (relevantti) ja Time-bound (aikasidonnainen). Esimerkiksi "kasvata
        verkkosivuliikennettä 30% seuraavan kuuden kuukauden aikana" on SMART-tavoite.
      </p>

      <div className="bg-white/5 border border-[#F9EE6B]/30 rounded-xl p-6 my-8">
        <h3 className="text-[#F9EE6B] mb-4">Yleisimmät markkinoinnin KPI:t</h3>
        <ul className="space-y-2">
          <li>✓ Verkkosivuliikenne ja sen lähteet</li>
          <li>✓ Konversioprosentti</li>
          <li>✓ Asiakashankintakustannus (CAC)</li>
          <li>✓ Asiakkaan elinkaaren arvo (CLV)</li>
          <li>✓ ROI (Return on Investment)</li>
          <li>✓ Sitoutumisaste sosiaalisessa mediassa</li>
        </ul>
      </div>

      <h2>Tavoitetyypit: myynnilliset vs. bränditavoitteet</h2>
      <p>
        Markkinoinnin tavoitteet voidaan jakaa karkeasti kahteen kategoriaan. Myynnilliset tavoitteet keskittyvät
        suoraan tuloksentekoon: liidit, konversiot, myynti. Bränditavoitteet rakentavat pidemmän aikavälin arvoa:
        tunnettavuus, mielikuva, asiakasuskollisuus. Tasapaino molempien välillä on tärkeää.
      </p>

      <h2>Mittarien valinta liiketoimintatavoitteiden mukaan</h2>
      <p>
        Älä mittaa kaikkea vaan keskity olennaiseen. Valitse KPI:t, jotka tukevat liiketoimintatavoitteitasi.
        Jos tavoitteenasi on kasvattaa myyntiä, seuraa liidien määrää ja laatua. Jos rakennat brändiä, keskity
        tunnettuuteen ja sitoutumiseen. Muista, että "vanity metrics" kuten tykkäysten määrä harvoin kertoo
        todellisesta liiketoimintavaikutuksesta.
      </p>

      <h2>Datan kerääminen ja analysointi</h2>
      <p>
        Hyödynnä työkaluja kuten Google Analytics, sosiaalisen median analytiikka ja CRM-järjestelmä. Luo
        dashboard, joka kokoaa tärkeimmät mittarit yhteen paikkaan. Seuraa KPI:tä säännöllisesti – vähintään
        kuukausittain, mutta tärkeimmät mittarit kannattaa tarkistaa viikoittain tai jopa päivittäin.
      </p>

      <h2>Jatkuva optimointi ja oppiminen</h2>
      <p>
        KPI:t eivät ole staattisia. Kun liiketoimintasi kasvaa ja markkinatilanne muuttuu, myös mittareidesi
        tulee kehittyä. Arvioi säännöllisesti, mittaatko oikeita asioita. Testaa, kokeile ja opi jatkuvasti.
        Dataohjautuva markkinointi on jatkuvan parantamisen prosessi.
      </p>
    </BlogPostLayout>
  );
}