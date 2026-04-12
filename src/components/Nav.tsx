import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X, ChevronDown, UserCircle } from "lucide-react";

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [mobileContentOpen, setMobileContentOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setDrawerOpen(false);
    setMobileOpen(false);
    setContentOpen(false);
    setMobileContentOpen(false);
    setProfileOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) setContentOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const contentItems = [
    { label: "Podcast", to: "/podcast" },
    { label: "Newsletter", to: "/newsletter" },
    { label: "Books", to: "/books" },
  ];

  const drawerLinks = [
    { label: "About", to: "/about" },
    { label: "FAQ", to: "/faq" },
    { label: "Residency", to: "/residency" },
    { label: "Fellowship", to: "/fellowship" },
    { label: "Pitch", to: "/pitch" },
    { label: "Merchandise", to: "/merch" },
  ];

  const mobileLinks = [
    { label: "Earn", to: "/earn" },
    { label: "Ecosystem", to: "/ecosystem" },
    { label: "Events", to: "/events" },
    { label: "Team", to: "/team" },
    { label: "About", to: "/about" },
    { label: "FAQ", to: "/faq" },
    { label: "Residency", to: "/residency" },
    { label: "Fellowship", to: "/fellowship" },
    { label: "Pitch", to: "/pitch" },
    { label: "Merchandise", to: "/merch" },
  ];

  const navLinkClass = "text-white/80 hover:text-white font-bold text-sm transition-opacity duration-200";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary h-16 flex items-center px-6 lg:px-10">
        {/* DESKTOP (lg+) */}
        {/* Zone 1 — Left links centered */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
          <Link to="/earn" className={navLinkClass}>Earn</Link>
          <Link to="/ecosystem" className={navLinkClass}>Ecosystem</Link>
          <Link to="/events" className={navLinkClass}>Events</Link>
        </div>

        {/* Zone 2 — Center logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <Logo light />
        </Link>

        {/* Zone 3 — Right */}
        <div className="hidden lg:flex items-center flex-1">
          {/* Sub-group A — centered */}
          <div className="flex items-center justify-center gap-6 flex-1">
            <div className="relative" ref={contentRef}>
              <button
                onClick={() => setContentOpen(!contentOpen)}
                className={`${navLinkClass} flex items-center gap-1`}
              >
                Content <ChevronDown size={14} />
              </button>
              {contentOpen && (
                <div className="absolute top-full right-0 mt-2 bg-primary border border-white/10 py-2 min-w-[160px] z-[60]">
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

            <Link to="/team" className={navLinkClass}>Team</Link>

            <button
              onClick={() => setDrawerOpen(true)}
              className="text-white/80 hover:text-white transition-opacity duration-200"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-white/20 mx-4" />

          {/* Sub-group B — right end */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-8 h-8 bg-accent text-primary font-bold text-[13px] flex items-center justify-center"
                >
                  AB
                </button>
                {profileOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-primary border border-white/10 py-2 min-w-[160px] z-[60]">
                    <Link to="/" className="block px-4 py-2 text-sm text-white/70 hover:text-accent hover:bg-white/5">My Profile</Link>
                    <Link to="/" className="block px-4 py-2 text-sm text-white/70 hover:text-accent hover:bg-white/5">Settings</Link>
                    <button className="block w-full text-left px-4 py-2 text-sm text-white/70 hover:text-accent hover:bg-white/5">Sign Out</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/" className={navLinkClass}>Log In</Link>
            )}
            <Link to="/apply" className="btn-gold text-xs py-2.5 px-5">APPLY</Link>
          </div>
        </div>

        {/* MOBILE/TABLET (< lg) */}
        <div className="flex lg:hidden items-center gap-3 ml-auto">
          {isLoggedIn ? (
            <button className="w-8 h-8 bg-accent text-primary font-bold text-[13px] flex items-center justify-center">AB</button>
          ) : (
            <Link to="/" className="text-white/80 hover:text-white"><UserCircle size={20} /></Link>
          )}
          <button onClick={() => setMobileOpen(true)} className="text-white/80 hover:text-white" aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* DESKTOP DRAWER */}
      {drawerOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[99]" onClick={() => setDrawerOpen(false)} />
          <div className="fixed top-0 right-0 h-screen w-[320px] bg-primary border-l border-white/10 z-[100] flex flex-col px-6 pt-6 animate-slide-in-right">
            <div className="flex items-center justify-between">
              <Logo light />
              <button onClick={() => setDrawerOpen(false)} className="text-white" aria-label="Close drawer"><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-2.5 mt-12">
              {drawerLinks.map((l) => (
                <Link key={l.label} to={l.to} className="text-white/80 hover:text-accent font-bold text-lg py-2 transition-colors duration-200">{l.label}</Link>
              ))}
              <Link to="/apply" className="text-white/80 hover:text-accent font-bold text-lg py-2 transition-colors duration-200">BECOME A PARTNER</Link>
            </div>
          </div>
        </>
      )}

      {/* MOBILE FULL-SCREEN DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col lg:hidden overflow-y-auto">
          <div className="flex items-center justify-between px-6 pt-6">
            <Logo light />
            <button onClick={() => setMobileOpen(false)} className="text-white"><X size={24} /></button>
          </div>

          <div className="flex flex-col gap-2 mt-12 px-6 flex-1">
            {mobileLinks.map((l) => (
              <Link key={l.label} to={l.to} className="text-white font-bold text-xl py-1" onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}

            {/* Content expandable */}
            <button
              className="text-white font-bold text-xl py-1 text-left flex items-center gap-2"
              onClick={() => setMobileContentOpen(!mobileContentOpen)}
            >
              Content <ChevronDown size={16} className={`transition-transform duration-200 ${mobileContentOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileContentOpen && (
              <div className="flex flex-col gap-1 pl-4">
                {contentItems.map((item) => (
                  <Link key={item.label} to={item.to} className="text-white/60 font-bold text-base py-1" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                ))}
              </div>
            )}

            <Link to="/apply" className="text-white font-bold text-xl py-1" onClick={() => setMobileOpen(false)}>Become a Partner</Link>
          </div>

          <div className="px-6 mb-8 flex flex-col gap-3 mt-auto">
            <Link to="/" className="btn-ghost-light w-full text-center" onClick={() => setMobileOpen(false)}>LOG IN</Link>
            <Link to="/apply" className="btn-gold w-full text-center" onClick={() => setMobileOpen(false)}>APPLY NOW</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
