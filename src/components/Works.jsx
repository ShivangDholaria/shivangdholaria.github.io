import Reveal from "./Reveal";
import { projects } from "../constants";
import { ArrowUpRight } from "./Icons";

const ProjectCard = ({ project, delay }) => (
  <Reveal delay={delay} className="h-full">
    <a
      href={project.source_code_link}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-accent-glow"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-fg backdrop-blur transition-colors group-hover:bg-accent">
          <ArrowUpRight width={16} height={16} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent-2">
          {project.category}
        </div>
        <h4 className="mt-2.5 text-[17px] font-semibold">{project.name}</h4>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">
          {project.description}
        </p>
      </div>
    </a>
  </Reveal>
);

const Works = () => (
  <section id="work" className="w-full border-b border-white/10">
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="font-mono text-[13px] tracking-[0.12em] text-accent-2">
          05 / SELECTED WORK
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-[34px]">
          Things I&apos;ve built.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} delay={(i % 3) * 0.08} />
        ))}
      </div>
    </div>
  </section>
);

export default Works;
