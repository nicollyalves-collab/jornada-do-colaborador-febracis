import {
  Home,
  Building2,
  Target,
  Users,
  Handshake,
  CalendarDays,
  Wrench,
  BookOpen,
  PhoneCall,
  Rocket,
  Link2,
  type LucideIcon,
} from "lucide-react";
import type { JourneyStepId } from "@/lib/journey";

export type NavItem = {
  title: string;
  to: string;
  icon: LucideIcon;
  emoji: string;
  description: string;
  step?: JourneyStepId;
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Início",
    to: "/",
    icon: Home,
    emoji: "🏠",
    description: "Visão geral da sua jornada",
  },
  {
    title: "Conheça a Febracis",
    to: "/febracis",
    icon: Building2,
    emoji: "🏢",
    description: "História, fundadores e presença global",
    step: "febracis",
  },
  {
    title: "Nossa Cultura",
    to: "/cultura",
    icon: Target,
    emoji: "🎯",
    description: "Missão, visão, valores, 14 Chaves e 7 Leis",
    step: "cultura",
  },
  {
    title: "Nosso Time",
    to: "/time",
    icon: Users,
    emoji: "👥",
    description: "Quem é quem no Pedagógico",
    step: "time",
  },
  {
    title: "Como Trabalhamos",
    to: "/como-trabalhamos",
    icon: Handshake,
    emoji: "🤝",
    description: "Fluxo de relacionamento entre áreas",
  },
  {
    title: "Rotinas",
    to: "/rotinas",
    icon: CalendarDays,
    emoji: "📅",
    description: "EGD, Pátria, Cumbuca e Reunião de Pulso",
  },
  {
    title: "Ferramentas",
    to: "/ferramentas",
    icon: Wrench,
    emoji: "🛠",
    description: "Sistemas e acessos do dia a dia",
    step: "ferramentas",
  },
  {
    title: "Processos",
    to: "/processos",
    icon: BookOpen,
    emoji: "📚",
    description: "POPs e procedimentos do setor",
    step: "processos",
  },
  {
    title: "Atendimento às Franquias",
    to: "/atendimento",
    icon: PhoneCall,
    emoji: "📞",
    description: "Horários, fluxo e boas práticas",
  },
  {
    title: "Primeiro Dia",
    to: "/primeiro-dia",
    icon: Rocket,
    emoji: "🚀",
    description: "Checklist interativo de onboarding",
    step: "primeiro-dia",
  },
  {
    title: "Central de Recursos",
    to: "/recursos",
    icon: Link2,
    emoji: "🔗",
    description: "Biblioteca de documentos e links",
  },
];

export const NAV_TITLES: Record<string, string> = Object.fromEntries(
  NAV_ITEMS.map((i) => [i.to, i.title]),
);
