import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Megaphone,
  Printer,
} from 'lucide-react';

import AnimatedSection from '../components/AnimatedSection';

function Accordion({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
}) {
  return <div className={className}>{children}</div>;
}

function AccordionItem({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
  value?: string;
}) {
  return <details className={className}>{children}</details>;
}

function AccordionTrigger({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <summary className={className} style={{ listStyle: 'none' }}>
      {children}
    </summary>
  );
}

function AccordionContent({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

type ExpandKey = { serviceCategory: string; itemTitle: string } | null;

type LightboxImage = {
  images: { src: string; alt: string }[];
  index: number;
} | null;

export default function Tuotannot() {
  const services = [
    {
      category: 'Tuotanto',
      icon: Printer,
      eyebrow: 'TUOTANTO',
      title: 'Paino- ja näkyvyystuotteet sisälle ja ulos',
      subtitle: 'Valmistamme laadukkaita painotuotteita ja näkyvyysratkaisuja kaikkiin tarpeisiin',
      chips: ['Suunnittelu & ideointi', 'Aineisto & toimitus', 'Pyydä tarjous'],
      ctaLabel: 'Selaa koko katalogi',
      items: [
        {
          title: 'Valomainokset',
          description:
            'LED-kyltit ja valomainokset, jotka näkyvät päivällä ja yöllä. Ammattimaisesti valmistettu ja asennettu.',
        },
        {
          title: 'Kyltit ja suurtulosteet',
          description:
            'Suurtaulut, tienvarsimainokset, kyltit ja banderollit sisälle ja ulos.',
        },
        {
          title: 'Messu- ja tapahtumatuotteet',
          description:
            'Julisteet, rollupit, promopöydät, kankaat, banderollit ja muut tapahtumanäkyvyyden tuotteet.',
        },
        {
          title: 'Yrityksen peruspainotuotteet',
          description:
            'Käyntikortit, saateet, sopimuspohjat, kirjekuoret, esitteet ja kansiot.',
        },
        {
          title: 'Asiakas- ja järjestölehdet',
          description:
            'Lehdet, julkaisut ja kokonaisuudet organisaation tarinan kertomiseen.',
        },
        {
          title: 'Kirjat ja katalogit',
          description:
            'Kirjat, katalogit ja julkaisut painettuna laadukkaasti käyttötarpeen mukaan.',
        },
        {
          title: 'Promo- ja pakkausmateriaalit',
          description:
            'Mainostekstiilit, liikelahjat, kalenterit, pakkaukset ja brändimateriaalit.',
        },
        {
          title: 'Ikkuna- ja autoteippaukset',
          description:
            'Yritys- ja tuoteilme ikkunoihin, autoihin ja toimitiloihin.',
        },
        {
          title: 'Erikoispainotuotteet',
          description:
            'Jäljennävät lomakkeet, foliointi, lakkaukset ja erikoisviimeistelyt.',
        },
      ],
    },
    {
      category: 'Markkinointipalvelut',
      icon: Megaphone,
      eyebrow: 'MARKKINOINTIPALVELUT',
      title: 'Markkinointipalvelut, jotka tukevat yrityksen näkyvyyttä',
      subtitle:
        'Sisällöt, kampanjat, ilmeet ja digimateriaalit suunniteltuna arkeen, myyntiin ja näkyvyyteen',
      items: [
        {
          title: 'Videotuotannot ja valokuvaus',
          description:
            'Kuvaamme ja tuotamme laadukkaat sisällöt kaikkiin tarpeisiin.',
        },
        {
          title: 'Graafinen ilme ja aineistotuotanto',
          description:
            'Rakennamme visuaalisen ilmeen ja tuotamme materiaalit.',
        },
        {
          title: 'Tekstisisällöt ja asiakaslehdet',
          description:
            'Luomme tarinat ja sisällöt printtiin ja digiin.',
        },
        {
          title: 'Netti- ja somesisällöt',
          description:
            'Toteutamme verkkosivujen, kampanjoiden ja sosiaalisen median sisältöjä.',
        },
        {
          title: 'Konseptit ja kampanjat',
          description:
            'Suunnittelemme vaikuttavat kokonaisuudet ideasta toteutukseen.',
        },
        {
          title: 'Mitä suunnittelu itse ehdottaa?',
          description:
            'Kun tarve ei ole vielä selvä, autamme hahmottamaan järkevimmän suunnan.',
        },
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Kartoitus',
      description: 'Kuuntelemme tarpeitasi ja analysoimme lähtötilanteen.',
    },
    {
      step: '02',
      title: 'Konsepti',
      description: 'Suunnittelemme ratkaisun, joka vastaa tavoitteisiisi.',
    },
    {
      step: '03',
      title: 'Tuotanto',
      description: 'Toteutamme projektin ammattitaidolla ja yhteistyössä.',
    },
    {
      step: '04',
      title: 'Julkaisu',
      description: 'Viimeistelemme, toimitamme ja autamme viemään kokonaisuuden käyttöön.',
    },
  ];

  const cardDetails: Record<
    string,
    {
      lead: string;
      featuresTitle: string;
      features: string[];
      optionsTitle: string;
      options: string[];
      examplesTitle: string;
      exampleImages: { src: string; alt: string }[];
      meta: string[];
    }
  > = {
    Valomainokset: {
      lead:
        'LED-kyltit ja valomainokset, jotka näkyvät päivällä ja yöllä. Toteutus suunnitellaan käyttökohteen, sijainnin ja yritysilmeen mukaan.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Valomainokset ja LED-kyltit',
        'Pysyvät ja väliaikaiset ratkaisut',
        'Korkealaatuinen valmistus',
        'Ammattimainen asennus',
        'Räätälöidyt koot ja muodot',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Oikean ratkaisun valinnassa',
        'Aineiston ja ilmeen sovittamisessa tuotantoon',
        'Käyttökohteeseen sopivan materiaalin valinnassa',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/valomainoksetpng/img_0001.png', alt: 'Valomainos esimerkki 1' },
        { src: '/valomainoksetpng/img_0018.png', alt: 'Valomainos esimerkki 2' },
        { src: '/valomainoksetpng/img_0043.png', alt: 'Valomainos esimerkki 3' },
      ],
      meta: ['Toteutus sovitaan kohteen mukaan', 'Sisä- ja ulkokäyttöön', 'Toimitus koko Suomeen'],
    },

    'Kyltit ja suurtulosteet': {
      lead:
        'Suurtaulut, tienvarsimainokset, kyltit ja banderollit sisälle ja ulos. Toteutamme näkyvyysratkaisuja pienistä opasteista suuriin pintoihin.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Kyltit ja opasteet',
        'Banderollit ja suurkuvatulosteet',
        'Suurtaulut ja tienvarsimainokset',
        'Sisä- ja ulkotilojen näkyvyysratkaisut',
        'Yritysilmeen mukainen toteutus',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Koon ja materiaalin valinnassa',
        'Aineiston painovalmiiksi saattamisessa',
        'Näkyvyyden suunnittelussa käyttökohteen mukaan',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/kuvat/nakyvyysratkaisee.png', alt: 'Kyltit ja suurtulosteet esimerkki 1' },
        { src: '/kuvat/myymalakuva.png', alt: 'Kyltit ja suurtulosteet esimerkki 2' },
        { src: '/kuvat/julkisivupopa.png', alt: 'Kyltit ja suurtulosteet esimerkki 3' },
      ],
      meta: ['Sisälle ja ulos', 'Materiaalit käyttökohteen mukaan', 'Toimitus koko Suomeen'],
    },

    'Messu- ja tapahtumatuotteet': {
      lead:
        'Julisteet, rollupit, promopöydät, kankaat, banderollit, pahvihahmot ja lattiatarrat messuille sekä erilaisiin tapahtumiin.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Rollupit ja julisteet',
        'Messuseinät ja messutiskit',
        'Banderollit, kankaat ja mainoslakanat',
        'Promopöydät ja tapahtumamateriaalit',
        'Pahvihahmot ja erikoisratkaisut',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Messukokonaisuuden suunnittelussa',
        'Aineistojen valmistelussa',
        'Tuotteiden valinnassa tapahtuman tavoitteiden mukaan',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/kuvat/messujakokuva.png', alt: 'Messutuotteet esimerkki 1' },
        { src: '/painotuotteetpng/paino4.png', alt: 'Messutuotteet esimerkki 2' },
        { src: '/painotuotteetpng/paino7.png', alt: 'Messutuotteet esimerkki 3' },
      ],
      meta: ['Messuille ja tapahtumiin', 'Suunnittelu ja tuotanto samasta paikasta', 'Toimitus koko Suomeen'],
    },

    'Yrityksen peruspainotuotteet': {
      lead:
        'Käyntikortit, saateet, sopimuspohjat, kirjekuoret, esitteet ja kansiot. Olit sitten aloitteleva yritys tai jo pitkään alallasi toiminut, saat meiltä arjen perusmateriaalit yhtenäisesti ja laadukkaasti.',
      featuresTitle: 'Lisäpalvelut',
      features: [
        'Lakkaus ja laminointi',
        'Itsejäljennys',
        'Muotoonleikkaus',
        'Personointi ja kimputtaminen',
        'Postitus mahdollinen',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Painovalmiiksi saattamisessa',
        'Paperivalinnoissa',
        'Jälki- ja erikoiskäsittelyissä',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/painotuotteetpng/paino1.png', alt: 'Peruspainotuotteet esimerkki 1' },
        { src: '/painotuotteetpng/paino3.png', alt: 'Peruspainotuotteet esimerkki 2' },
        { src: '/kuvat/kirjekuori.png', alt: 'Peruspainotuotteet esimerkki 3' },
      ],
      meta: ['Nopeat toimitukset sovitusti', 'Painovalmiit aineistot tai suunnitteluapu', 'Toimitus koko Suomeen'],
    },

    'Asiakas- ja järjestölehdet': {
      lead:
        'Kun sinulla on laajemmin asiaa organisaatiosta tarinallisesti tai katalogin verran, asiakas- ja järjestölehti kokoaa sisällöt selkeäksi julkaisuksi.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Asiakaslehdet ja järjestölehdet',
        'Julkaisun rakenne ja taitto',
        'Sisällöntuotanto ja editointi',
        'Painatus ja viimeistely',
        'Digitaaliseen käyttöön soveltuvat versiot',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Lehden kokonaisuuden suunnittelussa',
        'Aineiston keräämisessä ja viimeistelyssä',
        'Paino- ja jakeluvalinnoissa',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/painotuotteetpng/paino6.png', alt: 'Asiakaslehti esimerkki 1' },
        { src: '/kuvat/herovaihtoehto.png', alt: 'Asiakaslehti esimerkki 2' },
        { src: '/kuvat/popaprintti.png', alt: 'Asiakaslehti esimerkki 3' },
      ],
      meta: ['Suunnittelu, taitto ja painatus', 'Sisällöntuotanto tarvittaessa', 'Toimitus koko Suomeen'],
    },

    'Kirjat ja katalogit': {
      lead:
        'Kirjoitit sitten harrastuksena tai ammatiksesi, saat meiltä tieto- ja taitoa. Toteutamme kirjat, katalogit ja julkaisut painettuna laadukkaasti käyttötarpeen mukaan.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Kovakantiset ja pehmeäkantiset kirjat',
        'Katalogit ja tuoteluettelot',
        'Kierresidotut julkaisut',
        'Taitto ja painovalmiiksi viimeistely',
        'Viimeistelyt käyttötarkoituksen mukaan',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Sidontatavan valinnassa',
        'Paperi- ja kansiratkaisuissa',
        'Painoaineiston tarkistuksessa',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/painotuotteetpng/paino5.png', alt: 'Kirja esimerkki 1' },
        { src: '/painotuotteetpng/paino6.png', alt: 'Kirja esimerkki 2' },
        { src: '/kuvat/herovaihtoehto.png', alt: 'Kirja esimerkki 3' },
      ],
      meta: ['Useita sidontavaihtoehtoja', 'Taittoapu tarvittaessa', 'Toimitus koko Suomeen'],
    },

    'Promo- ja pakkausmateriaalit': {
      lead:
        'Mainostekstiilit, liikelahjat, kalenterit ja pakkaukset vievät brändin asiakkaan käteen, tapahtumaan tai myymälään.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Mainostekstiilit',
        'Liikelahjat ja kampanjatuotteet',
        'Kalenterit ja muistituotteet',
        'Pakkaukset ja tuotemateriaalit',
        'Brändäys yritysilmeen mukaan',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Tuotevalinnassa',
        'Brändäyksen suunnittelussa',
        'Kampanjaan sopivan kokonaisuuden kasaamisessa',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/painotuotteetpng/paino9.png', alt: 'Promo esimerkki 1' },
        { src: '/painotuotteetpng/paino7.png', alt: 'Promo esimerkki 2' },
        { src: '/painotuotteetpng/paino4.png', alt: 'Promo esimerkki 3' },
      ],
      meta: ['Kampanjoihin ja asiakaslahjoihin', 'Yritysilmeen mukainen toteutus', 'Toimitus koko Suomeen'],
    },

    'Ikkuna- ja autoteippaukset': {
      lead:
        'Yritys- ja tuoteilme ikkunoihin, autoihin ja toimitiloihin. Teippaukset muuttavat tilat, ajoneuvot ja pinnat jatkuvaksi näkyvyydeksi.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Ikkunateippaukset',
        'Autoteippaukset',
        'Toimitilojen teippaukset',
        'Kampanja- ja tuoteteippaukset',
        'Yritysilmeen mukaiset ratkaisut',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Teippauksen suunnittelussa',
        'Aineiston sovittamisessa oikeaan kokoon',
        'Materiaalin ja käyttökohteen valinnassa',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/kuvat/myymalakuva.png', alt: 'Teippaus esimerkki 1' },
        { src: '/kuvat/julkisivupopa.png', alt: 'Teippaus esimerkki 2' },
        { src: '/kuvat/nakyvyysratkaisee.png', alt: 'Teippaus esimerkki 3' },
      ],
      meta: ['Autoihin, ikkunoihin ja toimitiloihin', 'Kestävä toteutus käyttökohteen mukaan', 'Toimitus koko Suomeen'],
    },

    Erikoispainotuotteet: {
      lead:
        'Jäljennävät lomakkeet, foliointi, lakkaukset ja erikoisviimeistelyt. Erikoispainotuotteilla tavallinen materiaali saadaan tuntumaan arvokkaammalta ja käyttötarkoitukseen paremmin sopivalta.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Foliointi',
        'Lakkaukset',
        'Jäljennävät lomakkeet',
        'Erikoisviimeistelyt',
        'Muotoonleikkaus ja muut erikoisratkaisut',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Sopivan viimeistelyn valinnassa',
        'Aineiston teknisessä tarkistuksessa',
        'Tuotteen käyttötarkoituksen huomioimisessa',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/painotuotteetpng/paino11.png', alt: 'Erikoispainatus esimerkki 1' },
        { src: '/kuvat/printtiherokuva.png', alt: 'Erikoispainatus esimerkki 2' },
        { src: '/kuvat/painoasettu.png', alt: 'Erikoispainatus esimerkki 3' },
      ],
      meta: ['Erikoisviimeistelyt tarpeen mukaan', 'Neuvonta oikeaan ratkaisuun', 'Toimitus koko Suomeen'],
    },

    'Videotuotannot ja valokuvaus': {
      lead:
        'Kuvaamme ja tuotamme laadukkaat sisällöt kaikkiin tarpeisiin — mainoksista yritysesittelyihin, tuotteista someen.',
      featuresTitle: 'Palvelut',
      features: [
        'Videotuotanto: mainokset, imagovideot ja tuotevideot',
        'Valokuvaus: tuote-, henkilöstö- ja tilakuvaus',
        'Some-sisältö: videoita ja kuvia sosiaaliseen mediaan',
        'Dronekuvaus',
        'Editointi ja valmiit tiedostot kanaviin',
      ],
      optionsTitle: 'Referenssit',
      options: [
        'K-Rauta Välivainio — mainoskampanja',
        'Invera — yritysesittely',
        'Kuvaus, editointi ja materiaalien viimeistely sovitusti',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/dronekuvaus/autoklinikka_kevat.jpg', alt: 'Dronekuvaus esimerkki 1' },
        { src: '/dronekuvaus/koulunpihasaneeraus_invera2.jpg', alt: 'Dronekuvaus esimerkki 2' },
        { src: '/kuvat/popaesilla.png', alt: 'Video ja valokuvaus esimerkki 3' },
      ],
      meta: ['Kuvaus sovitaan tarpeen mukaan', 'Editointi sisältyy sovitusti', 'Toimitus koko Suomeen'],
    },

    'Graafinen ilme ja aineistotuotanto': {
      lead:
        'Rakennamme visuaalisen ilmeen ja tuotamme materiaalit arkeen, kampanjoihin, printtiin ja digiin niin, että kokonaisuus näyttää yhtenäiseltä.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Visuaalisen linjan suunnittelu',
        'Some- ja digiaineistot',
        'Printtiaineistot',
        'Mainosmateriaalit',
        'Mallipohjat ja jatkokäyttöön sopivat materiaalit',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Ilmeen kirkastamisessa',
        'Aineistojen tuotannossa',
        'Materiaalien sovittamisessa eri kanaviin',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/kuvat/popaprintti.png', alt: 'Graafinen esimerkki 1' },
        { src: '/painotuotteetpng/paino11.png', alt: 'Graafinen esimerkki 2' },
        { src: '/kuvat/yksikumppanihero.png', alt: 'Graafinen esimerkki 3' },
      ],
      meta: ['Painovalmiit ja julkaisuvalmiit tiedostot', 'Sovitaan projektin mukaan', 'Toimitus koko Suomeen'],
    },

    'Tekstisisällöt ja asiakaslehdet': {
      lead:
        'Luomme tarinat ja sisällöt printtiin ja digiin. Selkeä teksti tekee yrityksestä helpommin lähestyttävän ja auttaa asiakasta ymmärtämään, miksi juuri teihin kannattaa ottaa yhteyttä.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Verkkosivutekstit',
        'Artikkelit ja blogisisällöt',
        'Asiakaslehdet',
        'Esitteiden ja katalogien tekstit',
        'Editointi ja viimeistely',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Viestin kirkastamisessa',
        'Rakenteen suunnittelussa',
        'Tekstien viimeistelyssä julkaisukuntoon',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/kuvat/muistiokuva.png', alt: 'Sisältöesimerkki 1' },
        { src: '/kuvat/herovaihtoehto.png', alt: 'Sisältöesimerkki 2' },
        { src: '/painotuotteetpng/paino6.png', alt: 'Sisältöesimerkki 3' },
      ],
      meta: ['Laajuus sovitaan tarpeen mukaan', 'Printtiin ja digiin', 'Toimitus koko Suomeen'],
    },

    'Netti- ja somesisällöt': {
      lead:
        'Toteutamme verkkosivujen, kampanjoiden ja sosiaalisen median sisältöjä, jotka tukevat yrityksen tavoitteita ja auttavat pysymään näkyvillä oikeissa kanavissa.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Verkkosivusisällöt',
        'Somejulkaisut ja kampanjasisällöt',
        'Kuvat ja tekstit kanaviin',
        'Mainonnan tukimateriaalit',
        'Sisällön rytmitys ja suunnittelu',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Kanavien valinnassa',
        'Sisältölinjan suunnittelussa',
        'Julkaisukelpoisten materiaalien tuotannossa',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/kuvat/kannykkakuva2.png', alt: 'Netti ja some esimerkki 1' },
        { src: '/kuvat/herokuvaaisomeneuvot.png', alt: 'Netti ja some esimerkki 2' },
        { src: '/kuvat/popaprintti.png', alt: 'Netti ja some esimerkki 3' },
      ],
      meta: ['Sisällöt tarpeen mukaan', 'Digiin ja someen', 'Toimitus koko Suomeen'],
    },

    'Konseptit ja kampanjat': {
      lead:
        'Suunnittelemme vaikuttavat kokonaisuudet ideasta toteutukseen. Hyvä kampanja tarvitsee selkeän idean, oikean viestin ja toimivat materiaalit.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Kampanjaidea ja viestit',
        'Visuaalinen suunta',
        'Kampanjamateriaalit',
        'Kanavakohtaiset toteutukset',
        'Aikataulu ja kokonaisuuden hallinta',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Kampanjan suunnittelussa',
        'Materiaalien tuotannossa',
        'Toteutuksen järkevässä rytmittämisessä',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/kuvat/herokuvaaisomeneuvot.png', alt: 'Kampanjaesimerkki 1' },
        { src: '/kuvat/muistiokuva.png', alt: 'Kampanjaesimerkki 2' },
        { src: '/kuvat/kannykkakuva2.png', alt: 'Kampanjaesimerkki 3' },
      ],
      meta: ['Kokonaisuus sovitaan tavoitteiden mukaan', 'Printti ja digi', 'Toimitus koko Suomeen'],
    },

    'Mitä suunnittelu itse ehdottaa?': {
      lead:
        'Kun tarve ei ole vielä selvä, autamme hahmottamaan järkevimmän suunnan. Aina ei tarvitse tietää valmiiksi, mitä pitäisi tilata.',
      featuresTitle: 'Esimerkkejä palveluistamme',
      features: [
        'Tarpeen ja tilanteen kartoitus',
        'Sopivan palvelukokonaisuuden ehdotus',
        'Materiaalien ja kanavien priorisointi',
        'Selkeä etenemismalli',
        'Mahdollisuus aloittaa pienestä ja laajentaa myöhemmin',
      ],
      optionsTitle: 'Autamme sinua:',
      options: [
        'Kirkastamaan mitä oikeasti tarvitaan',
        'Välttämään turhat materiaalit',
        'Rakentamaan kokonaisuuden järkevässä järjestyksessä',
      ],
      examplesTitle: 'Esimerkkejä',
      exampleImages: [
        { src: '/kuvat/yksikumppanihero.png', alt: 'Suunnittelu esimerkki 1' },
        { src: '/kuvat/herovaihtoehto.png', alt: 'Suunnittelu esimerkki 2' },
        { src: '/kuvat/popaesilla.png', alt: 'Suunnittelu esimerkki 3' },
      ],
      meta: ['Sopii epäselviin lähtötilanteisiin', 'Selkeä suositus ennen tuotantoa', 'Toimitus koko Suomeen'],
    },
  };

  const faq = {
    print: [
      {
        q: 'Miten nopeasti saan painotuotteet?',
        a: 'Aikataulu riippuu tuotteesta, määrästä ja aineistosta. Usein tavalliset painotuotteet saadaan liikkeelle nopeasti, mutta laajemmat kokonaisuudet sovitaan tapauskohtaisesti.',
      },
      {
        q: 'Tarvitsen suunnitteluapua. Voitteko tehdä aineiston minulle?',
        a: 'Kyllä. Voimme suunnitella aineiston alusta asti tai viimeistellä olemassa olevan materiaalin tuotantokuntoon.',
      },
      {
        q: 'Missä muodossa aineisto kannattaa toimittaa?',
        a: 'Painovalmis PDF on paras lähtökohta, mutta voimme auttaa myös muiden tiedostojen kanssa ja tarkistaa aineiston ennen tuotantoa.',
      },
      {
        q: 'Voitteko auttaa oikean tuotteen valinnassa?',
        a: 'Kyllä. Kerro käyttötarkoitus, ympäristö ja tavoite, niin ehdotamme sopivaa materiaalia, kokoa ja toteutustapaa.',
      },
      {
        q: 'Saanko vedoksen ennen tuotantoa?',
        a: 'Kyllä. Tarvittaessa toimitamme vedoksen hyväksyttäväksi ennen varsinaista tuotantoa.',
      },
    ],
    marketing: [
      {
        q: 'Mistä markkinoinnin suunnittelu kannattaa aloittaa?',
        a: 'Aloitetaan tavoitteesta, kohderyhmästä ja siitä, mitä yrityksen pitää saada aikaan. Sen jälkeen valitaan oikeat kanavat ja materiaalit.',
      },
      {
        q: 'Voitteko hoitaa sekä suunnittelun että toteutuksen?',
        a: 'Kyllä. POPA voi auttaa ideasta valmiisiin aineistoihin asti: suunnittelu, tekstit, kuvat, kampanjat, printti ja digi.',
      },
      {
        q: 'Mitä jos en tiedä mitä tarvitsen?',
        a: 'Ei haittaa. Voimme ensin kartoittaa tilanteen ja ehdottaa järkevintä tapaa edetä ilman turhaa ylispeksaamista.',
      },
      {
        q: 'Voiko projektin aloittaa pienestä?',
        a: 'Kyllä. Usein paras tapa on aloittaa selkeästä kokonaisuudesta ja laajentaa tekemistä myöhemmin tarpeen mukaan.',
      },
      {
        q: 'Teettekö materiaaleja sekä printtiin että digiin?',
        a: 'Kyllä. Sama kokonaisuus voidaan sovittaa esimerkiksi verkkosivuille, someen, esitteisiin, kyltteihin ja kampanjamateriaaleihin.',
      },
    ],
  };

  const [active, setActive] = useState<ExpandKey>(null);
  const [lightbox, setLightbox] = useState<LightboxImage>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);

  const getItemId = (serviceCategory: string, itemTitle: string) =>
    `${serviceCategory}__${itemTitle}`.replace(/\s+/g, '_');

  const closeExpanded = () => setActive(null);
  const closeLightbox = () => setLightbox(null);

  const openLightbox = (images: { src: string; alt: string }[], index: number) => {
    setLightbox({ images, index });
  };

  const showPrevImage = () => {
    setLightbox((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1,
      };
    });
  };

  const showNextImage = () => {
    setLightbox((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1,
      };
    });
  };

  const openExpanded = (serviceCategory: string, itemTitle: string) => {
    setActive((prev) => {
      if (prev && prev.serviceCategory === serviceCategory && prev.itemTitle === itemTitle) return null;
      return { serviceCategory, itemTitle };
    });
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightbox) {
          closeLightbox();
          return;
        }

        closeExpanded();
      }

      if (lightbox && e.key === 'ArrowLeft') {
        showPrevImage();
      }

      if (lightbox && e.key === 'ArrowRight') {
        showNextImage();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  useEffect(() => {
    if (!active) return;
    const t = window.setTimeout(() => {
      activeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
    return () => window.clearTimeout(t);
  }, [active]);

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
              Tuotannot, jotka <span className="text-gradient">tuottavat tulosta</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Toteutamme markkinointisi alusta loppuun — painotuotteista näkyvyysratkaisuihin, sisällöistä kampanjoihin.
              Kaikki saman katon alta.
            </p>
            <a href="#contact" className="btn-primary">
              Pyydä tarjous
            </a>
          </motion.div>
        </div>
      </section>

      {services.map((service, idx) => (
        <AnimatedSection
          key={service.category}
          className={`section-padding ${idx % 2 === 0 ? 'bg-white/5' : ''}`}
        >
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="text-xs tracking-widest text-[#F9EE6B] font-semibold mb-3">{service.eyebrow}</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">{service.title}</h2>
              <p className="text-white/60 max-w-2xl mx-auto">{service.subtitle}</p>
            </div>

            {service.category === 'Tuotanto' && (
              <div className="flex flex-col items-center gap-5 mb-10">
                <div className="flex flex-wrap gap-3 justify-center">
                  {(service.chips || []).map((chip, cIdx) => (
                    <button
                      key={cIdx}
                      type="button"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-[#F9EE6B]/30 hover:border-[#F9EE6B]/60 transition-all text-white/90 text-sm font-semibold"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.items.map((item, itemIdx) => {
                const isActive =
                  !!active &&
                  active.serviceCategory === service.category &&
                  active.itemTitle === item.title;

                const layoutId = `card_${getItemId(service.category, item.title)}`;
                const hasDetails = !!cardDetails[item.title];
                const details = hasDetails ? cardDetails[item.title] : null;

                return (
                  <React.Fragment key={itemIdx}>
                    <motion.div
                      layout
                      layoutId={layoutId}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-6 hover:border-[#F9EE6B]/50 transition-all cursor-pointer"
                      onClick={() => openExpanded(service.category, item.title)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') openExpanded(service.category, item.title);
                      }}
                    >
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-white/60 mb-4">{item.description}</p>

                      <div className="flex items-center gap-2 text-[#F9EE6B] text-sm font-semibold">
                        Lue lisää <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          ref={activeRef}
                          layout
                          initial={{ opacity: 0, height: 0, y: 8 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: 8 }}
                          transition={{ duration: 0.25 }}
                          className="col-span-full md:col-span-2 lg:col-span-3 col-start-1"
                        >
                          <motion.div
                            layout
                            className="bg-gradient-to-br from-white/5 to-white/0 border border-[#F9EE6B]/35 rounded-2xl p-8 md:p-10 overflow-hidden"
                          >
                            <div className="flex items-start justify-between gap-6">
                              <div className="min-w-0 w-full">
                                <div className="text-xs tracking-widest text-[#F9EE6B] font-semibold mb-3">
                                  {service.eyebrow}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h3>
                                <p className="text-white/70 text-lg mb-6">
                                  {hasDetails ? details!.lead : item.description}
                                </p>

                                {hasDetails ? (
                                  <div className="grid lg:grid-cols-2 gap-8">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                                      <div className="text-sm font-semibold text-white mb-3">
                                        {details!.featuresTitle}
                                      </div>
                                      <ul className="space-y-3 text-white/70">
                                        {details!.features.map((t, i) => (
                                          <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1 text-[#F9EE6B]">✓</span>
                                            <span>{t}</span>
                                          </li>
                                        ))}
                                      </ul>

                                      <div className="mt-6 border-t border-white/10 pt-5">
                                        <div className="text-sm font-semibold text-white mb-2">
                                          {details!.optionsTitle}
                                        </div>
                                        <ul className="space-y-2 text-white/60">
                                          {details!.options.map((t, i) => (
                                            <li key={i}>• {t}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                                      <div className="text-sm font-semibold text-white mb-3">
                                        {details!.examplesTitle}
                                      </div>

                                      <div className="grid grid-cols-3 gap-3">
                                        {details!.exampleImages.map((img, i) => (
                                          <div
                                            key={i}
                                            className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10"
                                          >
                                            <button
                                              type="button"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                openLightbox(details!.exampleImages, i);
                                              }}
                                              className="w-full h-full group/image"
                                              aria-label={`Avaa kuva: ${img.alt}`}
                                            >
                                              <img
                                                src={img.src}
                                                alt={img.alt}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-105"
                                                loading="lazy"
                                              />
                                            </button>
                                          </div>
                                        ))}
                                      </div>

                                      <div className="mt-6 border-t border-white/10 pt-5 space-y-3 text-white/70">
                                        {details!.meta.map((m, i) => (
                                          <div key={i} className="flex items-center gap-3">
                                            <span className="text-[#F9EE6B]">•</span>
                                            <span>{m}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                                      <div className="text-sm font-semibold text-white mb-2">Lisätiedot</div>
                                      <p className="text-white/60">
                                        Lisätiedot, esimerkit, kuvat ja referenssit lisätään tähän myöhemmin.
                                      </p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                                      <div className="text-sm font-semibold text-white mb-2">Seuraava askel</div>
                                      <p className="text-white/60">
                                        Jos haluat tästä tarjouksen tai tarkemman toteutuskuvan, pyydä tarjous tai ota yhteyttä.
                                      </p>
                                    </div>
                                  </div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                  <a href="#contact" className="btn-primary">
                                    Pyydä tarjous
                                  </a>
                                  <button
                                    type="button"
                                    className="btn-secondary"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      closeExpanded();
                                    }}
                                  >
                                    Sulje
                                  </button>
                                </div>

                                <div className="mt-6 text-white/40 text-sm hidden lg:block">
                                  Vinkki: Sulje myös painamalla{' '}
                                  <span className="text-white/70 font-semibold">Esc</span>.
                                </div>
                              </div>

                              <button
                                type="button"
                                aria-label="Sulje"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  closeExpanded();
                                }}
                                className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#F9EE6B]/60 transition-all text-white/80"
                              >
                                ✕
                              </button>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                );
              })}
            </div>

            {service.category === 'Tuotanto' && (
              <div className="flex justify-center mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F9EE6B] text-black font-semibold hover:opacity-90 transition-all"
                >
                  {service.ctaLabel}
                </a>
              </div>
            )}
          </div>
        </AnimatedSection>
      ))}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              aria-label="Sulje kuva"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white hover:border-[#F9EE6B]/70 hover:text-[#F9EE6B] transition-all flex items-center justify-center text-2xl"
            >
              ×
            </button>

            {lightbox.images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Edellinen kuva"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrevImage();
                  }}
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 text-white hover:border-[#F9EE6B]/70 hover:text-[#F9EE6B] transition-all flex items-center justify-center text-3xl"
                >
                  ‹
                </button>

                <button
                  type="button"
                  aria-label="Seuraava kuva"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNextImage();
                  }}
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 text-white hover:border-[#F9EE6B]/70 hover:text-[#F9EE6B] transition-all flex items-center justify-center text-3xl"
                >
                  ›
                </button>
              </>
            )}

            <motion.div
              key={lightbox.images[lightbox.index].src}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl w-full max-h-[86vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.images[lightbox.index].src}
                alt={lightbox.images[lightbox.index].alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/10 bg-white/5"
              />

              <div className="mt-4 flex items-center justify-between gap-4 text-sm text-white/60">
                <span className="line-clamp-1">{lightbox.images[lightbox.index].alt}</span>
                <span className="shrink-0 text-[#F9EE6B] font-semibold">
                  {lightbox.index + 1} / {lightbox.images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatedSection className="section-padding bg-gradient-to-b from-transparent to-white/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Prosessimme</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Sujuva yhteistyö vaihe vaiheelta</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#F9EE6B]/50 to-transparent -translate-x-1/2" />
                )}
                <div className="relative">
                  <div className="text-6xl font-bold text-[#F9EE6B]/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#F9EE6B]/10 to-transparent rounded-2xl border border-[#F9EE6B]/30 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Aloitetaan yhteistyö</h2>
            <p className="text-xl text-white/70 mb-8">Kerro projektistasi ja saat räätälöidyn tarjouksen nopeasti</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Pyydä tarjous
              </a>
              <a href="tel:+358407237192" className="btn-secondary">
                Soita meille
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="text-xs tracking-widest text-[#F9EE6B] font-semibold mb-3">UKK</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Usein kysytyt kysymykset</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#F9EE6B] text-lg">🖨️</span>
                <h3 className="text-xl font-bold text-[#F9EE6B]">Painotalo</h3>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {faq.print.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`print-${idx}`}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#F9EE6B]/40 transition-all"
                  >
                    <AccordionTrigger className="px-5 py-4 text-left text-white font-semibold hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 text-white/70">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#F9EE6B] text-lg">🎯</span>
                <h3 className="text-xl font-bold text-[#F9EE6B]">Markkinointitoimisto</h3>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {faq.marketing.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`marketing-${idx}`}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#F9EE6B]/40 transition-all"
                  >
                    <AccordionTrigger className="px-5 py-4 text-left text-white font-semibold hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 text-white/70">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Ota yhteyttä</h2>
              <p className="text-white/60">Vastaamme 24 tunnin kuluessa</p>
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
                  <label className="block text-sm font-medium mb-2">Palvelu</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors">
                    <option>Paino- ja tuotantopalvelut</option>
                    <option>Valomainokset ja kyltit</option>
                    <option>Messu- ja tapahtumatuotteet</option>
                    <option>Markkinointipalvelut</option>
                    <option>Video ja valokuvaus</option>
                    <option>Netti- ja somesisällöt</option>
                    <option>Muu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Viesti</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#F9EE6B] transition-colors resize-none"
                    placeholder="Kerro lisää projektistasi..."
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