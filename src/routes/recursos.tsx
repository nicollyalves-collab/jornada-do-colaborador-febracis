import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ExternalLink,
  Lock,
  Wrench,
  Table2,
  ClipboardList,
  FileText,
  FileSignature,
  KanbanSquare,
  BookMarked,
  Search,
  type LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RESOURCES, RESOURCE_CATEGORIES, type ResourceCategory } from "@/data/operations";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Central de Recursos | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "Biblioteca interna com ferramentas, planilhas, POPs, documentos, contratos, projetos e manuais do setor Pedagógico.",
      },
      { property: "og:title", content: "Central de Recursos" },
      {
        property: "og:description",
        content: "Todos os documentos e links do Pedagógico organizados por categoria.",
      },
    ],
  }),
  component: RecursosPage,
});

const CATEGORY_ICON: Record<ResourceCategory, LucideIcon> = {
  Ferramentas: Wrench,
  Planilhas: Table2,
  "POP's": ClipboardList,
  Documentos: FileText,
  Contratos: FileSignature,
  Projetos: KanbanSquare,
  Manuais: BookMarked,
};

function RecursosPage() {
  const [filter, setFilter] = useState<"Todos" | ResourceCategory>("Todos");
  const [query, setQuery] = useState("");

  const visible = RESOURCES.filter(
    (r) =>
      (filter === "Todos" || r.category === filter) &&
      `${r.name} ${r.description}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Biblioteca"
        title="Central de Recursos"
        subtitle="Um só lugar para encontrar tudo que o setor Pedagógico usa e produz."
      />

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {(["Todos", ...RESOURCE_CATEGORIES] as const).map((cat) => (
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
            placeholder="Buscar recurso"
            className="rounded-xl border-border bg-secondary/30 pl-9 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((item, i) => {
          const Icon = CATEGORY_ICON[item.category];
          return (
            <article
              key={item.id}
              className="card-lift reveal glass flex flex-col rounded-2xl p-6"
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="grid size-10 place-items-center rounded-xl border border-gold/30 bg-gold/10">
                  <Icon className="size-4 text-gold" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {item.category}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">{item.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {item.url ? (
                <Button asChild size="sm" className="mt-6 w-fit rounded-lg">
                  <a href={item.url} target="_blank" rel="noreferrer noopener">
                    Acessar <ExternalLink className="ml-1 size-3.5" />
                  </a>
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-6 w-fit rounded-lg border-border bg-transparent hover:border-gold/50 hover:bg-secondary/40"
                  onClick={() =>
                    toast("Link em breve", {
                      description: `${item.name} será vinculado à Central de Recursos.`,
                    })
                  }
                >
                  Acessar <Lock className="ml-1 size-3.5" />
                </Button>
              )}
            </article>
          );
        })}
      </div>

      {visible.length === 0 && (
        <p className="rounded-2xl border border-border/70 bg-card/60 p-8 text-center text-sm text-muted-foreground">
          Nenhum recurso encontrado.
        </p>
      )}
    </div>
  );
}
