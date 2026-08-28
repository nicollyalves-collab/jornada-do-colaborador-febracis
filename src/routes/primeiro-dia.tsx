import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Target,
  Users,
  CalendarDays,
  Wrench,
  PhoneCall,
  Info,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/primeiro-dia")({
  head: () => ({
    meta: [
  { title: "Conclusão da Jornada | Jornada do Colaborador" },
  {
    name: "description",
    content:
      "Avaliação final da Jornada do Colaborador, reunindo os principais conteúdos estudados ao longo do onboarding.",
  },
  {
    property: "og:title",
    content: "Conclusão da Jornada — Avaliação Final",
  },
  {
    property: "og:description",
    content:
      "Teste seus conhecimentos e conclua sua Jornada do Colaborador com aproveitamento mínimo de 80%.",
  },
],
  }),
  component: PrimeiroDiaPage,
});

const STEPS = [
  {
    to: "/febracis",
    icon: Building2,
    title: "Conheça a Febracis e seu ecossistema",
    text: "História, fundadores, principais treinamentos e a estrutura Holding, Franquias e Clientes.",
  },
  {
    to: "/cultura",
    icon: Target,
    title: "Conheça a cultura da empresa",
    text: "Missão, visão, valores, as 7 Leis da Autorresponsabilidade e as 14 Chaves da Excelência.",
  },
  {
    to: "/time",
    icon: Users,
    title: "Conheça o time",
    text: "Quem é quem no Pedagógico e as atribuições de cada integrante, para saber quem procurar em cada assunto.",
  },
  {
    to: "/rotinas",
    icon: CalendarDays,
    title: "Conheça a rotina do setor",
    text: "EGD, Pátria Febracis, Cumbuca e Reunião de Pulso.",
  },
  {
    to: "/ferramentas",
    icon: Wrench,
    title: "Conheça as ferramentas",
    text: "Sistemas, documentos e gestão, modelos e contratos e canais de suporte.",
  },
  {
    to: "/atendimento",
    icon: PhoneCall,
    title: "Entenda o Atendimento às Franquias",
    text: "Horário, canal oficial, fluxo, boas práticas e o treinamento de padrão de comunicação.",
  },
] as const;


const QUESTIONS = [
  {
    question: "Em que ano o Instituto Paulo Vieira passou a se chamar Febracis?",
    options: ["1998", "2005", "2009", "2015"],
    answer: 2,
  },
  {
    question: "Qual alternativa representa corretamente o papel da Holding Febracis dentro do ecossistema?",
    options: [
      "Realizar exclusivamente o atendimento das franquias.",
      "Concentrar a gestão estratégica, proteger as metodologias e participar da criação de novos produtos.",
      "Atuar somente na comercialização dos treinamentos.",
      "Substituir as franquias no atendimento aos participantes.",
    ],
    answer: 1,
  },
  {
    question: "Qual é a missão apresentada na cultura Febracis?",
    options: [
      "Ser a maior empresa de tecnologia educacional da América Latina.",
      "Expandir franquias para todos os continentes.",
      "Transformar pessoas, formar líderes de alta performance, ensinar gestão de classe mundial e tornar negócios exponenciais, construindo um mundo extraordinário e abundante.",
      "Formar exclusivamente empresários e gestores.",
    ],
    answer: 2,
  },
  {
    question: "De acordo com as 7 Leis da Autorresponsabilidade, se é para buscar culpados, o que devemos fazer?",
    options: [
      "Identificar quem provocou o problema.",
      "Comunicar imediatamente à Diretoria.",
      "Buscar solução.",
      "Aguardar orientação do gestor.",
    ],
    answer: 2,
  },
  {
    question: "Qual destas opções faz parte das 14 Chaves da Excelência?",
    options: [
      "Evitar feedback para reduzir conflitos.",
      "Prometemos, cumprimos.",
      "Problemas devem ser tratados somente pelos gestores.",
      "Resultados são mais importantes que integridade.",
    ],
    answer: 1,
  },
  {
    question: "A EGD — Educação Global Diária — acontece em qual periodicidade e horário?",
    options: [
      "Segunda-feira, às 10h.",
      "Todas as terças, das 10h às 10h30.",
      "Quarta-feira, das 14h às 15h.",
      "Sexta-feira, até o final do expediente.",
    ],
    answer: 1,
  },
  {
    question: "Qual é o objetivo da Agenda do Notion?",
    options: [
      "Registrar as atividades realizadas durante a semana.",
      "Registrar apenas reuniões com as franquias.",
      "Registrar a semana seguinte na agenda dentro do Notion.",
      "Controlar exclusivamente os atendimentos realizados pelo Avalon.",
    ],
    answer: 2,
  },
  {
    question: "Qual é o canal oficial para atendimento às franquias e por que ele deve ser utilizado?",
    options: [
      "WhatsApp, para tornar o atendimento mais rápido.",
      "Notion, porque substitui o registro interno.",
      "E-mail, para centralizar os documentos.",
      "Avalon, para garantir histórico e rastreabilidade dos atendimentos.",
    ],
    answer: 3,
  },
  {
    question: "Qual é a sequência correta do fluxo de atendimento às franquias?",
    options: [
      "Recebimento → Resposta → Triagem → Registro → Encaminhamento",
      "Triagem → Recebimento → Encaminhamento → Registro → Resposta",
      "Recebimento → Triagem → Encaminhamento → Resposta → Registro",
      "Recebimento → Encaminhamento → Triagem → Registro → Resposta",
    ],
    answer: 2,
  },
  {
    question: "Uma demanda chegou pelo Avalon, mas não pertence ao setor Pedagógico. Qual atitude está mais alinhada às boas práticas?",
    options: [
      "Resolver a demanda mesmo assim para evitar transferência.",
      "Informar ao solicitante que o Pedagógico não poderá ajudar e encerrar.",
      "Encaminhar ao setor correto, mantendo o histórico e o registro da tratativa.",
      "Pedir que a pessoa envie novamente a solicitação por outro canal.",
    ],
    answer: 2,
  },
];
function PrimeiroDiaPage() {
const [answers, setAnswers] = useState<(number | null)[]>(
  Array(QUESTIONS.length).fill(null)
);
const [submitted, setSubmitted] = useState(false);
const [quizStarted, setQuizStarted] = useState(false);
useEffect(() => {
  if (!quizStarted || submitted) return;

  const blockNavigation = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const link = target.closest("a");

    if (link && !link.closest("[data-quiz-area='true']")) {
      event.preventDefault();
      event.stopPropagation();
      alert("Finalize a avaliação antes de acessar outras áreas.");
    }
  };

  document.addEventListener("click", blockNavigation, true);

  return () => {
    document.removeEventListener("click", blockNavigation, true);
  };
}, [quizStarted, submitted]);
const score = answers.filter(
  (answer, index) => answer === QUESTIONS[index]?.answer
).length;

const passed = score >= 8;
const selectAnswer = (questionIndex: number, optionIndex: number) => {
  if (submitted) return;

  setAnswers((current) =>
    current.map((answer, index) =>
      index === questionIndex ? optionIndex : answer
    )
  );
};
const finishQuiz = () => {
  if (answers.some((answer) => answer === null)) {
    alert("Responda todas as 10 perguntas antes de finalizar a avaliação.");
    return;
  }

sessionStorage.removeItem("quizInProgress");
setSubmitted(true);
};
const retryQuiz = () => {
  sessionStorage.setItem("quizInProgress", "true");
  setAnswers(Array(QUESTIONS.length).fill(null));
  setSubmitted(false);
};

  return (
    <div className="mx-auto max-w-4xl">
<PageHeader
  eyebrow="AVALIAÇÃO FINAL"
  title="Conclusão da Jornada"
  subtitle="Chegou a hora de consolidar o que você aprendeu ao longo da sua jornada de integração."
/>

<div
  data-quiz-area="true"
  className="mt-10 space-y-8"
>
  {!quizStarted ? (
    <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-8 text-center">
      <p className="font-display text-2xl font-semibold text-foreground">
        Pronto para começar?
      </p>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Ao iniciar, você entrará no modo de avaliação. Responda todas as 10 questões antes de finalizar.
      </p>

      <button
        type="button"
onClick={() => {
  sessionStorage.setItem("quizInProgress", "true");
  setQuizStarted(true);
}}
        className="mt-6 rounded-xl bg-gold px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
      >
        Iniciar avaliação
      </button>
    </div>
  ) : (
    <>
  <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
    <p className="font-display text-lg font-semibold text-foreground">
      Avaliação Final
    </p>

    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
      Responda às 10 questões abaixo. Para concluir a Jornada do Colaborador,
      é necessário atingir pelo menos 80% de aproveitamento.
    </p>
  </div>

  {QUESTIONS.map((item, questionIndex) => (
    <div
      key={questionIndex}
      className="glass rounded-2xl border border-border/70 p-6"
    >
      <div className="flex gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-sm font-semibold text-gold">
          {questionIndex + 1}
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="font-display text-base font-semibold leading-relaxed text-foreground">
            {item.question}
          </h2>

          <div className="mt-5 space-y-3">
            {item.options.map((option, optionIndex) => {
              const selected = answers[questionIndex] === optionIndex;

              return (
                <button
                  key={optionIndex}
                  type="button"
                  onClick={() => selectAnswer(questionIndex, optionIndex)}
                  disabled={submitted}
                  className={`w-full rounded-xl border p-4 text-left text-sm transition ${
                    selected
                      ? "border-gold/70 bg-gold/10 text-foreground"
                      : "border-border/70 bg-secondary/20 text-muted-foreground hover:border-gold/40 hover:text-foreground"
                  }`}
                >
                  <span className="mr-3 font-semibold text-gold">
                    {String.fromCharCode(65 + optionIndex)}.
                  </span>
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ))}

  {!submitted ? (
    <button
      type="button"
      onClick={finishQuiz}
      className="w-full rounded-xl bg-gold px-6 py-4 font-semibold text-primary-foreground transition hover:opacity-90"
    >
      Finalizar avaliação
    </button>
  ) : (
    <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-7 text-center">
      {passed ? (
        <>
          <p className="font-display text-2xl font-semibold text-foreground">
            Jornada concluída! 🎉
          </p>

          <p className="mt-3 text-muted-foreground">
            Parabéns! Você demonstrou domínio dos principais conteúdos da sua
            integração à Febracis.
          </p>
        </>
      ) : (
        <>
          <p className="font-display text-2xl font-semibold text-foreground">
            Vamos revisar alguns conteúdos.
          </p>

          <p className="mt-3 text-muted-foreground">
            Para concluir a jornada, é necessário atingir pelo menos 80% de
            aproveitamento.
          </p>
        </>
      )}

      <div className="mt-6">
        <p className="text-4xl font-bold text-gold">
          {score}/10
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          {score * 10}% de aproveitamento
        </p>

        <p className="mt-3 font-semibold text-foreground">
          Status: {passed ? "Aprovado" : "Revisão necessária"}
        </p>
      </div>

      {!passed && (
        <button
          type="button"
          onClick={retryQuiz}
          className="mt-6 rounded-xl border border-gold/40 bg-gold/10 px-6 py-3 font-semibold text-gold transition hover:bg-gold/20"
        >
          Refazer avaliação
        </button>
      )}
    </div>
    )}
    </>
  )}
</div>
</div>
  );
}
