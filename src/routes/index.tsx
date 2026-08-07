import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Users, BookOpen, Wrench, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JOURNEY_STEPS, useJourney } from "@/lib/journey";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Início | Jornada do Colaborador — Holding Febracis" },
      {
        name: "description",
        content:
          "Comece sua jornada no setor Pedagógico da Holding Febracis: conheça a empresa, a cultura, o time, os processos e as ferramentas.",
      },
      { property: "og:title", content: "Jornada do Colaborador — Holding Febracis" },
      {
        property: "og:description",
        content: "Plataforma de onboarding do setor Pedagógico da Holding Febracis.",
      },
    ],
  }),
  component: Index,
});

const CARDS = [
  {
    to: "/febracis",
    icon: Building2,
    title: "Conheça a empresa",
    text: "História, fundadores, Método CIS e presença internacional.",
  },
  {
    to: "/time",
    icon: Users,
    title: "Conheça nosso time",
    text: "Quem é quem no Pedagógico e quando procurar cada pessoa.",
  },
  {
    to: "/processos",
    icon: BookOpen,
    title: "Aprenda os processos",
    text: "POPs e procedimentos que sustentam a operação do setor.",
  },
  {
    to: "/ferramentas",
    icon: Wrench,
    title: "Acesse ferramentas",
    text: "Sistemas, planilhas e acessos usados no dia a dia.",
  },
] as const;

function Index() {
  const { progress, isCompleted, hydrated, finished } = useJourney();

  return (
    <div className="mx-auto max-w-6xl">
      <section className="hero-surface relative overflow-hidden rounded-3xl border border-border/70 px-6 py-14 shadow-elegant sm:px-12 sm:py-20">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            <Sparkles className="size-3" /> Setor Pedagógico
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Bem-vindo à <span className="text-gold-gradient">Jornada do Colaborador</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Sua jornada no setor Pedagógico começa aqui.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group rounded-xl">
              <Link to="/febracis">
                Começar Jornada
                <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-border bg-transparent hover:border-gold/50 hover:bg-secondary/40"
            >
              <Link to="/primeiro-dia">Checklist do primeiro dia</Link>
            </Button>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            {hydrated
              ? finished
                ? "Jornada concluída — parabéns!"
                : `Sua jornada está ${progress}% completa.`
              : "Carregando seu progresso..."}
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {CARDS.map((card, i) => (
          <Link
            key={card.to}
            to={card.to}
            className="card-lift reveal group glass flex flex-col rounded-2xl p-6"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <span className="grid size-11 place-items-center rounded-xl border border-gold/30 bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
              <card.icon className="size-5 text-gold" />
            </span>
            <h3 className="mt-5 font-display text-base font-semibold">{card.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gold">
              Acessar
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-12 rounded-2xl border border-border/70 bg-card/60 p-6 sm:p-8">
        <h2 className="font-display text-lg font-semibold">Trilha da jornada</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Cada página visitada marca automaticamente sua etapa como concluída.
        </p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {JOURNEY_STEPS.map((step, index) => {
            const done = hydrated && isCompleted(step.id);
            return (
              <li key={step.id}>
                <Link
                  to={step.to}
                  className="card-lift flex items-center gap-3 rounded-xl border border-border/70 bg-secondary/30 px-4 py-3"
                >
                  <span
                    className={
                      done
                        ? "grid size-7 shrink-0 place-items-center rounded-lg bg-gold text-navy-deep"
                        : "grid size-7 shrink-0 place-items-center rounded-lg border border-border text-xs text-muted-foreground"
                    }
                  >
                    {done ? <Check className="size-4" strokeWidth={3} /> : index + 1}
                  </span>
                  <span className="text-sm">{step.label}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
