import BlogPostLayout from '../../components/BlogPostLayout';

export default function MarkkinointiOmatoimisestiVaiUlkoistettuna() {
  const relatedPosts = [
    {
      slug: 'pohjoisuus-kilpailuetuna',
      title: 'Pohjoisuus kilpailuetuna – miten rakennat erottuvan yritysilmeen ja tarinan',
      category: 'BRÄNDI & TARINANKERRONTA',
      readTime: '6 min',
    },
    {
      slug: 'tekoaly-markkinoinnissa',
      title: 'Tekoäly markkinoinnissa: kirjoittaako AI ihmistä paremmin?',
      category: 'TEKOÄLY & MARKKINOINTI',
      readTime: '6 min',
    },
    {
      slug: 'painotuotteet-2026',
      title: 'Painotuotteet 2026: miksi yhä useampi yritys painattaa nyt enemmän aineistojaan',
      category: 'PAINOTUOTTEET',
      readTime: '7 min',
    },
  ];

  return (
    <BlogPostLayout
      category="MARKKINOINNIN SUUNNITTELU"
      title="Markkinointi omatoimisesti vai ulkoistettuna: mitä se maksaa?"
      date="13.05.2026"
      readTime="8 min"
      excerpt="Markkinointi maksaa aina joko rahaa, aikaa tai menetettyjä mahdollisuuksia. Olennaista on tunnistaa, mikä kannattaa tehdä itse ja missä ulkopuolinen kumppani säästää enemmän kuin maksaa."
      image="/kuvat/muistiokuva.png"
      relatedPosts={relatedPosts}
    >
      <p>
        Markkinointibudjetti tuntuu helposti ylimääräiseltä riviltä kuluissa. “Ehkä ensi vuonna
        investoin markkinointiin”, ajattelee moni yrittäjä jo kolmatta vuotta peräkkäin.
        Pohditaanpa, paljonko sinulle maksaa se, että et markkinoi.
      </p>

      <h2>Osa kannattaakin tehdä itse</h2>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/kannykkakuva2.png"
          alt="Yrityksen oma sisällöntuotanto ja arjen markkinointi"
          className="w-full h-auto object-cover"
        />
      </div>

      <p>
        Kaikki markkinointi ei ole järkevää ulkoistaa. Jotkut asiat menettävät arvonsa heti,
        kun ne siirtyvät välikätenä toimistolle.
      </p>

      <p>
        Kuva tänään tapahtuneesta asiasta somessa. Lyhyt havainto, jonka vain sinä voit tehdä juuri nyt.
        Somessa autenttisuus on kilpailuetu, jota ei voi ostaa. Se näkyy heti, jos sitä yrittää lavastaa.
      </p>

      <p>
        Sama koskee asiakassuhteiden ylläpitoa. Lyhyt viesti projektin jälkeen, kysymys tai palautteen anto
        ovat aina sinun oma äänesi. Sisäinen viestintä kuuluu samaan joukkoon. Tiimin palaverimuistio tai
        henkilöstöuutinen on organisaatiokulttuurin tuote, ei markkinointimateriaali.
      </p>

      <h2>Osa on järkevää ulkoistaa</h2>
      <p>
        Et näe omaa yritystäsi ulkopuolisin silmin. Me Popalla näemme. Hyvä copywriter kysyy asioita,
        joita et ole koskaan ajatellut, ja kirjoittaa vastaukset niin, että asiakas ymmärtää ne.
      </p>

      <p>
        Sisältöstrategia ja julkaisukalenteri kuuluvat samaan kategoriaan. Kalenteri on helppo tehdä,
        mutta puoli vuotta eteenpäin miettiminen vaatii etäisyyttä. Arjessa on vaikea erottaa,
        mikä on kiinnostavaa ja mikä on itsestäänselvyys.
      </p>

      <p>
        Referenssitarinat ja projektikuvaukset ovat juuri se paikka, jossa toimistosta on eniten hyötyä.
        Tiedät oman projektisi liian hyvin. Ulkopuolinen tekijä löytää siitä sen näkökulman,
        mikä yllättää lukijan.
      </p>

      <p>
        Tiukasti aikataulutetussa ja budjetoidussa kokonaisuudessa virheisiin ei ole varaa.
        Silloin ulkoinen kumppani kantaa vastuun ja paineen.
      </p>

      <div className="bg-white/5 border border-[#F9EE6B]/30 rounded-xl p-6 my-8">
        <h3 className="text-[#F9EE6B] mb-4">Tee itse, kun aitous ratkaisee. Ulkoista, kun kokonaisuus ratkaisee.</h3>
        <ul className="space-y-2">
          <li>✓ Tee itse: nopeat somehavainnot ja arjen tilanteet</li>
          <li>✓ Tee itse: henkilökohtainen asiakasviestintä</li>
          <li>✓ Ulkoista: konseptointi ja sisältöstrategia</li>
          <li>✓ Ulkoista: referenssitarinat ja projektikuvaukset</li>
          <li>✓ Ulkoista: painotuotteet, opasteet, valomainokset ja kampanjamateriaalit</li>
        </ul>
      </div>

      <h2>Harmaa alue: säännöllinen sisältötuotanto</h2>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/kirjekuori.png"
          alt="Säännöllinen viestintä ja sisältötuotanto"
          className="w-full h-auto object-cover"
        />
      </div>

      <p>
        Jokainen yritys haluaisi julkaista säännöllisesti blogia, uutiskirjettä ja somepäivityksiä.
        Harva jaksaa ja ehtii.
      </p>

      <p>
        Paras ratkaisu on joustava kumppanuus: sinä tuot aihiot, havainnot ja aitouden,
        me muotoilemme, editoimme ja pidämme rytmin yllä. Näin molemmista saadaan ulos paras hyöty.
      </p>

      <h2>Laske, mitä näkyvyys oikeasti maksaa</h2>
      <p>
        Alla on tyypillisiä kertakustannuksia pienyritykselle Suomessa. Ne ovat suuntaa antavia
        markkinahintoja, joilla pystyy havainnollistamaan jutun ydintä.
      </p>

      <div className="my-8 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4 text-white">Tuote tai palvelu</th>
              <th className="p-4 text-white">Tyypillinen hinta (alv 0 %)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            <tr>
              <td className="p-4 text-white/75">Tilateippaukset, myymälän ikkunat</td>
              <td className="p-4 text-white/75">300–800 €</td>
            </tr>
            <tr>
              <td className="p-4 text-white/75">Suurtuloste, juliste tai messubanneri</td>
              <td className="p-4 text-white/75">80–300 €</td>
            </tr>
            <tr>
              <td className="p-4 text-white/75">Opasteet, sisä- tai ulkokyltti</td>
              <td className="p-4 text-white/75">200–600 €</td>
            </tr>
            <tr>
              <td className="p-4 text-white/75">Valomainokset, yrityksen julkisivu</td>
              <td className="p-4 text-white/75">1 500–3 000 €</td>
            </tr>
            <tr>
              <td className="p-4 text-white/75">Sosiaalisen median ylläpitäminen</td>
              <td className="p-4 text-white/75">100–400 €/kk mediabudjetti</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Yhteensä valomainoskyltti, teippaukset ja pieni somepanostus kuussa tarkoittaa noin
        2 000–5 000 euron investointia. Tätä riviä katsoessaan moni yrittäjä ajattelee:
        “turhia menoja”.
      </p>

      <p>
        Tehdään toinen lasku. Jos yrityksesi keskimääräinen asiakas tuo 1 500 euroa vuodessa
        ja yksikin uusi asiakas kuussa jää tulematta näkymättömyyden vuoksi, se on 18 000 euroa
        menetettyä liikevaihtoa vuodessa. Vertaa sitä 3 000 euron markkinointibudjettiin.
      </p>

      <p>
        Jos et maksa markkinoinnista rahalla, maksat omalla ajallasi. Yrittäjätunti on helposti
        50 euroa, ja seitsemän tuntia kuussa menee nopeasti ihan perusmarkkinointiin.
        Laskuri käy sielläkin.
      </p>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/julkisivupopa.png"
          alt="Yrityksen näkyvyys ja julkisivumarkkinointi"
          className="w-full h-auto object-cover"
        />
      </div>

      <h2>Yksi kysymys ennen päätöstäsi</h2>
      <p>
        Markkinointi ei ole ilmaista. Markkinoimatta jättäminen ei myöskään ole ilmaista.
        Ennen kuin päätät, onko markkinointibudjetti turha meno, mieti paljonko yksi uusi asiakas
        tuo sinulle vuodessa.
      </p>

      <p>
        Me Popalla kerromme suoraan, mitä sinun kannattaa tilata meiltä ja mitä ehkä jostain muualta.
        Autamme niissä asioissa, joissa oikeasti hyödyt. Oli se sitten valomainos, tilateippaukset
        tai kampanjamateriaali, jolla on tiukka aikataulu.
      </p>

      <p>
        Popa on auttanut pohjoisen yrityksiä näkymään vuodesta 1956. Ota yhteyttä tänään,
        niin katsotaan yhdessä mistä kannattaa aloittaa. Vastaamme 24 tunnin sisällä.
      </p>
    </BlogPostLayout>
  );
}