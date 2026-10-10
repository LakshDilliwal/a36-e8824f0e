import PageWrapper from "@/components/PageWrapper";
import { useState, useMemo, useEffect } from "react";
import { ChevronDown, ChevronRight, Search, SlidersHorizontal, Link as LinkIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { regions, partnerTypes } from "@/lib/verticals";
import { ecosystemVerticalGroups as verticalGroups, type EcosystemEntry } from "@/lib/ecosystem";
import { Button } from "@/components/ui/button";
import { Checkbox as FilterCheckbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import EntryLogo from "@/components/ecosystem/EntryLogo";

const Checkbox = ({ checked, onChange, label, indeterminate = false }: {
  checked: boolean; onChange: () => void; label: string; indeterminate?: boolean;
}) => (
  <label className="flex items-center gap-2 min-h-9 lg:min-h-7 py-1 cursor-pointer text-sm text-primary/80 hover:text-primary">
    <FilterCheckbox checked={indeterminate ? "indeterminate" : checked} onCheckedChange={onChange} className="border-2 bg-card data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground" />
    <span className="min-w-0 select-none">{label}</span>
  </label>
);

const EcosystemPage = () => {
  const [partners, setPartners] = useState<EcosystemEntry[]>([]);
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: err } = await supabase
          .from('partners')
          .select('*');
        if (err) throw new Error(err.message);
        setPartners(data || []);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Failed to load ecosystem entries');
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  const toggleSet = (set: Set<string>, value: string, setter: (s: Set<string>) => void) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  };

  const activeFilterCount = verticalFilters.size + regionFilters.size + typeFilters.size + quickFilters.size;

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
        !(p.description ?? "").toLowerCase().includes(search.toLowerCase())
      )
        return false;
      if (verticalFilters.size > 0 && !verticalFilters.has(p.vertical ?? "")) return false;
      if (regionFilters.size > 0 && !regionFilters.has(p.region ?? "")) return false;
      if (typeFilters.size > 0 && !typeFilters.has(p.type ?? "")) return false;
      if (quickFilters.has("Featured") && !p.isA36Partner) return false;
      if (quickFilters.has("Open to Builders") && !p.openToBuilders) return false;
      return true;
    });
    if (sort === "recent") list = [...list].sort((a, b) => (b.created_at ?? "").localeCompare(a.created_at ?? ""));
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [partners, search, verticalFilters, regionFilters, typeFilters, quickFilters, sort]);

  // Parent group checkbox helper
  const setGroupVerticals = (groupVerticals: string[], select: boolean) => {
    const next = new Set(verticalFilters);
    groupVerticals.forEach((v) => {
      if (select) next.add(v);
      else next.delete(v);
    });
    setVerticalFilters(next);
  };

  const renderFilters = (showClear = true) => (
    <>
      {/* Quick Filters */}
      <div>
        <p className="font-bold text-[10px] text-primary uppercase tracking-[0.15em] mb-3">QUICK FILTERS</p>
        {["Featured", "Open to Builders"].map((f) => (
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
        {verticalGroups.map((g) => {
          const childCount = g.verticals.filter((v) => verticalFilters.has(v)).length;
          const allChecked = childCount === g.verticals.length;
          const someChecked = childCount > 0 && !allChecked;
          return (
            <div key={g.name} className="mb-2">
              <div className="flex items-center gap-2 py-1">
                <FilterCheckbox
                  aria-label={`Select ${g.name}`}
                  checked={someChecked ? "indeterminate" : allChecked}
                  onCheckedChange={() => setGroupVerticals(g.verticals, !allChecked)}
                  className="border-2 bg-card data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground"
                />
                <Button
                  variant="ghost"
                  aria-expanded={openGroups[g.name]}
                  onClick={() => setOpenGroups({ ...openGroups, [g.name]: !openGroups[g.name] })}
                  className="h-auto min-h-9 lg:min-h-7 p-0 flex items-center justify-start gap-1 text-sm font-bold text-primary flex-1 min-w-0 whitespace-normal text-left hover:bg-transparent hover:text-primary"
                >
                  {openGroups[g.name] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  <span className="min-w-0">{g.name}</span>
                  <span className="text-muted font-normal flex-shrink-0">({g.verticals.length})</span>
                </Button>
              </div>
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
          );
        })}
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

      {showClear && <Button variant="link" onClick={clearAll} className="mt-6 px-0 text-xs font-bold text-accent hover:underline uppercase tracking-wider">
        Clear all filters
      </Button>}
    </>
  );

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-20">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">THE A36 LABS ECOSYSTEM</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            36+ Verticals<br />One Network
          </h1>
          <p className="text-lg text-primary/65 mt-5 max-w-[560px]">
            A curated directory of organizations, communities, platforms, events and spaces A36 has engaged with across builder initiatives and ecosystem activity.
          </p>
          <div className="mt-8">
            <Button asChild className="btn-primary h-auto whitespace-normal hover:bg-accent/90">
              <a href="#ecosystem-directory">EXPLORE THE ECOSYSTEM ↓</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Directory layout */}
      <section id="ecosystem-directory" className="bg-warm-cream py-12 scroll-mt-20">
        <div className="container max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-sm text-primary/65 leading-relaxed mb-8 max-w-[1100px]">
            Directory entries reflect organizations, communities, events and platforms A36 has interacted with, collaborated with, participated alongside or included in previous ecosystem initiatives. Inclusion does not imply a current partnership, sponsorship, endorsement or commercial relationship.
          </p>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - desktop only */}
            <aside className="hidden lg:block w-[280px] flex-shrink-0">
              <div className="bg-card border border-border p-5 lg:sticky lg:top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
                {renderFilters()}
              </div>
            </aside>

            {/* Right content */}
            <div className="flex-1 min-w-0">
              {/* Search bar - full width above grid */}
              <div className="relative mb-4">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                   type="search"
                   aria-label="Search ecosystem entries"
                  placeholder="Search companies, communities, events, platforms..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-card border border-border text-primary text-sm pl-10 pr-3 py-3 focus:outline-none focus:border-accent"
                />
              </div>

              {/* Count + Sort row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border">
                <p aria-live="polite" className="text-sm text-primary/70">
                  {loading ? (
                    <>Loading ecosystem entries…</>
                  ) : (
                    <>
                      Showing <span className="font-bold text-primary">{filtered.length}</span> ecosystem {filtered.length === 1 ? "entry" : "entries"}
                    </>
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-xs font-bold text-muted uppercase tracking-wider">Sort:</span>
                  <select
                    aria-label="Sort ecosystem entries"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-card border border-border text-sm text-primary px-3 py-1.5 focus:outline-none"
                  >
                    <option value="default">Default</option>
                    <option value="recent">Recently Added</option>
                    <option value="name">Name A–Z</option>
                  </select>
                </div>
              </div>

              {/* Mobile filters button */}
              <Button
                variant="outline"
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden w-full mt-4 bg-card border-2 border-primary text-primary font-bold text-sm uppercase tracking-wider py-3 flex items-center justify-center gap-2"
              >
                <SlidersHorizontal size={16} />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </Button>

              {error && (
                <div className="bg-card border border-border p-6 mt-6">
                  <p className="text-sm text-primary font-bold">Couldn't load ecosystem entries.</p>
                  <p className="text-xs text-muted mt-1">{error}</p>
                </div>
              )}

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-card border border-border p-5">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-border flex-shrink-0 animate-pulse" />
                        <div className="flex-1 min-w-0 space-y-2">
                          <div className="h-4 bg-border w-1/2 animate-pulse" />
                          <div className="h-3 bg-border/70 w-1/3 animate-pulse" />
                          <div className="h-3 bg-border/50 w-full animate-pulse mt-3" />
                          <div className="h-3 bg-border/50 w-5/6 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {filtered.map((p) => (
                    <div key={p.name} className="bg-card border border-border p-5 hover:border-accent transition-colors">
                      <div className="flex gap-4">
                        <EntryLogo key={p.logo} name={p.name} logo={p.logo} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-black text-base text-primary break-words">{p.name}</h3>
                          </div>
                          <p className="text-xs text-muted mt-0.5">{p.location}</p>
                          <p className="text-sm text-primary/75 mt-2 line-clamp-2">{p.description}</p>
                           {p.engagementType && <p className="text-xs text-muted mt-2">{p.engagementType}</p>}
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
                          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border">
                            {p.website && (
                              <a
                                href={p.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Website"
                                className="text-primary/40 hover:text-accent transition-colors"
                              >
                                <LinkIcon size={16} />
                              </a>
                            )}
                            {p.twitter && (
                              <a
                                href={`https://x.com/${p.twitter.replace('@','')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="X / Twitter"
                                className="text-primary/40 hover:text-accent transition-colors"
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!loading && !error && filtered.length === 0 && (
                <div className="bg-card border border-border p-12 text-center mt-6">
                  <p className="text-sm text-muted">No ecosystem entries match the current filters.</p>
                  <Button variant="link" onClick={clearAll} className="mt-3 px-0 text-xs font-bold text-accent hover:underline uppercase tracking-wider">
                    Clear filters
                  </Button>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Mobile filters drawer */}
      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent side="left" aria-describedby={undefined} className="w-[90%] max-w-[380px] sm:max-w-[380px] h-[100dvh] flex flex-col p-0 bg-card motion-reduce:animate-none [&>button]:min-h-11 [&>button]:min-w-11 [&>button]:right-2 [&>button]:top-2">
          <div className="p-5 pr-16 border-b border-border flex-shrink-0">
            <SheetTitle className="font-black text-sm uppercase text-primary">Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</SheetTitle>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto p-5">{renderFilters(false)}</div>
          <div className="p-4 border-t border-border flex-shrink-0 bg-card">
            <Button variant="link" onClick={clearAll} className="w-full min-h-11 text-primary font-bold text-xs uppercase">Clear all filters</Button>
            <Button onClick={() => setDrawerOpen(false)} className="w-full min-h-11 h-auto whitespace-normal bg-primary text-primary-foreground font-bold text-sm uppercase py-3">
              Show {filtered.length} ecosystem {filtered.length === 1 ? "entry" : "entries"}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </PageWrapper>
  );
};

export default EcosystemPage;
