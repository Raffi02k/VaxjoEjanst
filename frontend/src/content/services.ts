export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  intro: string;
  description: string;
  image: string;
  secondaryImage: string;
  details: { title: string; text: string; bullets: string[] }[];
  benefits: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "elinstallation-service",
    title: "Elinstallation & service",
    shortTitle: "Elinstallation",
    eyebrow: "För hem, lokal och fastighet",
    intro: "Säkra elinstallationer, smart felsökning och löpande service utförd med omsorg om både funktion och finish.",
    description: "Från mindre kompletteringar och felsökning till ombyggnad av elcentral, belysning och installation i samband med renovering.",
    image: "/images/hero-electrician.webp",
    secondaryImage: "/images/project-23695.jpg",
    details: [
      { title: "Installation & ombyggnad", text: "Vi hjälper till när elanläggningen ska byggas ut, moderniseras eller anpassas till nya behov.", bullets: ["Nya uttag, belysning och matningar", "Elcentraler och jordfelsbrytare", "El vid renovering och nybyggnation"] },
      { title: "Service & felsökning", text: "När något inte fungerar lokaliserar vi felet och föreslår en säker, långsiktig lösning.", bullets: ["Felsökning av elanläggningar", "Reparation och utbyte", "Planerad service för fastigheter"] },
    ],
    benefits: [{ title: "Säkert utfört", text: "Arbetet planeras med rätt skydd, dokumentation och kontroll." }, { title: "Tydlig dialog", text: "Du får veta vad som behöver göras och hur nästa steg ser ut." }, { title: "Lokal service", text: "Snabb och personlig kontakt från ett etablerat Växjöteam." }, { title: "Helhetsansvar", text: "En partner från planering till färdig installation." }],
  },
  {
    slug: "foretag-entreprenad",
    title: "Företag & entreprenad",
    shortTitle: "Företag & entreprenad",
    eyebrow: "För verksamheter och fastighetsägare",
    intro: "En erfaren installationspartner för lokaler, fastigheter och projekt där samordning, kvalitet och leveranssäkerhet är avgörande.",
    description: "Installation, anpassning och service för företag, fastighetsägare, BRF:er och entreprenader i Växjö med omnejd.",
    image: "/images/project-23107.jpg",
    secondaryImage: "/images/project-23378.jpg",
    details: [
      { title: "Lokaler & fastigheter", text: "Vi anpassar elanläggningen när verksamheten förändras eller fastigheten behöver moderniseras.", bullets: ["Kontors- och butiksanpassning", "Belysning och energieffektivisering", "Löpande fastighetsservice"] },
      { title: "Entreprenad", text: "Vi samarbetar med beställare och andra yrkesgrupper genom hela projektet.", bullets: ["Planering och projektsamordning", "Installation vid om- och nybyggnad", "Provning, kontroll och överlämning"] },
    ],
    benefits: [{ title: "Projektvana", text: "Strukturerad leverans med förståelse för tidplan och samordning." }, { title: "Skalbar kapacitet", text: "Lokalt ansvar förstärkt av nätverket inom SELATEK." }, { title: "Långsiktighet", text: "Lösningar som fungerar både idag och när verksamheten växer." }, { title: "En kontaktväg", text: "Tydlig projektledning och raka besked genom hela uppdraget." }],
  },
  {
    slug: "energi-framtidsteknik",
    title: "Energi & framtidsteknik",
    shortTitle: "Energi & framtidsteknik",
    eyebrow: "Smarta och hållbara lösningar",
    intro: "Modern elteknik som gör fastigheten enklare att använda, bättre förberedd och mer energieffektiv.",
    description: "Laddning, styrning, modern belysning och energismarta installationer anpassade efter fastighetens verkliga behov.",
    image: "/images/project-23491.jpg",
    secondaryImage: "/images/project-48297.jpg",
    details: [
      { title: "Laddning & effekt", text: "Vi hjälper till att skapa en trygg grund för elbilsladdning och framtida effektbehov.", bullets: ["Behovsanalys och förberedelse", "Laddlösningar för hem och verksamhet", "Säker inkoppling och kontroll"] },
      { title: "Belysning & styrning", text: "Rätt teknik kan ge bättre miljö, lägre energianvändning och enklare kontroll.", bullets: ["LED-belysning inom- och utomhus", "Närvaro- och tidsstyrning", "Anpassning för framtida funktioner"] },
    ],
    benefits: [{ title: "Mindre energislöseri", text: "Lösningar dimensioneras för faktisk användning." }, { title: "Framtidsredo", text: "Installationer som går att vidareutveckla när behoven ändras." }, { title: "Trygg rådgivning", text: "Vi hjälper dig välja nivå utan onödig teknik." }, { title: "Snygg integration", text: "Tekniken blir en genomtänkt del av fastigheten." }],
  },
];
