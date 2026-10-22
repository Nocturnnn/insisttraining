export type Feature = { title: string; description: string; image: string };
export type ActivityPage = {
  name: string;
  image: string;
  title: string[];
  description: string;
  introTitle: string[];
  introDescription: string;
  features: Feature[];
  ctaTitle: string[];
  ctaDescription: string;
  seo: string;
};
export const activityPages: Record<
  "danca" | "pilates" | "bike-in" | "musculacao" | "hiit",
  ActivityPage
> = {
  musculacao: {
    name: "Musculação",
    image: "home",
    title: ["Sua força.", "Sua evolução."],
    description:
      "Um treino de cada vez. Construa sua rotina e celebre cada passo, respeitando o seu ritmo.",
    introTitle: ["Constância que", "vira movimento."],
    introDescription:
      "A musculação faz parte dos planos da Insist. Conheça o espaço, converse com a equipe e encontre uma rotina que faça sentido para você.",
    features: [
      {
        title: "Técnica",
        description: "Atenção à execução e consciência em cada movimento.",
        image: "home",
      },
      {
        title: "Constância",
        description: "Um espaço para fazer do treino parte da sua rotina.",
        image: "hiit",
      },
      {
        title: "Evolução",
        description:
          "Seu processo, seu ritmo. Cada passo faz parte da jornada.",
        image: "comunidade",
      },
    ],
    ctaTitle: ["Seu próximo passo", "começa aqui."],
    ctaDescription:
      "Venha conhecer a Insist e converse com a equipe sobre a musculação.",
    seo: "Conheça a musculação da Insist Training em Anápolis, inclusa em todos os planos. Converse com a equipe e encontre seu ritmo de treino.",
  },
  hiit: {
    name: "HIIT",
    image: "hiit",
    title: ["Mais movimento.", "Sua intensidade."],
    description:
      "Energia e foco em uma proposta de treino intervalado. Descubra seu ritmo na Insist.",
    introTitle: ["Movimente-se", "do seu jeito."],
    introDescription:
      "O HIIT combina períodos de esforço e recuperação em uma experiência dinâmica. A modalidade está inclusa nos planos. Consulte a equipe sobre a prática e a programação.",
    features: [
      {
        title: "Energia",
        description: "Uma proposta dinâmica para colocar o corpo em movimento.",
        image: "hiit",
      },
      {
        title: "Foco",
        description: "Presença e atenção em cada etapa do treino.",
        image: "home",
      },
      {
        title: "Seu ritmo",
        description:
          "Converse com a equipe para conhecer a atividade e participar.",
        image: "comunidade",
      },
    ],
    ctaTitle: ["Encontre sua", "próxima energia."],
    ctaDescription:
      "Consulte a equipe sobre o HIIT e como encaixar a modalidade na sua rotina.",
    seo: "Conheça o HIIT da Insist Training, incluso nos planos da academia. Consulte a equipe sobre a atividade e a programação.",
  },
  danca: {
    name: "Dança",
    image: "danca",
    title: ["Sinta a música.", "Viva o movimento."],
    description:
      "Mais do que uma aula, é um espaço para se expressar, se conectar e cuidar de você.",
    introTitle: ["Mais energia", "para sua rotina."],
    introDescription:
      "A dança é movimento, bem-estar e liberdade. Aqui na Insist, você encontra um convite para soltar o corpo, conhecer pessoas e se movimentar do seu jeito.",
    features: [
      {
        title: "Ritmo",
        description: "Solte o corpo, sinta a música e encontre o seu ritmo.",
        image: "danca",
      },
      {
        title: "Conexão",
        description:
          "Compartilhe boas energias e faça parte de uma comunidade.",
        image: "comunidade",
      },
      {
        title: "Movimento",
        description: "Mais disposição e uma rotina com espaço para você.",
        image: "danca-retrato",
      },
    ],
    ctaTitle: ["Vem dançar", "com a gente."],
    ctaDescription:
      "Dê o primeiro passo para uma rotina com mais movimento. Estamos esperando você na Insist.",
    seo: "Sinta a música e viva o movimento nas aulas de dança da Insist Training. Dança inclusa nos planos. Consulte os horários.",
  },
  pilates: {
    name: "Pilates",
    image: "pilates",
    title: ["Força com", "equilíbrio."],
    description:
      "Movimento consciente para um corpo mais forte, estável e presente no seu dia a dia.",
    introTitle: ["Movimento", "com consciência."],
    introDescription:
      "O Pilates na Insist é um convite para se conectar com o seu corpo, desenvolver força, mobilidade e equilíbrio através do movimento bem orientado, no seu ritmo.",
    features: [
      {
        title: "Controle",
        description: "Movimentos precisos para mais consciência corporal.",
        image: "pilates-controle",
      },
      {
        title: "Mobilidade",
        description: "Mais liberdade para explorar seus movimentos.",
        image: "pilates-mobilidade",
      },
      {
        title: "Equilíbrio",
        description: "Estabilidade e presença em cada movimento.",
        image: "pilates",
      },
    ],
    ctaTitle: ["Respeite seu ritmo.", "Continue evoluindo."],
    ctaDescription: "Reserve um momento para se conectar com o seu corpo.",
    seo: "Força com equilíbrio no Pilates da Insist Training. Conheça a atividade no solo, inclusa nos planos, e consulte a grade de aulas.",
  },
  "bike-in": {
    name: "Bike IN",
    image: "bike",
    title: ["Pedale no seu", "próximo nível."],
    description:
      "Mais que uma aula, uma experiência de energia, foco e superação. Encontre seu ritmo e sinta a diferença a cada giro.",
    introTitle: ["Energia", "em cada giro."],
    introDescription:
      "A Bike IN é uma aula coletiva de ciclismo indoor que combina música, ritmo e intensidade. Uma experiência dinâmica para colocar o corpo em movimento e encontrar motivação em cada pedalada.",
    features: [
      {
        title: "Ritmo",
        description: "Música que te move e acompanha você do começo ao fim.",
        image: "bike",
      },
      {
        title: "Foco",
        description: "Concentração para ir além a cada treino, no seu ritmo.",
        image: "bike",
      },
      {
        title: "Superação",
        description: "Descubra suas possibilidades em cada novo giro.",
        image: "bike",
      },
    ],
    ctaTitle: ["Seu ritmo encontra", "a nossa energia."],
    ctaDescription:
      "Uma comunidade que pedala junto. Conheça os horários e consulte a equipe sobre a participação na Bike IN.",
    seo: "Pedale no seu próximo nível com a Bike IN da Insist Training. Conheça o ciclismo indoor e consulte horários e condições de participação.",
  },
};
