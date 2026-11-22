import { useState } from "react";
import emailjs from "@emailjs/browser";

import { ArrowRight, ArrowUpRight } from "./Icons";
import ResumeButton from "./ResumeButton";
import { profile, socials } from "../constants";

const initial = { name: "", email: "", message: "" };

const fieldClass =
  "min-h-12 w-full rounded-xl border border-line bg-bg px-3.5 text-[15px] text-fg placeholder:text-muted transition-colors focus:border-accent focus:outline-none";

const Contact = () => {
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
          setStatus({ state: "success", msg: "Message sent. I'll get back to you soon." });
          setForm(initial);
        },
        (err) => {
          console.error(err);
          setStatus({ state: "error", msg: `The message didn't send. Please email me at ${profile.email}.` });
        }
      );
  };

  const loading = status.state === "loading";

  return (
    <section id="contact" className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-20 lg:py-24">
      <div className="grid gap-10 rounded-[28px] bg-surface p-7 sm:p-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div className="flex flex-col items-start gap-5">
          <p className="text-muted">Hiring for a backend role?</p>
          <h2 className="mark text-[clamp(72px,11vw,120px)] leading-[0.95]">Let&apos;s talk.</h2>
          <p className="max-w-[46ch] text-lg leading-relaxed text-soft">
            I&apos;m looking for backend roles at mid-sized tech, fintech and healthtech companies. Email is the fastest way to reach me.
          </p>
          <a href={`mailto:${profile.email}`} className="btn btn-primary max-w-full break-all">
            {profile.email} <ArrowRight />
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-[15px]">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="link-draw inline-flex min-h-11 items-center gap-1 font-medium text-fg">
                {s.name} <ArrowUpRight />
              </a>
            ))}
            <ResumeButton className="link-draw inline-flex min-h-11 items-center gap-1 font-medium text-fg" />
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-[22px] bg-surface-2 p-6 sm:p-8">
          <p className="display text-[28px] leading-tight">Or send a message</p>
          <label htmlFor="cf-name" className="flex flex-col gap-2 text-sm text-muted">
            Name
            <input id="cf-name" type="text" name="name" required autoComplete="name" value={form.name} onChange={onChange} className={fieldClass} />
          </label>
          <label htmlFor="cf-email" className="flex flex-col gap-2 text-sm text-muted">
            Email
            <input id="cf-email" type="email" name="email" required autoComplete="email" value={form.email} onChange={onChange} className={fieldClass} />
          </label>
          <label htmlFor="cf-message" className="flex flex-col gap-2 text-sm text-muted">
            Message
            <textarea id="cf-message" name="message" rows={4} required value={form.message} onChange={onChange} className={`${fieldClass} resize-none py-3`} />
          </label>
          <button type="submit" disabled={loading} className="btn btn-outline w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit">
            {loading ? "Sending…" : "Send message"}
          </button>
          <p role="status" aria-live="polite" className={`min-h-5 text-sm ${status.state === "error" ? "text-fg" : "text-ok"}`}>
            {status.msg}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
