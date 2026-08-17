import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Users, BookOpen, Wrench, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Início | Jornada do Colaborador — Holding Febracis" },
      {
        name: "description",
        content:
          "Comece sua jornada no setor Pedagógico da Holding Febracis: conheça a empresa, a cultura, o time, as rotinas e as ferramentas.",
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
    text: "História, fundadores e principais treinamentos.",
  },
  {
    to: "/time",
    icon: Users,
    title: "Conheça nosso time",
    text: "Quem é quem no Pedagógico e suas frentes.",
  },
  {
    to: "/rotinas",
    icon: BookOpen,
    title: "Conheça as rotinas",
    text: "EGD, Pátria, Cumbuca e Reunião de Pulso.",
  },
  {
    to: "/ferramentas",
    icon: Wrench,
    title: "Acesse ferramentas",
    text: "Central de acessos do dia a dia.",
  },
] as const;

function Index() {
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
          <div className="mt-9">
            <Button asChild size="lg" className="group rounded-xl">
              <Link to="/febracis">
                Comece sua Jornada
                <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {CARDS.map((card, i) => (
          <Link
            key={card.to}
            to={card.to}
            className="card-lift reveal group glass flex flex-col rounded-2xl p-5"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="grid size-10 place-items-center rounded-xl border border-gold/30 bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
              <card.icon className="size-4.5 text-gold" />
            </span>
            <h3 className="mt-4 font-display text-sm font-semibold">{card.title}</h3>
            <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground">
              {card.text}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-gold">
              Acessar
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
