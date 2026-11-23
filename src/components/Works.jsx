import Section from "./Section";
import Pipeline from "./Pipeline";
import { ArrowUpRight } from "./Icons";
import { caseStudies, profile, sideProjects } from "../constants";

const Rows = ({ rows }) => (
  <dl className="m-0 flex flex-col">
    {rows.map((r) => (
      <div key={r.k} className="grid gap-1 border-t border-line py-3.5 sm:grid-cols-[110px_1fr] sm:gap-4">
        <dt className="text-sm text-muted">{r.k}</dt>
        <dd className="m-0 text-[15px] leading-relaxed text-soft">{r.v}</dd>
      </div>
    ))}
  </dl>
);

const Outcome = ({ outcome, big }) => (
  <p className="m-0">
    <span className={`mark block leading-none tabular-nums ${big ? "text-[clamp(64px,8vw,96px)]" : "text-[44px]"}`}>
      {outcome.strong}
    </span>
    <span className="mt-2 block text-sm text-muted">{outcome.rest}</span>
  </p>
);

const Meta = ({ c }) => (
  <p className="text-[13px] text-muted">
    {c.org} · {c.stack.replaceAll(" · ", ", ")}
  </p>
);

const Lead = ({ c }) => (
  <article className="card card-lift glow-card grid gap-10 p-7 sm:p-9 lg:grid-cols-[1.5fr_1fr] lg:items-end">
    <div className="flex flex-col gap-4">
      <Meta c={c} />
      <h3 className="display text-[clamp(30px,3.4vw,40px)] leading-[1.08]">{c.title}</h3>
      <Rows rows={c.rows} />
    </div>
    <Outcome outcome={c.outcome} big />
  </article>
);

const Card = ({ c }) => (
  <article className="card card-lift glow-card flex h-full flex-col gap-4 p-7 sm:p-8">
    <Meta c={c} />
    <h3 className="display text-[32px] leading-[1.1]">{c.title}</h3>
    <Rows rows={c.rows} />
    <div className="mt-auto pt-2">
      <Outcome outcome={c.outcome} />
    </div>
  </article>
);

const Works = () => {
  const [lead, ...rest] = caseStudies;
  return (
    <Section id="work" title="Selected" accent="work" note="Insurance and healthcare">
      <div data-reveal>
        <Lead c={lead} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {rest.map((c, i) => (
          <div key={c.id} data-reveal style={{ "--i": i }}>
            <Card c={c} />
          </div>
        ))}
      </div>

      {/* With a portrait in the hero, the pipeline moves down here. */}
      {profile.photo && (
        <div data-reveal>
          <Pipeline className="max-w-[560px]" />
        </div>
      )}

      <div data-reveal className="flex flex-wrap items-baseline gap-x-8 gap-y-3 border-y border-line py-5 text-[15px]">
        <span className="text-muted">Also built</span>
        {sideProjects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="link-draw inline-flex items-center gap-1 font-medium text-link"
          >
            {p.name} <ArrowUpRight />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Works;
