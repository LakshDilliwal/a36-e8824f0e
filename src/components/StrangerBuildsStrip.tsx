import { Link } from "react-router-dom";
import { A36_LINKS } from "@/config/links";

const StrangerBuildsStrip = () => (
  <div className="relative bg-primary">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16 py-3 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6">
      <p className="text-[12px] md:text-[13px] text-white/80 font-bold leading-snug min-w-0">
        A36 Labs is a Community Partner for STRANGER BUILDS 🎃 — the online Halloween hackathon starts 31 October.
      </p>
      <Link
        to={A36_LINKS.strangerBuilds.page}
        className="shrink-0 self-start sm:self-auto text-accent hover:text-white font-bold text-[11px] md:text-xs uppercase tracking-[0.1em] whitespace-nowrap"
      >
        EXPLORE HACKATHON <span className="a36-arrow">→</span>
      </Link>
    </div>
    <div className="a36-hairline-gold" />
  </div>
);

export default StrangerBuildsStrip;
