import { createFileRoute } from "@tanstack/react-router";
import { Check, PartyPopper, Rocket, RotateCcw } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { useJourney, useJourneyVisit } from "@/lib/journey";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/primeiro-dia")({
  head: () => ({
    meta: [
      { title: "Primeiro Dia | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "Checklist interativo do primeiro dia no setor Pedagógico da Holding Febracis: sistemas, cultura, time e processos.",
      },
      { property: "og:title", content: "Primeiro Dia — Onboarding Pedagógico" },
      {
        property: "og:description",
        content: "Checklist interativo para concluir seu primeiro dia com tudo em ordem.",
      },
    ],
  }),
  component: PrimeiroDiaPage,
});

const ITEMS = [
  { id: "empresa", label: "Conhecer empresa", hint: "Página Conheça a Febracis" },
  { id: "cultura", label: "Conhecer cultura", hint: "Missão, valores, 14 Chaves e 7 Leis" },
  { id: "time", label: "Conhecer time", hint: "Quem é quem no Pedagógico" },
  { id: "sistemas", label: "Entrar nos sistemas", hint: "Solicitar acessos com a Coordenação" },
  { id: "ferramentas", label: "Conhecer ferramentas", hint: "CIS Educa, Avalon, GLPI e demais" },
  { id: "reunioes", label: "Participar das reuniões", hint: "EGD, Pátria, Cumbuca e Pulso" },
  { id: "processos", label: "Conhecer processos", hint: "POPs e procedimentos do setor" },
  { id: "links", label: "Salvar links úteis", hint: "Central de Recursos" },
  { id: "onboarding", label: "Finalizar onboarding", hint: "Alinhamento final com a liderança" },
];

function PrimeiroDiaPage() {
  useJourneyVisit("primeiro-dia");
  const { checklist, toggleChecklist, hydrated, reset } = useJourney();

  const done = ITEMS.filter((i) => checklist.includes(i.id)).length;
  const percent = Math.round((done / ITEMS.length) * 100);
  const allDone = done === ITEMS.length;

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Onboarding"
        title="Primeiro Dia"
        subtitle="Marque cada item conforme avançar. Seu progresso fica salvo neste navegador."
        action={
          <Button
            variant="outline"
            size="sm"
            onClick={reset}
            className="rounded-xl border-border bg-transparent hover:border-gold/50 hover:bg-secondary/40"
          >
            <RotateCcw className="mr-1 size-3.5" /> Reiniciar
          </Button>
        }
      />

      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-medium">
            <Rocket className="size-4 text-gold" /> Checklist do primeiro dia
          </p>
          <span className="text-xs font-semibold text-gold">
            {hydrated ? `${done}/${ITEMS.length} · ${percent}%` : "—"}
          </span>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full transition-[width] duration-700 ease-out"
            style={{ width: `${hydrated ? percent : 0}%`, background: "var(--gradient-gold)" }}
          />
        </div>

        <ul className="mt-6 space-y-2.5">
          {ITEMS.map((item) => {
            const checked = hydrated && checklist.includes(item.id);
            return (
              <li key={item.id}>
                <button
                  onClick={() => toggleChecklist(item.id)}
                  aria-pressed={checked}
                  className={cn(
                    "group flex w-full items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all duration-300",
                    checked
                      ? "border-gold/40 bg-gold/[0.07]"
                      : "border-border/70 bg-secondary/25 hover:border-gold/40",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-5 shrink-0 place-items-center rounded-md border transition-all duration-300",
                      checked
                        ? "border-gold bg-gold text-navy-deep"
                        : "border-border group-hover:border-gold/60",
                    )}
                  >
                    {checked && <Check className="size-3.5" strokeWidth={3} />}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={cn(
                        "block text-sm font-medium",
                        checked && "text-gold line-through decoration-gold/40",
                      )}
                    >
                      {item.label}
                    </span>
                    <span className="block text-xs text-muted-foreground">{item.hint}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {allDone && (
        <div className="reveal mt-8 overflow-hidden rounded-2xl border border-gold/35 bg-gold/[0.09] p-8 text-center shadow-glow">
          <PartyPopper className="mx-auto size-8 animate-bounce text-gold" />
          <h2 className="mt-4 font-display text-xl font-semibold text-gold">
            Primeiro dia concluído!
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Você cumpriu todos os itens do onboarding. Seja muito bem-vindo ao Time Pedagógico da
            Holding Febracis.
          </p>
        </div>
      )}
    </div>
  );
}
