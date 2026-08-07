export type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
  responsibilities: string[];
  whenToLookFor: string;
};

/**
 * Conteúdo provisório: substituir pelos dados do material interno do
 * Time Pedagógico (fotos, nomes, cargos e responsabilidades).
 */
export const TEAM: TeamMember[] = [
  {
    id: "coordenacao",
    name: "Coordenação Pedagógica",
    role: "Coordenação do setor",
    initials: "CP",
    responsibilities: [
      "Direcionamento estratégico do setor Pedagógico",
      "Aprovação de materiais e trilhas de formação",
      "Interface com o Time Camila e demais diretorias",
    ],
    whenToLookFor: "Decisões estratégicas, aprovações e escalonamento de demandas críticas.",
  },
  {
    id: "conteudo",
    name: "Analista de Conteúdo",
    role: "Conteúdo e materiais",
    initials: "AC",
    responsibilities: [
      "Produção e revisão de materiais didáticos",
      "Padronização de apostilas e slides",
      "Atualização de conteúdos no CIS Educa",
    ],
    whenToLookFor: "Dúvidas sobre materiais, apostilas, revisões e versões de conteúdo.",
  },
  {
    id: "formacoes",
    name: "Analista de Formações",
    role: "Formações e turmas",
    initials: "AF",
    responsibilities: [
      "Abertura e acompanhamento de turmas",
      "Controle de cronogramas de formação",
      "Suporte a instrutores e facilitadores",
    ],
    whenToLookFor: "Calendário de turmas, cronogramas e status de formações.",
  },
  {
    id: "franquias",
    name: "Atendimento às Franquias",
    role: "Relacionamento com franquias",
    initials: "AF",
    responsibilities: [
      "Atendimento via canal Avalon",
      "Orientação pedagógica às unidades",
      "Encaminhamento de demandas ao setor responsável",
    ],
    whenToLookFor: "Demandas vindas de franquias e dúvidas sobre o fluxo de atendimento.",
  },
  {
    id: "processos",
    name: "Analista de Processos",
    role: "Processos e qualidade",
    initials: "AP",
    responsibilities: [
      "Mapeamento e documentação de POPs",
      "Melhoria contínua dos fluxos internos",
      "Governança do Drive Pedagógico",
    ],
    whenToLookFor: "Como executar um processo, onde encontrar um POP ou propor melhorias.",
  },
  {
    id: "projetos",
    name: "Analista de Projetos",
    role: "Projetos pedagógicos",
    initials: "AP",
    responsibilities: [
      "Condução de projetos do setor",
      "Acompanhamento de prazos e entregas",
      "Reportes em Gestão e Reunião de Pulso",
    ],
    whenToLookFor: "Status de projetos, prazos e priorização de entregas.",
  },
];
