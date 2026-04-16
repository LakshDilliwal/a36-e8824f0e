import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Youtube, Send, MessageCircle } from "lucide-react";
import Logo from "./Logo";

const platformLinks = [
  { label: "Earn", href: "https://earn.a36labs.com", external: true },
  { label: "Events", to: "/events" },
  { label: "Residency", to: "/residency" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Apply", to: "/apply" },
];

const contentLinks = [
  { label: "Podcast", to: "/podcast" },
  { label: "Newsletter", to: "/newsletter" },
  { label: "Merch", to: "/merch" },
  { label: "Media Kit", to: "/media-kit" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Partner With Us", to: "/pitch" },
  { label: "FAQ", to: "/faq" },
];

const socials = [
  { Icon: Twitter, label: "X", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
  { Icon: Send, label: "Telegram", href: "#" },
  { Icon: MessageCircle, label: "Discord", href: "#" },
];

const ColHeading = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-[11px] text-accent uppercase tracking-[0.15em] mb-4 block">{children}</span>
);

const FLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-sm text-white/55 hover:text-white transition-opacity duration-200 block py-1.5">
    {children}
  </Link>
);

const FExt = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/55 hover:text-white transition-opacity duration-200 block py-1.5">
    {children}
  </a>
);

const Footer = () => (
  <footer className="bg-primary py-16 px-6 md:px-16">
    <div className="container max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Logo light />
          <p className="text-[13px] text-white/60 mt-3 font-bold">Where Builders Become Leaders</p>
          <p className="text-[13px] text-white/45 mt-3 max-w-[260px]">
            A global builder ecosystem network. Curating serious builders across Web3, AI, and emerging tech.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <ColHeading>PLATFORM</ColHeading>
          {platformLinks.map((l) =>
            l.external ? (
              <FExt key={l.label} href={l.href!}>{l.label}</FExt>
            ) : (
              <FLink key={l.label} to={l.to!}>{l.label}</FLink>
            )
          )}
        </div>

        <div>
          <ColHeading>CONTENT</ColHeading>
          {contentLinks.map((l) => (
            <FLink key={l.label} to={l.to}>{l.label}</FLink>
          ))}
        </div>

        <div>
          <ColHeading>COMPANY</ColHeading>
          {companyLinks.map((l) => (
            <FLink key={l.label} to={l.to}>{l.label}</FLink>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.08] mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3">
        <a href="mailto:hello@a36labs.com" className="text-[13px] text-white/45 hover:text-white transition-opacity duration-200">
          hello@a36labs.com
        </a>
        <p className="text-[13px] text-white/30">© 2026 A36Labs. MSME Registered. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
