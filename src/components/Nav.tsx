import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  // Close everything on route change
  useEffect(() => {
    setDrawerOpen(false);
    setMobileOpen(false);
    setContentOpen(false);
    setMobileContentOpen(false);
    setProfileOpen(false);
  }, [location]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
        setContentOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleAnchor = (hash: string) => {
    setMobileOpen(false);
    setDrawerOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/" + hash;
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contentItems = [
    { label: "Podcast", to: "/transmissions" },
    { label: "Newsletter", anchor: "#newsletter" },
    { label: "Books", to: "#" },
  ];

  const drawerLinks = [
    { label: "About", to: "/" },
    { label: "FAQ", to: "/" },
    { label: "Residency", to: "/" },
    { label: "Fellowship", to: "/" },
    { label: "Pitch", to: "/" },
    { label: "Merchandise", to: "/" },
  ];

  const mobileLinks = [
    { label: "Earn", to: "/" },
    { label: "Ecosystem", to: "/" },
    { label: "Events", to: "/sprints" },
    { label: "Team", to: "/team" },
    { label: "About", to: "/" },
    { label: "FAQ", to: "/" },
    { label: "Residency", to: "/" },
    { label: "Fellowship", to: "/" },
    { label: "Pitch", to: "/" },
    { label: "Merchandise", to: "/" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary h-16 flex items-center px-6 lg:px-10">

        {/* ===== DESKTOP (lg+) ===== */}
        {/* Zone 1 — Left links */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
          <Link to="/" className="text-white/80 hover:text-white font-bold text-sm transition-opacity duration-200">
            Earn
          </Link>
          <Link to="/" className="text-white/80 hover:text-white font-bold text-sm transition-opacity duration-200">
            Ecosystem
          </Link>
          <Link to="/sprints" className="text-white/80 hover:text-white font-bold text-sm transition-opacity duration-200">
            Events
          </Link>
        </div>

        {/* Zone 2 — Center logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2" onClick={() => { setMobileOpen(false); setDrawerOpen(false); }}>
          <Logo light />
        </Link>

        {/* Zone 3 — Right (desktop) */}
        <div className="hidden lg:flex items-center flex-1">
          {/* Sub-group A — centered */}
          <div className="flex items-center justify-center gap-6 flex-1">
            {/* Content dropdown */}
            <div className="relative" ref={contentRef}>
              <button
                onClick={() => setContentOpen(!contentOpen)}
                className="text-white/80 hover:text-white font-bold text-sm transition-opacity duration-200 flex items-center gap-1"
              >
                Content <ChevronDown size={14} />
              </button>
              {contentOpen && (
                <div className="absolute top-full right-0 mt-2 bg-primary border border-white/10 rounded-sm py-2 min-w-[160px] z-[60]">
                  {contentItems.map((item) =>
                    item.anchor ? (
                      <button
                        key={item.label}
                        className="block w-full text-left px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5"
                        onClick={() => { setContentOpen(false); handleAnchor(item.anchor); }}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        key={item.label}
                        to={item.to!}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5"
                        onClick={() => setContentOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>

            <Link to="/team" className="text-white/80 hover:text-white font-bold text-sm transition-opacity duration-200">
              Team
            </Link>

            {/* Desktop hamburger (drawer trigger) */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-white/80 hover:text-white transition-opacity duration-200"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Sub-group B — right end */}
          <div className="flex items-center gap-4 ml-auto">
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-8 h-8 rounded-full bg-accent text-primary font-bold text-[13px] flex items-center justify-center"
                >
                  AB
                </button>
                {profileOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-primary border border-white/10 rounded-sm py-2 min-w-[160px] z-[60]">
                    <Link to="/" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5" onClick={() => setProfileOpen(false)}>
                      My Profile
                    </Link>
                    <Link to="/" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5" onClick={() => setProfileOpen(false)}>
                      Settings
                    </Link>
                    <button className="block w-full text-left px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5" onClick={() => setProfileOpen(false)}>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/" className="text-white/80 hover:text-white font-bold text-sm transition-opacity duration-200">
                Log In
              </Link>
            )}

            <button
              onClick={() => handleAnchor("#apply")}
              className="btn-gold text-xs py-2.5 px-5"
            >
              APPLY
            </button>
          </div>
        </div>

        {/* ===== TABLET + MOBILE (< lg) ===== */}
        <div className="flex lg:hidden items-center gap-3 ml-auto">
          {isLoggedIn ? (
            <button className="w-8 h-8 rounded-full bg-accent text-primary font-bold text-[13px] flex items-center justify-center">
              AB
            </button>
          ) : (
            <Link to="/" className="text-white/80 hover:text-white transition-opacity duration-200">
              <UserCircle size={20} />
            </Link>
          )}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-white/80 hover:text-white transition-opacity duration-200"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* ===== DESKTOP DRAWER (right slide-in, 320px) ===== */}
      {drawerOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-[99]"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Panel */}
          <div
            className="fixed top-0 right-0 h-screen w-[320px] bg-primary border-l border-white/10 z-[100] flex flex-col px-6 pt-6 animate-slide-in-right"
          >
            <div className="flex items-center justify-between">
              <Logo light />
              <button onClick={() => setDrawerOpen(false)} className="text-white" aria-label="Close drawer">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-2.5 mt-12">
              {drawerLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-white/80 hover:text-white font-bold text-lg py-2 transition-opacity duration-200"
                  onClick={() => setDrawerOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ===== MOBILE / TABLET FULL-SCREEN DRAWER ===== */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col lg:hidden overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6">
            <Logo light />
            <button onClick={() => setMobileOpen(false)} className="text-white" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 mt-12 px-6 flex-1">
            {mobileLinks.map((l) => (
              l.label === "Events" ? (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-white font-bold text-xl py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ) : (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-white font-bold text-xl py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              )
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
                {contentItems.map((item) =>
                  item.anchor ? (
                    <button
                      key={item.label}
                      className="text-white/60 font-bold text-base py-1 text-left"
                      onClick={() => { setMobileOpen(false); handleAnchor(item.anchor); }}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.to!}
                      className="text-white/60 font-bold text-base py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            )}

            <button
              onClick={() => { setMobileOpen(false); handleAnchor("#apply"); }}
              className="text-white font-bold text-xl py-1 text-left"
            >
              BECOME A PARTNER
            </button>
          </div>

          {/* Bottom buttons */}
          <div className="px-6 mb-8 flex flex-col gap-3 mt-auto">
            <Link
              to="/"
              className="w-full text-center border-2 border-white text-white font-bold uppercase tracking-widest rounded-sm py-3.5 text-sm transition-opacity duration-200 hover:opacity-85"
              onClick={() => setMobileOpen(false)}
            >
              LOG IN
            </Link>
            <button
              onClick={() => { setMobileOpen(false); handleAnchor("#apply"); }}
              className="btn-gold w-full text-center"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
