import {
  GraduationCap,
  BarChart3,
  LifeBuoy,
  FolderOpen,
  BookMarked,
  KanbanSquare,
  Gauge,
  ListChecks,
  ShieldCheck,
  KeyRound,
  FileSignature,
  FileMinus,
  MessageCircle,
  FileSpreadsheet,
  type LucideIcon,
} from "lucide-react";

export type Tool = {
  id: string;
  name: string;
  description?: string;
  icon: LucideIcon;
  category: string;
  url?: string;
};

export const TOOL_CATEGORIES = [
  "Sistemas",
  "Documentos e Gestão",
  "Modelos e Contratos",
  "Suporte",
] as const;

export const TOOLS: Tool[] = [
  {
    id: "cis-educa",
    name: "CIS Educa",
    description: "Plataforma de ensino e gestão de alunos.",
    icon: GraduationCap,
    category: "Sistemas",
    url: "https://ciseduca.curseduca.pro/admin/members/members?situation=ACTIVE&period=30d&startLastAccess=2026-07-08&endLastAccess=2026-08-07&title=nico",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "CRM corporativo da Holding.",
    icon: BarChart3,
    category: "Sistemas",
    url: "https://febracis.lightning.force.com/lightning/page/home",
  },
  {
    id: "glpi",
    name: "GLPI",
    description: "Abertura e acompanhamento de chamados.",
    icon: LifeBuoy,
    category: "Sistemas",
    url: "https://tickets.febra.site/index.php?redirect=%2Ffront%2Fhelpdesk.public.php&error=3",
  },
  {
    id: "manual",
    name: "Manual do Pedagógico",
    description: "Guia de referência do setor.",
    icon: BookMarked,
    category: "Documentos e Gestão",
    url: "https://docs.google.com/document/d/1iY4g0IRRg67oyOPWZobIJZetrdyRlOe4/edit?usp=sharing&ouid=108623991715359923490&rtpof=true&sd=true",
  },
  {
    id: "projetos",
    name: "Projetos Pedagógico",
    description: "Acompanhamento dos projetos do setor.",
    icon: KanbanSquare,
    category: "Documentos e Gestão",
    url: "https://docs.google.com/spreadsheets/d/1PHIBj8ppypO6rb7uGxqhqm5Pw5TJaOxoHhK9Y8qfrT4/edit?gid=0#gid=0",
  },
  {
    id: "gestao-pulso",
    name: "Gestão — Reunião de Pulso",
    description: "Planilha de gestão do Time Pedagógico.",
    icon: Gauge,
    category: "Documentos e Gestão",
    url: "https://docs.google.com/spreadsheets/d/1DEQvD56_5HwYA1TTKP-ArRMDgKHBrCrcGW4lWLWAqGw/edit?gid=1515471643#gid=1515471643",
  },
  {
    id: "pautas",
    name: "Pautas da Semana",
    description: "Pautas semanais do Pedagógico.",
    icon: ListChecks,
    category: "Documentos e Gestão",
    url: "https://docs.google.com/spreadsheets/d/1ODO7c_uNTjWA0WJoBD6fDlWxPf-pwARPhV3947B1_7Y/edit?usp=sharing",
  },
  {
    id: "controle-interno",
    name: "Controle Interno — Horas extras, folgas e férias",
    description: "Time Gabriela Alencar.",
    icon: ShieldCheck,
    category: "Documentos e Gestão",
    url: "https://docs.google.com/document/d/1onCQ2zzTJRfZc-tf5WceOq3war0oxquTtW8dFEj4dQ8/edit?tab=t.jbdboxid8tqm",
  },
  {
    id: "atribuicoes",
    name: "Atribuições Pedagógico",
    description: "Documento com as atribuições do time.",
    icon: FileSpreadsheet,
    category: "Documentos e Gestão",
    url: "https://gamma.app/docs/Time-Pedagogico-Holding-be4wfkj2i4e4ppk?mode=doc",
  },
  {
    id: "drive",
    name: "Drive Pedagógico",
    description: "Repositório central de materiais.",
    icon: FolderOpen,
    category: "Documentos e Gestão",
    url: "https://drive.google.com/drive/folders/1KBb4Y5xlTUxbZGvTHgou-CMxsyJBxczt",
  },
  {
    id: "senhas",
    name: "Senhas Pedagógico",
    description: "Planilha externa restrita a usuários autorizados.",
    icon: KeyRound,
    category: "Documentos e Gestão",
    url: "https://docs.google.com/spreadsheets/d/1uuYrOlnmUKf6cHhsZL1HC3YM0GI4DrJ2z4hEDfLoRhU/edit?pli=1&gid=1873865703#gid=1873865703",
  },
  {
    id: "contrato-treinador",
    name: "Modelo de contrato — franquia e treinador",
    icon: FileSignature,
    category: "Modelos e Contratos",
    url: "https://docs.google.com/document/d/1kI0YO1NhC_vfiPsR4oONLDT0cAegNd_r/edit?usp=sharing&ouid=108623991715359923490&rtpof=true&sd=true",
  },
  {
    id: "distrato",
    name: "Modelo de distrato — rescisão de contrato",
    icon: FileMinus,
    category: "Modelos e Contratos",
    url: "https://docs.google.com/document/d/1X9DUrpKe9aKH6b-k63LGdxXf75fgfU5i/edit?usp=sharing&ouid=108623991715359923490&rtpof=true&sd=true",
  },
  {
    id: "suporte-pedagogico",
    name: "Suporte Pedagógico",
    description: "Atendimento via WhatsApp.",
    icon: MessageCircle,
    category: "Suporte",
    url: "https://api.whatsapp.com/send/?phone=5511910351468",
  },
];
