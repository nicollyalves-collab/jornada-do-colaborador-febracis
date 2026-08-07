import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Expand, ImageIcon, Compass, Eye, Gem } from "lucide-react";
import { PageHeader, SectionTitle } from "@/components/page-header";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useJourneyVisit } from "@/lib/journey";
import { CULTURE_STATEMENTS, CULTURE_GALLERY, type CultureGalleryItem } from "@/data/company";

export const Route = createFileRoute("/cultura")({
  head: () => ({
    meta: [
      { title: "Nossa Cultura | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "Missão, visão, valores, 14 Chaves da Excelência e 7 Leis da Autorresponsabilidade da Holding Febracis.",
      },
      { property: "og:title", content: "Nossa Cultura — Holding Febracis" },
      {
        property: "og:description",
        content: "Os princípios que orientam o dia a dia do setor Pedagógico.",
      },
    ],
  }),
  component: CulturaPage,
});

const ICONS = [Compass, Eye, Gem];

function CulturaPage() {
  useJourneyVisit("cultura");
  const [selected, setSelected] = useState<CultureGalleryItem | null>(null);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Cultura"
        title="Nossa Cultura"
        subtitle="Autorresponsabilidade, excelência e resultado. A cultura é o que sustenta o método."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {CULTURE_STATEMENTS.map((s, i) => {
          const Icon = ICONS[i] ?? Gem;
          return (
            <article
              key={s.title}
              className="card-lift reveal glass relative overflow-hidden rounded-2xl p-7"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="absolute -right-10 -top-10 size-28 rounded-full bg-gold/10 blur-2xl" />
              <Icon className="size-5 text-gold" />
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <div className="gold-rule mt-3" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-16">
        <SectionTitle hint="Clique em qualquer arte para abrir em destaque">
          Galeria da Cultura
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CULTURE_GALLERY.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="card-lift reveal group overflow-hidden rounded-2xl border border-border/70 bg-card/60 text-left"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/40">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex size-full flex-col items-center justify-center gap-2 text-muted-foreground">
                    <ImageIcon className="size-7 opacity-60" />
                    <span className="text-[11px] uppercase tracking-[0.16em]">
                      Arte oficial a ser inserida
                    </span>
                  </div>
                )}
                <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-lg border border-gold/30 bg-background/70 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <Expand className="size-3.5 text-gold" />
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.16em] text-gold">{item.group}</p>
                <h3 className="mt-1.5 font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              </div>
            </button>
          ))}
        </div>
        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          As imagens oficiais das 14 Chaves da Excelência, das 7 Leis da Autorresponsabilidade e do
          quadro de Missão, Visão e Valores podem ser adicionadas à galeria — a estrutura já está
          preparada para recebê-las.
        </p>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl border-border/70 bg-popover">
          <DialogTitle className="font-display">{selected?.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {selected?.summary}
          </DialogDescription>
          <div className="mt-2 overflow-hidden rounded-xl border border-border/70 bg-secondary/30">
            {selected?.image ? (
              <img src={selected.image} alt={selected.title} className="w-full object-contain" />
            ) : (
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 text-muted-foreground">
                <ImageIcon className="size-8 opacity-60" />
                <span className="text-xs">Arte oficial ainda não cadastrada</span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
