import { images } from "./images";
import type { Service } from "./types";

export const services = [
  {
    slug: "ombyggnation",
    title: "Ombyggnation",
    label: "Ombyggnation",
    teaser: "Bygga om eller bygga till – från planering till val av material.",
    lead: "Mer yta, en bättre planlösning eller ett rum med ny funktion. Vi tar dig från idé till färdig ombyggnad.",
    body: [
      "En ombyggnation påverkar hur du bor i många år framåt. Därför börjar vi alltid med att förstå vad du vill uppnå – och vad som är rimligt i just ditt hus eller din lägenhet.",
      "Vi hjälper till med helheten: planering, rekommendationer och val av material. Under arbetets gång stämmer vi av med dig löpande, så att du vet var projektet står och vad som händer härnäst.",
    ],
    offer: [
      "Ombyggnation och tillbyggnad av bostäder",
      "Planering och rekommendationer inför arbetet",
      "Hjälp att välja material",
      "Löpande avstämning genom hela projektet",
    ],
    questions: [
      "Vad är målet – mer yta, en bättre planlösning eller en ny funktion?",
      "Bor du i villa, radhus eller bostadsrätt?",
      "Finns det ritningar eller bilder på hur det ser ut i dag?",
    ],
    note: "I en bostadsrätt behöver vissa ändringar godkännas av föreningen. Större om- och tillbyggnader kan kräva bygglov eller anmälan – kontrollera med din kommun.",
    image: {
      src: images.ombyggnationRum,
      alt: "Nyrenoverat ljust rum med trägolv och kök längs ena väggen",
    },
    detail: {
      src: images.planeringRitning,
      alt: "Händer som skissar på en ritning vid ett arbetsbord",
    },
    cta: "Dags att bygga om?",
    seo: {
      title: "Ombyggnation & tillbyggnad i Stockholm",
      description:
        "Ombyggnation och tillbyggnad i Stockholm med en kontakt från planering och materialval till färdigt resultat. Begär en kostnadsfri offert.",
    },
  },
  {
    slug: "badrumsrenovering",
    title: "Badrumsrenovering",
    label: "Badrum",
    teaser: "Förnya eller renovera badrummet – vi hjälper dig från början till slut.",
    lead: "Badrummet används varje dag och ska hålla länge. Vi renoverar det med tydlig planering och noggrant hantverk.",
    body: [
      "Ett badrum är ett av hemmets mest krävande rum att renovera. Det ställer krav på ordning i varje led – från planering och materialval till hur arbetet utförs.",
      "Vi går igenom badrummet tillsammans med dig, pratar om önskemål och budget och tar fram en offert som visar vad som ingår. Sedan håller vi dig uppdaterad tills rummet är klart.",
    ],
    offer: [
      "Renovering av befintligt badrum",
      "Förnyelse av badrummet från början till slut",
      "Planering och hjälp med materialval",
      "En kontaktperson under hela renoveringen",
    ],
    questions: [
      "Vad fungerar inte i dag – och vad vill du behålla?",
      "Vilka material och vilken känsla dras du till?",
      "Finns det en tidpunkt då badrummet behöver vara klart?",
    ],
    image: {
      src: images.badrumRibbor,
      alt: "Badrum med grå klinker, badkar och vägg klädd med träribbor",
    },
    detail: {
      src: images.badrumSten,
      alt: "Badrum med grå stenväggar, svart handfat på träkommod och fristående badkar",
    },
    cta: "Dags för ett nytt badrum?",
    seo: {
      title: "Badrumsrenovering i Stockholm",
      description:
        "Badrumsrenovering i Stockholm – från genomgång och planering till färdigt badrum. Personlig kontakt hela vägen. Begär en kostnadsfri offert.",
    },
  },
  {
    slug: "koksrenovering",
    title: "Köksrenovering",
    label: "Kök",
    teaser: "Förnya eller bygga om köket – och skapa ett kök att trivas i.",
    lead: "Köket är hemmets samlingspunkt. Vi hjälper dig att förnya det eller bygga om det helt – så att det fungerar för just ert vardagsliv.",
    body: [
      "Ett bra kök handlar om mer än luckor och bänkskivor. Det handlar om hur ni lagar mat, umgås och rör er i rummet. Vi börjar där.",
      "Oavsett om du vill byta ut delar av köket eller bygga om det från grunden hjälper vi dig med planering och genomförande, med samma noggrannhet i varje detalj.",
    ],
    offer: [
      "Förnyelse av befintligt kök",
      "Ombyggnad av kök från grunden",
      "Planering utifrån hur ni använder köket",
      "Montering och snickeri i köksmiljö",
    ],
    questions: [
      "Hur använder ni köket i vardagen?",
      "Ska planlösningen ändras eller behållas?",
      "Har du redan valt kök, eller är du fortfarande i idéstadiet?",
    ],
    image: {
      src: images.kokEk,
      alt: "Ljust kök med vit köksö, barstolar i ek och pendellampor",
    },
    detail: {
      src: images.kokLjust,
      alt: "Kök i ljusgrå kulör med stort fönster ut mot grönska",
    },
    cta: "Dags för ett nytt kök?",
    seo: {
      title: "Köksrenovering i Stockholm",
      description:
        "Köksrenovering i Stockholm – förnya eller bygg om köket med ett byggföretag som planerar utifrån hur ni lever. Begär en kostnadsfri offert.",
    },
  },
  {
    slug: "takrenovering",
    title: "Takrenovering",
    label: "Tak",
    teaser: "Uppgradera, bygga om eller renovera taket – med flera olika lösningar.",
    lead: "Taket skyddar allt under det. Vi hjälper dig att uppgradera, bygga om eller renovera det – och att välja den lösning som passar huset.",
    body: [
      "Ett tak åldras långsamt och syns sällan förrän något händer. Ju tidigare du tar tag i det, desto fler alternativ har du.",
      "Vi går igenom takets skick och dina önskemål och föreslår en lösning som passar huset och budgeten. Du får en tydlig offert innan något arbete påbörjas.",
    ],
    offer: [
      "Renovering av befintligt tak",
      "Ombyggnad och uppgradering av tak",
      "Genomgång av olika lösningar och material",
      "Tydlig offert innan arbetet startar",
    ],
    questions: [
      "Vad har du märkt – läckage, slitage eller främst ålder?",
      "Vet du ungefär hur gammalt taket är?",
      "Vill du behålla husets uttryck eller byta material?",
    ],
    image: {
      src: images.takHus,
      alt: "Villa med mörkt tak och takkupor bland höga tallar i morgonljus",
      focus: "60% 40%",
    },
    detail: {
      src: images.takArbete,
      alt: "Hantverkare står på ett villatak med en stege lutad mot fasaden",
    },
    cta: "Dags att se över taket?",
    seo: {
      title: "Takrenovering i Stockholm",
      description:
        "Takrenovering i Stockholm – uppgradera, bygg om eller renovera taket. Vi går igenom alternativen och lämnar en tydlig offert.",
    },
  },
  {
    slug: "altanbygge",
    title: "Altanbygge",
    label: "Altan",
    teaser: "Bygga en ny altan eller renovera en befintlig – för fler timmar utomhus.",
    lead: "En altan förlänger säsongen och gör trädgården till en del av hemmet. Vi bygger nytt eller renoverar det du har.",
    body: [
      "En väl genomtänkt altan blir ett extra rum under den ljusa delen av året. Placering, solläge och hur du vill använda ytan styr hur den ska utformas.",
      "Vi hjälper dig att bygga en ny altan eller ge en befintlig nytt liv – med virke, detaljer och utförande som håller över tid.",
    ],
    offer: [
      "Nybyggnad av altan och trall",
      "Renovering av befintlig altan",
      "Trappor, räcken och snickeridetaljer",
      "Rådgivning kring utformning och material",
    ],
    questions: [
      "Hur vill du använda altanen – frukost i morgonsol, middagar eller lek?",
      "Ska den byggas nytt eller ska en befintlig altan renoveras?",
      "Hur ser tomten och solläget ut?",
    ],
    note: "Beroende på storlek, höjd och placering kan ett altanbygge kräva bygglov eller anmälan. Kontrollera alltid med din kommun.",
    image: {
      src: images.altanStuga,
      alt: "Trähus med altan och räcke mitt i en granskog",
      focus: "50% 70%",
    },
    detail: {
      src: images.fasadTra,
      alt: "Modern villa med fasad i trä och stora glaspartier",
    },
    cta: "Dags för en ny altan?",
    seo: {
      title: "Altanbygge i Stockholm",
      description:
        "Altanbygge i Stockholm – vi bygger nya altaner och renoverar befintliga. Rådgivning om utformning och material. Begär en kostnadsfri offert.",
    },
  },
  {
    slug: "snickeri",
    title: "Snickeri & övriga byggtjänster",
    label: "Snickeri",
    teaser: "Från golv till tak och allt däremellan. Inget jobb är för stort eller för litet.",
    lead: "Lösningar från golv till tak och allt däremellan. Behöver du hjälp att sätta upp en tavla? Inget jobb är för litet.",
    body: [
      "Alla projekt är inte stora renoveringar. Ibland handlar det om en dörr som behöver justeras, en vägg som ska byggas eller några småjobb som har samlats på hög.",
      "Vi tar oss an bygg- och snickeriuppdrag i alla storlekar, åt privatpersoner, företag och bostadsrättsföreningar. Osäker på om vi kan hjälpa till? Hör av dig, så berättar vi.",
    ],
    offer: [
      "Bygg- och snickerijobb i alla storlekar",
      "Montering och mindre uppdrag i hemmet",
      "Uppdrag för företag och bostadsrättsföreningar",
      "Flera småjobb samlade i ett besök",
    ],
    questions: [
      "Vad behöver göras – och finns det fler småjobb att samla ihop?",
      "Har du bilder eller mått att skicka med?",
      "Gäller det en privat bostad, ett företag eller en förening?",
    ],
    image: {
      src: images.snickeriSag,
      alt: "Hantverkare sågar en träregel med cirkelsåg på en arbetsbock",
    },
    detail: {
      src: images.snickeriGolv,
      alt: "Ljust rum med fiskbensmönstrat trägolv och en sideboard i trä",
    },
    cta: "Något som behöver göras?",
    seo: {
      title: "Snickeri & byggtjänster i Stockholm",
      description:
        "Snickeri och byggtjänster i Stockholm – från småjobb till större uppdrag för privatpersoner, företag och bostadsrättsföreningar.",
    },
  },
] as const satisfies readonly Service[];

export type ServiceSlug = (typeof services)[number]["slug"];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
