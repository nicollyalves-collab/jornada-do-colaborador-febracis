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
    name: "EGD (Educação Global Diaria)",
    objective: [
      "Encontro entre times para aprendermos, nos comunicarmos com outros times e fortalecermos a cultura da empresa",    ],
    participants: "Pedagógico, SAC, Conteúdo e Mentoria",
    frequency: "Semanal",
    periodicity: "Todas as Terças",
    time: "10h as 10h30",
  },
  {
    id: "patria",
    name: "Pátria Febracis",
    objective: ["Ritual cultural de conexão com os valores e o propósito da empresa."],
    participants: "Time pedagógico/conteudo",
    frequency: "Semanal",
    periodicity: "Semanal",
    time: "No inicio das reuniões",
  },
  {
    id: "cumbuca",
    name: "Cumbuca",
    objective: [
      "Estudo coletivo de conteúdos da empresa e desenvolvimento contínuo do time.",
    ],
    participants: "Pedagógico, SAC, Conteudo e Mentoria",
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
{
  id: "agenda-notion",
  name: "Agenda do Notion",
  objective: [
    "Registrar a semana seguinte na agenda dentro do Notion",
  ],
  participants: "Time pedagógico",
  frequency: "Semanal",
  periodicity: "Todas as Sextas",
  time: "Até o final do expediente",
},
];