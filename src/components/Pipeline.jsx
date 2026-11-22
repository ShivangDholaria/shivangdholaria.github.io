import { StepIcon } from "./Icons";
import { pipeline } from "../constants";

// The intake pipeline drawn as a small flow: four steps, a pulse running down the wires.
const Pipeline = ({ className = "" }) => (
  <div className={`card p-5 sm:p-6 ${className}`}>
    <div className="mb-5 flex items-center justify-between gap-3 text-sm text-muted">
      <span>{pipeline.title}</span>
      <span className="rounded-full border border-accent px-2.5 py-0.5 text-xs font-medium text-accent">
        {pipeline.status}
      </span>
    </div>
    <ol className="m-0 flex list-none flex-col p-0">
      {pipeline.steps.map((s, i) => (
        <li key={s.label}>
          {i > 0 && (
            <div
              className="wire ml-[1.85rem] h-5 w-0.5"
              style={{ "--d": `${i * 0.9}s` }}
              aria-hidden="true"
            />
          )}
          <div
            className={`flex items-center gap-3.5 rounded-2xl border px-3.5 py-3 ${
              s.highlight ? "border-accent bg-bg" : "border-transparent bg-surface-2"
            }`}
          >
            <span
              className={`grid h-8 w-8 flex-none place-items-center rounded-xl ${
                s.highlight ? "bg-accent text-accent-fg" : "bg-bg text-muted"
              }`}
            >
              <StepIcon name={s.icon} />
            </span>
            <span className="min-w-0">
              <span className="block text-[15px] font-semibold">{s.label}</span>
              <span className="block text-[13px] text-muted">{s.note}</span>
            </span>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default Pipeline;
