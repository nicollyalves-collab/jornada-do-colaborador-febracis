import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Gem, ShieldCheck, KeyRound } from "lucide-react";
import { PageHeader, SectionTitle } from "@/components/page-header";
import {
  MISSION,
  VISION,
  VALUES,
  LEIS_AUTORRESPONSABILIDADE,
  CHAVES_EXCELENCIA,
} from "@/data/company";

export const Route = createFileRoute("/cultura")({
  head: () => ({
    meta: [
      { title: "Nossa Cultura | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "Missão, visão, valores, 7 Leis da Autorresponsabilidade e 14 Chaves da Excelência da Holding Febracis.",
      },
      { property: "og:title", content: "Nossa Cultura — Holding Febracis" },
      {
        property: "og:description",
        content: "Os princípios que orientam o dia a dia do setor Pedagógico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CulturaPage,
});

function CulturaPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Cultura"
        title="Nossa Cultura"
        subtitle="Autorresponsabilidade, excelência e resultado. A cultura é o que sustenta o método."
      />

      {/* Missão e Visão em destaque */}
      <div className="grid gap-6 lg:grid-cols-2">
        {[
          { icon: Compass, label: "Missão", text: MISSION },
          { icon: Eye, label: "Visão", text: VISION },
        ].map(({ icon: Icon, label, text }, i) => (
          <article
            key={label}
            className="reveal glass relative overflow-hidden rounded-3xl p-8 sm:p-10"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <div className="absolute -right-12 -top-12 size-40 rounded-full bg-gold/10 blur-3xl" />
            <Icon className="size-6 text-gold" />
            <h2 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">{label}</h2>
            <div className="gold-rule mt-4" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>
          </article>
        ))}
      </div>

      {/* Valores */}
      <section className="mt-20">
        <SectionTitle hint="Os dez princípios que guiam nossas decisões">
          <span className="inline-flex items-center gap-2">
            <Gem className="size-4 text-gold" /> Valores
          </span>
        </SectionTitle>
        <div className="grid gap-x-10 gap-y-1 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <div
              key={v}
              className="flex items-baseline gap-4 border-b border-border/50 py-4 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
            >
              <span className="font-display text-sm font-semibold tabular-nums text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed sm:text-base">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7 Leis */}
      <section className="mt-20">
        <SectionTitle hint="A base do Método CIS">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="size-4 text-gold" /> As 7 Leis da Autorresponsabilidade
          </span>
        </SectionTitle>
        <ol className="glass rounded-3xl p-6 sm:p-9">
          {LEIS_AUTORRESPONSABILIDADE.map((lei, i) => (
            <li
              key={lei}
              className="flex items-start gap-5 border-b border-border/50 py-4 first:pt-0 last:border-b-0 last:pb-0"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/5 font-display text-sm font-semibold text-gold">
                {i + 1}
              </span>
              <p className="pt-1.5 text-sm leading-relaxed sm:text-base">{lei}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 14 Chaves */}
      <section className="mt-20 mb-8">
        <SectionTitle hint="Comportamentos que sustentam a cultura de excelência">
          <span className="inline-flex items-center gap-2">
            <KeyRound className="size-4 text-gold" /> 14 Chaves da Excelência
          </span>
        </SectionTitle>
        <div className="grid gap-x-12 gap-y-1 md:grid-cols-2">
          {CHAVES_EXCELENCIA.map((chave, i) => (
            <div key={chave} className="flex items-baseline gap-4 border-b border-border/50 py-4">
              <span className="font-display text-sm font-semibold tabular-nums text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed sm:text-base">{chave}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
