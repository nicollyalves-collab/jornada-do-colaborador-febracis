import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { UserRound, HelpCircle, ListChecks } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useJourneyVisit } from "@/lib/journey";
import { TEAM, type TeamMember } from "@/data/team";

export const Route = createFileRoute("/time")({
  head: () => ({
    meta: [
      { title: "Nosso Time | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "Conheça o time do setor Pedagógico da Holding Febracis: cargos, responsabilidades e quando procurar cada pessoa.",
      },
      { property: "og:title", content: "Nosso Time — Setor Pedagógico" },
      {
        property: "og:description",
        content: "Quem é quem no Pedagógico e quando procurar cada pessoa.",
      },
    ],
  }),
  component: TimePage,
});

function TimePage() {
  useJourneyVisit("time");
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Pessoas"
        title="Nosso Time"
        subtitle="Clique em um card para ver responsabilidades e quando procurar cada pessoa."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {TEAM.map((member, i) => (
          <button
            key={member.id}
            onClick={() => setSelected(member)}
            className="card-lift reveal glass group flex flex-col rounded-2xl p-6 text-left"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-4">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="size-14 rounded-2xl object-cover"
                />
              ) : (
                <span className="grid size-14 place-items-center rounded-2xl border border-gold/30 bg-gold/10 font-display text-sm font-semibold text-gold">
                  {member.initials}
                </span>
              )}
              <div className="min-w-0">
                <h3 className="truncate font-display text-base font-semibold">{member.name}</h3>
                <p className="truncate text-xs uppercase tracking-[0.14em] text-gold">
                  {member.role}
                </p>
              </div>
            </div>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
              {member.responsibilities[0]}
            </p>
            <span className="mt-5 text-xs font-medium text-gold opacity-80 transition-opacity group-hover:opacity-100">
              Ver detalhes
            </span>
          </button>
        ))}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
        Estrutura pronta para receber os nomes, fotos e cargos reais a partir do material interno do
        Time Pedagógico.
      </p>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg border-border/70 bg-popover">
          <div className="flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-2xl border border-gold/30 bg-gold/10 font-display text-sm font-semibold text-gold">
              {selected?.initials}
            </span>
            <div>
              <DialogTitle className="font-display">{selected?.name}</DialogTitle>
              <DialogDescription className="text-xs uppercase tracking-[0.14em] text-gold">
                {selected?.role}
              </DialogDescription>
            </div>
          </div>

          <div className="mt-4 space-y-5">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <ListChecks className="size-3.5 text-gold" /> Responsabilidades
              </p>
              <ul className="mt-2.5 space-y-2">
                {selected?.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gold/25 bg-gold/[0.07] p-4">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                <HelpCircle className="size-3.5" /> Quando procurar
              </p>
              <p className="mt-2 text-sm text-foreground/90">{selected?.whenToLookFor}</p>
            </div>
            <p className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <UserRound className="size-3.5" /> Contato interno a ser cadastrado.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
