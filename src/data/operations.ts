export type Routine = {
  id: string;
  name: string;
  objective: string;
  participants: string;
  frequency: string;
  time: string;
};

export const ROUTINES: Routine[] = [
  {
    id: "egd",
    name: "EGD",
    objective: "Encontro de gestão e direcionamento com alinhamento de prioridades da Holding.",
    participants: "Lideranças e representantes dos setores",
    frequency: "Semanal",
    time: "A confirmar com a liderança",
  },
  {
    id: "patria",
    name: "Pátria Febracis",
    objective: "Ritual cultural de conexão com os valores e o propósito da empresa.",
    participants: "Todos os colaboradores",
    frequency: "Semanal",
    time: "Início do expediente",
  },
  {
    id: "cumbuca",
    name: "Cumbuca",
    objective: "Estudo coletivo de conteúdos e desenvolvimento contínuo do time.",
    participants: "Time Pedagógico",
    frequency: "Semanal",
    time: "A confirmar com a liderança",
  },
  {
    id: "pulso",
    name: "Reunião de Pulso",
    objective: "Checagem de andamento de demandas, bloqueios e prioridades da semana.",
    participants: "Time Pedagógico",
    frequency: "Semanal",
    time: "A confirmar com a liderança",
  },
];

export type ResourceItem = {
  id: string;
  name: string;
  description: string;
  category: ResourceCategory;
  url?: string;
};

export type ResourceCategory =
  | "Ferramentas"
  | "Planilhas"
  | "POP's"
  | "Documentos"
  | "Contratos"
  | "Projetos"
  | "Manuais";

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  "Ferramentas",
  "Planilhas",
  "POP's",
  "Documentos",
  "Contratos",
  "Projetos",
  "Manuais",
];

export const RESOURCES: ResourceItem[] = [
  {
    id: "r-cis",
    name: "CIS Educa",
    description: "Acesso à plataforma de ensino.",
    category: "Ferramentas",
  },
  {
    id: "r-avalon",
    name: "Avalon",
    description: "Canal de atendimento às franquias.",
    category: "Ferramentas",
  },
  {
    id: "r-glpi",
    name: "GLPI",
    description: "Suporte e chamados internos.",
    category: "Ferramentas",
  },
  {
    id: "r-controle",
    name: "Controle Interno",
    description: "Planilha mestre de acompanhamento de demandas.",
    category: "Planilhas",
  },
  {
    id: "r-cronograma",
    name: "Cronograma de Formações",
    description: "Planilha com turmas e datas.",
    category: "Planilhas",
  },
  {
    id: "r-pop-turma",
    name: "POP — Abertura de Turma",
    description: "Procedimento operacional padrão.",
    category: "POP's",
  },
  {
    id: "r-pop-atendimento",
    name: "POP — Atendimento à Franquia",
    description: "Procedimento operacional padrão.",
    category: "POP's",
  },
  {
    id: "r-organograma",
    name: "Organograma do Pedagógico",
    description: "Estrutura do setor e responsáveis.",
    category: "Documentos",
  },
  {
    id: "r-politicas",
    name: "Políticas Internas",
    description: "Diretrizes de conduta e operação.",
    category: "Documentos",
  },
  {
    id: "r-modelos-contrato",
    name: "Modelos de Contrato",
    description: "Templates aprovados pelo jurídico.",
    category: "Contratos",
  },
  {
    id: "r-distratos",
    name: "Fluxo de Distratos",
    description: "Documentação e etapas do processo.",
    category: "Contratos",
  },
  {
    id: "r-projetos",
    name: "Quadro de Projetos",
    description: "Projetos ativos do setor.",
    category: "Projetos",
  },
  {
    id: "r-manual-ped",
    name: "Manual do Pedagógico",
    description: "Guia completo de diretrizes do setor.",
    category: "Manuais",
  },
  {
    id: "r-manual-sistemas",
    name: "Manual de Sistemas",
    description: "Como acessar e usar cada ferramenta.",
    category: "Manuais",
  },
];
