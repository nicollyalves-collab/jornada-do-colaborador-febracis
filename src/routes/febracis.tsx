import { createFileRoute } from "@tanstack/react-router";
import { Quote, Building2, Store, Users, ArrowRight, Brain, MapPin } from "lucide-react";
import { PageHeader, SectionTitle } from "@/components/page-header";
import {
  TIMELINE,
  FOUNDERS,
  FACTS,
  ECOSYSTEM_LEVELS,
  ECOSYSTEM_BLOCKS,
} from "@/data/company";
import { TRAININGS, TRAININGS_INTRO } from "@/data/trainings";

export const Route = createFileRoute("/febracis")({
  head: () => ({
    meta: [
      { title: "Conheça a Febracis | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "História da Febracis, Paulo Vieira, Camila Vieira, Método CIS, formações e presença internacional.",
      },
      { property: "og:title", content: "Conheça a Febracis" },
      {
        property: "og:description",
        content: "História, fundadores, Método CIS e presença internacional da Holding Febracis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FebracisPage,
});

const LEVEL_ICONS = [Building2, Store, Users];
const BLOCK_ICONS = [Brain, MapPin];

function FebracisPage() {


  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Institucional"
        title="Conheça a Febracis"
        subtitle="A maior escola de negócios da América Latina, construída sobre método, ação e resultado."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {FACTS.map((fact, i) => (
          <div
            key={fact.label}
            className="card-lift reveal glass rounded-2xl p-5"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <fact.icon className="size-4.5 text-gold" />
            <p className="mt-3 font-display text-lg font-semibold">{fact.value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {fact.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <SectionTitle hint="Da fundação ao alcance internacional">Nossa trajetória</SectionTitle>
        <ol className="relative ml-3 border-l border-border/70 pl-8">
          {TIMELINE.map((entry, i) => (
            <li
              key={entry.year}
              className="reveal relative pb-7 last:pb-0"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="absolute -left-[41px] top-1 grid size-4 place-items-center rounded-full border border-gold/60 bg-background">
                <span className="size-1.5 rounded-full bg-gold" />
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                {entry.year}
              </p>
              <h3 className="mt-1 font-display text-base font-semibold">{entry.title}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {entry.text}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14">
        <SectionTitle hint="Liderança da Holding Febracis">Fundadores</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-2">
          {FOUNDERS.map((f) => (
            <article key={f.name} className="card-lift glass rounded-2xl p-6">
              <Quote className="size-4.5 text-gold/70" />
              <h3 className="mt-3 font-display text-base font-semibold">{f.name}</h3>
              <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{f.role}</p>
              <ul className="mt-4 space-y-2">
                {f.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <SectionTitle>Principais Treinamentos e Formações</SectionTitle>
        <p className="-mt-3 mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {TRAININGS_INTRO}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {TRAININGS.map((t) => {
            const expanded = open === t.id;
            return (
              <article
                key={t.id}
                className="rounded-xl border border-border/70 bg-card/50 p-4 transition-colors duration-300 hover:border-gold/40"
              >
                <button
                  onClick={() => setOpen(expanded ? null : t.id)}
                  aria-expanded={expanded}
                  className="flex w-full items-start justify-between gap-3 text-left"
                >
                  <h3 className="font-display text-sm font-semibold leading-snug">{t.name}</h3>
                  <ChevronDown
                    className={cn(
                      "mt-0.5 size-4 shrink-0 text-gold transition-transform duration-300",
                      expanded && "rotate-180",
                    )}
                  />
                </button>
                <p
                  className={cn(
                    "mt-2 text-xs leading-relaxed text-muted-foreground",
                    !expanded && "line-clamp-2",
                  )}
                >
                  {t.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
        Informações compiladas de fontes públicas oficiais da Febracis. Dados internos e números
        atualizados devem ser validados com a Coordenação Pedagógica.
      </p>
    </div>
  );
}
