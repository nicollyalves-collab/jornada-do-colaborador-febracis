import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { TOOLS, TOOL_CATEGORIES } from "@/data/tools";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ferramentas")({
  head: () => ({
    meta: [
      { title: "Ferramentas | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "Central de acessos do setor Pedagógico: sistemas, documentos, modelos de contrato e canais de suporte.",
      },
      { property: "og:title", content: "Ferramentas do Setor Pedagógico" },
      {
        property: "og:description",
        content: "Todos os sistemas e acessos do dia a dia em um só lugar.",
      },
    ],
  }),
  component: FerramentasPage,
});

function FerramentasPage() {
  const [filter, setFilter] = useState<string>("Todas");

  const visible = filter === "Todas" ? TOOLS : TOOLS.filter((t) => t.category === filter);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Central de acessos"
        title="Ferramentas"
        subtitle="Sistemas, documentos e canais usados no dia a dia do setor Pedagógico."
      />

      <div className="mb-7 flex flex-wrap gap-2">
        {["Todas", ...TOOL_CATEGORIES].map((cat) => (
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

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((tool, i) => (
          <article
            key={tool.id}
            className="card-lift reveal glass flex flex-col rounded-xl p-5"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="grid size-10 place-items-center rounded-xl border border-gold/30 bg-gold/10">
                <tool.icon className="size-4.5 text-gold" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {tool.category}
              </span>
            </div>
            <h3 className="mt-4 font-display text-sm font-semibold leading-snug">{tool.name}</h3>
            {tool.description && (
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
            )}
            <Button asChild size="sm" className="mt-5 w-fit rounded-lg text-xs">
              <a href={tool.url} target="_blank" rel="noreferrer noopener">
                Acessar <ExternalLink className="ml-1 size-3.5" />
              </a>
            </Button>
          </article>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        Alguns acessos são restritos e podem exigir autorização prévia da Coordenação Pedagógica.
      </p>
    </div>
  );
}
