import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TEAM, type TeamMember } from "@/data/team";

export const Route = createFileRoute("/time")({
  head: () => ({
    meta: [
      { title: "Nosso Time | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "Conheça o Time Pedagógico da Holding Febracis: frentes de atuação e atribuições de cada integrante.",
      },
      { property: "og:title", content: "Nosso Time — Setor Pedagógico" },
      {
        property: "og:description",
        content: "Quem é quem no Pedagógico e as frentes de atuação de cada integrante.",
      },
    ],
  }),
  component: TimePage,
});

function TimePage() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Pessoas"
        title="Nosso Time"
        subtitle="O Time Pedagógico da Holding Febracis e as frentes que cada integrante conduz."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {TEAM.map((member, i) => (
          <article
            key={member.id}
            className="card-lift reveal glass flex flex-col rounded-2xl p-5"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-full border border-gold/30 bg-gold/10 font-display text-sm font-semibold text-gold">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                ) : (
                  member.initials
                )}
              </span>
              <div className="min-w-0">
                <h3 className="truncate font-display text-sm font-semibold">{member.name}</h3>
                <p className="truncate text-[11px] uppercase tracking-[0.14em] text-gold">
                  {member.role}
                </p>
              </div>
            </div>

            <ul className="mt-4 flex flex-1 flex-wrap gap-1.5">
              {member.fronts.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-[11px] text-muted-foreground"
                >
                  {f}
                </li>
              ))}
            </ul>

            <Button
              size="sm"
              variant="outline"
              onClick={() => setSelected(member)}
              className="mt-5 w-fit rounded-lg border-border bg-transparent text-xs hover:border-gold/50 hover:bg-secondary/40"
            >
              Ver atribuições <ArrowUpRight className="ml-1 size-3.5" />
            </Button>
          </article>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-lg">{selected.name}</DialogTitle>
                <DialogDescription className="text-[11px] uppercase tracking-[0.16em] text-gold">
                  {selected.role}
                </DialogDescription>
              </DialogHeader>
              <div className="gold-rule" />
              <div className="mt-2 space-y-5">
                {selected.groups.map((group) => (
                  <section key={group.title}>
                    <h4 className="font-display text-sm font-semibold">{group.title}</h4>
                    <ul className="mt-2 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
