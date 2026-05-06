import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EcosystemPartners from "@/components/EcosystemPartners";
import Manifesto from "@/components/Manifesto";
import Podcast from "@/components/Podcast";
import Newsletter from "@/components/Newsletter";
import VerticalsGrid from "@/components/VerticalsGrid";
import GlobalPresence from "@/components/GlobalPresence";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Nav />
    <main className="pt-16">
      <Hero />
      <EcosystemPartners />
      <Manifesto />
      <Podcast />
      <Newsletter />
      <VerticalsGrid />
      <GlobalPresence />
    </main>
    <Footer />
  </>
);

export default Index;
