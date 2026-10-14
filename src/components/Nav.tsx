import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X, ChevronDown } from "lucide-react";

const programsItems = [
  { label: "Residency", to: "/residency" },
  { label: "Cohort", to: "/cohort" },
];

const contentItems = [
  { label: "Podcast", to: "/podcast" },
  { label: "Newsletter", to: "/newsletter" },
];

const companyItems = [
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Media Kit", to: "/media-kit" },
  { label: "Merch", to: "/merch" },
  { label: "Partner With Us", to: "/apply" },
  { label: "FAQ", to: "/faq" },
];

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileContentOpen, setMobileContentOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const programsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setProgramsOpen(false);
    setContentOpen(false);
    setCompanyOpen(false);
    setMobileProgramsOpen(false);
    setMobileContentOpen(false);
    setMobileCompanyOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) setProgramsOpen(false);
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) setContentOpen(false);
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) setCompanyOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinkClass = "text-white/80 hover:text-white font-bold text-sm transition-opacity duration-200";

  const path = location.pathname;
  const isActive = (matchers: string[]) => matchers.some((m) => path === m || path.startsWith(m + "/"));
  const communityActive = isActive(["/community"]);
  const programsActive = isActive(["/residency", "/cohort"]);
  const contentActive = isActive(["/podcast", "/newsletter"]);
  const companyActive = isActive(["/about", "/careers", "/media-kit", "/merch", "/apply", "/faq"]);
  const earnActive = isActive(["/earn"]);
  const eventsActive = isActive(["/events"]);
  const ecosystemActive = isActive(["/ecosystem"]);
  const activeCls = (on: boolean) => (on ? " a36-nav-active" : "");

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary h-16 flex items-center px-6 lg:px-10">
        {/* DESKTOP LEFT */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
          <Link to="/community" className={`${navLinkClass}${activeCls(communityActive)}`}>COMMUNITY</Link>
          <div className="relative" ref={programsRef}>
            <button
              onClick={() => { setProgramsOpen(!programsOpen); setContentOpen(false); setCompanyOpen(false); }}
              className={`${navLinkClass} flex items-center gap-1${activeCls(programsActive)}`}
            >
              PROGRAMS <ChevronDown size={14} />
            </button>
            {programsOpen && (
              <div className="absolute top-full left-0 mt-2 bg-primary border border-white/10 border-t-2 border-t-accent py-2 min-w-[220px] z-[60] a36-fade-down">
                {programsItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block px-4 py-2 text-sm text-white/70 hover:text-accent hover:bg-white/5"
                    onClick={() => setProgramsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/earn" className={`${navLinkClass}${activeCls(earnActive)}`}>EARN</Link>
          <Link to="/events" className={`${navLinkClass}${activeCls(eventsActive)}`}>EVENTS</Link>
        </div>

        {/* CENTER LOGO */}
        <Link to="/" aria-label="A36 Labs — Home" className="absolute left-1/2 -translate-x-1/2 inline-flex items-center">
          <Logo variant="nav" />
        </Link>

        {/* DESKTOP RIGHT */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
          <Link to="/ecosystem" className={`${navLinkClass}${activeCls(ecosystemActive)}`}>ECOSYSTEM</Link>
          <div className="relative" ref={contentRef}>
            <button
              onClick={() => { setContentOpen(!contentOpen); setProgramsOpen(false); setCompanyOpen(false); }}
              className={`${navLinkClass} flex items-center gap-1${activeCls(contentActive)}`}
            >
              CONTENT <ChevronDown size={14} />
            </button>
            {contentOpen && (
              <div className="absolute top-full left-0 mt-2 bg-primary border border-white/10 border-t-2 border-t-accent py-2 min-w-[200px] z-[60] a36-fade-down">
                {contentItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block px-4 py-2 text-sm text-white/70 hover:text-accent hover:bg-white/5"
                    onClick={() => setContentOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="relative" ref={companyRef}>
            <button
              onClick={() => { setCompanyOpen(!companyOpen); setProgramsOpen(false); setContentOpen(false); }}
              className={`${navLinkClass} flex items-center gap-1${activeCls(companyActive)}`}
            >
              COMPANY <ChevronDown size={14} />
            </button>
            {companyOpen && (
              <div className="absolute top-full right-0 mt-2 bg-primary border border-white/10 border-t-2 border-t-accent py-2 min-w-[220px] z-[60] a36-fade-down">
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
          <Link to="/apply" className="btn-gold text-xs py-2.5 px-5">APPLY →</Link>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="flex lg:hidden items-center ml-auto">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-white/80 hover:text-white inline-flex items-center justify-center w-11 h-11 -mr-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-primary z-[100] flex flex-col overflow-y-auto a36-drawer-enter">
          <div className="flex items-center justify-between px-6 pt-6">
            <Link to="/" aria-label="A36 Labs — Home" onClick={() => setMobileOpen(false)} className="inline-flex items-center">
              <Logo variant="nav" />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="text-white inline-flex items-center justify-center w-11 h-11 -mr-2" aria-label="Close menu"><X size={24} /></button>
          </div>

          <div className="flex flex-col gap-1 mt-12 px-6 flex-1">
            <Link to="/community" className="a36-drawer-link text-white font-bold text-2xl py-2 min-h-[44px]" onClick={() => setMobileOpen(false)}>COMMUNITY</Link>

            {/* Programs accordion */}
            <button
              className="text-white font-bold text-2xl py-2 min-h-[44px] text-left flex items-center gap-2"
              onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
              aria-expanded={mobileProgramsOpen}
            >
              PROGRAMS <ChevronDown size={18} className={`transition-transform duration-200 ${mobileProgramsOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileProgramsOpen && (
              <div className="flex flex-col gap-1 pl-4 mb-2">
                {programsItems.map((item) => (
                  <Link key={item.label} to={item.to} className="text-white/60 font-bold text-base py-1.5 min-h-[44px] flex items-center" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>
            )}

            <Link to="/earn" className="a36-drawer-link text-white font-bold text-2xl py-2 min-h-[44px]" onClick={() => setMobileOpen(false)}>EARN</Link>
            <Link to="/events" className="a36-drawer-link text-white font-bold text-2xl py-2 min-h-[44px]" onClick={() => setMobileOpen(false)}>EVENTS</Link>
            <Link to="/ecosystem" className="a36-drawer-link text-white font-bold text-2xl py-2 min-h-[44px]" onClick={() => setMobileOpen(false)}>ECOSYSTEM</Link>

            {/* Content accordion */}
            <button
              className="text-white font-bold text-2xl py-2 min-h-[44px] text-left flex items-center gap-2"
              onClick={() => setMobileContentOpen(!mobileContentOpen)}
              aria-expanded={mobileContentOpen}
            >
              CONTENT <ChevronDown size={18} className={`transition-transform duration-200 ${mobileContentOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileContentOpen && (
              <div className="flex flex-col gap-1 pl-4 mb-2">
                {contentItems.map((item) => (
                  <Link key={item.label} to={item.to} className="text-white/60 font-bold text-base py-1.5 min-h-[44px] flex items-center" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>
            )}

            {/* Company accordion */}
            <button
              className="text-white font-bold text-2xl py-2 min-h-[44px] text-left flex items-center gap-2"
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              aria-expanded={mobileCompanyOpen}
            >
              COMPANY <ChevronDown size={18} className={`transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileCompanyOpen && (
              <div className="flex flex-col gap-1 pl-4 mb-2">
                {companyItems.map((item) => (
                  <Link key={item.label} to={item.to} className="text-white/60 font-bold text-base py-1.5 min-h-[44px] flex items-center" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
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
