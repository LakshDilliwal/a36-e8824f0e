import { Link } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Events", to: "/events" },
  { label: "Earn", to: "/earn" },
  { label: "Team", to: "/team" },
  { label: "About", to: "/about" },
];

const contentLinks = [
  { label: "Podcast", to: "/podcast" },
  { label: "Newsletter", to: "/newsletter" },
  { label: "Books", to: "/books" },
  { label: "Media Kit", to: "/media-kit" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];

const socialLinks = [
  { label: "X", href: "https://x.com/a36labs" },
  { label: "​", href: "" },
];

const FooterColumn = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-3">
    <span className="font-bold text-[11px] text-accent uppercase tracking-[0.15em] mb-2">{heading}</span>
    {children}
  </div>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-sm text-white/55 hover:text-white transition-opacity duration-200">
    {children}
  </Link>
);

const FooterExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/55 hover:text-white transition-opacity duration-200">
    {children}
  </a>
);

const Footer = () => (
  <footer className="bg-primary py-16 px-6 md:px-16">
    <div className="container max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo light />
          <p className="text-[13px] text-white/45 mt-2">Where Builders Become Leaders</p>
          <p className="text-[13px] text-white/45 mt-1">Not for everyone but For the right ones</p>
          <a href="mailto:hello@a36labs.com" className="text-[13px] text-white/45 mt-3 block hover:text-white transition-opacity duration-200">
            hello@a36labs.com
          </a>
        </div>

        {/* Navigate */}
        <FooterColumn heading="NAVIGATE">
          {navLinks.map((l) => (
            <FooterLink key={l.label} to={l.to}>{l.label}</FooterLink>
          ))}
        </FooterColumn>

        {/* Content */}
        <FooterColumn heading="CONTENT">
          {contentLinks.map((l) => (
            <FooterLink key={l.label} to={l.to}>{l.label}</FooterLink>
          ))}
        </FooterColumn>

        {/* Legal + Socials */}
        <FooterColumn heading="LEGAL">
          {legalLinks.map((l) => (
            <FooterLink key={l.label} to={l.to}>{l.label}</FooterLink>
          ))}
          <div className="mt-4">
            <span className="font-bold text-[11px] text-accent uppercase tracking-[0.15em] mb-2 block">SOCIALS</span>
            {socialLinks.map((l) => (
              <FooterExtLink key={l.label} href={l.href}>{l.label}</FooterExtLink>
            ))}
          </div>
        </FooterColumn>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08] mt-12 pt-6 flex flex-col sm:flex-row justify-center">
        <p className="text-[13px] text-white/30 text-center">© 2026 A36 Labs. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
