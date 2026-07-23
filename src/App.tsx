import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";
import Index from "./pages/Index";
import Earn from "./pages/Earn";
import EcosystemPage from "./pages/EcosystemPage";
import Events from "./pages/Events";
import PodcastPage from "./pages/PodcastPage";
import Apply from "./pages/Apply";
import About from "./pages/About";
import Community from "./pages/Community";

import NewsletterPage from "./pages/NewsletterPage";
import FAQ from "./pages/FAQ";

import Residency from "./pages/Residency";
import Cohort from "./pages/Cohort";
import Careers from "./pages/Careers";
import MediaKit from "./pages/MediaKit";
import Merch from "./pages/Merch";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const withSeo = (
  props: { title: string; description: string; path: string; breadcrumbs?: { name: string; path: string }[]; jsonLd?: Record<string, unknown> | Record<string, unknown>[] },
  Element: JSX.Element,
) => (
  <>
    <Seo {...props} />
    {Element}
  </>
);

const crumbs = (label: string, path: string) => [
  { name: "Home", path: "/" },
  { name: label, path },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={withSeo(
              {
                title: "A36 Labs | Global Builder Ecosystem",
                description:
                  "A36 Labs connects founders, developers, operators and researchers across Web3, AI and emerging technologies through events, community, residency, opportunities and media.",
                path: "/",
              },
              <Index />,
            )}
          />
          <Route
            path="/earn"
            element={withSeo(
              {
                title: "A36 Earn — Opportunities for Builders | A36 Labs",
                description:
                  "Discover paid opportunities, grants and bounties for builders, designers, engineers and content creators across Web3, AI and emerging tech.",
                path: "/earn",
                breadcrumbs: crumbs("Earn", "/earn"),
              },
              <Earn />,
            )}
          />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route
            path="/events"
            element={withSeo(
              {
                title: "Events — Global Builder Gatherings | A36 Labs",
                description:
                  "A36 Labs hosts and curates global events, hackathons, summits and IRL gatherings for founders and builders across Web3, AI and emerging technology.",
                path: "/events",
                breadcrumbs: crumbs("Events", "/events"),
              },
              <Events />,
            )}
          />
          <Route
            path="/podcast"
            element={withSeo(
              {
                title: "Base Layer Podcast | A36 Labs",
                description:
                  "Base Layer is the A36 Labs podcast featuring founders, operators, researchers and investors building across Web3, AI and emerging tech.",
                path: "/podcast",
                breadcrumbs: crumbs("Podcast", "/podcast"),
              },
              <PodcastPage />,
            )}
          />
          <Route
            path="/apply"
            element={withSeo(
              {
                title: "Apply & Partner With A36 Labs",
                description:
                  "Apply to join the A36 Labs builder ecosystem or partner with us on events, residency programs and media across Web3, AI and emerging tech.",
                path: "/apply",
                breadcrumbs: crumbs("Apply", "/apply"),
              },
              <Apply />,
            )}
          />
          <Route
            path="/about"
            element={withSeo(
              {
                title: "About A36 Labs — The Home of Serious Builders",
                description:
                  "A36 Labs is a global builder ecosystem network curating serious founders, developers and researchers across Web3, AI and emerging technology.",
                path: "/about",
                breadcrumbs: crumbs("About", "/about"),
              },
              <About />,
            )}
          />
          <Route
            path="/community"
            element={withSeo(
              {
                title: "Community — Global Builder Network | A36 Labs",
                description:
                  "Join the A36 Labs community: a global network of founders, builders, operators and researchers working across Web3, AI and emerging tech.",
                path: "/community",
                breadcrumbs: crumbs("Community", "/community"),
              },
              <Community />,
            )}
          />
          <Route
            path="/newsletter"
            element={withSeo(
              {
                title: "Newsletter — A36 Labs Builder Briefing",
                description:
                  "Get the A36 Labs newsletter: curated insights, opportunities and signal for serious builders across Web3, AI and emerging technology.",
                path: "/newsletter",
                breadcrumbs: crumbs("Newsletter", "/newsletter"),
              },
              <NewsletterPage />,
            )}
          />
          <Route
            path="/faq"
            element={withSeo(
              {
                title: "FAQ | A36 Labs",
                description:
                  "Frequently asked questions about A36 Labs — our ecosystem, events, residency, community and how to get involved as a builder.",
                path: "/faq",
                breadcrumbs: crumbs("FAQ", "/faq"),
              },
              <FAQ />,
            )}
          />
          <Route
            path="/residency"
            element={withSeo(
              {
                title: "Residency Program for Builders | A36 Labs",
                description:
                  "The A36 Labs residency program supports founders, developers and researchers building across Web3, AI and emerging technology.",
                path: "/residency",
                breadcrumbs: crumbs("Residency", "/residency"),
              },
              <Residency />,
            )}
          />
          <Route
            path="/cohort"
            element={withSeo(
              {
                title: "A36 Cohort | Coming Soon",
                description:
                  "A36 Cohort is an upcoming structured program for builders, operators, founders, students, and emerging talent across AI, Web3, startups, and frontier technology.",
                path: "/cohort",
                breadcrumbs: crumbs("Cohort", "/cohort"),
              },
              <Cohort />,
            )}
          />
          <Route
            path="/careers"
            element={withSeo(
              {
                title: "Careers at A36 Labs | Build With Us",
                description:
                  "Explore careers and opportunities at A36 Labs across ecosystem growth, partnerships, events, community, product, content, development, and frontier technology.",
                path: "/careers",
                breadcrumbs: crumbs("Careers", "/careers"),
              },
              <Careers />,
            )}
          />
          <Route
            path="/media-kit"
            element={withSeo(
              {
                title: "Media Kit | A36 Labs",
                description:
                  "Download the A36 Labs media kit: official logo, brand colors, typography and assets for press and partners.",
                path: "/media-kit",
                breadcrumbs: crumbs("Media Kit", "/media-kit"),
              },
              <MediaKit />,
            )}
          />
          <Route
            path="/merch"
            element={withSeo(
              {
                title: "Merch | A36 Labs",
                description:
                  "Official A36 Labs merchandise for the global builder community.",
                path: "/merch",
                breadcrumbs: crumbs("Merch", "/merch"),
              },
              <Merch />,
            )}
          />
          <Route
            path="/privacy"
            element={withSeo(
              {
                title: "Privacy Policy | A36 Labs",
                description: "Read the A36 Labs privacy policy.",
                path: "/privacy",
                breadcrumbs: crumbs("Privacy", "/privacy"),
              },
              <Privacy />,
            )}
          />
          <Route
            path="/terms"
            element={withSeo(
              {
                title: "Terms of Service | A36 Labs",
                description: "Read the A36 Labs terms of service.",
                path: "/terms",
                breadcrumbs: crumbs("Terms", "/terms"),
              },
              <Terms />,
            )}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
