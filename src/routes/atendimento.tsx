import { createFileRoute } from "@tanstack/react-router";
import { Clock, Headphones, CheckCircle2, Info, MessageSquare, GraduationCap, ExternalLink } from "lucide-react";
import { PageHeader, SectionTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/atendimento")({
  head: () => ({
    meta: [
      { title: "Atendimento às Franquias | Jornada do Colaborador" },
      {
        name: "description",
        content:
          "Horário, fluxo de atendimento pelo canal Avalon e boas práticas no atendimento às franquias Febracis.",
      },
      { property: "og:title", content: "Atendimento às Franquias" },
      {
        property: "og:description",
        content: "Horários, fluxo pelo Avalon e boas práticas do Pedagógico.",
      },
    ],
  }),
  component: AtendimentoPage,
});

const FLOW = [
  { step: "01", title: "Recebimento", text: "A demanda chega pelo canal Avalon." },
  { step: "02", title: "Triagem", text: "Classificação do tipo de solicitação e urgência." },
  { step: "03", title: "Encaminhamento", text: "Direcionamento ao responsável do Pedagógico." },
  { step: "04", title: "Resposta", text: "Retorno claro, objetivo e dentro do prazo." },
  { step: "05", title: "Registro", text: "Documentação da tratativa para histórico." },
];

const PRACTICES = [
  "Responder sempre pelo canal oficial (Avalon), mantendo o histórico.",
  "Usar linguagem cordial, objetiva e sem jargões internos.",
  "Confirmar o entendimento da demanda antes de executar.",
  "Informar prazos realistas e avisar sobre mudanças.",
  "Encaminhar ao setor correto quando a demanda não for pedagógica.",
  "Registrar toda tratativa relevante no controle interno.",
];

function AtendimentoPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Franquias"
        title="Atendimento às Franquias"
        subtitle="Como o Pedagógico atende as unidades com padrão, agilidade e registro."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="card-lift glass reveal rounded-2xl p-7">
          <Clock className="size-5 text-gold" />
          <h3 className="mt-4 font-display text-base font-semibold">Horário de atendimento</h3>
          <p className="mt-3 font-display text-3xl font-semibold text-gold-gradient">08h às 18h</p>
          <p className="mt-2 text-sm text-muted-foreground">
            De segunda a sexta, seguindo o expediente da Holding.
          </p>
        </div>
        <div className="card-lift glass reveal rounded-2xl p-7" style={{ animationDelay: "90ms" }}>
          <Headphones className="size-5 text-gold" />
          <h3 className="mt-4 font-display text-base font-semibold">Canal oficial</h3>
          <p className="mt-3 font-display text-3xl font-semibold text-gold-gradient">Avalon</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Todo atendimento deve ser registrado no canal para garantir histórico e rastreabilidade.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <SectionTitle hint="Do recebimento ao registro">Fluxo de atendimento</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-5">
          {FLOW.map((item, i) => (
            <div
              key={item.step}
              className="card-lift reveal rounded-2xl border border-border/70 bg-card/60 p-5"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="font-display text-2xl font-semibold text-gold/40">{item.step}</span>
              <h3 className="mt-2 font-display text-sm font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <SectionTitle>Boas práticas</SectionTitle>
        <ul className="grid gap-3 md:grid-cols-2">
          {PRACTICES.map((p) => (
            <li
              key={p}
              className="card-lift flex gap-3 rounded-xl border border-border/70 bg-secondary/25 p-4 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <SectionTitle>Treinamento de Atendimento às Franquias</SectionTitle>
        <div className="card-lift glass reveal rounded-2xl p-7">
          <span className="grid size-11 place-items-center rounded-xl border border-gold/40 bg-gold/15">
            <GraduationCap className="size-5 text-gold" />
          </span>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Material de apoio para o padrão de comunicação no atendimento às franquias.
          </p>
          <Button asChild size="sm" className="mt-6 w-fit rounded-lg">
            <a
              href="https://gamma.app/docs/Padrao-de-Comunicacao-no-Atendimento-as-Franquias-mwrc4hozjfwg43k?mode=doc"
              target="_blank"
              rel="noreferrer noopener"
            >
              Acessar treinamento <ExternalLink className="ml-1 size-3.5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-6 card-lift glass reveal rounded-2xl p-7">
  <span className="grid size-11 place-items-center rounded-xl border border-gold/40 bg-gold/15">
    <GraduationCap className="size-5 text-gold" />
  </span>

  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
    Após concluir o treinamento, realize a avaliação sobre o Padrão de Comunicação no Atendimento às Franquias.
  </p>

  <Button asChild size="sm" className="mt-6 w-fit rounded-lg">
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSe3bY2R5fR8frtk1Bs-3BARckbeSwGoQwtYm-HJj99UbJTxjA/viewform?usp=header"
      target="_blank"
      rel="noreferrer noopener"
    >
      Realizar avaliação <ExternalLink className="ml-1 size-3.5" />
    </a>
  </Button>
</div>

      <div className="mt-12 flex items-start gap-4 rounded-2xl border border-gold/30 bg-gold/[0.08] p-7 shadow-glow">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-gold/40 bg-gold/15">
          <Info className="size-5 text-gold" />
        </span>
        <div>
          <p className="font-display text-base font-semibold text-gold">
            Em caso de dúvidas procure qualquer integrante do Time Pedagógico.
          </p>
          <p className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
            <MessageSquare className="size-3.5" /> Ninguém aqui precisa resolver nada sozinho.
          </p>
        </div>
      </div>
    </div>
  );
}
