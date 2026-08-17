import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { TEAM } from "@/data/team";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TimePage,
});

function MemberCard({ member }: { member: (typeof TEAM)[number] }) {
  return (
    <div className="glass rounded-3xl p-7 text-center">
      <div className="relative mx-auto w-fit">
        <span className="grid size-32 place-items-center overflow-hidden rounded-full border border-gold/30 bg-gold/10 font-display text-2xl font-semibold text-gold sm:size-36">
          {member.avatar || member.photo ? (
            <img
              src={member.avatar ?? member.photo}
              alt={`Foto de ${member.name}`}
              loading="lazy"
              width={512}
              height={512}
              className="size-full scale-105 object-cover object-top"
            />
          ) : (
            member.initials
          )}
        </span>
      </div>

      <h2 className="mt-7 font-display text-xl font-semibold sm:text-2xl">
        {member.name}
      </h2>
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
        {member.role}
      </p>
      <div className="gold-rule mx-auto mt-5 max-w-24" />
      <ul className="mt-5 flex flex-wrap justify-center gap-1.5">
        {member.fronts.map((f) => (
          <li
            key={f}
            className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MemberSection({ member }: { member: (typeof TEAM)[number] }) {
  return (
    <section className="reveal grid items-start gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
      {/* Identidade */}
      <div className="lg:sticky lg:top-8">
        <MemberCard member={member} />
      </div>

      {/* Atribuições */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Atribuições
        </p>
        <div className="mt-6 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {member.groups.map((group) => (
            <section key={group.title}>
              <h3 className="font-display text-base font-semibold">{group.title}</h3>
              <div className="gold-rule mt-3 max-w-16" />
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimePage() {
  const leaders = TEAM.slice(0, 2);
  const team = TEAM.slice(2);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Pessoas"
        title="Nosso Time"
        subtitle="O Time Pedagógico da Holding Febracis e as frentes que cada integrante conduz."
      />

      {/* Lideranças lado a lado */}
      <section className="reveal mb-16 lg:mb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {leaders.map((member) => (
            <div key={member.id} className="glass rounded-3xl p-8 lg:p-10">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="relative shrink-0">
                  <span className="grid size-36 place-items-center overflow-hidden rounded-full border-2 border-gold/40 bg-gold/10 font-display text-3xl font-semibold text-gold shadow-xl shadow-gold/10 sm:size-44">
                    {member.avatar || member.photo ? (
                      <img
                        src={member.avatar ?? member.photo}
                        alt={`Foto de ${member.name}`}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="size-full scale-105 object-cover object-top"
                      />
                    ) : (
                      member.initials
                    )}
                  </span>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {member.role}
                  </p>
                  <div className="gold-rule mx-auto mt-5 max-w-24 sm:mx-0" />
                  <ul className="mt-5 flex flex-wrap justify-center gap-1.5 sm:justify-start">
                    {member.fronts.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-[11px] text-muted-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-border/50 pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Atribuições
                </p>
                <div className="mt-5 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  {member.groups.map((group) => (
                    <section key={group.title}>
                      <h3 className="font-display text-sm font-semibold">{group.title}</h3>
                      <div className="gold-rule mt-2 max-w-12" />
                      <ul className="mt-3 space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demais integrantes */}
      <div className="space-y-16 pb-8 lg:space-y-24">
        {team.map((member) => (
          <MemberSection key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
