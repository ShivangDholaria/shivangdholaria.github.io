import { profile } from "../constants";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-x-6 gap-y-3 px-5 py-8 sm:px-8 text-sm text-muted">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>{profile.location}</span>
    </div>
  </footer>
);

export default Footer;
