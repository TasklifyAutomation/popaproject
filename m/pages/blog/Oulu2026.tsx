import BlogPostLayout from '../../components/BlogPostLayout';

export default function Oulu2026Referenssi() {
  const relatedPosts = [
    {
      slug: 'oulu-2026',
      title: 'Ota asiakassuhdemarkkinointi haltuun nyt ja nosta asiakkuuksien arvoa!',
      category: 'MARKKINOINNIN SUUNNITTELU',
      readTime: '8 min',
    },
    {
      slug: 'markkinoinnin-tavoitteet-ja-kpit',
      title: 'Markkinoinnin tavoitteet ja KPI:t eli suorituskykymittarit',
      category: 'MARKKINOINNIN SUUNNITTELU',
      readTime: '9 min',
    },
    {
      slug: 'mita-hyva-markkinointisuunnitelma-pitaa-sisallaan',
      title: 'Mitä hyvä markkinointisuunnitelma pitää sisällään?',
      category: 'AJANKOHTAISTA',
      readTime: '10 min',
    },
  ];

  return (
    <BlogPostLayout
      category="REFERENSSI"
      title="Oulu 2026 – näkyvyys ja painotuotteet yhden kumppanin kautta"
      date="05.01.2026"
      readTime="6 min"
      excerpt="Popa toteutti Oulu 2026 -projektille laajan paino- ja näkyvyyskokonaisuuden: materiaalit, suurtulosteet ja ulkoinen ilme suunnittelusta tuotantoon."
      image="/kuvat/painoasettu.png"
      relatedPosts={relatedPosts}
    >
      <div className="bg-white/5 border border-[#F9EE6B]/30 rounded-xl p-6 my-8">
        <div className="text-xs tracking-widest text-[#F9EE6B] font-semibold mb-2">TL;DR</div>
        <h3 className="text-white font-bold mb-3">Mitä tehtiin?</h3>
        <ul className="space-y-2 text-white/80">
          <li>✓ Suunnittelu ja aineistojen viimeistely painovalmiiksi</li>
          <li>✓ Painotuotteet ja suurtulosteet (sisälle ja ulos)</li>
          <li>✓ Kyltit, opasteet ja näkyvyysratkaisut tapahtumiin</li>
          <li>✓ Toistuva tuotanto ja nopeat toimitukset tarpeen mukaan</li>
        </ul>
        <div className="mt-5 grid md:grid-cols-3 gap-3 text-sm">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="text-white/50 mb-1">Sijainti</div>
            <div className="text-white font-semibold">Oulu</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="text-white/50 mb-1">Toteutus</div>
            <div className="text-white font-semibold">Paino + näkyvyys + materiaalit</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="text-white/50 mb-1">Tavoite</div>
            <div className="text-white font-semibold">Yhtenäinen ilme & varma tuotanto</div>
          </div>
        </div>
      </div>

      <h2>Lähtötilanne</h2>
      <p>
        Oulu 2026 -kokonaisuudessa näkyvyysmateriaalien tarve elää projektin mukana: välillä tarvitaan nopeasti
        opasteita ja suurtulosteita, välillä tarkasti brändin mukaisia painotuotteita ja kampanjamateriaaleja.
        Tärkeintä oli saada toteutusmalli, jossa suunnittelu, aineisto ja tuotanto toimivat yhdessä — ilman
        katkoja ja turhaa säätöä.
      </p>

      <h2>Haaste</h2>
      <p>
        Suurimmaksi haasteeksi nousi kokonaisuuden hallinta: useita käyttökohteita (sisätilat, ulkotilat, tapahtumat),
        vaihtelevia formaatteja ja aikatauluja sekä tarve varmistaa, että lopputulos näyttää aina samalta riippumatta
        siitä, missä materiaali näkyy.
      </p>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8">
        <h3 className="text-[#F9EE6B] mb-4">Projektin tärkeimmät vaatimukset</h3>
        <ul className="space-y-2 text-white/80">
          <li>✓ Yhtenäinen visuaalinen ilme eri formaateissa</li>
          <li>✓ Nopea reagointi ja selkeä tuotantoprosessi</li>
          <li>✓ Painovalmis aineisto ilman yllätyksiä</li>
          <li>✓ Laadukas lopputulos sisälle ja ulos</li>
        </ul>
      </div>

      <h2>Ratkaisu</h2>
      <p>
        Rakensimme toimintamallin, jossa aineistot tuotetaan ja viimeistellään aina samaa laatulinjaa noudattaen,
        minkä jälkeen tuotanto pystyy toimittamaan tarvittavat materiaalit nopeasti. Yksi kumppani, yksi prosessi,
        selkeä vastuu: suunnittelu → aineisto → tuotanto → toimitus.
      </p>

      <h2>Mitä toimitettiin?</h2>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-bold mb-3 text-white">Painotuotteet</h3>
          <ul className="space-y-2 text-white/80">
            <li>✓ Esitteet ja flyerit</li>
            <li>✓ Kansiot ja materiaalipohjat</li>
            <li>✓ Tapahtuma- ja infoprintit</li>
            <li>✓ Taitto ja painovalmiit PDF:t</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-bold mb-3 text-white">Näkyvyys & suurtulosteet</h3>
          <ul className="space-y-2 text-white/80">
            <li>✓ Opasteet ja kyltit</li>
            <li>✓ Roll-upit ja bannerit</li>
            <li>✓ Messu- ja tapahtumamateriaalit</li>
            <li>✓ Ikkuna-/teippausmateriaalit tarvittaessa</li>
          </ul>
        </div>
      </div>

      <h2>Kuvat ja esimerkit (paikat valmiina)</h2>
      <p>
        Alla on valmiit “slotit” kuvamateriaalille. Kun teillä on kuvat, nämä voidaan vaihtaa suoraan kuviin tai
        tehdä kevyt galleria. Ideana on, että referenssi näyttää heti oikealta, vaikka sisältöä täydennetään myöhemmin.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="text-xs text-white/50 mb-2">KUVA 1</div>
          <div className="h-40 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
            Esimerkkikuva / suurtuloste
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="text-xs text-white/50 mb-2">KUVA 2</div>
          <div className="h-40 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
            Esimerkkikuva / opasteet
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="text-xs text-white/50 mb-2">KUVA 3</div>
          <div className="h-40 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
            Esimerkkikuva / painotuote
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-[#F9EE6B]/30 rounded-xl p-6 my-10">
        <h3 className="text-[#F9EE6B] mb-3">Vaikutus (täydennettävä myöhemmin)</h3>
        <p className="text-white/80">
          Koska projekti elää, tärkein hyöty oli toimintamalli: aineistot ja tuotanto saadaan liikkeelle nopeasti, ja
          lopputulos pysyy johdonmukaisena. Kun haluat samaa laatua ja nopeutta jatkossakin, tällainen “yksi kumppani”
          -malli säästää aikaa ja vähentää virheitä.
        </p>
      </div>

      <h2>Asiakkaan palaute (placeholder)</h2>
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8">
        <p className="text-white/80 italic">
          “Yhteistyö oli sujuvaa ja toimitukset tulivat ajallaan. Ilme pysyi yhtenäisenä eri materiaaleissa, ja
          saimme kaiken tarvittavan nopeasti käyttöön.”
        </p>
        <div className="mt-4 text-white/50 text-sm">— Oulu 2026, projektitiimi</div>
      </div>

      <div className="bg-gradient-to-br from-[#F9EE6B]/10 to-transparent border border-[#F9EE6B]/30 rounded-xl p-6 my-10">
        <h3 className="text-white font-bold mb-2">Haluatko vastaavan toteutuksen?</h3>
        <p className="text-white/70 mb-4">
          Kerro mitä tarvitset (painotuotteet, näkyvyys, opasteet, kampanjamateriaalit) — ehdotamme parhaan kokonaisuuden.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/#contact" className="btn-primary">
            Pyydä tarjous
          </a>
          <a href="/tuotannot#contact" className="btn-secondary">
            Ota yhteyttä
          </a>
        </div>
      </div>
    </BlogPostLayout>
  );
}