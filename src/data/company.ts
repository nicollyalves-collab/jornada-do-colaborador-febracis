import { Flag, Globe2, Users2, Award, type LucideIcon } from "lucide-react";

export type TimelineEntry = {
  year: string;
  title: string;
  text: string;
};

export const TIMELINE: TimelineEntry[] = [
  {
    year: "1998",
    title: "Instituto Paulo Vieira",
    text: "Nasce o instituto que dá origem à história da companhia, com foco em desenvolvimento humano.",
  },
  {
    year: "2009",
    title: "Nasce a Febracis",
    text: "O instituto passa a se chamar Febracis, reforçando o compromisso com resultados e responsabilidade.",
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
      "Criadora de um dos maiores movimentos de mulheres do Brasil",
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

export const CULTURE_STATEMENTS = [
  {
    title: "Missão",
    text: "Transformar vidas por meio do desenvolvimento humano, levando método, ação e resultado a pessoas e organizações.",
  },
  {
    title: "Visão",
    text: "Ser reconhecida como a maior e melhor escola de negócios da América Latina, com presença global.",
  },
  {
    title: "Valores",
    text: "Autorresponsabilidade, excelência, respeito, meritocracia, entrega de resultado e evolução contínua.",
  },
];

/**
 * Galeria de cultura — as artes oficiais (14 Chaves da Excelência,
 * 7 Leis da Autorresponsabilidade, Missão/Visão/Valores) devem ser
 * adicionadas aqui em `image` quando fornecidas pelo usuário.
 */
export type CultureGalleryItem = {
  id: string;
  title: string;
  group: "Institucional" | "14 Chaves da Excelência" | "7 Leis da Autorresponsabilidade";
  summary: string;
  image?: string;
};

export const CULTURE_GALLERY: CultureGalleryItem[] = [
  {
    id: "mvv",
    title: "Missão, Visão e Valores",
    group: "Institucional",
    summary: "O direcionamento que orienta cada decisão dentro da Holding Febracis.",
  },
  {
    id: "chaves",
    title: "14 Chaves da Excelência",
    group: "14 Chaves da Excelência",
    summary: "Princípios de comportamento e performance que sustentam a cultura de excelência.",
  },
  {
    id: "leis",
    title: "7 Leis da Autorresponsabilidade",
    group: "7 Leis da Autorresponsabilidade",
    summary: "A base do Método CIS: assumir o controle dos próprios resultados.",
  },
];
