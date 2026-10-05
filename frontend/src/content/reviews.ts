export interface Review {
  text: string;
  author: string;
  role: string;
  rating?: number;
  date?: string;
}

export const reviews: Review[] = [
  {
    author: "Marcus Lindqvist",
    role: "Villaägare, Hov i Växjö",
    date: "2 veckor sedan",
    rating: 5,
    text: "Snabb återkoppling, tydlig kommunikation och ett professionellt genomfört arbete från första kontakt till färdig elinstallation. Otroligt nöjd med resultatet!",
  },
  {
    author: "Johan Bergström",
    role: "Totalrenovering villa, Växjö",
    date: "1 månad sedan",
    rating: 5,
    text: "Vi fick suverän hjälp med både planering och utförande under vår renovering. Teamet var lösningsorienterat, punktligt och höll precis det vi kom överens om.",
  },
  {
    author: "Camilla & Fredrik Nilsson",
    role: "Laddbox & elcentral, Växjö",
    date: "1 månad sedan",
    rating: 5,
    text: "Mycket trevligt bemötande, snabb leverans och snyggt utfört arbete med laddbox och uppgradering av elcentralen. Kändes tryggt genom hela processen.",
  },
  {
    author: "Anders Carlsson",
    role: "Fastighetsansvarig, Teleborg",
    date: "2 månader sedan",
    rating: 5,
    text: "Smidig service, hög yrkesskicklighet och ett ordentligt slutresultat vid byte av belysning och löpande elservice. Vi anlitar gärna Växjö Eltjänst igen.",
  },
  {
    author: "Helena Sjöberg",
    role: "Bostadsrätt, Växjö centrum",
    date: "3 månader sedan",
    rating: 5,
    text: "Tydlig offert utan överraskningar, bra dialog under arbetets gång och ett resultat som verkligen motsvarade våra förväntningar. Noggranna och trevliga elektriker.",
  },
  {
    author: "Stefan Holmgren",
    role: "Företagslokaler, Växjö",
    date: "4 månader sedan",
    rating: 5,
    text: "Professionellt bemötande och snabb inställelse när vi behövde anpassa el och belysning i våra verksamhetslokaler. Löste allt effektivt och säkert!",
  },
];
