import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText, User, ExternalLink, Search } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PROCESSES, PROCESS_CATEGORIES } from "@/data/processes";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/processos")({
  head: () => ({
    meta: [
      { title: "Processos | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "POPs e procedimentos do setor Pedagógico da Holding Febracis, com responsável e documento completo.",
      },
      { property: "og:title", content: "Processos do Setor Pedagógico" },
      {
        property: "og:description",
        content: "Biblioteca de procedimentos operacionais padrão, pronta para crescer.",
      },
    ],
  }),
  component: ProcessosPage,
});

function ProcessosPage() {
  const [filter, setFilter] = useState("Todos");
  const [query, setQuery] = useState("");

  const visible = PROCESSES.filter(
    (p) =>
      (filter === "Todos" || p.category === filter) &&
      `${p.name} ${p.description} ${p.owner}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Procedimentos"
        title="Processos"
        subtitle="Cada processo tem um responsável e um procedimento completo documentado."
      />

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {["Todos", ...PROCESS_CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs transition-all duration-300",
                filter === cat
                  ? "border-gold/50 bg-gold/15 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative lg:w-72">
          <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrar processos"
            className="rounded-xl border-border bg-secondary/30 pl-9 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((p, i) => (
          <article
            key={p.id}
            className="card-lift reveal glass flex flex-col rounded-2xl p-6"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between">
              <span className="grid size-10 place-items-center rounded-xl border border-gold/30 bg-gold/10">
                <FileText className="size-4 text-gold" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {p.category}
              </span>
            </div>
            <h3 className="mt-5 font-display text-base font-semibold">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <User className="size-3.5 text-gold" /> {p.owner}
            </p>
            {p.docUrl ? (
              <Button asChild size="sm" className="mt-5 w-full rounded-lg">
                <a href={p.docUrl} target="_blank" rel="noreferrer noopener">
                  Ver Procedimento Completo <ExternalLink className="ml-1 size-3.5" />
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                className="mt-5 w-full rounded-lg border-border bg-transparent hover:border-gold/50 hover:bg-secondary/40"
                onClick={() =>
                  toast("Documento em breve", {
                    description: `O procedimento completo de "${p.name}" será vinculado ao Google Docs.`,
                  })
                }
              >
                Ver Procedimento Completo
              </Button>
            )}
          </article>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="rounded-2xl border border-border/70 bg-card/60 p-8 text-center text-sm text-muted-foreground">
          Nenhum processo encontrado com esses filtros.
        </p>
      )}

      <p className="mt-10 text-xs text-muted-foreground">
        Estrutura escalável: novos processos aparecem automaticamente ao serem cadastrados.
      </p>
    </div>
  );
}
