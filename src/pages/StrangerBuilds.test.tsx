import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import StrangerBuilds from "./StrangerBuilds";

vi.mock("@/components/PageWrapper", () => ({
  default: ({ children }: { children: React.ReactNode }) => <main>{children}</main>,
}));

afterEach(cleanup);

describe("Stranger Builds registration", () => {
  it("keeps every registration CTA on the existing tracked application destination", () => {
    render(<MemoryRouter><StrangerBuilds /></MemoryRouter>);
    const links = screen.getAllByRole("link", { name: /REGISTER NOW/ });
    expect(links).toHaveLength(3);
    for (const link of links) {
      expect(link).toHaveAttribute("href", "https://luma.com/strangerbuilds-online?utm_source=a36labs&utm_medium=community_partner&utm_campaign=stranger_builds_2026&utm_content=stranger_builds_page");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});