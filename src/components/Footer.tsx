import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, Send, Calendar } from "lucide-react";

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.844l-5.36-6.99L4.2 22H.94l8.02-9.17L1.5 2h7.02l4.84 6.4L18.244 2Zm-1.2 18h1.86L7.04 4H5.06l11.984 16Z" />
  </svg>
);
import Logo from "./Logo";

const platformLinks = [
  { label: "Earn", to: "/earn" },
  { label: "Events", to: "/events" },
  { label: "Community", to: "/community" },
  { label: "Residency", to: "/residency" },
  { label: "Cohort", to: "/cohort" },
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
  { label: "Careers", to: "/careers" },
  { label: "Partner With Us", to: "/apply" },
  { label: "FAQ", to: "/faq" },
];

const socials = [
  { Icon: XIcon, label: "X", href: "https://x.com/A36Labs" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/a36labs" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/a36labs" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@a36labs" },
  { Icon: Send, label: "Telegram", href: "https://t.me/+sqfR_6vZCdZhY2Fl" },
  { Icon: Calendar, label: "Luma", href: "https://luma.com/a36" },
];

const ColHeading = ({ children }: { children: React.ReactNode }) => (
  <span className="font-bold text-[11px] text-accent uppercase tracking-[0.15em] mb-4 block">{children}</span>
);

const FLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-sm text-white/55 hover:text-white transition-opacity duration-200 block py-2 min-h-[36px]">
    {children}
  </Link>
);


const Footer = () => (
  <footer className="bg-primary py-10 md:py-16 px-6 md:px-16 relative">
    <div className="a36-hairline-gold-top" />
    <div className="container max-w-[1200px] mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {/* Brand */}
        <div className="col-span-2 lg:col-span-1">
          <Link to="/" aria-label="A36 Labs — Home" className="inline-flex items-center">
            <Logo variant="footer" />
          </Link>
          <p className="text-[13px] text-white/60 mt-3 font-bold">The Home of Serious Builders</p>
          <p className="text-[13px] text-white/45 mt-3 max-w-[260px]">
            A global builder ecosystem network. Curating serious founders across Web3, AI, and emerging tech.
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
          {platformLinks.map((l) => (
            <FLink key={l.label} to={l.to}>{l.label}</FLink>
          ))}
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

      <div className="border-t border-white/[0.08] mt-8 md:mt-12 pt-5 md:pt-6 flex flex-col sm:flex-row justify-between gap-3">
        <a href="mailto:hello@a36labs.com" className="text-[13px] text-white/45 hover:text-white transition-opacity duration-200">
          hello@a36labs.com
        </a>
        <p className="text-[13px] text-white/30">© 2026 A36 Labs. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
