import BlogPostLayout from '../../components/BlogPostLayout';

export default function TarinanVoimaMarkkinoinnissa() {
  const relatedPosts = [
    {
      slug: 'pohjoisuus-kilpailuetuna',
      title: 'Pohjoisuus kilpailuetuna – miten rakennat erottuvan yritysilmeen ja tarinan',
      category: 'BRÄNDI & TARINANKERRONTA',
      readTime: '6 min',
    },
    {
      slug: 'epayhtenainen-yritysilme',
      title: 'Viisi kohtaa, joissa yritysilme yleensä hajoaa',
      category: 'BRÄNDI',
      readTime: '6 min',
    },
    {
      slug: 'tekoaly-markkinoinnissa',
      title: 'Tekoäly markkinoinnissa – kirjoittaako AI ihmistä paremmin?',
      category: 'DIGIMARKKINOINTI',
      readTime: '6 min',
    },
  ];

  return (
    <BlogPostLayout
      category="BRÄNDI & TARINANKERRONTA"
      title="Tarinan voima markkinoinnissa – mitä 70 vuotta on opettanut meille"
      date="13.05.2026"
      readTime="6 min"
      excerpt="Kanavat muuttuvat, mutta hyvä tarina säilyy. Mitä seitsemän vuosikymmentä markkinoinnin parissa on opettanut näkyvyydestä, uskottavuudesta ja muistettavuudesta?"
      image="/kuvat/oulu26.jpg"
      relatedPosts={relatedPosts}
    >
      <p>
        Vuonna 1956 Rovaniemellä avautui ensimmäinen painotalomme. Asiakkaat tilasivat
        käyntikortteja, lomakkeita ja esitteitä, jotka suunniteltiin käsin. Painos mitattiin
        arkeissa, ei gigatavuissa.
      </p>

      <p>
        Ajat ovat muuttuneet valtavasti, mutta yksi asia on pysynyt samana: yritykset,
        jotka kertovat tarinansa selkeästi, jäävät paremmin mieleen kuin ne, jotka
        keskittyvät pelkästään kanaviin tai tekniikkaan.
      </p>

      <h2>Kanava ei ole viesti</h2>

      <p>
        Jokainen vuosikymmen on tuonut mukanaan uuden kanavan ja saman kysymyksen:
        pitäisikö meidänkin olla siellä?
      </p>

      <p>
        Offsetpaino, internet, verkkosivut, sosiaalinen media, lyhytvideot, tekoäly.
        Vastaus on yleensä kyllä. Mutta samalla moni yritys unohtaa tärkeämmän
        kysymyksen: mitä siellä oikeastaan sanotaan?
      </p>

      <p>
        Uusi logo, uusi verkkosivusto tai uusi somekanava eivät yksin rakenna
        tunnistettavaa brändiä. Tarvitaan myös tarina, joka yhdistää kaiken tekemisen.
      </p>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/oulu26.jpg"
          alt="Pohjoinen identiteetti ja tarinankerronta"
          className="w-full h-auto object-cover"
        />
      </div>

      <h2>Kolme oppia vuosikymmenten varrelta</h2>

      <h3>1. Muutos ei tuhoa tarinaa, jos tarina on olemassa</h3>

      <p>
        Popa on kulkenut käsityöstä offsetpainoon, painosta digitaaliseen tuotantoon ja
        printistä videoihin sekä kokonaisvaltaisiin näkyvyysratkaisuihin.
      </p>

      <p>
        Jokaisessa murroksessa vahvimmat yritykset ovat olleet niitä, joilla on ollut
        selkeä käsitys siitä, mitä ne tekevät ja kenelle. Kun perusta on kunnossa,
        kanavat voivat muuttua ilman että identiteetti katoaa.
      </p>

      <h3>2. Paikallisuus ei ole rajoite vaan uskottavuutta</h3>

      <p>
        Pohjoinen Suomi on erityinen toimintaympäristö. Pitkät välimatkat, vaihtelevat
        olosuhteet ja yhteisöt, joissa maine kulkee nopeasti.
      </p>

      <p>
        Asiakkaat tunnistavat nopeasti, puhutaanko heille aidosti vai yleisellä
        markkinointikielellä. Paikallinen tarina ei sulje pois kasvua, vaan tekee
        viestistä uskottavamman.
      </p>

      <div className="bg-white/5 border border-[#F9EE6B]/30 rounded-xl p-6 my-8">
        <h3 className="text-[#F9EE6B] mb-4">Hyvä yritystarina rakentuu usein näistä asioista</h3>
        <ul className="space-y-2">
          <li>✓ Mistä yritys on lähtöisin</li>
          <li>✓ Mitä ongelmaa se ratkaisee</li>
          <li>✓ Miksi asiakkaat palaavat takaisin</li>
          <li>✓ Mitkä arvot näkyvät käytännön työssä</li>
          <li>✓ Miten yritys eroaa kilpailijoistaan</li>
        </ul>
      </div>

      <h3>3. Jatkuvuus on vahvuutta</h3>

      <p>
        Yritykset rakentavat luottamusta hitaasti. Yksittäinen kampanja voi herättää
        huomiota, mutta pitkäjänteisyys rakentaa tunnettuutta.
      </p>

      <p>
        Vuosikymmenten aikana olemme nähneet, että asiakkaat muistavat yritykset,
        joiden teot vastaavat puhetta vuodesta toiseen. Silloin markkinointi ei tunnu
        markkinoinnilta vaan luonnolliselta jatkolta yrityksen toiminnalle.
      </p>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/muistiokuva.png"
          alt="Tarinankerronta ja muistijälki"
          className="w-full h-auto object-cover"
        />
      </div>

      <h2>Mitä tämä tarkoittaa sinun yrityksellesi?</h2>

      <p>
        Tarvitset selvyyden siitä, mistä olet tullut, mihin olet menossa ja miksi sillä on
        merkitystä juuri niille ihmisille, joita haluat palvella.
      </p>

      <p>
        Valomainoksessa, opasteessa, esitteessä tai videossa välittyy aina enemmän kuin
        pelkkä logo. Niissä välittyy kuva siitä, millainen yritys on kyseessä.
      </p>

      <p>
        Jos et kerro tarinaasi itse, asiakkaat täyttävät tyhjän tilan omilla
        oletuksillaan.
      </p>

      <h2>Jokaisella yrityksellä on tarina – mutta kertooko se sen?</h2>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/julkisivupopa.png"
          alt="Popan näkyvyysratkaisut"
          className="w-full h-auto object-cover"
        />
      </div>

      <p>
        Merkkivuosi on hyvä syy pysähtyä tarkastelemaan yrityksen viestintää, mutta
        tarina kannattaa kertoa myös silloin, kun mitään juhlapäivää ei ole tulossa.
      </p>

      <p>
        Selkeä yritystarina helpottaa markkinointia, myyntiä, rekrytointia ja
        asiakassuhteiden rakentamista. Se auttaa myös tekemään parempia päätöksiä
        silloin, kun markkinointiympäristö muuttuu.
      </p>

      <p>
        Popa on suunnitellut ja toteuttanut näkyvyysratkaisuja pohjoisen yrityksille
        vuodesta 1956 lähtien. Jos yrityksesi tarina kaipaa selkeyttä tai näkyvämpää
        toteutusta, aloitetaan kartoituksella. Vastaamme yhteydenottoihin 24 tunnin
        sisällä.
      </p>
    </BlogPostLayout>
  );
}