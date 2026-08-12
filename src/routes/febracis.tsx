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

      {/* Ecossistema */}
      <section className="mt-20">
        <SectionTitle hint="Da estratégia ao impacto final">Entenda o Ecossistema Febracis</SectionTitle>

        <div className="glass rounded-3xl p-7 sm:p-10">
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
            {ECOSYSTEM_LEVELS.map((level, i) => {
              const Icon = LEVEL_ICONS[i] ?? Building2;
              return (
                <div key={level.title} className="flex flex-1 items-center gap-4">
                  <div className="flex-1 rounded-2xl border border-gold/25 bg-card/50 p-5 text-center">
                    <Icon className="mx-auto size-5 text-gold" />
                    <p className="mt-3 font-display text-base font-semibold">{level.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{level.caption}</p>
                  </div>
                  {i < ECOSYSTEM_LEVELS.length - 1 && (
                    <ArrowRight className="mx-auto size-5 shrink-0 rotate-90 text-gold/60 lg:rotate-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {ECOSYSTEM_BLOCKS.map((block, i) => {
            const Icon = BLOCK_ICONS[i] ?? Brain;
            return (
              <article key={block.title}>
                <Icon className="size-5 text-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold sm:text-xl">{block.title}</h3>
                <div className="gold-rule mt-3 max-w-16" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {block.intro}
                </p>
                <ul className="mt-5 space-y-3">
                  {block.points.map((p) => (
                    <li key={p.label} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      <span className="text-muted-foreground">
                        <span className="font-semibold text-foreground">{p.label}:</span> {p.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <div className="mt-20">
        <SectionTitle>Principais Treinamentos e Formações</SectionTitle>
        <p className="-mt-3 mb-7 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {TRAININGS_INTRO}
        </p>

        <div className="grid gap-x-10 gap-y-2 md:grid-cols-2 xl:grid-cols-3">
          {TRAININGS.map((t, i) => (
            <article
              key={t.id}
              className="flex gap-4 border-b border-border/50 py-5 transition-colors duration-300 hover:border-gold/40"
            >
              <span className="font-display text-sm font-semibold tabular-nums text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.06em]">
                  {t.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>


      <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
        Informações compiladas de fontes públicas oficiais da Febracis. Dados internos e números
        atualizados devem ser validados com a Coordenação Pedagógica.
      </p>
    </div>
  );
}
