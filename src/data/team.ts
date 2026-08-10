export type TeamGroup = {
  title: string;
  items: string[];
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
  fronts: string[];
  groups: TeamGroup[];
};

export const TEAM: TeamMember[] = [
  {
    id: "kauane-ribeiro",
    name: "Kauane Ribeiro",
    role: "Assistente Pedagógica",
    initials: "KR",
    fronts: [
      "Processos Pedagógicos",
      "Sistemas",
      "Team Coaching Life",
      "Processos Administrativos",
      "Suporte ao Franqueado",
    ],
    groups: [
      {
        title: "Processos Pedagógicos",
        items: ["Processo seletivo, análise de vídeo, contratos e distratos de treinadores"],
      },
      {
        title: "Sistemas",
        items: [
          "Criação de produtos e turmas no Salesforce",
          "Aprovação e validação de turmas (GLPI)",
          "Programação mensal e semestral",
          "Aprovação de membros da comunidade do app IEX",
          "Liberação de ministrantes",
          "Solicitação de carteirinhas e certificados",
          "Aberturas de GLPI da coordenação",
          "Acompanhamento e atribuição de chamados via GLPI",
        ],
      },
      {
        title: "Team Coaching Life",
        items: [
          "Gestão da turma de edições anteriores e atual",
          "Grupos de WhatsApp",
          "Links do Zoom",
          "Seleção de treinadores",
          "Relatórios",
        ],
      },
      {
        title: "Processos Administrativos",
        items: [
          "Disparos via e-mail marketing e Avalon",
          "Controle de qualidade",
          "Monitoramento de atendimentos",
          "Aplicação de não conformidades",
          "Gestão Zoom e criação de reuniões",
          "Ajustes e controle das gravações em Drive",
          "Gestão Notion",
          "Tratamento de ponto do time",
        ],
      },
      {
        title: "Suporte ao Franqueado",
        items: ["Atendimento integral à equipe pedagógica das franquias"],
      },
    ],
  },
  {
    id: "nayana-lima",
    name: "Nayana Lima",
    role: "Assistente Pedagógica",
    initials: "NL",
    fronts: [
      "Entrega de Bônus",
      "Guardião do PDE",
      "Processos Pedagógicos",
      "Suporte ao Franqueado",
    ],
    groups: [
      { title: "Entrega de Bônus", items: ["Gestão de bônus físicos e digitais"] },
      {
        title: "Guardião do PDE",
        items: [
          "Gestão de entregas",
          "Reuniões de Onboarding com Black Belts",
          "Controle de empresas, participantes e entregas",
          "Jornada do participante",
          "Indicadores",
        ],
      },
      {
        title: "Processos Pedagógicos",
        items: [
          "Gestão do processo de TCC",
          "Aprovação e reprovação de alunos",
          "Liberação de prorrogação de acesso após pagamento da taxa",
          "Criação de turmas na plataforma Curseduca",
          "Gestão do processo dos alunos da decisão",
          "Realização de matrículas",
          "Aprovação de pedidos das franquias",
          "Atualização LP",
          "Comunicação com alunos",
          "Certificados em geral",
          "Onboarding — Atividades Pedagógicas",
          "Aulas Internacionais",
        ],
      },
      {
        title: "Suporte ao Franqueado",
        items: ["Atendimento integral à equipe pedagógica das franquias"],
      },
    ],
  },
  {
    id: "luana-santana",
    name: "Luana Santana",
    role: "Assistente Pedagógica Pleno",
    initials: "LS",
    fronts: [
      "Transferências de Cursos Holding",
      "Guardião Método CIS",
      "Credenciamento",
      "Suporte ao Franqueado",
    ],
    groups: [
      {
        title: "Transferências de Cursos Holding",
        items: ["Gestão completa de transferências: turma, titularidade e modalidade"],
      },
      {
        title: "Guardião Método CIS",
        items: [
          "Checklist geral",
          "Certificados Método CIS",
          "Criação de matrículas de todas as áreas da empresa",
          "Credenciamento do evento",
        ],
      },
      {
        title: "Credenciamento",
        items: ["Responsável pelo credenciamento de todos os cursos realizados na Holding"],
      },
      {
        title: "Suporte ao Franqueado",
        items: ["Atendimento integral à equipe pedagógica das franquias"],
      },
    ],
  },
  {
    id: "barbara-barbosa",
    name: "Bárbara Barbosa",
    role: "Assistente Pedagógica",
    initials: "BB",
    fronts: [
      "Suporte aos Treinadores",
      "Universidade de Treinadores e Pedagógica",
      "Processos Financeiros e Pedagógico",
      "Analista de Conteúdos Pedagógico",
    ],
    groups: [
      {
        title: "Suporte aos Treinadores",
        items: [
          "Gestão da plataforma Universidade dos Treinadores",
          "Subir vídeos e materiais",
          "Adicionar e remover membros",
          "Ajustes",
          "Dúvidas sobre pagamentos",
        ],
      },
      {
        title: "Universidade de Treinadores e Pedagógica",
        items: [
          "Onboarding dos treinadores",
          "Alinhamento estratégico",
          "Definição e curadoria de temas em conjunto com o time de conteúdo",
          "Estruturação e gestão do cronograma dos encontros",
          "Acompanhamento e organização dos encontros",
          "Solicitação de material pós-entregas",
          "Resumos e ferramentas",
          "Criação de pesquisas de satisfação",
          "Criação da ATA",
          "Auditoria de participação pós-treinamento",
        ],
      },
      {
        title: "Processos Financeiros e Pedagógico",
        items: [
          "Solicitação de pagamentos dos treinadores",
          "Abertura de Fluigs",
          "Aprovação de centro de custo conforme cada treinamento",
          "Solicitação de autorização de pagamento",
          "Solicitação de emissão de Nota Fiscal aos treinadores",
          "Conferência e lançamento de Notas Fiscais junto ao fiscal",
          "Acompanhamento do fluxo de pagamento",
        ],
      },
      {
        title: "Analista de Conteúdos Pedagógico",
        items: [
          "Curadoria dos processos e materiais",
          "Solicitação e compartilhamento da Newsletter pedagógica",
        ],
      },
    ],
  },
  {
    id: "nicoly-alves",
    name: "Nicoly Alves",
    role: "Assistente Pedagógica",
    initials: "NA",
    fronts: [
      "Gestão de plataformas",
      "Processo Pedagógico",
      "SME — Subject Matter Expert",
      "Suporte ao Franqueado",
    ],
    groups: [
      {
        title: "Gestão de plataformas",
        items: [
          "Criação de interface de plataformas",
          "Upload de vídeos e conteúdos em múltiplas plataformas (KOPA, Vimeo, EAD, Curseduca, Videoteca)",
          "Gestão da videoteca",
        ],
      },
      {
        title: "Processo Pedagógico",
        items: ["Gestão de calendário global (planilha e site)"],
      },
      {
        title: "SME — Subject Matter Expert",
        items: [
          "Fornecer orientação, esclarecer dúvidas e garantir que processos, soluções ou projetos estejam alinhados com as melhores práticas e padrões da área de SAC CX",
        ],
      },
      {
        title: "Suporte ao Franqueado",
        items: ["Atendimento integral à equipe pedagógica das franquias"],
      },
    ],
  },
];
