export const Eyebrow = ({ children }) => (
  <p className="text-sm text-muted">{children}</p>
);

// Serif section title; `accent` is set in gold italics after the title.
export const SectionTitle = ({ title, accent, note }) => (
  <div data-reveal className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
    <h2 className="display text-[clamp(40px,5.4vw,60px)] leading-[1.02]">
      {title}
      {accent && (
        <>
          {" "}
          <em className="mark">{accent}</em>
        </>
      )}
    </h2>
    {note && <Eyebrow>{note}</Eyebrow>}
  </div>
);

// Shared section shell: one 1180px container for every section, so edges never jump.
const Section = ({ id, title, accent, note, className = "", children }) => (
  <section id={id} className={`mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-20 lg:py-24 ${className}`}>
    <div className="flex flex-col gap-8 sm:gap-10">
      <SectionTitle title={title} accent={accent} note={note} />
      {children}
    </div>
  </section>
);

export default Section;
