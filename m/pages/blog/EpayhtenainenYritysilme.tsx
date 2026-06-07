import BlogPostLayout from '../../components/BlogPostLayout';

export default function EpayhtenainenYritysilme() {
  const relatedPosts = [
    {
      slug: 'julkisivu-paivityksen-tarpeessa',
      title: 'Julkisivu päivityksen tarpeessa? 3 merkkiä, joihin kannattaa reagoida',
      category: 'JULKINÄKYVYYS',
      readTime: '6 min',
    },
    {
      slug: 'pohjoisuus-kilpailuetuna',
      title: 'Pohjoisuus kilpailuetuna – miten rakennat erottuvan yritysilmeen ja tarinan',
      category: 'BRÄNDI & TARINANKERRONTA',
      readTime: '6 min',
    },
    {
      slug: 'markkinointi-omatoimisesti-vai-ulkoistettuna',
      title: 'Markkinointi omatoimisesti vai ulkoistettuna: mitä se maksaa?',
      category: 'MARKKINOINNIN SUUNNITTELU',
      readTime: '8 min',
    },
  ];

  return (
    <BlogPostLayout
      category="BRÄNDI"
      title="Epäyhtenäinen yritysilme: 5 kohtaa, joissa linja yleensä rakoilee"
      date="13.05.2026"
      readTime="7 min"
      excerpt="Yritysilme harvoin hajoaa yhdestä isosta päätöksestä. Usein se rapistuu pienissä arjen valinnoissa, joita kukaan ei pysähdy korjaamaan ajoissa."
      image="/kuvat/muistiokuva.png"
      relatedPosts={relatedPosts}
    >
      <p>
        Kun katsoo yrityksen verkkosivuja, julkisivua, esitettä ja someprofiilia vierekkäin,
        voi kysyä hiljaa: onko ilme tietoisesti yhtenäinen vai tahattomasti eri?
      </p>

      <p>
        Yritysilme rapistuu käytössä pikkuhiljaa. Se voi tapahtua kiireessä tehtyinä
        pikapäätöksinä tai tahattomina kompromisseina. Tässä viisi kohtaa, joissa ilmeen
        rakoilu tyypillisimmin alkaa.
      </p>

      <h2>1. Kun joku tekee oman version logosta</h2>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/muistiokuva.png"
          alt="Yritysilmeen suunnittelu ja brändiohjeistus"
          className="w-full h-auto object-cover"
        />
      </div>

      <p>
        “Otetaan se sininen versio, se toimii paremmin tummalla taustalla.”
      </p>

      <p>
        Kuulostaa järkevältä. Sitten seuraava tekee saman valinnan ja kolmas jatkaa siitä.
        Puolen vuoden päästä yrityksellä on seitsemän eri versiota käytössä ilman, että
        kukaan on koskaan varsinaisesti päättänyt muuttaa mitään.
      </p>

      <p>
        Ilme hajoaa useina pieninä valintoina, joita ei edes mielletä päätöksiksi.
      </p>

      <div className="bg-white/5 border border-[#F9EE6B]/30 rounded-xl p-6 my-8">
        <h3 className="text-[#F9EE6B] mb-4">Korjaus</h3>
        <p>
          Kevyt graafinen opas, logokirjasto käyttöohjeineen ja visuaaliset esimerkit siitä,
          mitä saa tehdä ja mitä ei.
        </p>
      </div>

      <h2>2. Kun ilme on suunniteltu, mutta sitä ei ole omaksuttu</h2>
      <p>
        Brändiopas on 48 sivua pitkä PDF. Se lähetettiin sähköpostitse, kun uusi ilme julkaistiin.
        Puolet lukivat sen, neljännes selasi läpi ja loput tallensivat sen “varmuuden vuoksi”.
      </p>

      <p>
        Käytännön ilme on niin hyvä kuin se henkilö, joka viimeksi teki materiaalia.
        Jos hän ei tiedä, mikä väri menee mihinkin tai mitä typografiaa käytetään otsikoissa,
        kaikki varioi tilanteen ja tarpeen mukaan, vaikka ohjeistus olisi teknisesti olemassa.
      </p>

      <p>
        Ohjeistus ei saa jäädä dokumentiksi. Sen pitää muuttua käytännöksi.
      </p>

      <h2>3. Kun ulkoiset toimistot improvisoivat</h2>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/kirjekuori.png"
          alt="Markkinointimateriaalien yhtenäisyys"
          className="w-full h-auto object-cover"
        />
      </div>

      <p>
        Mainostoimisto A tekee kampanjan. Sosiaalisen median toimisto B tuottaa sisältöä.
        Verkkosivuista vastaa kolmas. Kukaan heistä ei puhu toisilleen eikä kukaan teiltä
        koordinoi tekemisiä aktiivisesti.
      </p>

      <p>
        Tuloksena on kolme eri ilmettä riippuen siitä, missä kanavassa ollaan.
      </p>

      <p>
        Kumppaneilla on oltava samat materiaalit, sama ohjeistus ja sama kontaktihenkilö,
        jolta he voivat kysyä epäselvissä tilanteissa.
      </p>

      <h2>4. Kun päätöksentekijällä tai lähipiirillä on oma käsitys ilmeestä</h2>
      <p>
        “Laitetaanpa tähän enemmän vihreää, se näyttää hyvältä.”
      </p>

      <p>
        Päättäjillä ja heidän lähipiirillään on omat mieltymyksensä, muistikuvansa ja käsityksensä
        toimivasta brändistä. Ne eivät aina vastaa virallista ohjeistusta. Ilme alkaa elää
        ylhäältä annettuna impulsseina enemmän kuin suunniteltuna järjestelmänä.
      </p>

      <p>
        Tämä on kulttuurikysymys yhtä paljon kuin ohjeistuskysymys.
        Ilmeen on oltava niin selkeästi perusteltu, että sille on helpompi olla uskollinen
        kuin poiketa siitä.
      </p>

      <h2>5. Kun kasvu tapahtuu nopeammin kuin ohjeistus päivittyy</h2>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/julkisivupopa.png"
          alt="Yritysilmeen yhtenäisyys julkisivussa ja materiaaleissa"
          className="w-full h-auto object-cover"
        />
      </div>

      <p>
        Yritys kasvaa. Tulee uusi tuotelinja, uusi markkina tai uusi kohderyhmä.
        Alkuperäinen ilme on tehty kahden hengen startup-vaiheen tarpeisiin, mutta kukaan
        ei pysähdy päivittämään ohjeistusta.
      </p>

      <p>
        Markkinointi soveltaa itse, myynti tekee omat diat ja HR luo oman fiiliksen
        rekrytointimateriaaleihin.
      </p>

      <p>
        Kolmen vuoden kasvun jälkeen yrityksellä voi olla ilme, joka kertoo kaikkea,
        mutta ei enää selvästi sitä, mitä yritys nyt on.
      </p>

      <div className="bg-white/5 rounded-xl border border-white/10 p-8 my-10">
        <h3 className="mb-4">Nopea tarkistuslista yritysilmeen kuntoon</h3>

        <ul className="space-y-3">
          <li>✓ Onko logosta vain hyväksytyt versiot käytössä?</li>
          <li>✓ Löytyykö kaikille selkeät mallipohjat?</li>
          <li>✓ Käyttävätkö kumppanit samoja materiaaleja?</li>
          <li>✓ Näyttääkö verkkosivu, julkisivu, esite ja some samalta brändiltä?</li>
          <li>✓ Päivitetäänkö ilmettä, kun yritys kasvaa tai muuttuu?</li>
        </ul>
      </div>

      <h2>Ilme on kuin keho, josta tulee pitää huolta</h2>
      <p>
        Kun brändi näyttää eri paikoissa erilaiselta, asiakas tekee tulkinnan itse.
        Se tulkinta ei välttämättä ole sama kuin se, mitä halusitte alun perin viestittää.
      </p>

      <p>
        Ilme on lupaus, ei vain värit ja fontit.
      </p>

      <p>
        Haluatko katsoa, missä kunnossa teidän ilmeenne on? Popa tekee ilmeen katselmuksen,
        joka paljastaa rapautumisriskit ja kertoo, mitä niille kannattaa jatkossa tehdä.
      </p>
    </BlogPostLayout>
  );
}