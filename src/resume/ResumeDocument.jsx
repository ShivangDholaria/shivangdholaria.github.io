import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";

import { resume as r } from "./resume";

// The resume PDF layout. Content comes only from ./resume.js.
// Built-in Helvetica keeps the file small and the text selectable for applicant tracking systems.
const ink = "#16171a";
const muted = "#5b6068";
const rule = "#d9dce0";

const s = StyleSheet.create({
  page: { paddingTop: 32, paddingBottom: 30, paddingHorizontal: 44, fontFamily: "Helvetica", fontSize: 9.2, color: ink, lineHeight: 1.32 },
  name: { fontFamily: "Helvetica-Bold", fontSize: 21, letterSpacing: -0.3, lineHeight: 1.15 },
  title: { fontSize: 10.5, color: muted, marginTop: 3, lineHeight: 1.2 },
  contact: { flexDirection: "row", flexWrap: "wrap", marginTop: 6, color: muted },
  contactItem: { marginRight: 12 },
  link: { color: ink, textDecoration: "none" },
  section: { marginTop: 9 },
  h2: { fontFamily: "Helvetica-Bold", fontSize: 9, letterSpacing: 1.2, textTransform: "uppercase", color: muted, paddingBottom: 4, borderBottomWidth: 0.75, borderBottomColor: rule, marginBottom: 6 },
  item: { marginBottom: 6 },
  head: { flexDirection: "row", justifyContent: "space-between" },
  strong: { fontFamily: "Helvetica-Bold", fontSize: 10.2 },
  right: { color: muted, textAlign: "right" },
  sub: { color: muted, marginTop: 1 },
  bullet: { flexDirection: "row", marginTop: 1.5 },
  dot: { width: 10 },
  flex: { flex: 1 },
  tech: { color: muted, marginTop: 2, fontSize: 8.6 },
  row: { flexDirection: "row", marginBottom: 1.5 },
  label: { width: 110, fontFamily: "Helvetica-Bold" },
  muted: { color: muted },
  bold: { fontFamily: "Helvetica-Bold" },
  edu: { marginBottom: 3 },
});

const has = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v && String(v).trim()));
const join = (...parts) => parts.filter(has).join(" · ");

// keepTogether moves a short section to the next page whole instead of splitting it.
const Section = ({ title, keepTogether = false, children }) => (
  <View style={s.section} wrap={!keepTogether}>
    <Text style={s.h2} minPresenceAhead={40}>
      {title}
    </Text>
    {children}
  </View>
);

const Bullets = ({ items }) =>
  items.filter(has).map((b) => (
    <View key={b} style={s.bullet}>
      <Text style={s.dot}>•</Text>
      <Text style={s.flex}>{b}</Text>
    </View>
  ));

const ResumeDocument = () => (
  <Document title={`${r.name} – Resume`} author={r.name} subject={`${r.title} resume`} creator={r.name}>
    <Page size="LETTER" style={s.page}>
      <View>
        <Text style={s.name}>{r.name}</Text>
        <Text style={s.title}>{join(r.title, r.location)}</Text>
        <View style={s.contact}>
          {has(r.email) && (
            <Link src={`mailto:${r.email}`} style={[s.link, s.contactItem]}>
              {r.email}
            </Link>
          )}
          {has(r.phone) && <Text style={s.contactItem}>{r.phone}</Text>}
          {(r.links || []).map((l) => (
            <Link key={l.url} src={l.url} style={[s.link, s.contactItem]}>
              {l.label}
            </Link>
          ))}
        </View>
      </View>

      {has(r.summary) && (
        <Section title="Summary">
          <Text>{r.summary}</Text>
        </Section>
      )}

      {has(r.experience) && (
        <Section title="Experience">
          {r.experience.map((e) => (
            <View key={`${e.company}-${e.dates}`} style={s.item} wrap={false}>
              <View style={s.head}>
                <Text style={s.flex}>
                  <Text style={s.strong}>
                    {e.role}, {e.company}
                  </Text>
                  {has(e.location) && <Text style={s.muted}>{`  ·  ${e.location}`}</Text>}
                </Text>
                <Text style={s.right}>{e.dates}</Text>
              </View>
              <Bullets items={e.bullets || []} />
              {has(e.stack) && <Text style={s.tech}>{e.stack}</Text>}
            </View>
          ))}
        </Section>
      )}

      {has(r.projects) && (
        <Section title="Projects">
          {r.projects.map((p) => (
            <View key={p.name} style={has(p.description) || has(p.stack) ? s.item : s.edu} wrap={false}>
              <View style={s.head}>
                <Text style={s.bold}>{p.name}</Text>
                {has(p.url) && (
                  <Link src={p.url} style={[s.link, s.right]}>
                    {p.url.replace(/^https?:\/\/(www\.)?/, "")}
                  </Link>
                )}
              </View>
              {has(p.description) && <Text style={s.sub}>{p.description}</Text>}
              {has(p.stack) && <Text style={s.tech}>{p.stack}</Text>}
            </View>
          ))}
        </Section>
      )}

      {has(r.skills) && (
        <Section title="Skills" keepTogether>
          {r.skills.map((g) => (
            <View key={g.group} style={s.row}>
              <Text style={s.label}>{g.group}</Text>
              <Text style={s.flex}>{g.items.join(", ")}</Text>
            </View>
          ))}
        </Section>
      )}

      {has(r.education) && (
        <Section title="Education">
          {r.education.map((e) => (
            <View key={e.school} style={s.edu} wrap={false}>
              <View style={s.head}>
                <Text style={s.flex}>
                  <Text style={s.bold}>{e.school}</Text>
                  {` · ${join(e.degree, e.location, has(e.gpa) ? `GPA ${e.gpa}` : "")}`}
                </Text>
                <Text style={s.right}>{e.dates}</Text>
              </View>
              {has(e.details) && <Text style={s.sub}>{e.details}</Text>}
            </View>
          ))}
        </Section>
      )}

      {has(r.certifications) && (
        <Section title="Certifications">
          <Bullets items={r.certifications} />
        </Section>
      )}

      {has(r.awards) && (
        <Section title="Awards">
          <Bullets items={r.awards} />
        </Section>
      )}
    </Page>
  </Document>
);

export default ResumeDocument;
