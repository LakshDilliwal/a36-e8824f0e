import { describe, expect, it } from "vitest";
import { ecosystemVerticalGroups } from "./ecosystem";
import { verticalGroups } from "./verticals";

describe("ecosystem-only taxonomy", () => {
  it("preserves every shared category without modifying other pages", () => {
    expect(ecosystemVerticalGroups.slice(0, verticalGroups.length)).toEqual(verticalGroups);
    expect(verticalGroups).toHaveLength(6);
  });

  it("adds both requested groups and all twelve new subcategories", () => {
    const additions = ecosystemVerticalGroups.slice(verticalGroups.length);
    expect(additions.map(group => group.name)).toEqual(["Events & Conferences", "Commercial Real Estate & Spaces"]);
    expect(additions.flatMap(group => group.verticals)).toEqual([
      "Technology Conferences", "Blockchain & Web3 Conferences", "AI Conferences", "Startup & Founder Events", "Developer Conferences", "Industry Events",
      "Coworking Spaces", "Flexible Workspaces", "Event Venues", "Commercial Real Estate", "Innovation Hubs", "Incubators & Accelerators",
    ]);
  });
});