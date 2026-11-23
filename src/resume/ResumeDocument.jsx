import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";

import { resume } from "./resume";
import { registerFonts } from "./fonts";

registerFonts();

// Lato joins "fi", "fl", "ff" into single ligature glyphs, which copy out of the PDF as "frst" and
// confuse applicant tracking systems that read its text. An invisible zero-width non-joiner between
// the letters keeps them separate. URLs and the email address are left untouched.
const ZWNJ = "‌";
const breakLigatures = (value, key) => {
  if (typeof value === "string") return key === "url" || key === "email" ? value : value.replace(/f(?=[fil])/g, `f${ZWNJ}`);
  if (Array.isArray(value)) return value.map((v) => breakLigatures(v));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, breakLigatures(v, k)]));
  return value;
};
const r = breakLigatures(resume);

// The resume PDF layout. Content comes only from ./resume.js.
// Style: centered navy name, navy section headings over a thin rule, justified bullets, Lato.
const navy = "#1f3864";
const ink = "#262626";
const grey = "#595959";
const rule = "#a6a6a6";

const s = StyleSheet.create({
  page: { paddingTop: 28, paddingBottom: 28, paddingHorizontal: 40, fontFamily: "Lato", fontSize: 10, color: ink, lineHeight: 1.26 },

  // Header
  name: { fontSize: 19, fontWeight: 700, color: navy, textAlign: "center", letterSpacing: 0.3, lineHeight: 1.15 },
  contact: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 2, fontSize: 9, color: grey },
  contactItem: { flexDirection: "row" },
  sep: { marginHorizontal: 5, color: grey },
  contactLink: { color: grey, textDecoration: "none" },
  headerRule: { borderBottomWidth: 1.4, borderBottomColor: navy, marginTop: 8, marginBottom: 1 },

  // Sections
  section: { marginTop: 7 },
  h2: { fontSize: 10, fontWeight: 700, color: navy, textTransform: "uppercase", paddingBottom: 2, borderBottomWidth: 0.6, borderBottomColor: rule, marginBottom: 4 },
  justify: { textAlign: "justify" },
  bold: { fontWeight: 700 },

  // Entries (jobs, projects, schools)
  entry: { marginTop: 3 },
  entryHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  org: { fontSize: 10.5, fontWeight: 700, color: navy, flex: 1, paddingRight: 10 },
  dates: { fontStyle: "italic", color: grey },
  subline: { fontStyle: "italic", color: grey, marginTop: 0.5 },
  link: { color: grey, fontStyle: "italic", textDecoration: "none" },

  // Bullets
  bullets: { marginTop: 1.5, paddingLeft: 14 },
  bullet: { flexDirection: "row", marginTop: 1 },
  dotBox: { width: 14, paddingTop: 4.2 },
  dot: { width: 4.2, height: 4.2, borderRadius: 2.1, backgroundColor: ink },
  bulletText: { flex: 1, textAlign: "justify" },
});

const has = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v && String(v).trim()));

// Text with **bold** phrases, written in resume.js as "with **Python and Java**".
const Rich = ({ children, style }) => (
  <Text style={style}>
    {String(children)
      .split(/(\*\*[^*]+\*\*)/g)
      .filter(Boolean)
      .map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <Text key={i} style={s.bold}>
            {part.slice(2, -2)}
          </Text>
        ) : (
          part
        )
      )}
  </Text>
);

const Bullets = ({ items }) => (
  <View style={s.bullets}>
    {items.filter(has).map((b) => (
      <View key={b} style={s.bullet} wrap={false}>
        <View style={s.dotBox}>
          <View style={s.dot} />
        </View>
        <Rich style={s.bulletText}>{b}</Rich>
      </View>
    ))}
  </View>
);

// keepTogether moves a short section to the next page whole instead of splitting it.
const Section = ({ title, keepTogether = false, children }) => (
  <View style={s.section} wrap={!keepTogether}>
    <Text style={s.h2} minPresenceAhead={40}>
      {title}
    </Text>
    {children}
  </View>
);

const EntryHead = ({ left, right }) => (
  <View style={s.entryHead}>
    <Text style={s.org}>{left}</Text>
    {right}
  </View>
);

// Header contact lines, items separated by "|":
//   line 1: phone | email | location     line 2: links (GitHub, LinkedIn, site)
// Two deliberate lines wrap cleanly however many items there are.
const ContactLine = ({ items }) =>
  items.length > 0 && (
    <View style={s.contact}>
      {items.map((el, i) => (
        <View key={i} style={s.contactItem} wrap={false}>
          {i > 0 && <Text style={s.sep}>|</Text>}
          {el}
        </View>
      ))}
    </View>
  );

const basics = () =>
  [
    has(r.phone) && <Text>{r.phone}</Text>,
    has(r.email) && (
      <Link src={`mailto:${r.email}`} style={s.contactLink}>
        {r.email}
      </Link>
    ),
    has(r.location) && <Text>{r.location}</Text>,
  ].filter(Boolean);

const links = () =>
  (r.links || []).map((l) => (
    <Link key={l.url} src={l.url} style={s.contactLink}>
      {l.label}
    </Link>
  ));

const ResumeDocument = () => (
  <Document title={`${r.name} – Resume`} author={r.name} subject={`${r.title} resume`} creator={r.name}>
    <Page size="LETTER" style={s.page}>
      <Text style={s.name}>{r.name.toUpperCase()}</Text>
      <ContactLine items={basics()} />
      <ContactLine items={links()} />
      <View style={s.headerRule} />

      {has(r.summary) && (
        <Section title="Summary">
          <Rich style={s.justify}>{r.summary}</Rich>
        </Section>
      )}

      {has(r.experience) && (
        <Section title="Experience">
          {r.experience.map((e) => (
            <View key={`${e.company}-${e.dates}`} style={s.entry}>
              <View wrap={false}>
                <EntryHead left={e.company} right={<Text style={s.dates}>{e.dates}</Text>} />
                <Text style={s.subline}>
                  {e.role}
                  {has(e.location) ? `  |  ${e.location}` : ""}
                </Text>
              </View>
              <Bullets items={e.bullets || []} />
              {has(e.stack) && (
                <Text style={[s.subline, { marginTop: 1.5, paddingLeft: 14 }]}>Tech: {e.stack}</Text>
              )}
            </View>
          ))}
        </Section>
      )}

      {has(r.projects) && (
        <Section title="Projects">
          {r.projects.map((p) => (
            <View key={p.name} style={s.entry} wrap={false}>
              <EntryHead
                left={p.name}
                right={
                  has(p.url) ? (
                    <Link src={p.url} style={s.link}>
                      {p.url.replace(/^https?:\/\/(www\.)?/, "")}
                    </Link>
                  ) : null
                }
              />
              {has(p.stack) && <Text style={s.subline}>{p.stack}</Text>}
              {has(p.description) && <Bullets items={[p.description]} />}
            </View>
          ))}
        </Section>
      )}

      {has(r.skills) && (
        <Section title="Technical Skills" keepTogether>
          <Bullets items={r.skills.map((g) => `**${g.group}:** ${g.items.join(", ")}`)} />
        </Section>
      )}

      {has(r.education) && (
        <Section title="Education" keepTogether>
          {r.education.map((e) => (
            <View key={e.school} style={s.entry}>
              <EntryHead left={e.school} right={<Text style={s.dates}>{e.dates}</Text>} />
              <Text style={s.subline}>
                {[e.degree, e.location, has(e.gpa) ? `GPA ${e.gpa}` : ""].filter(has).join("  |  ")}
              </Text>
              {has(e.details) && <Text style={[s.subline, { fontStyle: "normal" }]}>{e.details}</Text>}
            </View>
          ))}
        </Section>
      )}

      {has(r.certifications) && (
        <Section title="Certifications" keepTogether>
          <Bullets items={r.certifications} />
        </Section>
      )}

      {has(r.awards) && (
        <Section title="Awards" keepTogether>
          <Bullets items={r.awards} />
        </Section>
      )}
    </Page>
  </Document>
);

export default ResumeDocument;
