import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Scroll-reveal for section H2 headings
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const els = Array.from(document.querySelectorAll("section h2")) as HTMLElement[];
    els.forEach((el) => {
      if (!el.classList.contains("a36-reveal-in")) {
        el.classList.add("a36-reveal-init");
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("a36-reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <main key={location.pathname} className="pt-16 a36-route-enter">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageWrapper;
