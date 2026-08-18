import { createFileRoute, Link } from "@tanstack/react-router";
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
      { title: "Primeiro Dia | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "Orientação simples do primeiro dia no setor Pedagógico da Holding Febracis: o que conhecer primeiro e em qual ordem.",
      },
      { property: "og:title", content: "Primeiro Dia — Onboarding Pedagógico" },
      {
        property: "og:description",
        content: "O caminho recomendado para começar bem no Time Pedagógico.",
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

function PrimeiroDiaPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Onboarding"
        title="Primeiro Dia"
        subtitle="Uma orientação simples sobre o que conhecer primeiro no setor Pedagógico."
      />

      <div className="space-y-4">
        {STEPS.map((step, i) => (
          <Link
            key={step.to}
            to={step.to}
            className="card-lift reveal group glass flex items-start gap-5 rounded-2xl p-6"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-gold/30 bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
              <step.icon className="size-5 text-gold" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-semibold text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-base font-semibold">{step.title}</h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
            <ArrowRight className="mt-3 size-4 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ))}
      </div>

      <div className="mt-10 flex items-start gap-4 rounded-2xl border border-gold/30 bg-gold/[0.08] p-7 shadow-glow">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-gold/40 bg-gold/15">
          <Info className="size-5 text-gold" />
        </span>
        <div>
          <p className="font-display text-base font-semibold text-gold">
            Os materiais e processos estão disponíveis nas áreas correspondentes do site.
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Em caso de dúvidas procure qualquer integrante do Time Pedagógico. Ninguém aqui precisa
            resolver nada sozinho.
          </p>
        </div>
      </div>
    </div>
  );
}
