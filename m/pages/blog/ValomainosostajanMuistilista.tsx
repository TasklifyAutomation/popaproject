import BlogPostLayout from '../../components/BlogPostLayout';

export default function ValomainosostajanMuistilista() {
  const relatedPosts = [
    {
      slug: 'valomainosopas-ostajalle',
      title: 'Valomainosopas ostajalle – mitä on hyvä tietää ennen tilausta',
      category: 'VALOMAINOKSET',
      readTime: '6 min',
    },
    {
      slug: 'julkisivu-paivityksen-tarpeessa',
      title: 'Kolme merkkiä siitä, että julkisivusi kaipaa päivitystä',
      category: 'NÄKYVYYS',
      readTime: '5 min',
    },
    {
      slug: 'milloin-teippaus-kannattaa',
      title: 'Milloin tila tai auto kannattaa teipata?',
      category: 'TEIPPAUKSET & NÄKYVYYS',
      readTime: '6 min',
    },
  ];

  return (
    <BlogPostLayout
      category="VALOMAINOKSET"
      title="Valomainosostajan lyhyt muistilista"
      date="13.05.2026"
      readTime="5 min"
      excerpt="Valomainoksen tilaaminen helpottuu, kun tärkeimmät kysymykset selvitetään ennen tarjousta, tuotantoa ja asennuspäivää."
      image="/kuvat/valomainos.png"
      relatedPosts={relatedPosts}
    >
      <p>
        Asiakas on jo melkein pihassa, mutta ei ole varma, tuliko oikeaan paikkaan.
        Hän hidastaa, katsoo rakennusta, vilkaisee vielä puhelintaan ja ajaa eteenpäin.
        Tämä tapahtuu yllättävän monelle yritykselle, vaikka palvelu olisi kunnossa ja
        sijainti hyvä.
      </p>

      <p>
        Me Popalla kohtaamme tämän haasteen usein. Yritys panostaa verkkosivuihin,
        myyntiin ja sisältöihin, mutta julkisivu jää vuosiksi hyödyntämättä. Silloin
        näkyvyys tekee työtään vain puoliksi joka päivä.
      </p>

      <h2>Suunnittelu ratkaisee enemmän kuin moni luulee</h2>

      <p>
        Valomainosta ostettaessa tärkein kysymys on, sopiiko ratkaisu yrityksenne
        ilmeeseen ja käyttötarkoitukseen. Tarvitsetteko irtokirjaimet, valokotelon,
        halo-valaistun ratkaisun vai jonkin muun toteutuksen, joka näkyy oikeasta
        suunnasta oikeaan aikaan?
      </p>

      <p>
        Jos teksti ei erotu riittävän kaukaa tai eri kulmista, mainos ei tee työtään.
        Sama pätee värimaailmaan ja valaistukseen. Päivällä toimiva pinta ei aina näytä
        hyvältä illalla, ja kylmä valo voi näyttää aivan erilaiselta kuin lämmin valo
        rakennuksen pinnassa.
      </p>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/julkisivupopa.png"
          alt="Yrityksen julkisivu ja näkyvyysratkaisut"
          className="w-full h-auto object-cover"
        />
      </div>

      <h2>Huomioi seinä, sää ja asennus</h2>

      <p>
        Kiinteistön julkisivu, seinän materiaali ja kiinnitysmahdollisuudet vaikuttavat
        suoraan siihen, mitä voidaan tehdä turvallisesti ja siististi.
      </p>

      <p>
        Suomessa sää tekee tästä vielä oman lajinsa. Vesi, lumi, pakkanen ja lämpötilojen
        vaihtelu eivät kysy, oliko tarjous halpa. Ne näyttävät nopeasti, onko materiaalit
        valittu kunnolla.
      </p>

      <div className="bg-white/5 border border-[#F9EE6B]/30 rounded-xl p-6 my-8">
        <h3 className="text-[#F9EE6B] mb-4">Tarkista ennen valomainoksen tilaamista</h3>
        <ul className="space-y-2">
          <li>✓ Mistä suunnasta asiakkaat näkevät mainoksen?</li>
          <li>✓ Kuinka kaukaa tekstin pitää erottua?</li>
          <li>✓ Millainen seinä ja kiinnityspinta kohteessa on?</li>
          <li>✓ Tarvitaanko nostinta, sähkövetoa tai vanhan mainoksen irrotusta?</li>
          <li>✓ Onko kiinteistön omistajan tai kunnan lupa selvitetty?</li>
        </ul>
      </div>

      <h2>Luvat eivät ole pieni sivuhuomio</h2>

      <p>
        Valomainos näyttää ulospäin yksinkertaiselta. Taustalla se ei sitä aina ole.
        Toimenpidelupa tai mainoslupa pitää joskus tarkistaa kunnan rakennusvalvonnasta.
        Lisäksi tarvitaan usein myös kiinteistön omistajan lupa mainoksen kiinnittämiseen.
      </p>

      <p>
        Jos lupa tai omistajan hyväksyntä puuttuu, projekti ei etene tahdolla vaan
        odottamalla. Hyvä toimittaja ottaa nämä puheeksi heti, ei vasta silloin, kun
        asennuspäivä on jo kalenterissa.
      </p>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/opaste.png"
          alt="Opasteet ja yrityksen löydettävyys"
          className="w-full h-auto object-cover"
        />
      </div>

      <h2>Tarkista, että hinnassa on kaikki kulut</h2>

      <p>
        Pelkkä loppusumma kertoo valomainoksesta yllättävän vähän. Olennaisempaa on
        se, mitä tarjous oikeasti sisältää.
      </p>

      <p>
        Onko mukana suunnittelu, valmistus, asennus ja mahdolliset nostinkulut? Entä jos
        kyseessä on vanhan mainoksen vaihto? Silloin kannattaa selvittää myös irrotus ja
        hävitys, koska nekin vaikuttavat kokonaisuuteen.
      </p>

      <p>
        Samalla on hyvä kysyä huollettavuudesta. Jos valonlähde pitää vaihtaa myöhemmin,
        onko se tehty mahdollisimman helpoksi vai mahdollisimman hankalaksi?
      </p>

      <h2>Hyvä kumppani tekee projektista selkeän</h2>

      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="/kuvat/nakyvyysratkaisee.png"
          alt="Näkyvyysratkaisut yrityksen arjessa"
          className="w-full h-auto object-cover"
        />
      </div>

      <p>
        Valitse toimittaja, joka pystyy hoitamaan työn suunnittelusta asennukseen asti ja
        kertoo suoraan, mitä hintaan kuuluu, mitä pitää vielä selvittää ja millainen takuu
        työlle annetaan.
      </p>

      <p>
        Hyvä palvelu näkyy siinä, ettei sinun tarvitse vetää projektia kasaan viidestä eri
        suunnasta. Kun vastuut, aikataulu, luvat ja tekniset asiat ovat selvillä, itse
        toteutus etenee huomattavasti rauhallisemmin.
      </p>

      <h2>Hyvä valomainos ei synny sattumalta</h2>

      <p>
        Popa on tehnyt näkyvyysratkaisuja pohjoisen yrityksille vuodesta 1956. Siksi
        tiedämme, että hyvä valomainos syntyy oikeista kysymyksistä, ei pelkästä
        näyttävästä luonnoksesta.
      </p>

      <p>
        Haluatko tietää, millainen valomainos toimisi teidän yrityksellenne? Käydään
        tilanne läpi maksuttomassa kartoituksessa. Vastaamme yhteydenottoihin 24 tunnin
        sisällä.
      </p>
    </BlogPostLayout>
  );
}