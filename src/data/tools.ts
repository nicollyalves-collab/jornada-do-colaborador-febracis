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
  Headphones,
  type LucideIcon,
} from "lucide-react";

export type Tool = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
  url?: string;
};

/** Links serão inseridos posteriormente (url: undefined = "em breve"). */
export const TOOLS: Tool[] = [
  {
    id: "cis-educa",
    name: "CIS Educa",
    description: "Plataforma de ensino e gestão das trilhas de formação.",
    icon: GraduationCap,
    category: "Plataformas",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "CRM corporativo para acompanhamento de clientes e franquias.",
    icon: BarChart3,
    category: "Plataformas",
  },
  {
    id: "glpi",
    name: "GLPI",
    description: "Abertura e acompanhamento de tickets de suporte interno.",
    icon: LifeBuoy,
    category: "Suporte",
  },
  {
    id: "avalon",
    name: "Avalon",
    description: "Canal oficial de atendimento às franquias.",
    icon: Headphones,
    category: "Suporte",
  },
  {
    id: "drive",
    name: "Drive Pedagógico",
    description: "Repositório central de materiais, planilhas e documentos.",
    icon: FolderOpen,
    category: "Documentos",
  },
  {
    id: "manual",
    name: "Manual do Pedagógico",
    description: "Guia de referência com diretrizes e padrões do setor.",
    icon: BookMarked,
    category: "Documentos",
  },
  {
    id: "projetos",
    name: "Projetos",
    description: "Quadro de projetos em andamento do setor Pedagógico.",
    icon: KanbanSquare,
    category: "Gestão",
  },
  {
    id: "gestao",
    name: "Gestão",
    description: "Painel de indicadores e acompanhamento de resultados.",
    icon: Gauge,
    category: "Gestão",
  },
  {
    id: "pautas",
    name: "Pautas",
    description: "Pautas e atas das reuniões recorrentes do time.",
    icon: ListChecks,
    category: "Gestão",
  },
  {
    id: "controle-interno",
    name: "Controle Interno",
    description: "Controles operacionais e acompanhamento de demandas.",
    icon: ShieldCheck,
    category: "Gestão",
  },
  {
    id: "senhas",
    name: "Senhas",
    description: "Cofre de acessos compartilhados do setor.",
    icon: KeyRound,
    category: "Acessos",
  },
  {
    id: "contratos",
    name: "Contratos",
    description: "Base de contratos ativos e modelos padrão.",
    icon: FileSignature,
    category: "Jurídico",
  },
  {
    id: "distratos",
    name: "Distratos",
    description: "Fluxo e documentação de distratos.",
    icon: FileMinus,
    category: "Jurídico",
  },
];

export const TOOL_CATEGORIES = Array.from(new Set(TOOLS.map((t) => t.category)));
