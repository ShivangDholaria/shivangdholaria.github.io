import { profile, socials } from "../constants";
import { SocialIcon } from "./Icons";

const Footer = () => {
  const linkSocials = socials.filter((s) => s.url);

  return (
    <footer className="w-full bg-paper text-paper-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-black/10 px-6 py-8 sm:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex gap-3">
          {linkSocials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="transition-colors hover:text-paper-ink"
            >
              <SocialIcon name={s.icon} width={18} height={18} />
            </a>
          ))}
        </div>

        <span className="font-mono text-sm">
          New York City Metropolitan Area
        </span>
      </div>
    </footer>
  );
};

export default Footer;
