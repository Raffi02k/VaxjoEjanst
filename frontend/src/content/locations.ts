export interface LocationServiceItem {
  number: string;
  title: string;
  description: string;
  serviceSlug: string;
}

export interface LocationUspItem {
  number: string;
  title: string;
  description: string;
}

export interface LocationProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface LocationFaqItem {
  question: string;
  answer: string;
}

export interface LocationData {
  slug: string;
  name: string;
  region: string;
  nearbyAreas: string[];
  pillLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  shortAnswer: string;
  seoTitle: string;
  seoDescription: string;
  stats: {
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
    quote: string;
    quoteAuthor: string;
  };
  services: LocationServiceItem[];
  usps: LocationUspItem[];
  processSteps: LocationProcessStep[];
  faqs: LocationFaqItem[];
}

export const locations: LocationData[] = [
  {
    slug: "vaxjo",
    name: "Växjö",
    region: "Kronobergs län",
    nearbyAreas: ["Växjö Centrum", "Teleborg", "Hov", "Sandsbro", "Öjaby", "Räppe", "Araby", "Bergsnäs"],
    pillLabel: "Elektriker i Växjö",
    heroTitle: "Auktoriserad elektriker i Växjö",
    heroSubtitle:
      "Växjö Eltjänst är din lokala elfirma i Växjö. Vi hjälper privatpersoner, bostadsrättsföreningar och företag med allt från akuta serviceärenden och laddboxar till kompletta entreprenader.",
    shortAnswer:
      "Växjö Eltjänst utgår lokalt från Växjö och utför auktoriserade elinstallationer, modernisering av elcentraler, smart belysning och industriservice med hög säkerhet, fasta offerter och svar inom 24 timmar.",
    seoTitle: "Elektriker Växjö | Auktoriserad Elinstallatör | Växjö Eltjänst",
    seoDescription:
      "Söker du behörig elektriker i Växjö? Växjö Eltjänst levererar trygga elinstallationer, laddboxar, elcentraler och elservice för privatpersoner och företag.",
    stats: {
      stat1: { value: "100%", label: "Auktoriserat elarbete" },
      stat2: { value: "24h", label: "Snabb återkoppling" },
      stat3: { value: "5.0", label: "Betyg från kunder" },
      quote: "Mycket snabb återkoppling och ett felfritt arbete med vår nya elcentral och laddbox i Hov.",
      quoteAuthor: "Marcus L, Villaägare i Växjö",
    },
    services: [
      {
        number: "01",
        title: "Elinstallation i Växjö",
        description: "Komplett elarbete för villor, lägenheter och fritidshus — från utökade uttag och belysning till säker elcentral.",
        serviceSlug: "elinstallation",
      },
      {
        number: "02",
        title: "Företag & Entreprenad",
        description: "Elentreprenad och serviceavtal för fastighetsägare, kontor, industrier och bostadsrättsföreningar i Växjö.",
        serviceSlug: "foretag-entreprenad",
      },
      {
        number: "03",
        title: "Energi & Framtidsteknik",
        description: "Laddboxar med Grön Teknik-avdrag, smart styrning och energioptimering för lägre driftskostnader.",
        serviceSlug: "energi-framtidsteknik",
      },
    ],
    usps: [
      {
        number: "01",
        title: "Full auktorisation",
        description: "Registrerad elinstallatör hos Elsäkerhetsverket. Alltid säkra och godkända installationer enligt gällande standarder.",
      },
      {
        number: "02",
        title: "Lokal etablering i Växjö",
        description: "Med bas i Växjö kan vi rycka ut snabbt för service, felsökning och planerad nybyggnation.",
      },
      {
        number: "03",
        title: "Tydliga offerter & fast pris",
        description: "Inga oväntade tillägg. Du får alltid en specificerad offert och tydlig genomgång innan vi sätter igång.",
      },
      {
        number: "04",
        title: "En del av SELATEK",
        description: "Kombinerar den lokala elfirmans personliga engagemang med koncernens stabilitet och resurser.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Kontakt & kostnadsfri offert",
        description: "Berätta om ditt behov via formuläret eller telefon så återkommer vi snabbt med rådgivning och prisförslag.",
      },
      {
        number: "02",
        title: "Planering & tidsbokning",
        description: "Vi bestämmer gemensamt tidpunkt och går igenom materialval, dragningar och eventuella avdrag.",
      },
      {
        number: "03",
        title: "Auktoriserat utförande",
        description: "Våra behöriga elektriker genomför arbetet med fokus på precision, säkerhet och prydliga dragningar.",
      },
      {
        number: "04",
        title: "Kontroll & dokumentation",
        description: "Anläggningen egenkontrolleras noggrant och du får fullständig dokumentation och garantier.",
      },
    ],
    faqs: [
      {
        question: "Hur snabbt kan en elektriker komma ut i Växjö?",
        answer: "Vid akuta elfel försöker vi alltid prioritera samma dag. För planerade elinstallationer bokar vi normalt in arbetet inom några dagar efter godkänd offert.",
      },
      {
        question: "Gäller ROT-avdrag för elinstallationer i Växjö?",
        answer: "Ja! Privatpersoner kan nyttja ROT-avdrag med 30 % avdrag på arbetskostnaden för vanliga elarbeten, samt 50 % Grön Teknik-avdrag på laddboxar. Vi sköter all administration direkt på fakturan.",
      },
      {
        question: "Hjälper ni även företag och bostadsrättsföreningar?",
        answer: "Absolut. Vi har mångårig erfarenhet av större entreprenader, belysningsstyrning, fastighetsservice och elanläggningar i Växjö och Kronoberg.",
      },
    ],
  },
  {
    slug: "alvesta",
    name: "Alvesta",
    region: "Kronobergs län",
    nearbyAreas: ["Alvesta Centrum", "Moheda", "Vislanda", "Grimslöv", "Torpsbruk", "Hjortsberga"],
    pillLabel: "Elektriker i Alvesta",
    heroTitle: "Auktoriserad elektriker i Alvesta",
    heroSubtitle:
      "Behöver du behörig elektriker i Alvesta kommun? Växjö Eltjänst erbjuder certifierade elinstallationer, felsökning, belysning och laddboxar för hem och företag.",
    shortAnswer:
      "Växjö Eltjänst betjänar Alvesta med fullt utrustade servicebilar och behöriga elektriker. Vi utför säkra elarbeten, uppgradering av proppskåp till automatsäkringar och Grön Teknik-installationer.",
    seoTitle: "Elektriker Alvesta | Trygg & Auktoriserad Elservice | Växjö Eltjänst",
    seoDescription:
      "Söker du elektriker i Alvesta? Växjö Eltjänst hjälper dig med elinstallation, elcentraler, laddboxar och elservice i Alvesta med omnejd. Begär offert idag!",
    stats: {
      stat1: { value: "100%", label: "Elsäkerhetscertifierat" },
      stat2: { value: "24h", label: "Offertsvar" },
      stat3: { value: "50%", label: "Grön Teknik-avdrag" },
      quote: "Snabbt på plats i Alvesta när vi behövde dra ny el till köket. Proffsigt och rent efteråt!",
      quoteAuthor: "Johan B, Villaägare i Alvesta",
    },
    services: [
      {
        number: "01",
        title: "Elinstallation i Alvesta",
        description: "Renovering, nybyggnation och service för villor, gårdar och lägenheter i hela Alvesta kommun.",
        serviceSlug: "elinstallation",
      },
      {
        number: "02",
        title: "Företagsel & Lantbruk",
        description: "Slitstarka och säkra elinstallationer anpassade för verkstäder, lantbruk och kommersiella lokaler.",
        serviceSlug: "foretag-entreprenad",
      },
      {
        number: "03",
        title: "Laddboxar & Energieffektivisering",
        description: "Installation av marknadsledande laddboxar med direkt skatteavdrag och smart lastbalansering.",
        serviceSlug: "energi-framtidsteknik",
      },
    ],
    usps: [
      {
        number: "01",
        title: "Korta inställelsetider",
        description: "Med närhet till Alvesta via riksväg 25 når våra elektriker er snabbt och smidigt.",
      },
      {
        number: "02",
        title: "Auktoriserade elektriker",
        description: "Certifierade enligt Elsäkerhetsverket för din trygghet och anläggningens livslängd.",
      },
      {
        number: "03",
        title: "Fast pris & fri offert",
        description: "Tydliga kalkyler så att du vet exakt vad arbetet kostar före start.",
      },
      {
        number: "04",
        title: "ROT- & Grön Teknik-avdrag",
        description: "Vi drar avdraget direkt på fakturan så att du slipper pappersarbete mot Skatteverket.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Förfrågan",
        description: "Beskriv ditt projekt eller akuta behov så återkommer vi snabbt med rådgivning.",
      },
      {
        number: "02",
        title: "Offert & tidsplan",
        description: "Du får ett specificerat förslag med material, tidsåtgång och pris.",
      },
      {
        number: "03",
        title: "Installation på plats",
        description: "Våra elektriker utför arbetet i Alvesta enligt högsta yrkesstandard.",
      },
      {
        number: "04",
        title: "Slutkontroll",
        description: "Vi testar och mäter kretsarna och lämnar full dokumentation på arbetet.",
      },
    ],
    faqs: [
      {
        question: "Utför ni elarbeten i hela Alvesta kommun?",
        answer: "Ja, vi utför elinstallationer i Alvesta tätort såväl som Moheda, Vislanda, Grimslöv och omkringliggande orter.",
      },
      {
        question: "Kan ni byta gammalt proppskåp i Alvesta?",
        answer: "Ja, byte av gamla proppskåp till moderna normcentraler med jordfelsbrytare och automatsäkringar är ett av våra vanligaste uppdrag.",
      },
      {
        question: "Hur fungerar laddboxinstallation i Alvesta?",
        answer: "Vi hjälper dig välja rätt laddbox med dynamisk lastbalansering, utför eldragningen och drar 50 % i Grön Teknik-avdrag direkt på fakturan.",
      },
    ],
  },
  {
    slug: "ljungby",
    name: "Ljungby",
    region: "Kronobergs län",
    nearbyAreas: ["Ljungby Tätort", "Lagan", "Ryssby", "Lidhult", "Agunnaryd", "Angelstad"],
    pillLabel: "Elektriker i Ljungby",
    heroTitle: "Auktoriserad elektriker i Ljungby",
    heroSubtitle:
      "Växjö Eltjänst levererar professionella elinstallationer och elentreprenader i Ljungby med omnejd. Säker el för privatbostäder, industri och fastigheter.",
    shortAnswer:
      "Vi erbjuder auktoriserad elservice i Ljungby för såväl privatpersoner som industri- och företagskunder. Allt från modernisering och felsökning till laddboxar och energioptimering.",
    seoTitle: "Elektriker Ljungby | Elinstallation & Elservice | Växjö Eltjänst",
    seoDescription:
      "Behöver du behörig elektriker i Ljungby? Växjö Eltjänst utför säkra elinstallationer, laddboxar och elservice i Ljungby och Kronoberg. Få fri offert!",
    stats: {
      stat1: { value: "100%", label: "Auktorisation" },
      stat2: { value: "24h", label: "Snabb återkoppling" },
      stat3: { value: "10+", label: "Års samlad erfarenhet" },
      quote: "Hög kompetens och trevligt bemötande vid byte av el i vår fastighet i Ljungby.",
      quoteAuthor: "Anders C, Fastighetsägare i Ljungby",
    },
    services: [
      {
        number: "01",
        title: "Bostadsel i Ljungby",
        description: "Elinstallationer vid ombyggnad, badrums- och köksrenoveringar samt byte till moderna normcentraler.",
        serviceSlug: "elinstallation",
      },
      {
        number: "02",
        title: "Industri & Företag",
        description: "Kraft, belysning och styrsystem för Ljungbys starka industri- och tillverkningssektor.",
        serviceSlug: "foretag-entreprenad",
      },
      {
        number: "03",
        title: "Laddstationer & Solcellsanslutning",
        description: "Framtidssäkra installationer för elfordon och förnybar energi i Ljungby.",
        serviceSlug: "energi-framtidsteknik",
      },
    ],
    usps: [
      {
        number: "01",
        title: "Certifierad elfirma",
        description: "Kvalitetssäkrat elarbete enligt Elsäkerhetsverkets krav och branschnormer.",
      },
      {
        number: "02",
        title: "Erfarna elektriker",
        description: "Teknisk spetskompetens för både enkla serviceärenden och avancerade elsystem.",
      },
      {
        number: "03",
        title: "Tydlighet & fasta priser",
        description: "Specificerade kostnader utan överraskningar.",
      },
      {
        number: "04",
        title: "Starkt nätverk",
        description: "Backade av SELATEK för stabil leverans och långsiktig trygghet.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Offertförfrågan",
        description: "Fyll i vårt formulär eller ring oss för genomgång av projektet i Ljungby.",
      },
      {
        number: "02",
        title: "Kalkyl & plan",
        description: "Vi tar fram ett skräddarsytt förslag med fast pris eller löpande räkning.",
      },
      {
        number: "03",
        title: "Installation",
        description: "Arbetet utförs enligt tidplan med minsta möjliga driftstörning.",
      },
      {
        number: "04",
        title: "Egenkontroll & garanti",
        description: "Mätning och slutdokumentation överlämnas med gällande garantier.",
      },
    ],
    faqs: [
      {
        question: "Kör ni ut till orter utanför Ljungby tätort?",
        answer: "Ja, vi hjälper kunder i hela Ljungby kommun inklusive Lagan, Ryssby, Lidhult och kringliggande landsbygd.",
      },
      {
        question: "Vad kostar det att anlita elektriker i Ljungby?",
        answer: "Priset beror på uppdragets art. Vi erbjuder transparenta timpriser eller fast pris på offerten. Privatpersoner får 30 % ROT-avdrag på arbetskostnaden.",
      },
      {
        question: "Hjälper ni till med laddboxar för bostadsrättsföreningar i Ljungby?",
        answer: "Ja, vi projekterar och installerar kompletta laddsystem med dynamisk fas- och lastbalansering samt individuella betallösningar.",
      },
    ],
  },
  {
    slug: "almhult",
    name: "Älmhult",
    region: "Kronobergs län",
    nearbyAreas: ["Älmhult Tätort", "Diö", "Liatorp", "Häradsbäck", "Delary", "Hallaryd"],
    pillLabel: "Elektriker i Älmhult",
    heroTitle: "Auktoriserad elektriker i Älmhult",
    heroSubtitle:
      "Växjö Eltjänst erbjuder certifierade elinstallationer och smarta energilösningar för privatpersoner, handel och företag i Älmhult kommun.",
    shortAnswer:
      "Söker du elektriker i Älmhult? Vi levererar trygga och fackmannamässiga elarbeten — från laddboxar och belysning till elentreprenader — med full auktorisation och garanti.",
    seoTitle: "Elektriker Älmhult | Behörig Elinstallatör | Växjö Eltjänst",
    seoDescription:
      "Auktoriserad elektriker i Älmhult. Växjö Eltjänst hjälper villor, lägenheter och företag med säkra elinstallationer, laddboxar och elservice. Begär kostnadsfri offert!",
    stats: {
      stat1: { value: "100%", label: "Behörigt arbete" },
      stat2: { value: "24h", label: "Svarsgaranti" },
      stat3: { value: "5/5", label: "Kundnöjdhet" },
      quote: "Mycket nöjda med installationen av vår laddbox och belysning i Älmhult. Smidigt och proffsigt!",
      quoteAuthor: "Camilla N, Älmhult",
    },
    services: [
      {
        number: "01",
        title: "Elinstallationer i Älmhult",
        description: "All typ av elinstallation i bostäder och kommersiella lokaler med fokus på säkerhet och funktion.",
        serviceSlug: "elinstallation",
      },
      {
        number: "02",
        title: "Företagsservice & Butiksel",
        description: "Belysningslösningar, datanät och serviceavtal för handel och näringsliv i Älmhult.",
        serviceSlug: "foretag-entreprenad",
      },
      {
        number: "03",
        title: "Laddboxar & Grön Teknik",
        description: "Installation av moderna elbilsladdare med smart styrning och 50 % Grön Teknik-avdrag.",
        serviceSlug: "energi-framtidsteknik",
      },
    ],
    usps: [
      {
        number: "01",
        title: "Auktoriserad trygghet",
        description: "Full registrering hos Elsäkerhetsverket och högsta säkerhetsstandard.",
      },
      {
        number: "02",
        title: "Tydliga offerter",
        description: "Fast prissättning och inga överraskningar på slutfakturan.",
      },
      {
        number: "03",
        title: "Moderna lösningar",
        description: "Expertis inom energieffektivisering, smart styrning och laddinfrastruktur.",
      },
      {
        number: "04",
        title: "Lokal serviceanda",
        description: "Personlig kontakt och engagemang i varje kundrelation.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Förfrågan",
        description: "Kontakta oss med dina önskemål och förutsättningar i Älmhult.",
      },
      {
        number: "02",
        title: "Offert & råd",
        description: "Vi återkommer med genomtänkt lösningsförslag och kostnadskalkyl.",
      },
      {
        number: "03",
        title: "Arbetet utförs",
        description: "Installationen genomförs säkert, snyggt och fackmannamässigt.",
      },
      {
        number: "04",
        title: "Slutdokumentation",
        description: "Kontrollmätning, dokumentation och genomgång med dig som kund.",
      },
    ],
    faqs: [
      {
        question: "Kan jag använda Grön Teknik-avdraget för laddbox i Älmhult?",
        answer: "Ja, du får 50 % skattereduktion på både material och arbete för laddboxen. Vi drar av beloppet direkt på fakturan.",
      },
      {
        question: "Installerar ni även i Diö och Liatorp?",
        answer: "Ja, vi täcker hela Älmhults kommun inklusive Diö, Liatorp och kringliggande orter.",
      },
      {
        question: "Hur vet jag om min elcentral klarar en laddbox?",
        answer: "Vi gör alltid en kapacitetskontroll av huvudsäkringar och elcentral innan installation för att säkerställa säker drift.",
      },
    ],
  },
  {
    slug: "tingsryd",
    name: "Tingsryd",
    region: "Kronobergs län",
    nearbyAreas: ["Tingsryd Tätort", "Ryd", "Urshult", "Konga", "Linneryd", "Väckelsång", "Rävemåla"],
    pillLabel: "Elektriker i Tingsryd",
    heroTitle: "Auktoriserad elektriker i Tingsryd",
    heroSubtitle:
      "Växjö Eltjänst utför behöriga elarbeten för villor, sommarstugor, lantbruk och företag i Tingsryds kommun.",
    shortAnswer:
      "Vi erbjuder trygg och certifierad elservice i Tingsryd med omnejd. Från renovering av äldre elsystem och installation av jordfelsbrytare till laddboxar och fastighetsservice.",
    seoTitle: "Elektriker Tingsryd | Certifierad Elservice | Växjö Eltjänst",
    seoDescription:
      "Söker du elektriker i Tingsryd? Växjö Eltjänst levererar fackmannamässiga elinstallationer, laddboxar och elservice i Tingsryd och södra Kronoberg.",
    stats: {
      stat1: { value: "100%", label: "Auktoriserat" },
      stat2: { value: "24h", label: "Svarstid" },
      stat3: { value: "30%", label: "ROT-avdrag" },
      quote: "Mycket bra hjälp vid elrenovering av vårt hus i Urshult. Noggrant och pålitligt.",
      quoteAuthor: "Helena S, Tingsryds kommun",
    },
    services: [
      {
        number: "01",
        title: "Elinstallationer i Tingsryd",
        description: "Säkra eldragningar för permanentboenden, fritidshus och gårdar i Tingsryds kommun.",
        serviceSlug: "elinstallation",
      },
      {
        number: "02",
        title: "Fastighet & Företagsel",
        description: "Belysning, maskinanslutningar och löpande elunderhåll för företag och fastigheter.",
        serviceSlug: "foretag-entreprenad",
      },
      {
        number: "03",
        title: "Energi & Laddboxar",
        description: "Smarta laddstationer för elbilar med fullt Grön Teknik-avdrag och dynamisk styrning.",
        serviceSlug: "energi-framtidsteknik",
      },
    ],
    usps: [
      {
        number: "01",
        title: "Registrerad hos Elsäkerhetsverket",
        description: "Alla elarbeten utförs av behöriga installatörer med full ansvarsförsäkring.",
      },
      {
        number: "02",
        title: "Fast pris utan överraskningar",
        description: "Klart och tydligt specificerade offerter före start.",
      },
      {
        number: "03",
        title: "Komplett leverans",
        description: "Från första rådgivning till färdig installation och slutdokumentation.",
      },
      {
        number: "04",
        title: "En del av SELATEK",
        description: "Ger dig som kund stabilitet, bred kompetens och långsiktig garanti.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Kostnadsfri förfrågan",
        description: "Kontakta oss för rådgivning kring ditt elprojekt i Tingsryd.",
      },
      {
        number: "02",
        title: "Tydlig offert",
        description: "Vi tar fram ett specificerat prisförslag anpassat för dina behov.",
      },
      {
        number: "03",
        title: "Säker installation",
        description: "Arbetet utförs fackmannamässigt med godkända kvalitetskomponenter.",
      },
      {
        number: "04",
        title: "Kontroll & överlämning",
        description: "Vi genomför funktionsprovning och överlämnar dokumentation.",
      },
    ],
    faqs: [
      {
        question: "Utför ni elarbeten i fritidshus runt sjöarna i Tingsryd?",
        answer: "Ja, vi hjälper många fritidshusägare med elcentraler, jordfelsbrytare, utomhusbelysning och säkra eldragningar.",
      },
      {
        question: "Hur fungerar ROT-avdraget i Tingsryd?",
        answer: "Du får 30 % avdrag på arbetskostnaden upp till 50 000 kr per person och år. Vi hanterar avdraget direkt på din faktura.",
      },
      {
        question: "Hjälper ni till vid akuta elfel?",
        answer: "Ja, vi gör allt vi kan för att snabbt rycka ut vid strömavbrott, lösta huvudsäkringar eller misstänkta kortslutningar.",
      },
    ],
  },
  {
    slug: "lessebo",
    name: "Lessebo",
    region: "Kronobergs län",
    nearbyAreas: ["Lessebo Tätort", "Hovmantorp", "Kosta", "Skruv"],
    pillLabel: "Elektriker i Lessebo",
    heroTitle: "Auktoriserad elektriker i Lessebo & Hovmantorp",
    heroSubtitle:
      "Växjö Eltjänst utför professionella elinstallationer i Lessebo, Hovmantorp, Kosta och Skruv. Trygg elservice för privatpersoner, handel och industri.",
    shortAnswer:
      "Behöver du elektriker i Lessebo kommun? Vi levererar säkra installationer av elcentraler, belysning, laddboxar och industriell elservice med korta inställelsetider.",
    seoTitle: "Elektriker Lessebo | Elinstallation & Laddboxar | Växjö Eltjänst",
    seoDescription:
      "Auktoriserad elektriker i Lessebo, Hovmantorp och Kosta. Växjö Eltjänst erbjuder elinstallationer, laddboxar och elservice med högsta säkerhet. Boka offert!",
    stats: {
      stat1: { value: "100%", label: "Behöriga elektriker" },
      stat2: { value: "24h", label: "Svar på offerter" },
      stat3: { value: "5.0", label: "Kundbetyg" },
      quote: "Smidig installation av laddbox och belysning i Hovmantorp. Punktliga och mycket trevliga!",
      quoteAuthor: "Fredrik N, Hovmantorp",
    },
    services: [
      {
        number: "01",
        title: "Hem & Fritidshus i Lessebo",
        description: "Säkra eldragningar för villor och fritidshus — normcentraler, belysning och uttag.",
        serviceSlug: "elinstallation",
      },
      {
        number: "02",
        title: "Industri & Glasbruksservice",
        description: "Driftsäker elservice och anläggningsarbeten för företag och tillverkning i Glasriket.",
        serviceSlug: "foretag-entreprenad",
      },
      {
        number: "03",
        title: "Laddboxar & Grön Energi",
        description: "Installation av elbilsladdare med dynamisk lastbalansering och 50 % skatteavdrag.",
        serviceSlug: "energi-framtidsteknik",
      },
    ],
    usps: [
      {
        number: "01",
        title: "Nära till Lessebo & Hovmantorp",
        description: "Snabb inställelse från Växjö via riksväg 25.",
      },
      {
        number: "02",
        title: "Elsäkerhetsauktorisation",
        description: "Garanterat säkert utförande enligt gällande föreskrifter.",
      },
      {
        number: "03",
        title: "Fast pris & fri offert",
        description: "Transparent prissättning och tydlig dialog.",
      },
      {
        number: "04",
        title: "Trygg partner",
        description: "Långsiktigt ansvar som en del av SELATEK.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Kontakt",
        description: "Ring eller skicka in en förfrågan om ditt elbehov i Lessebo.",
      },
      {
        number: "02",
        title: "Prisförslag",
        description: "Vi tar fram ett komplett kostnadsförslag inklusive eventuella ROT-avdrag.",
      },
      {
        number: "03",
        title: "Utförande",
        description: "Våra behöriga elektriker utför arbetet snabbt och noggrant.",
      },
      {
        number: "04",
        title: "Färdigt & provat",
        description: "Full kontrollmätning och garanti på hela installationen.",
      },
    ],
    faqs: [
      {
        question: "Arbetar ni både i Lessebo och Hovmantorp?",
        answer: "Ja, vi arbetar dagligen i hela Lessebo kommun inklusive Hovmantorp, Kosta och Skruv.",
      },
      {
        question: "Kan ni hjälpa till med byte av elcentral i Lessebo?",
        answer: "Ja, vi byter gamla skåp till moderna automatsäkringscentraler med personskyddsautomater och jordfelsbrytare.",
      },
      {
        question: "Får jag Grön Teknik-avdrag på laddbox i Lessebo?",
        answer: "Ja, du får 50 % avdrag på totalkostnaden för laddbox och installation direkt på fakturan.",
      },
    ],
  },
  {
    slug: "uppvidinge",
    name: "Uppvidinge",
    region: "Kronobergs län",
    nearbyAreas: ["Åseda", "Lenhovda", "Alstermo", "Norrhult", "Klavreström", "Älghult"],
    pillLabel: "Elektriker i Uppvidinge",
    heroTitle: "Auktoriserad elektriker i Uppvidinge & Åseda",
    heroSubtitle:
      "Växjö Eltjänst hjälper boende och företag i Uppvidinge kommun — från Åseda och Lenhovda till Alstermo — med säkra elinstallationer och modern teknik.",
    shortAnswer:
      "Vi erbjuder certifierad elservice i Uppvidinge kommun. Auktoriserade elektriker för villor, fritidshus, lantbruk och industriella anläggningar.",
    seoTitle: "Elektriker Uppvidinge | Åseda & Lenhovda | Växjö Eltjänst",
    seoDescription:
      "Söker du elektriker i Uppvidinge eller Åseda? Växjö Eltjänst utför säkra elarbeten, elcentraler och laddboxar med full auktorisation. Kontakta oss!",
    stats: {
      stat1: { value: "100%", label: "Auktorisation" },
      stat2: { value: "24h", label: "Offertsvar" },
      stat3: { value: "5/5", label: "Kvalitetsbetyg" },
      quote: "Mycket god hjälp vid installation av el och belysning i vår fastighet i Åseda.",
      quoteAuthor: "Mikael E, Företagskund i Uppvidinge",
    },
    services: [
      {
        number: "01",
        title: "Elinstallationer i Uppvidinge",
        description: "Allt från felsökning och uttag till nyckelfärdiga installationer i bostäder och fritidshus.",
        serviceSlug: "elinstallation",
      },
      {
        number: "02",
        title: "Industri & Träförädling",
        description: "Slitstarka och säkra elinstallationer för Uppvidinges industri- och tillverkningsföretag.",
        serviceSlug: "foretag-entreprenad",
      },
      {
        number: "03",
        title: "Laddboxar & Grön Teknik",
        description: "Installation av elbilsladdare med lastbalansering och 50 % skattereduktion.",
        serviceSlug: "energi-framtidsteknik",
      },
    ],
    usps: [
      {
        number: "01",
        title: "Full behörighet",
        description: "Registrerad installatör hos Elsäkerhetsverket för fullständig trygghet.",
      },
      {
        number: "02",
        title: "Bred kompetens",
        description: "Kunniga tekniker för både traditionell el och modern smart styrning.",
      },
      {
        number: "03",
        title: "Konkurrenskraftiga fasta priser",
        description: "Tydliga offerter utan dolda påslag.",
      },
      {
        number: "04",
        title: "Stabilitet med SELATEK",
        description: "Tryggheten av ett etablerat nätverk och långsiktiga garantier.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Förfrågan",
        description: "Skicka in ditt ärende eller ring oss direkt för snabb återkoppling.",
      },
      {
        number: "02",
        title: "Offert & tidsplan",
        description: "Vi tar fram ett genomarbetat kostnadsförslag.",
      },
      {
        number: "03",
        title: "Installation",
        description: "Behöriga elektriker utför arbetet i Uppvidinge med högsta noggrannhet.",
      },
      {
        number: "04",
        title: "Kontroll & provning",
        description: "Vi testar kretsarna och lämnar över fullständig dokumentation.",
      },
    ],
    faqs: [
      {
        question: "Utför ni arbeten i Åseda och Lenhovda?",
        answer: "Ja, vi utför regelbundet elinstallationer och elservice i Åseda, Lenhovda, Alstermo och Norrhult.",
      },
      {
        question: "Kan ni hjälpa till med el i lantbruk och verkstäder i Uppvidinge?",
        answer: "Ja, vi har god vana vid tuffare miljöer, trefasinstallationer och säkerhetskrav för lantbruk och verkstäder.",
      },
      {
        question: "Hur bokar jag en elektriker till Uppvidinge?",
        answer: "Enklast är att fylla i kontaktformuläret här på sidan eller ringa 070-565 70 21 så bokar vi en tid.",
      },
    ],
  },
  {
    slug: "rottne",
    name: "Rottne",
    region: "Kronobergs län",
    nearbyAreas: ["Rottne Tätort", "Tolg", "Tjureda", "Ormeshaga", "Löpanäs", "Norra Växjö"],
    pillLabel: "Elektriker i Rottne",
    heroTitle: "Auktoriserad elektriker i Rottne",
    heroSubtitle:
      "Växjö Eltjänst är verksamma i Rottne med omnejd. Vi hjälper villaägare, lantbrukare och företag med trygga elinstallationer och smart teknik.",
    shortAnswer:
      "Med närhet till Rottne erbjuder Växjö Eltjänst snabb och pålitlig elservice. Vi installerar laddboxar, renoverar elcentraler och utför kompletta elentreprenader.",
    seoTitle: "Elektriker Rottne | Elinstallation & Service | Växjö Eltjänst",
    seoDescription:
      "Auktoriserad elektriker i Rottne och Tolg. Växjö Eltjänst utför elinstallationer, laddboxar och elservice med snabb inställelse och fasta priser. Få offert!",
    stats: {
      stat1: { value: "100%", label: "Elsäkerhetsgodkänt" },
      stat2: { value: "24h", label: "Svarstid" },
      stat3: { value: "50%", label: "Grön Teknik-avdrag" },
      quote: "Mycket snabb service i Rottne när vi behövde installera laddbox till elbilen. Rent och snyggt jobb!",
      quoteAuthor: "Stefan H, Villaägare i Rottne",
    },
    services: [
      {
        number: "01",
        title: "Villa- & Bostadsel i Rottne",
        description: "Modernisering av elanläggningar, jordfelsbrytare, spotlights och extra uttag.",
        serviceSlug: "elinstallation",
      },
      {
        number: "02",
        title: "Industri & Företag i Rottne",
        description: "Driftsäker el för tillverkning, verkstäder och kommersiella lokaler.",
        serviceSlug: "foretag-entreprenad",
      },
      {
        number: "03",
        title: "Laddbox & Solcellsanslutning",
        description: "Smarta laddboxar och framtidssäkra anslutningar för förnybar el.",
        serviceSlug: "energi-framtidsteknik",
      },
    ],
    usps: [
      {
        number: "01",
        title: "Bara minuter bort",
        description: "Snabb utryckning till Rottne från Växjö.",
      },
      {
        number: "02",
        title: "Certifierade elektriker",
        description: "Alltid fackmannamässigt utfört med full behörighet.",
      },
      {
        number: "03",
        title: "Fast pris på offert",
        description: "Trygghet i vad arbetet kostar före start.",
      },
      {
        number: "04",
        title: "SELATEK-resurser",
        description: "Styrkan av en stor koncern kombinerat med lokalt engagemang.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Boka kontakt",
        description: "Hör av dig om ditt elbehov i Rottne.",
      },
      {
        number: "02",
        title: "Kostnadsförslag",
        description: "Vi skickar ett tydligt prisförslag med material och arbete.",
      },
      {
        number: "03",
        title: "Elinstallation",
        description: "Våra behöriga tekniker installerar enligt alla elsäkerhetskrav.",
      },
      {
        number: "04",
        title: "Slutkontroll",
        description: "Mätning och dokumentation säkerställer perfekt funktion.",
      },
    ],
    faqs: [
      {
        question: "Hur snabbt kan ni komma till Rottne?",
        answer: "Eftersom Rottne ligger strax norr om Växjö är vi ofta på plats inom mycket kort tid vid planerade eller akuta ärenden.",
      },
      {
        question: "Kan ni installera laddbox till elbil i Rottne?",
        answer: "Ja, vi installerar laddboxar med 50 % Grön Teknik-avdrag och dynamisk lastbalansering i hela Rottne och Tolg.",
      },
      {
        question: "Hjälper ni även företag i Rottne?",
        answer: "Ja, vi servar både lokala industrier, verkstäder och lantbruk med kraft- och belysningsinstallationer.",
      },
    ],
  },
  {
    slug: "braas",
    name: "Braås",
    region: "Kronobergs län",
    nearbyAreas: ["Braås Tätort", "Dädesjö", "Böksholm", "Ramkvilla-vägen", "Sjösås"],
    pillLabel: "Elektriker i Braås",
    heroTitle: "Auktoriserad elektriker i Braås",
    heroSubtitle:
      "Växjö Eltjänst utför certifierade elinstallationer och elservice i Braås med omnejd. Erfarna elektriker för villor, fastigheter och industrier.",
    shortAnswer:
      "Letar du efter elektriker i Braås? Vi utför säkra elarbeten — från byte av elcentraler och laddboxar till fastighetsservice — med behörighet från Elsäkerhetsverket och fasta priser.",
    seoTitle: "Elektriker Braås | Auktoriserad Elservice | Växjö Eltjänst",
    seoDescription:
      "Behöver du behörig elektriker i Braås eller Dädesjö? Växjö Eltjänst hjälper dig med elinstallation, elcentraler och laddboxar. Begär fri offert!",
    stats: {
      stat1: { value: "100%", label: "Behörig elektriker" },
      stat2: { value: "24h", label: "Offertsvar" },
      stat3: { value: "30%", label: "ROT-skatteavdrag" },
      quote: "Tydlig offert, snabb installation och mycket trevligt bemötande i Braås. Kan varmt rekommenderas!",
      quoteAuthor: "Lars-Erik P, Braås",
    },
    services: [
      {
        number: "01",
        title: "Elinstallation i Braås",
        description: "Säkra och snygga eldragningar vid ombyggnad, tillbyggnad eller renovering i Braås.",
        serviceSlug: "elinstallation",
      },
      {
        number: "02",
        title: "Industri & Företagsservice",
        description: "Elservice, maskinanslutningar och belysning för Braås starka industritradition.",
        serviceSlug: "foretag-entreprenad",
      },
      {
        number: "03",
        title: "Laddboxar & Energieffektivisering",
        description: "Installation av elbilsladdare och LED-belysning med låg energiförbrukning.",
        serviceSlug: "energi-framtidsteknik",
      },
    ],
    usps: [
      {
        number: "01",
        title: "Auktoriserad elsäkerhet",
        description: "Garanti på att arbetet följer Elsäkerhetsverkets regelverk.",
      },
      {
        number: "02",
        title: "Nära till Braås",
        description: "Smidiga transporter från Växjö till Braås och Dädesjö.",
      },
      {
        number: "03",
        title: "Tydliga offerter",
        description: "Specificerade kostnader för både material och arbete.",
      },
      {
        number: "04",
        title: "Långsiktigt ansvar",
        description: "En del av SELATEK med trygga garantier.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Offertförfrågan",
        description: "Hör av dig med information om ditt projekt i Braås.",
      },
      {
        number: "02",
        title: "Genomgång & pris",
        description: "Vi tar fram ett kostnadsförslag och tidsplan.",
      },
      {
        number: "03",
        title: "Installation",
        description: "Arbetet utförs prydligt och fackmannamässigt.",
      },
      {
        number: "04",
        title: "Kvalitetskontroll",
        description: "Provning och överlämning av anläggningen.",
      },
    ],
    faqs: [
      {
        question: "Utför ni elarbeten i Dädesjö och Böksholm också?",
        answer: "Ja, vi hjälper kunder i hela Braåsområdet inklusive Dädesjö, Böksholm och närliggande orter.",
      },
      {
        question: "Hur fungerar Grön Teknik-avdraget för laddbox i Braås?",
        answer: "Du får 50 % i skatteavdrag direkt på fakturan för installation och material till laddboxen.",
      },
      {
        question: "Kan ni hjälpa företag och industrier i Braås?",
        answer: "Ja, vi har stor erfarenhet av industriella installationer, kraftmatningar och belysningsstyrning.",
      },
    ],
  },
  {
    slug: "ingelstad",
    name: "Ingelstad",
    region: "Kronobergs län",
    nearbyAreas: ["Ingelstad Tätort", "Uråsa", "Nöbbele", "Jät", "Torsås By", "Södra Växjö"],
    pillLabel: "Elektriker i Ingelstad",
    heroTitle: "Auktoriserad elektriker i Ingelstad",
    heroSubtitle:
      "Växjö Eltjänst levererar fackmannamässiga elinstallationer i Ingelstad med omnejd. Trygga lösningar för villor, lantbruk och företag.",
    shortAnswer:
      "Söker du elektriker i Ingelstad? Vi erbjuder certifierade elinstallationer, byte av proppskåp, laddboxar och felsökning med snabb service från Växjö.",
    seoTitle: "Elektriker Ingelstad | Säkra Elinstallationer | Växjö Eltjänst",
    seoDescription:
      "Auktoriserad elektriker i Ingelstad och Uråsa. Växjö Eltjänst utför elinstallationer, laddboxar och elservice med fast pris och fri offert. Boka idag!",
    stats: {
      stat1: { value: "100%", label: "Behörigt arbete" },
      stat2: { value: "24h", label: "Svarsgaranti" },
      stat3: { value: "5/5", label: "Betyg från kunder" },
      quote: "Mycket nöjd med kabeldragning och installation av elbilsladdare i Ingelstad. Professionellt!",
      quoteAuthor: "Karin O, Ingelstad",
    },
    services: [
      {
        number: "01",
        title: "Bostadsel i Ingelstad",
        description: "Renovering, jordfelsbrytare, spotlights och extra uttag i villor och fritidshus.",
        serviceSlug: "elinstallation",
      },
      {
        number: "02",
        title: "Lantbruk & Företagsel",
        description: "Säkra kraftinstallationer och underhåll anpassade för lantbruk och lokala företag.",
        serviceSlug: "foretag-entreprenad",
      },
      {
        number: "03",
        title: "Laddboxar & Grön Teknik",
        description: "Installation av elbilsladdare med smart lastbalansering och 50 % skatteavdrag.",
        serviceSlug: "energi-framtidsteknik",
      },
    ],
    usps: [
      {
        number: "01",
        title: "Snabb inställelsetid",
        description: "Bara en kort körsträcka söder om Växjö via väg 27.",
      },
      {
        number: "02",
        title: "Elsäkerhetsauktorisation",
        description: "Full registrering och behörighet för alla typer av elarbeten.",
      },
      {
        number: "03",
        title: "Fast pris",
        description: "Tydliga offerter utan dolda överraskningar.",
      },
      {
        number: "04",
        title: "SELATEK-kvalitet",
        description: "Stabila garantier och ett starkt team i ryggen.",
      },
    ],
    processSteps: [
      {
        number: "01",
        title: "Kontakta oss",
        description: "Beskriv ditt projekt i Ingelstad så återkommer vi snabbt.",
      },
      {
        number: "02",
        title: "Offert & plan",
        description: "Vi tar fram ett specificerat förslag med material och tidsåtgång.",
      },
      {
        number: "03",
        title: "Utförande",
        description: "Våra behöriga elektriker utför arbetet prydligt och säkert.",
      },
      {
        number: "04",
        title: "Slutprovning",
        description: "Anläggningen mäts och testas innan överlämning.",
      },
    ],
    faqs: [
      {
        question: "Utför ni elarbeten i Uråsa och Nöbbele också?",
        answer: "Ja, vi utför elinstallationer i hela södra området inklusive Ingelstad, Uråsa, Nöbbele och Jät.",
      },
      {
        question: "Gäller ROT-avdraget för elinstallationer i Ingelstad?",
        answer: "Ja, du får 30 % avdrag på arbetskostnaden direkt på fakturan enligt gällande skatteregler.",
      },
      {
        question: "Kan ni hjälpa till med el i stall eller ladugård i Ingelstad?",
        answer: "Ja, vi har stor vana vid elinstallationer i lantbruksmiljöer med höga krav på kapslingsklass och brandsäkerhet.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string | undefined): LocationData | undefined {
  if (!slug) return undefined;
  return locations.find((l) => l.slug.toLowerCase() === slug.toLowerCase());
}
