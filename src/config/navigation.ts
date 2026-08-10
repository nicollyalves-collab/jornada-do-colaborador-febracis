import {
  Home,
  Building2,
  Target,
  Users,
  CalendarDays,
  Wrench,
  BookOpen,
  PhoneCall,
  Rocket,
  Link2,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  to: string;
  icon: LucideIcon;
  description: string;
};

export const NAV_ITEMS: NavItem[] = [
  { title: "Início", to: "/", icon: Home, description: "Visão geral do onboarding" },
  {
    title: "Conheça a Febracis",
    to: "/febracis",
    icon: Building2,
    description: "História, fundadores e treinamentos",
  },
  {
    title: "Nossa Cultura",
    to: "/cultura",
    icon: Target,
    description: "Missão, visão, valores, 14 Chaves e 7 Leis",
  },
  { title: "Nosso Time", to: "/time", icon: Users, description: "Quem é quem no Pedagógico" },
  {
    title: "Rotinas",
    to: "/rotinas",
    icon: CalendarDays,
    description: "EGD, Pátria, Cumbuca e Reunião de Pulso",
  },
  {
    title: "Ferramentas",
    to: "/ferramentas",
    icon: Wrench,
    description: "Central de acessos do setor",
  },
  { title: "Processos", to: "/processos", icon: BookOpen, description: "POPs e procedimentos" },
  {
    title: "Atendimento às Franquias",
    to: "/atendimento",
    icon: PhoneCall,
    description: "Horários, fluxo e boas práticas",
  },
  {
    title: "Primeiro Dia",
    to: "/primeiro-dia",
    icon: Rocket,
    description: "Checklist de onboarding",
  },
  {
    title: "Central de Recursos",
    to: "/recursos",
    icon: Link2,
    description: "Biblioteca de documentos e links",
  },
];

export const NAV_TITLES: Record<string, string> = Object.fromEntries(
  NAV_ITEMS.map((i) => [i.to, i.title]),
);
