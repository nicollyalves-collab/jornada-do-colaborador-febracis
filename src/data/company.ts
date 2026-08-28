import { Flag, Globe2, Users2, Award, type LucideIcon } from "lucide-react";

export type TimelineEntry = {
  year: string;
  title: string;
  text: string;
};

export const TIMELINE: TimelineEntry[] = [
  {
    year: "1998",
    title: "Grupo Spy",
    text: "Primeiros treinamentos realizados pela Febracis, ainda com o nome Grupo Spy.",
  },
  {
    year: "2005/2006",
    title: "Agora Febracis",
    text: "As palestras alcançam instituições públicas e privadas renomadas.",
  },
  {
    year: "20+ anos",
    title: "Método CIS em evolução",
    text: "Paulo Vieira aperfeiçoa continuamente o Coaching Integral Sistêmico, metodologia própria e registrada.",
  },
  {
    year: "Hoje",
    title: "Maior escola de negócios da América Latina",
    text: "Matriz em Santana de Parnaíba (SP), filial em Fortaleza (CE) e presença em três continentes.",
  },
  {
    year: "Holding",
    title: "Holding Febracis",
    text: "Estrutura que reúne as empresas e frentes de negócio do grupo, incluindo o setor Pedagógico.",
  },
];

export type Founder = {
  name: string;
  role: string;
  highlights: string[];
};

export const FOUNDERS: Founder[] = [
  {
    name: "Paulo Vieira",
    role: "Fundador e Presidente Internacional",
    highlights: [
      "Criador do Método CIS — Coaching Integral Sistêmico",
      "Master Coach, PhD em Business Administration (FCU)",
      "Autor best-seller, com milhões de livros vendidos — destaque para O Poder da Ação",
    ],
  },
  {
    name: "Camila Vieira",
    role: "Vice-presidente",
    highlights: [
      "Especialista em negócios e referência em desenvolvimento humano",
      "Autora best-seller",
      "Criadora do movimento EVA, Mulheres Experience, Jornada Plenitude e Conferência Plenitude",
    ],
  },
];

export type FactCard = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export const FACTS: FactCard[] = [
  { icon: Users2, label: "Pessoas impactadas", value: "+70 milhões" },
  { icon: Globe2, label: "Presença", value: "3 continentes" },
  { icon: Flag, label: "Unidades", value: "+30 franquias" },
  { icon: Award, label: "Certificação", value: "Florida Christian University" },
];

export const MISSION =
  "Transformar pessoas, formar líderes de alta performance, ensinando gestão de classe mundial e tornar negócios exponenciais, construindo um mundo extraordinário e abundante.";

export const VISION =
  "Ser reconhecida como a maior e melhor escola de negócios e desenvolvimento humano do Brasil, com atuação internacional em 10 países e 4 continentes até 2026.";

export const VALUES: string[] = [
  "Crescimento é obrigação",
  "Integridade inquestionável",
  "Resultado com consciência",
  "Cultura de dono",
  "Excelência visível",
  "Meritocracia justa",
  "Verdade radical",
  "Sustentabilidade financeira",
  "Desenvolvimento contínuo",
  "Contribuição estratégica",
];

export const LEIS_AUTORRESPONSABILIDADE: string[] = [
  "Se é para criticar os outros, cale-se;",
  "Se é pra reclamar, dê sugestão;",
  "Se é para buscar culpados, busque solução;",
  "Se é para se fazer de vítima, faça-se de vencedor;",
  "Se é para justificar seus erros, aprenda com eles;",
  "Se é para julgar as pessoas, julgue suas atitudes;",
  "Se for para se irritar, seja paciente e compreenda o todo.",
];

export const CHAVES_EXCELENCIA: string[] = [
  "Tudo é problema de todo mundo.",
  "Amar feedback.",
  "Informar à Diretoria tudo o que atinge a excelência da empresa.",
  "Prover soluções.",
  "Entregamos o Extraordinário.",
  "Velocidade nos processos e soluções.",
  "Intensificar a comunicação.",
  "Nível de expectativa elevado sobre nós e sobre a equipe.",
  "Praticamos a verdade nua e crua.",
  "Somos e continuamos sendo os melhores em tudo que fazemos.",
  "Somos uma empresa de tecnologia.",
  "Somos íntegros e honestos acima de tudo.",
  "Prometemos, cumprimos.",
  "Gestão acima de tudo.",
];

export type EcosystemLevel = {
  title: string;
  caption: string;
};

export const ECOSYSTEM_LEVELS: EcosystemLevel[] = [
  { title: "Holding Febracis", caption: "A empresa-mãe" },
  { title: "Franquias", caption: "Centros de impacto local" },
  { title: "Clientes e Participantes", caption: "O impacto final" },
];

export type EcosystemBlock = {
  title: string;
  intro: string;
  points: { label: string; text: string }[];
};

export const ECOSYSTEM_BLOCKS: EcosystemBlock[] = [
  {
    title: "A Holding: o cérebro do negócio",
    intro:
      "A Holding funciona como a empresa-mãe e concentra a gestão estratégica das diferentes frentes da Febracis.",
    points: [
      {
        label: "Centraliza estratégias",
        text: "define e direciona áreas importantes para o funcionamento do grupo.",
      },
      {
        label: "Guarda a metodologia",
        text: "concentra e protege as metodologias e propriedades intelectuais da companhia.",
      },
      {
        label: "Cria novos produtos",
        text: "participa do desenvolvimento de produtos, plataformas, ferramentas e materiais.",
      },
    ],
  },
  {
    title: "As Franquias: centros de impacto local",
    intro:
      "As franquias são unidades que levam a metodologia, os treinamentos e as experiências da Febracis para diferentes regiões.",
    points: [
      {
        label: "Replicação do modelo",
        text: "aplicam treinamentos, imersões e outras experiências da marca.",
      },
      {
        label: "Estrutura regional",
        text: "aproximam a Febracis dos participantes e empresas de cada região.",
      },
      {
        label: "Operação local",
        text: "realizam e comercializam produtos e treinamentos da Febracis em suas regiões.",
      },
    ],
  },
];
