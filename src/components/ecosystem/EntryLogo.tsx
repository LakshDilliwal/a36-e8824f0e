import { useState } from "react";

const EntryLogo = ({ name, logo }: { name: string; logo: string | null }) => {
  const [failed, setFailed] = useState(false);
  return logo && !failed ? (
    <img src={logo} alt={name} onError={() => setFailed(true)} className="w-12 h-12 object-contain bg-warm-cream p-1 flex-shrink-0" loading="lazy" />
  ) : (
    <span aria-label={name} className="w-12 h-12 flex items-center justify-center bg-warm-cream text-primary text-sm font-bold flex-shrink-0">
      {name.trim().slice(0, 2).toUpperCase()}
    </span>
  );
};

export default EntryLogo;