import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Earn from "./pages/Earn";
import EcosystemPage from "./pages/EcosystemPage";
import Events from "./pages/Events";
import PodcastPage from "./pages/PodcastPage";
import Apply from "./pages/Apply";
import About from "./pages/About";
import Team from "./pages/Team";
import NewsletterPage from "./pages/NewsletterPage";
import FAQ from "./pages/FAQ";
import Pitch from "./pages/Pitch";
import Residency from "./pages/Residency";
import MediaKit from "./pages/MediaKit";
import Merch from "./pages/Merch";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pitch" element={<Pitch />} />
          <Route path="/residency" element={<Residency />} />
          <Route path="/media-kit" element={<MediaKit />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
