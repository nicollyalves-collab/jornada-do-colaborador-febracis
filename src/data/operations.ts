export type Routine = {
  id: string;
  name: string;
  objective: string[];
  participants: string;
  frequency: string;
  periodicity: string;
  time: string;
};

export const ROUTINES: Routine[] = [
  {
    id: "egd",
    name: "EGD (Educação Gloval Diaria)",
    objective: [
      "Encontro entre times para aprendermos, nos comunicarmos com outros times e fortalecermos a cultura da empresa",
      "Encontro de gestão e direcionamento com alinhamento de prioridades da Holding.",
    ],
    participants: "Setores Pedagogico, SAC, Conteudo e Mentoria",
    frequency: "Semanal",
    periodicity: "Todas as Quintas",
    time: "10h as 10h30",
  },
  {
    id: "patria",
    name: "Pátria Febracis",
    objective: ["Ritual cultural de conexão com os valores e o propósito da empresa."],
    participants: "Time pedagógico/conteudo",
    frequency: "Semanal",
    periodicity: "Semanal",
    time: "À definir",
  },
  {
    id: "cumbuca",
    name: "Cumbuca",
    objective: [
      "Estudo coletivo de conteúdos da empresa e desenvolvimento contínuo do time.",
    ],
    participants: "Setores Pedagogico, SAC, Conteudo e Mentoria",
    frequency: "Semanal",
    periodicity: "Quartas-feiras",
    time: "14h ás 15h",
  },
  {
    id: "pulso",
    name: "Reunião de Pulso",
    objective: [
      "Alinhamento com o time, checagem de andamento de demandas, bloqueios e prioridades da semana.",
    ],
    participants: "Time Pedagógico",
    frequency: "Semanal",
    periodicity: "Segundas-feiras",
    time: "10h",
  },
];
