import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-primary py-10 px-6 md:px-16">
    <div className="container max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">
      <div>
        <Logo light />
        <p className="text-[13px] text-white/50 mt-2">Where Builders Become Leaders.</p>
        <p className="text-[12px] text-white/30 mt-1">© 2026 A36 Labs. All rights reserved.</p>
      </div>

      <div className="flex gap-16">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[11px] text-white/40 uppercase tracking-wider mb-1">Navigate</span>
          <Link to="/sprints" className="text-sm text-white/60 hover:text-white">Sprints</Link>
          <Link to="/transmissions" className="text-sm text-white/60 hover:text-white">Transmissions</Link>
          <a href="/#passport" className="text-sm text-white/60 hover:text-white">Apply</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[11px] text-white/40 uppercase tracking-wider mb-1">More</span>
          <Link to="/media-kit" className="text-sm text-white/60 hover:text-white">Media Kit</Link>
          <Link to="/privacy" className="text-sm text-white/60 hover:text-white">Privacy Policy</Link>
          <a href="https://x.com/a36labs" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white">X</a>
          <a href="https://linkedin.com/company/a36labs" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white">LinkedIn</a>
          <a href="#" className="text-sm text-white/60 hover:text-white">Telegram</a>
          <a href="#" className="text-sm text-white/60 hover:text-white">Discord</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
