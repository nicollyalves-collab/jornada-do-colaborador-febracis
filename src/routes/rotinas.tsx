import { createFileRoute } from "@tanstack/react-router";
import { Target, Users, Repeat, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ROUTINES } from "@/data/operations";

export const Route = createFileRoute("/rotinas")({
  head: () => ({
    meta: [
      { title: "Rotinas | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "EGD, Pátria Febracis, Cumbuca e Reunião de Pulso: objetivo, participantes, periodicidade e horário.",
      },
      { property: "og:title", content: "Rotinas do Setor Pedagógico" },
      {
        property: "og:description",
        content: "Os rituais recorrentes que organizam a semana do time.",
      },
    ],
  }),
  component: RotinasPage,
});

function RotinasPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Ritmo do time"
        title="Rotinas"
        subtitle="Os rituais que mantêm o setor alinhado, produtivo e conectado à cultura."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {ROUTINES.map((routine, i) => (
          <article
            key={routine.id}
            className="card-lift reveal glass rounded-2xl p-7"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-lg font-semibold">{routine.name}</h3>
              <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[11px] font-medium text-gold">
                {routine.frequency}
              </span>
            </div>
            <div className="gold-rule mt-3" />

            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3">
                <Target className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Objetivo
                  </dt>
                  <dd className="mt-1 space-y-1.5 leading-relaxed text-foreground/90">
                    {routine.objective.map((o) => (
                      <p key={o}>{o}</p>
                    ))}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Participantes
                  </dt>
                  <dd className="mt-1 text-foreground/90">{routine.participants}</dd>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <Repeat className="mt-0.5 size-4 shrink-0 text-gold" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Periodicidade
                    </dt>
                    <dd className="mt-1 text-foreground/90">{routine.periodicity}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Horário
                    </dt>
                    <dd className="mt-1 text-foreground/90">{routine.time}</dd>
                  </div>
                </div>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
