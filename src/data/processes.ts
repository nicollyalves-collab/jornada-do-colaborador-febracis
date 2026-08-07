export type Process = {
  id: string;
  name: string;
  description: string;
  owner: string;
  category: string;
  docUrl?: string;
};

/**
 * Estrutura preparada para receber dezenas de processos.
 * Basta adicionar novos objetos aqui e o card aparece automaticamente.
 * docUrl receberá o link do Google Docs posteriormente.
 */
export const PROCESSES: Process[] = [
  {
    id: "abertura-turma",
    name: "Abertura de Turma",
    description: "Passo a passo para criar, configurar e publicar uma nova turma.",
    owner: "Analista de Formações",
    category: "Formações",
  },
  {
    id: "solicitacao-material",
    name: "Solicitação de Material",
    description: "Como solicitar produção ou revisão de material didático.",
    owner: "Analista de Conteúdo",
    category: "Conteúdo",
  },
  {
    id: "atendimento-franquia",
    name: "Atendimento à Franquia",
    description: "Fluxo padrão de recebimento, triagem e resposta de demandas.",
    owner: "Atendimento às Franquias",
    category: "Franquias",
  },
  {
    id: "publicacao-cis-educa",
    name: "Publicação no CIS Educa",
    description: "Requisitos e etapas para publicar conteúdos na plataforma.",
    owner: "Analista de Conteúdo",
    category: "Plataformas",
  },
  {
    id: "abertura-ticket",
    name: "Abertura de Ticket no GLPI",
    description: "Quando e como registrar chamados de suporte interno.",
    owner: "Analista de Processos",
    category: "Suporte",
  },
  {
    id: "gestao-pautas",
    name: "Gestão de Pautas e Atas",
    description: "Preparação, condução e registro das reuniões do setor.",
    owner: "Coordenação Pedagógica",
    category: "Gestão",
  },
  {
    id: "controle-contratos",
    name: "Controle de Contratos",
    description: "Registro, acompanhamento e arquivamento de contratos.",
    owner: "Analista de Processos",
    category: "Jurídico",
  },
  {
    id: "organizacao-drive",
    name: "Organização do Drive Pedagógico",
    description: "Padrões de nomenclatura, pastas e versionamento.",
    owner: "Analista de Processos",
    category: "Documentos",
  },
];

export const PROCESS_CATEGORIES = Array.from(new Set(PROCESSES.map((p) => p.category)));
