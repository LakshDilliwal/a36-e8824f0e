import { verticalGroups } from "@/lib/verticals";
import type { Database } from "@/integrations/supabase/types";

export const ecosystemVerticalGroups = [
  ...verticalGroups,
  {
    name: "Events & Conferences",
    verticals: ["Technology Conferences", "Blockchain & Web3 Conferences", "AI Conferences", "Startup & Founder Events", "Developer Conferences", "Industry Events"],
  },
  {
    name: "Commercial Real Estate & Spaces",
    verticals: ["Coworking Spaces", "Flexible Workspaces", "Event Venues", "Commercial Real Estate", "Innovation Hubs", "Incubators & Accelerators"],
  },
];

export type EngagementType = "Community Initiative" | "Ecosystem Collaboration" | "Event Collaboration" | "Conference" | "Venue / Space" | "Program" | "Infrastructure" | "Other";

// Preserve the existing source; historical flags are used only for neutral curation.
export type EcosystemEntry = Database["public"]["Tables"]["partners"]["Row"] & {
  engagementType?: EngagementType;
};