import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, BookOpen, Headphones, Store, Crown, Layers, GitMerge } from "lucide-react";
import { PageHeader, SectionTitle } from "@/components/page-header";

export const Route = createFileRoute("/como-trabalhamos")({
  head: () => ({
    meta: [
      { title: "Como Trabalhamos | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "Fluxo de relacionamento do setor Pedagógico com Conteúdo, SAC, Franquias, Time Camila e demais setores.",
      },
      { property: "og:title", content: "Como Trabalhamos — Setor Pedagógico" },
      {
        property: "og:description",
        content: "O fluxo de trabalho e as conexões entre áreas da Holding Febracis.",
      },
    ],
  }),
  component: ComoTrabalhamosPage,
});

const NODES = [
  {
    icon: BookOpen,
    name: "Conteúdo",
    text: "Produção, revisão e padronização dos materiais didáticos.",
  },
  { icon: Headphones, name: "SAC", text: "Recebe demandas de clientes e encaminha ao Pedagógico." },
  { icon: Store, name: "Franquias", text: "Unidades atendidas via canal Avalon." },
  { icon: Crown, name: "Time Camila", text: "Direcionamentos estratégicos e projetos especiais." },
  { icon: Layers, name: "Demais setores", text: "Marketing, TI, Financeiro e Jurídico." },
];

const FLOW = [
  { step: "01", title: "Entrada da demanda", text: "SAC, franquia, liderança ou setor interno." },
  { step: "02", title: "Triagem pedagógica", text: "Classificação, prioridade e responsável." },
  { step: "03", title: "Execução", text: "Conteúdo, formação, sistema ou processo envolvido." },
  { step: "04", title: "Validação", text: "Revisão e aprovação pela Coordenação." },
  { step: "05", title: "Retorno e registro", text: "Resposta ao solicitante e registro em controle." },
];

function ComoTrabalhamosPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Operação"
        title="Como Trabalhamos"
        subtitle="O Pedagógico é o centro de conexão entre conteúdo, atendimento e franquias."
      />

      <div className="relative">
        <div className="mx-auto mb-8 max-w-sm">
          <div className="glass reveal rounded-2xl border-gold/30 p-6 text-center shadow-glow">
            <span className="mx-auto grid size-11 place-items-center rounded-xl border border-gold/40 bg-gold/15">
              <GitMerge className="size-5 text-gold" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">Setor Pedagógico</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Método, conteúdo e padronização da operação
            </p>
          </div>
          <ArrowDown className="mx-auto mt-4 size-5 animate-bounce text-gold/70" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {NODES.map((node, i) => (
            <article
              key={node.name}
              className="card-lift reveal rounded-2xl border border-border/70 bg-card/60 p-5"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <node.icon className="size-5 text-gold" />
              <h3 className="mt-4 font-display text-sm font-semibold">{node.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{node.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <SectionTitle hint="Do recebimento ao registro final">Fluxo de trabalho</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-5">
          {FLOW.map((item, i) => (
            <div
              key={item.step}
              className="card-lift reveal glass relative rounded-2xl p-5"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="font-display text-2xl font-semibold text-gold/40">{item.step}</span>
              <h3 className="mt-2 font-display text-sm font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
