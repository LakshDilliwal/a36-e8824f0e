import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X, ChevronDown } from "lucide-react";

const servicesItems = [
  { label: "Events", to: "/events" },
  { label: "Podcast (Base Layer)", to: "/podcast" },
  { label: "Newsletter (A36 Signal)", to: "/newsletter" },
  { label: "Merchandise (BitSwags)", to: "/merch" },
  { label: "Residency", to: "/residency" },
];

const companyItems = [
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Media Kit", to: "/media-kit" },
  { label: "Partner With Us", to: "/pitch" },
];

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setCompanyOpen(false);
    setMobileServicesOpen(false);
    setMobileCompanyOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) setCompanyOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinkClass = "text-white/80 hover:text-white font-bold text-sm transition-opacity duration-200";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary h-16 flex items-center px-6 lg:px-10">
        {/* DESKTOP LEFT */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => { setServicesOpen(!servicesOpen); setCompanyOpen(false); }}
              className={`${navLinkClass} flex items-center gap-1`}
            >
              SERVICES <ChevronDown size={14} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-primary border border-white/10 py-2 min-w-[220px] z-[60]">
                {servicesItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block px-4 py-2 text-sm text-white/70 hover:text-accent hover:bg-white/5"
                    onClick={() => setServicesOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/earn" className={navLinkClass}>EARN</Link>
          <Link to="/ecosystem" className={navLinkClass}>ECOSYSTEM</Link>
        </div>

        {/* CENTER LOGO */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <Logo light />
        </Link>

        {/* DESKTOP RIGHT */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
          <div className="relative" ref={companyRef}>
            <button
              onClick={() => { setCompanyOpen(!companyOpen); setServicesOpen(false); }}
              className={`${navLinkClass} flex items-center gap-1`}
            >
              COMPANY <ChevronDown size={14} />
            </button>
            {companyOpen && (
              <div className="absolute top-full right-0 mt-2 bg-primary border border-white/10 py-2 min-w-[200px] z-[60]">
                {companyItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block px-4 py-2 text-sm text-white/70 hover:text-accent hover:bg-white/5"
                    onClick={() => setCompanyOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/events" className={navLinkClass}>EVENTS</Link>
          <Link to="/apply" className="btn-gold text-xs py-2.5 px-5">APPLY →</Link>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="flex lg:hidden items-center ml-auto">
          <button onClick={() => setMobileOpen(true)} className="text-white/80 hover:text-white" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-primary z-[100] flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 pt-6">
            <Logo light />
            <button onClick={() => setMobileOpen(false)} className="text-white" aria-label="Close menu"><X size={24} /></button>
          </div>

          <div className="flex flex-col gap-1 mt-12 px-6 flex-1">
            <Link to="/earn" className="text-white font-bold text-2xl py-2" onClick={() => setMobileOpen(false)}>EARN</Link>
            <Link to="/ecosystem" className="text-white font-bold text-2xl py-2" onClick={() => setMobileOpen(false)}>ECOSYSTEM</Link>
            <Link to="/events" className="text-white font-bold text-2xl py-2" onClick={() => setMobileOpen(false)}>EVENTS</Link>

            {/* Services accordion */}
            <button
              className="text-white font-bold text-2xl py-2 text-left flex items-center gap-2"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              SERVICES <ChevronDown size={18} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-1 pl-4 mb-2">
                {servicesItems.map((item) => (
                  <Link key={item.label} to={item.to} className="text-white/60 font-bold text-base py-1.5" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>
            )}

            {/* Company accordion */}
            <button
              className="text-white font-bold text-2xl py-2 text-left flex items-center gap-2"
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
            >
              COMPANY <ChevronDown size={18} className={`transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileCompanyOpen && (
              <div className="flex flex-col gap-1 pl-4 mb-2">
                {companyItems.map((item) => (
                  <Link key={item.label} to={item.to} className="text-white/60 font-bold text-base py-1.5" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
                <Link to="/faq" className="text-white/60 font-bold text-base py-1.5" onClick={() => setMobileOpen(false)}>FAQ</Link>
              </div>
            )}
          </div>

          <div className="px-6 mb-8 mt-auto">
            <Link to="/apply" className="btn-gold w-full text-center block" onClick={() => setMobileOpen(false)}>APPLY →</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
