import { Link } from "@tanstack/react-router";
import { Check, PartyPopper, Sparkles } from "lucide-react";
import { JOURNEY_STEPS, useJourney } from "@/lib/journey";
import { cn } from "@/lib/utils";

export function JourneyBar() {
  const { isCompleted, progress, finished, hydrated } = useJourney();

  return (
    <section
      aria-label="Sua Jornada"
      className="glass rounded-2xl px-4 py-3 shadow-[0_18px_40px_-30px_oklch(0_0_0/0.9)]"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-gold" />
          <h2 className="font-display text-sm font-semibold">Sua Jornada</h2>
          <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[11px] font-semibold text-gold">
            {hydrated ? `${progress}%` : "—"}
          </span>
        </div>

        <ol className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {JOURNEY_STEPS.map((step) => {
            const done = hydrated && isCompleted(step.id);
            return (
              <li key={step.id}>
                <Link
                  to={step.to}
                  className={cn(
                    "group flex items-center gap-2 text-[11px] transition-colors sm:text-xs",
                    done ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-4 shrink-0 place-items-center rounded-[5px] border transition-all duration-300",
                      done
                        ? "border-gold bg-gold text-navy-deep"
                        : "border-border group-hover:border-gold/60",
                    )}
                  >
                    {done && <Check className="size-3" strokeWidth={3} />}
                  </span>
                  <span className={cn(done && "line-through decoration-gold/50")}>
                    {step.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>

        <div className="flex items-center gap-3 lg:w-64">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full transition-[width] duration-700 ease-out"
              style={{
                width: `${hydrated ? progress : 0}%`,
                background: "var(--gradient-gold)",
              }}
            />
          </div>
        </div>
      </div>

      {finished && (
        <div className="reveal mt-3 flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-3 py-2 text-xs font-medium text-gold">
          <PartyPopper className="size-4" />
          Parabéns! Você concluiu sua Jornada do Colaborador.
        </div>
      )}
    </section>
  );
}
