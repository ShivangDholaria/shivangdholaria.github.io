import Pipeline from "./Pipeline";
import { ArrowRight } from "./Icons";
import { metrics, profile } from "../constants";

const Hero = () => (
  <section
    id="top"
    className="mx-auto flex max-w-[1180px] flex-wrap items-start gap-12 px-5 pb-12 pt-10 sm:px-8 sm:pb-20 sm:pt-16 lg:flex-nowrap"
  >
    <div className="flex min-w-0 flex-[1_1_560px] flex-col items-start" data-enter>
      {profile.available ? (
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
        >
          <span className="h-[7px] w-[7px] rounded-full bg-accent" aria-hidden="true" />
          {profile.role} · {profile.location} · {profile.availability}
        </a>
      ) : (
        <p className="text-sm text-muted">
          {profile.role} · {profile.location}
        </p>
      )}
      <h1 className="display mt-7 text-[clamp(52px,8.4vw,100px)] leading-[0.98]">
        {profile.headline} <em className="mark">{profile.headlineAccent}</em>
      </h1>
      <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-muted">{profile.tagline}</p>
      <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <a href="#work" className="btn btn-primary justify-center">
          View my work <ArrowRight />
        </a>
        <a href={`mailto:${profile.email}`} className="btn btn-secondary justify-center">
          Email me
        </a>
      </div>
    </div>

    <div className="flex w-full flex-col gap-3 lg:w-[340px] lg:flex-none" data-enter>
      {profile.photo ? (
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width="680"
          height="680"
          className="aspect-square w-full rounded-[22px] object-cover"
        />
      ) : (
        <Pipeline />
      )}
      <dl className="m-0 grid grid-cols-2 gap-3">
        {metrics.slice(0, 2).map((m) => (
          <div key={m.label} className="rounded-[18px] bg-surface p-[18px]">
            <dt className="sr-only">{m.label}</dt>
            <dd className="m-0">
              <span className={`display block text-[44px] leading-none tabular-nums ${m.mark ? "text-accent" : ""}`}>
                {m.value}
              </span>
              <span className="mt-1.5 block text-[13px] leading-snug text-muted">{m.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
