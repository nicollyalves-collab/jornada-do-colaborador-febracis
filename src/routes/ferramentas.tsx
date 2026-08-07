import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Lock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { useJourneyVisit } from "@/lib/journey";
import { TOOLS, TOOL_CATEGORIES } from "@/data/tools";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/ferramentas")({
  head: () => ({
    meta: [
      { title: "Ferramentas | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "CIS Educa, Salesforce, GLPI, Avalon, Drive Pedagógico e demais sistemas usados pelo setor Pedagógico.",
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
  useJourneyVisit("ferramentas");
  const [filter, setFilter] = useState<string>("Todas");

  const visible = filter === "Todas" ? TOOLS : TOOLS.filter((t) => t.category === filter);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Sistemas"
        title="Ferramentas"
        subtitle="Tudo que você usa no dia a dia do setor Pedagógico, organizado por categoria."
      />

      <div className="mb-8 flex flex-wrap gap-2">
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

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((tool, i) => (
          <article
            key={tool.id}
            className="card-lift reveal glass flex flex-col rounded-2xl p-6"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-xl border border-gold/30 bg-gold/10">
                <tool.icon className="size-5 text-gold" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {tool.category}
              </span>
            </div>
            <h3 className="mt-5 font-display text-base font-semibold">{tool.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {tool.description}
            </p>
            {tool.url ? (
              <Button asChild size="sm" className="mt-6 w-fit rounded-lg">
                <a href={tool.url} target="_blank" rel="noreferrer noopener">
                  Acessar <ExternalLink className="ml-1 size-3.5" />
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                className="mt-6 w-fit rounded-lg border-border bg-transparent hover:border-gold/50 hover:bg-secondary/40"
                onClick={() => toast("Link em breve", { description: `${tool.name} — acesso será cadastrado pela Coordenação.` })}
              >
                Acessar <Lock className="ml-1 size-3.5" />
              </Button>
            )}
          </article>
        ))}
      </div>

      <p className="mt-10 text-xs text-muted-foreground">
        Os links de acesso serão inseridos posteriormente em cada ferramenta.
      </p>
    </div>
  );
}
