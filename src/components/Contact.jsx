import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Reveal from "./Reveal";
import { profile, socials } from "../constants";
import { SocialIcon } from "./Icons";

const initial = { name: "", email: "", message: "" };

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({
            state: "success",
            msg: "Thanks — I'll get back to you soon.",
          });
          setForm(initial);
        },
        (err) => {
          console.error(err);
          setStatus({
            state: "error",
            msg: "Something went wrong. Please email me directly.",
          });
        }
      );
  };

  const loading = status.state === "loading";
  const linkSocials = socials.filter((s) => s.url);
  const field =
    "rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-paper-ink outline-none transition-colors placeholder:text-paper-muted/70 focus:border-paper-accent";

  return (
    <section id="contact" className="w-full bg-paper text-paper-ink">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,440px)]">
          <Reveal>
            <div className="font-mono text-[13px] uppercase tracking-[0.14em] text-paper-accent">
              06 / Contact
            </div>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Building something
              <br />
              reliable? Let&apos;s talk.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                {profile.email}
              </a>
              {linkSocials
                .filter((s) => s.icon !== "mail")
                .map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-paper-ink transition-colors hover:border-black/40"
                  >
                    <SocialIcon name={s.icon} width={16} height={16} />
                    {s.name} ↗
                  </a>
                ))}
            </div>

            {profile.location && (
              <p className="mt-6 text-sm text-paper-muted">
                Based in {profile.location}.
              </p>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white/60 p-6"
            >
              {["name", "email"].map((f) => (
                <label key={f} className="flex flex-col gap-2">
                  <span className="text-sm capitalize text-paper-muted">{f}</span>
                  <input
                    type={f === "email" ? "email" : "text"}
                    name={f}
                    required
                    value={form[f]}
                    onChange={onChange}
                    placeholder={f === "email" ? "you@example.com" : "Your name"}
                    className={field}
                  />
                </label>
              ))}
              <label className="flex flex-col gap-2">
                <span className="text-sm text-paper-muted">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={onChange}
                  placeholder="What's on your mind?"
                  className={`resize-none ${field}`}
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send message"}
              </button>

              {status.msg && (
                <p
                  className={`text-sm ${
                    status.state === "success"
                      ? "text-emerald-600"
                      : "text-red-600"
                  }`}
                  role="status"
                >
                  {status.msg}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
