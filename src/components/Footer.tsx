import { Link } from "react-router-dom";
import Logo from "./Logo";

const productLinks = [
  { label: "Earn", href: "/" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Events", href: "/sprints" },
  { label: "Podcast", href: "/transmissions" },
  { label: "Newsletter", href: "/#newsletter" },
  { label: "Books", href: "#" },
  { label: "Apply", href: "/apply" },
];

const companyLinks = [
  { label: "About", href: "/" },
  { label: "Contact", href: "mailto:partnerships@a36labs.com" },
  { label: "Press", href: "/media-kit" },
  { label: "People", href: "#" },
  { label: "Careers", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Security", href: "#" },
  { label: "Terms of Use", href: "#" },
];

const socialLinks = [
  { label: "X", href: "https://x.com/a36labs" },
  { label: "LinkedIn", href: "https://linkedin.com/company/a36labs" },
  { label: "Instagram", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "Discord", href: "#" },
];

const FooterColumn = ({ heading, links }: { heading: string; links: { label: string; href: string }[] }) => (
  <div className="flex flex-col gap-3">
    <span className="font-bold text-[11px] text-accent uppercase tracking-[0.15em] mb-2">{heading}</span>
    {links.map((l) =>
      l.href.startsWith("http") || l.href.startsWith("mailto") ? (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-sm text-white/55 hover:text-white transition-opacity duration-200"
        >
          {l.label}
        </a>
      ) : (
        <Link
          key={l.label}
          to={l.href}
          className="text-sm text-white/55 hover:text-white transition-opacity duration-200"
        >
          {l.label}
        </Link>
      )
    )}
  </div>
);

const Footer = () => (
  <footer className="bg-primary py-16 px-6 md:px-16">
    <div className="container max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div>
          <Logo light />
          <p className="text-[13px] text-white/45 mt-2">Where Builders Become Leaders</p>
          <p className="text-[12px] text-white/30 mt-4">© 2026 A36 Labs. All rights reserved</p>
        </div>

        <FooterColumn heading="PRODUCT" links={productLinks} />
        <FooterColumn heading="COMPANY" links={companyLinks} />
        <FooterColumn heading="LEGAL" links={legalLinks} />
        <FooterColumn heading="SOCIALS" links={socialLinks} />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08] mt-12 pt-6 flex flex-col sm:flex-row justify-between">
        <p className="text-[13px] text-white/30">Not for everyone. For the right ones.</p>
        <p className="text-[13px] text-white/30">@a36labs</p>
      </div>
    </div>
  </footer>
);

export default Footer;
