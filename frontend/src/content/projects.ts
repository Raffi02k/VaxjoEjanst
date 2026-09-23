export interface Project {
  slug: string;
  title: string;
  location: string;
  city: string;
  area: string;
  category: string;
  clientType: string;
  year: string;
  scope: string;
  image: string;
  gallery: string[];
  excerpt: string;
  description: string;
  highlights: string[];
  results: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "modernisering-elcentral-teleborg",
    title: "Modernisering av elcentral & ställverk",
    location: "Teleborg, Växjö",
    city: "Växjö",
    area: "Teleborg",
    category: "Fastighet & Industri",
    clientType: "Fastighetsbolag",
    year: "2025",
    scope: "Ställverksbyte, huvudcentraler, personskydd & mätning",
    image: "/images/hero-electrician.webp",
    gallery: ["/images/project-23695.jpg", "/images/project-23107.jpg"],
    excerpt: "Komplett utbyte och uppgradering av äldre elcentraler och ställverk i en kommersiell fastighet i Teleborg, Växjö.",
    description: "I samband med fastighetsmodernisering i Teleborg fick Växjö Eltjänst förtroendet att byta ut föråldrade elcentraler och installera ett modernt, selektivt personskydd och digital mätutrustning. Projektet krävde noggrann planering och etappvis driftsättning för att minimera avbrott för verksamheterna i fastigheten.",
    highlights: [
      "Demontering och säker sanering av gammal elutrustning",
      "Installation av nytt normställverk med jordfelsbrytare och överspänningsskydd",
      "Integrerad undermätning för individuell energidebitering",
      "Fullständig slutprovning och dokumentation enligt svensk standard",
    ],
    results: [
      "Helt störningsfri etappvis driftsättning",
      "Drastiskt förbättrad driftsäkerhet och personskydd",
      "Förberedd för framtida solcells- och laddboxanslutning",
    ],
    seo: {
      metaTitle: "Elcentral & Ställverksbyte Teleborg | Växjö Eltjänst",
      metaDescription: "Se vårt arbete med modernisering av elcentral och ställverk i Teleborg, Växjö. Trygga elinstallationer för fastighetsägare.",
      keywords: ["elcentral teleborg", "ställverk växjö", "elinstallation teleborg", "fastighetsel växjö"],
    },
  },
  {
    slug: "energieffektiv-led-belysning-samarkand",
    title: "Energieffektiv LED-belysning i butik & lager",
    location: "Grand Samarkand, Växjö",
    city: "Växjö",
    area: "Samarkand",
    category: "Företag & Handel",
    clientType: "Handelsföretag",
    year: "2025",
    scope: "Belysningsprojektering, DALI-styrning & LED-armaturer",
    image: "/images/project-23695.jpg",
    gallery: ["/images/project-23107.jpg", "/images/hero-electrician.webp"],
    excerpt: "Konvertering till smart LED-belysning med automatisk närvaro- och dagsljusstyrning vid Grand Samarkand i Växjö.",
    description: "Handelslokalen och lagret vid Grand Samarkand behövde sänka sin energiförbrukning och samtidigt få en jämnare, behagligare belysning för kunder och personal. Växjö Eltjänst projekterade och installerade ett DALI-baserat LED-system som anpassar ljusstyrkan efter dagsljusinsläpp och rörelse i lokalen.",
    highlights: [
      "Ljusberäkning och anpassad armaturplacering för optimal spridning",
      "Installation av DALI-styrda armaturer med lång livslängd",
      "Närvarozoner på lager och automatisk nattdimning",
      "Driftsättning utan att butikens öppettider påverkades",
    ],
    results: [
      "Över 60% minskad elförbrukning för belysning",
      "Betydligt förbättrad arbetsmiljö och färgåtergivning",
      "Kort återbetalningstid genom energieffektivisering",
    ],
    seo: {
      metaTitle: "LED-belysning i butik & lager Samarkand | Växjö Eltjänst",
      metaDescription: "Energieffektiv belysningsstyrning och LED-installation vid Grand Samarkand i Växjö. Sänk energikostnaderna med Växjö Eltjänst.",
      keywords: ["led belysning samarkand", "butiksbelysning växjö", "dali styrning växjö", "elektriker samarkand"],
    },
  },
  {
    slug: "teknisk-elinstallation-arenastaden",
    title: "Avancerad teknisk elinstallation & reservkraft",
    location: "Arenastaden, Växjö",
    city: "Växjö",
    area: "Arenastaden",
    category: "Entreprenad & Teknik",
    clientType: "Evenemangsfastighet",
    year: "2026",
    scope: "Kraftmatning, reservkraft, nödbelysning & säkerhetssystem",
    image: "/images/project-23107.jpg",
    gallery: ["/images/project-23378.jpg", "/images/hero-electrician.webp"],
    excerpt: "Omfattande teknisk kraftmatning, nödbelysning och driftsäkerhet för evenemangsmiljö vid Arenastaden i Växjö.",
    description: "I Arenastaden ställs extrema krav på tillförlitlighet vid publika evenemang och matcher. Växjö Eltjänst ansvarade för projektering och installation av kraftmatning till mediaproduktion, centraliserad nödbelysning med självtestande armaturer samt automatisk reservkraftsomkoppling.",
    highlights: [
      "Redundanta kraftmatningar för kritiska funktioner",
      "Central batteridriven nödbelysning med övervakningssystem",
      "Specialanpassade anslutningspunkter för event- och mediateknik",
      "Samordning med brand- och utrymningslarm",
    ],
    results: [
      "Godkänd säkerhetsbesiktning utan anmärkning",
      "Maximal tillförlitlighet under publikflöden och matcher",
      "Flexibla inkopplingsmöjligheter för framtida evenemang",
    ],
    seo: {
      metaTitle: "Teknisk Elinstallation Arenastaden | Växjö Eltjänst",
      metaDescription: "Avancerad kraftmatning och nödbelysning vid Arenastaden i Växjö. Säker och certifierad elentreprenad.",
      keywords: ["elentreprenad arenastaden", "teknisk elinstallation växjö", "nödbelysning växjö", "reservkraft växjö"],
    },
  },
  {
    slug: "laddstationer-brf-ojaby",
    title: "Skalbar elbilsladdning för bostadsrättsförening",
    location: "Öjaby, Växjö",
    city: "Växjö",
    area: "Öjaby",
    category: "Energi & Laddning",
    clientType: "Bostadsrättsförening",
    year: "2025",
    scope: "32 st laddpunkter, dynamisk lastbalansering & markkanalisation",
    image: "/images/project-23491.jpg",
    gallery: ["/images/project-23695.jpg", "/images/project-23378.jpg"],
    excerpt: "Installation av 32 framtidssäkrade laddpunkter med dynamisk lastbalansering mot fastighetens huvudsäkring i Öjaby.",
    description: "För en aktiv BRF i Öjaby projekterade och installerade Växjö Eltjänst en komplett laddinfrastruktur. Genom att integrera dynamisk lastbalansering i realtid kunde föreningen installera 32 laddplatser utan att behöva öka huvudsäkringens abonnemangskostnad hos nätägaren.",
    highlights: [
      "Grävning, kabelförläggning och robust fundamentering på parkeringsyta",
      "Installation av Typ 2-laddboxar med MID-godkänd förbrukningsmätning",
      "Molnbaserat administrationssystem för automatisk debitering per boende",
      "Dynamisk fas- och lastbalansering mot fastighetens elcentral",
    ],
    results: [
      "Ingen kostsam säkringshöjning krävdes för föreningen",
      "Rättvis debitering direkt kopplad till varje bilägares elförbrukning",
      "Förberett för att enkelt expandera med fler platser",
    ],
    seo: {
      metaTitle: "Elbilsladdning BRF Öjaby | Växjö Eltjänst",
      metaDescription: "Smart och skalbar elbilsladdning med dynamisk lastbalansering för BRF i Öjaby, Växjö. Kontakta Växjö Eltjänst för offert.",
      keywords: ["elbilsladdning öjaby", "laddbox brf växjö", "lastbalansering laddstationer växjö", "elinstallation öjaby"],
    },
  },
  {
    slug: "fastighetsautomation-vaxjo-centrum",
    title: "Fastighetsautomation & passagesystem",
    location: "Växjö Centrum",
    city: "Växjö",
    area: "Centrum",
    category: "Fastighet & Drift",
    clientType: "Fastighetsförvaltning",
    year: "2026",
    scope: "Styr- och reglersystem, passagesäkerhet & energioptimering",
    image: "/images/project-23378.jpg",
    gallery: ["/images/hero-electrician.webp", "/images/project-23107.jpg"],
    excerpt: "Integration av modern fastighetsautomation och digitalt passersystem i en centrumfastighet i Växjö.",
    description: "I hjärtat av Växjö centrum uppgraderades en flervåningsfastighet med bostäder och kontor. Växjö Eltjänst utförde komplett kabeldragning, installation av motorstyrda dörrmiljöer, integrerade passersystem och automatisk temperaturstyrning för ventilationsaggregat.",
    highlights: [
      "Installation av integrerat passerkontrollsystem med tagg och app-åtkomst",
      "Styrning och larmövervakning för ventilation och värme",
      "Dold kabeldragning med hänsyn till fastighetens bevarandevärde",
      "Snabb driftsättning och utbildning av förvaltningens personal",
    ],
    results: [
      "Ökad trygghet för de boende med loggad passerkontroll",
      "Optimerad inomhuskomfort och minskad värmespill",
      "Central administration från distans för fastighetsskötare",
    ],
    seo: {
      metaTitle: "Fastighetsautomation & Passage Växjö Centrum | Växjö Eltjänst",
      metaDescription: "Modern fastighetsautomation och integrerat passersystem i Växjö Centrum. Trygg installation och service av Växjö Eltjänst.",
      keywords: ["fastighetsautomation växjö centrum", "passersystem växjö", "dörrautomatik växjö", "elektriker växjö centrum"],
    },
  },
  {
    slug: "komplett-villainstallation-hovshaga",
    title: "Komplett smart elinstallation vid nybyggnation",
    location: "Hovshaga, Växjö",
    city: "Växjö",
    area: "Hovshaga",
    category: "Privatbostad",
    clientType: "Privatkund",
    year: "2025",
    scope: "Smart belysning, fasadbelysning, central & ljudsystem",
    image: "/images/hero-electrician.webp",
    gallery: ["/images/project-23491.jpg", "/images/project-23695.jpg"],
    excerpt: "Arkitektritad elinstallation i modern villa i Hovshaga med integrerad smart styrning och diskret design.",
    description: "Vid nybyggnation av en modern familjevilla i Hovshaga anlitades Växjö Eltjänst för totalansvar över all el och belysning. Lösningen kombinerar diskreta infällda spotlights, skymningsrelä för fasad och trädgård samt smart styrning av golvvärme och scener via mobil eller designade väggpaneler.",
    highlights: [
      "Projektering av belysningsplan i nära samråd med arkitekt och husägare",
      "Integrerad Plejd-styrning för belysning, solskydd och fasadljus",
      "Egen elcentral med överspänningsskydd och dedikerade kurser för induktion och bastu",
      "Stilrena brytare och uttag i mattsvart utförande",
    ],
    results: [
      "En sömlös, funktionell och estetisk belysningsupplevelse i hela huset",
      "Låg energianvändning tack vare noggrant utvalda LED-komponenter",
      "Full flexibilitet att ändra ljusscener efter årstid och behov",
    ],
    seo: {
      metaTitle: "Smart Elinstallation Villa Hovshaga | Växjö Eltjänst",
      metaDescription: "Komplett elinstallation och smart belysningsstyrning vid villabygge i Hovshaga, Växjö. Se referensprojekt hos Växjö Eltjänst.",
      keywords: ["elektriker hovshaga", "smart hem växjö", "belysningsstyrning hovshaga", "villael växjö"],
    },
  },
];
