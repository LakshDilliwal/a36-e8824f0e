import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X, ChevronDown } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setContentOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleAnchor = (hash: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/" + hash;
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mobileLinks = [
    { label: "About", href: "/" },
    { label: "FAQ", href: "/" },
    { label: "Residency", href: "/" },
    { label: "Fellowship", href: "/" },
    { label: "Pitch", href: "/" },
    { label: "Merchandise", href: "/" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary h-16 flex items-center px-6 md:px-16">
      {/* Desktop left links */}
      <div className="hidden md:flex items-center gap-8 flex-1">
        <Link to="/" className="text-white/80 hover:text-white font-bold text-sm transition-opacity">
          Earn
        </Link>
        <Link to="/" className="text-white/80 hover:text-white font-bold text-sm transition-opacity">
          Ecosystem
        </Link>
      </div>

      {/* Center logo */}
      <Link to="/" className="md:absolute md:left-1/2 md:-translate-x-1/2" onClick={() => setOpen(false)}>
        <Logo light />
      </Link>

      {/* Desktop right links */}
      <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
        <Link to="/sprints" className="text-white/80 hover:text-white font-bold text-sm transition-opacity">
          Events
        </Link>

        {/* Content dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setContentOpen(!contentOpen)}
            className="text-white/80 hover:text-white font-bold text-sm transition-opacity flex items-center gap-1"
          >
            Content <ChevronDown size={14} />
          </button>
          {contentOpen && (
            <div className="absolute top-full right-0 mt-2 bg-primary border border-white/10 rounded-sm py-2 min-w-[160px]">
              <Link
                to="/transmissions"
                className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5"
                onClick={() => setContentOpen(false)}
              >
                Podcast
              </Link>
              <a
                href="#newsletter"
                className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5"
                onClick={() => { setContentOpen(false); handleAnchor("#newsletter"); }}
              >
                Newsletter
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5"
                onClick={() => setContentOpen(false)}
              >
                Books
              </a>
            </div>
          )}
        </div>

        <Link to="/" className="text-white/80 hover:text-white font-bold text-sm transition-opacity">
          Log In
        </Link>

        <button
          onClick={() => handleAnchor("#apply")}
          className="btn-gold text-xs py-2.5 px-5"
        >
          APPLY
        </button>
      </div>

      {/* Mobile: hamburger right */}
      <button
        className="md:hidden text-white ml-auto"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile full-screen drawer */}
      {open && (
        <div className="fixed inset-0 top-0 bg-primary z-50 flex flex-col px-6 pt-6 md:hidden">
          <div className="flex items-center justify-between mb-12">
            <Logo light />
            <button onClick={() => setOpen(false)} className="text-white" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {mobileLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-white font-bold text-xl"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => handleAnchor("#apply")}
              className="text-white font-bold text-xl text-left"
            >
              BECOME A PARTNER
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
