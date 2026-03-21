import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sprints", href: "/sprints" },
  { label: "Transmissions", href: "/transmissions" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleAnchor = (hash: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/" + hash;
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary h-16 flex items-center px-6 md:px-16">
      <Link to="/" className="mr-auto" onClick={() => setOpen(false)}>
        <Logo light />
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((l) => (
          <Link
            key={l.label}
            to={l.href}
            className="text-white/60 hover:text-white font-normal text-sm transition-opacity"
          >
            {l.label}
          </Link>
        ))}
        <button
          onClick={() => handleAnchor("#passport")}
          className="btn-gold text-xs py-2.5 px-5"
        >
          Apply →
        </button>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-primary flex flex-col items-start px-6 py-6 gap-4 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-white/60 hover:text-white font-normal text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => handleAnchor("#passport")}
            className="btn-gold text-xs py-2.5 px-5 mt-2"
          >
            Apply →
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
