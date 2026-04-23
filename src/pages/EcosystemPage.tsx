import PageWrapper from "@/components/PageWrapper";
import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import Papa from "papaparse";
import { verticalGroups, regions, partnerTypes } from "@/lib/verticals";

type Partner = {
  name: string;
  location: string;
  description: string;
  vertical: string;
  vertical_group: string;
  region: string;
  type: string;
  isA36Partner: boolean;
  openToBuilders: boolean;
  logo: string;
  website: string;
  twitter: string;
  stage: string;
  tags: string;
};

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMCU4CK5nt0Cnx9RgrzyBuWBbeK3or9tL3uJpOqexbLjOMACjIYDMAC43JkqF0Rg/pub?gid=2084849745&single=true&output=csv";

const toBool = (v: string | undefined) => (v ?? "").trim().toUpperCase() === "TRUE";

const EcosystemPage = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(
    Object.fromEntries(verticalGroups.map((g) => [g.name, true]))
  );
  const [verticalFilters, setVerticalFilters] = useState<Set<string>>(new Set());
  const [regionFilters, setRegionFilters] = useState<Set<string>>(new Set());
  const [typeFilters, setTypeFilters] = useState<Set<string>>(new Set());
  const [quickFilters, setQuickFilters] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState("default");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(CSV_URL)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((csv) => {
        const parsed = Papa.parse<Record<string, string>>(csv, {
          header: true,
          skipEmptyLines: true,
        });
        const rows: Partner[] = (parsed.data || [])
          .filter((r) => r && (r.name ?? "").trim() !== "")
          .map((r) => ({
            name: (r.name ?? "").trim(),
            location: (r.location ?? "").trim(),
            description: (r.description ?? "").trim(),
            vertical: (r.vertical ?? "").trim(),
            vertical_group: (r.vertical_group ?? "").trim(),
            region: (r.region ?? "").trim(),
            type: (r.type ?? "").trim(),
            isA36Partner: toBool(r.isA36Partner),
            openToBuilders: toBool(r.openToBuilders),
            logo: (r.logo ?? "").trim(),
            website: (r.website ?? "").trim(),
            twitter: (r.twitter ?? "").trim(),
            stage: (r.stage ?? "").trim(),
            tags: (r.tags ?? "").trim(),
          }));
        if (!cancelled) {
          setPartners(rows);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err?.message || "Failed to load partners");
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const toggleSet = (set: Set<string>, value: string, setter: (s: Set<string>) => void) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  };

  const clearAll = () => {
    setSearch("");
    setVerticalFilters(new Set());
    setRegionFilters(new Set());
    setTypeFilters(new Set());
    setQuickFilters(new Set());
  };

  const filtered = useMemo(() => {
    let list = partners.filter((p) => {
      if (
        search &&
        !p.name.toLowerCase().includes(search.toLowerCase()) &&
        !p.description.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      if (verticalFilters.size > 0 && !verticalFilters.has(p.vertical)) return false;
      if (regionFilters.size > 0 && !regionFilters.has(p.region)) return false;
      if (typeFilters.size > 0 && !typeFilters.has(p.type)) return false;
      if (quickFilters.has("Featured Partners") && !p.isA36Partner) return false;
      if (quickFilters.has("Open to Builders") && !p.openToBuilders) return false;
      return true;
    });
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [partners, search, verticalFilters, regionFilters, typeFilters, quickFilters, sort]);

  const Checkbox = ({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) => (
    <label className="flex items-center gap-2 py-1 cursor-pointer text-sm text-primary/80 hover:text-primary">
      <span
        onClick={onChange}
        className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 ${
          checked ? "bg-primary border-primary" : "border-border bg-white"
        }`}
      >
        {checked && <span className="text-accent text-xs leading-none">✓</span>}
      </span>
      <span className="select-none">{label}</span>
    </label>
  );

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-20">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">THE ECOSYSTEM</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            36 Verticals.<br />One Network.
          </h1>
          <p className="text-lg text-primary/65 mt-5 max-w-[640px]">
            Every serious builder vertical in one place. Filter by domain, region, or type to find what you're looking for.
          </p>
        </div>
      </section>

      {/* Directory layout */}
      <section className="bg-warm-cream py-12">
        <div className="container max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-[280px] flex-shrink-0">
              <div className="bg-white border border-border p-5 lg:sticky lg:top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
                {/* Search */}
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    placeholder="Search builders, protocols, companies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-background border border-border text-primary text-sm pl-9 pr-3 py-2.5 focus:outline-none focus:border-accent"
                  />
                </div>

                {/* Quick Filters */}
                <div className="mt-6">
                  <p className="font-bold text-[10px] text-primary uppercase tracking-[0.15em] mb-3">QUICK FILTERS</p>
                  {["Featured Partners", "Open to Builders"].map((f) => (
                    <Checkbox
                      key={f}
                      checked={quickFilters.has(f)}
                      onChange={() => toggleSet(quickFilters, f, setQuickFilters)}
                      label={f}
                    />
                  ))}
                </div>

                {/* Vertical groups */}
                <div className="mt-6">
                  <p className="font-bold text-[10px] text-primary uppercase tracking-[0.15em] mb-3">VERTICAL</p>
                  <Checkbox
                    label={`All verticals (${partners.length})`}
                    checked={verticalFilters.size === 0}
                    onChange={() => setVerticalFilters(new Set())}
                  />
                  {verticalGroups.map((g) => (
                    <div key={g.name} className="mb-2">
                      <button
                        onClick={() => setOpenGroups({ ...openGroups, [g.name]: !openGroups[g.name] })}
                        className="flex items-center gap-1 text-sm font-bold text-primary py-1 w-full text-left"
                      >
                        {openGroups[g.name] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        <span>{g.name}</span>
                        <span className="text-muted font-normal">({g.verticals.length})</span>
                      </button>
                      {openGroups[g.name] && (
                        <div className="pl-5 mt-1">
                          {g.verticals.map((v) => (
                            <Checkbox
                              key={v}
                              checked={verticalFilters.has(v)}
                              onChange={() => toggleSet(verticalFilters, v, setVerticalFilters)}
                              label={v}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Region */}
                <div className="mt-6">
                  <p className="font-bold text-[10px] text-primary uppercase tracking-[0.15em] mb-3">REGION</p>
                  {regions.map((r) => (
                    <Checkbox
                      key={r}
                      checked={regionFilters.has(r)}
                      onChange={() => toggleSet(regionFilters, r, setRegionFilters)}
                      label={r}
                    />
                  ))}
                </div>

                {/* Type */}
                <div className="mt-6">
                  <p className="font-bold text-[10px] text-primary uppercase tracking-[0.15em] mb-3">TYPE</p>
                  {partnerTypes.map((t) => (
                    <Checkbox
                      key={t}
                      checked={typeFilters.has(t)}
                      onChange={() => toggleSet(typeFilters, t, setTypeFilters)}
                      label={t}
                    />
                  ))}
                </div>

                <button onClick={clearAll} className="mt-6 text-xs font-bold text-accent hover:underline uppercase tracking-wider">
                  Clear all filters
                </button>
              </div>
            </aside>

            {/* Right content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-border">
                <p className="text-sm text-primary/70">
                  {loading ? (
                    <>Loading partners…</>
                  ) : (
                    <>
                      Showing <span className="font-bold text-primary">{filtered.length}</span> partners in the A36 network
                    </>
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-muted uppercase tracking-wider">Sort:</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-white border border-border text-sm text-primary px-3 py-1.5 focus:outline-none"
                  >
                    <option value="default">Default</option>
                    <option value="recent">Recently Added</option>
                    <option value="name">Name A–Z</option>
                  </select>
                </div>
              </div>

              {error && (
                <div className="bg-white border border-border p-6 mt-6">
                  <p className="text-sm text-primary font-bold">Couldn't load partners.</p>
                  <p className="text-xs text-muted mt-1">{error}</p>
                </div>
              )}

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-white border border-border p-5">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-[#C8BFB0] flex-shrink-0 animate-pulse" />
                        <div className="flex-1 min-w-0 space-y-2">
                          <div className="h-4 bg-[#C8BFB0] w-1/2 animate-pulse" />
                          <div className="h-3 bg-[#C8BFB0]/70 w-1/3 animate-pulse" />
                          <div className="h-3 bg-[#C8BFB0]/50 w-full animate-pulse mt-3" />
                          <div className="h-3 bg-[#C8BFB0]/50 w-5/6 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {filtered.map((p) => (
                    <div key={p.name} className="bg-white border border-border p-5 hover:border-accent transition-colors">
                      <div className="flex gap-4">
                        <img
                          src={p.logo.startsWith("/") ? p.logo : `https://logo.clearbit.com/${p.logo}`}
                          alt={p.name}
                          onError={(e) => {
                            e.currentTarget.src = "/logos/fallback.png";
                            e.currentTarget.onerror = null;
                          }}
                          className="w-12 h-12 object-contain bg-warm-cream p-1 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-black text-base text-primary truncate">{p.name}</h3>
                            {p.isA36Partner && (
                              <span className="text-[9px] font-bold uppercase tracking-wider bg-accent text-primary px-1.5 py-0.5 flex-shrink-0">
                                A36 PARTNER
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted mt-0.5">{p.location}</p>
                          <p className="text-sm text-primary/75 mt-2 line-clamp-2">{p.description}</p>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {p.vertical && (
                              <span className="text-[10px] font-bold uppercase tracking-wider bg-warm-cream text-primary px-2 py-1">
                                {p.vertical}
                              </span>
                            )}
                            {p.region && (
                              <span className="text-[10px] font-bold uppercase tracking-wider border border-border text-primary/70 px-2 py-1">
                                {p.region}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!loading && !error && filtered.length === 0 && (
                <div className="bg-white border border-border p-12 text-center mt-6">
                  <p className="text-sm text-muted">No partners match the current filters.</p>
                  <button onClick={clearAll} className="mt-3 text-xs font-bold text-accent hover:underline uppercase tracking-wider">
                    Clear filters
                  </button>
                </div>
              )}

              <div className="mt-10 text-center">
                <Link to="/apply" className="btn-primary inline-block">
                  Want to be listed? Apply to join the A36 ecosystem →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Network */}
      <section className="bg-background py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">MENTOR NETWORK</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Operators Who've Shipped.
          </h2>
          <p className="text-base text-primary/65 mt-4 max-w-[640px]">
            A36 Mentors don't advise. They show up. Each mentor commits to podcast appearances, live workshops, and direct access for builders in the network.
          </p>

          <div className="bg-white border-2 border-dashed border-border p-12 mt-10 text-center">
            <p className="text-sm text-muted">Mentor partnerships opening soon.</p>
            <Link to="/apply" className="text-accent font-bold text-sm uppercase hover:underline tracking-wider mt-3 inline-block">
              Apply to become an A36 Mentor →
            </Link>
          </div>
        </div>
      </section>

      {/* Builder Reads */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">BUILDER READS</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Books That Builders Actually Finish.
          </h2>
          <p className="text-base text-primary/65 mt-4 max-w-[640px]">
            Curated by A36. Recommended by the operators in our network.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-border p-5">
                <div className="aspect-[2/3] bg-[#C8BFB0]" />
                <h4 className="font-black text-base text-primary mt-4">Coming Soon</h4>
                <p className="text-xs text-muted mt-1">—</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a href="mailto:hello@a36labs.com" className="text-accent font-bold text-sm uppercase hover:underline tracking-wider">
              Author partnerships opening. Feature your book in the A36 network →
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default EcosystemPage;
