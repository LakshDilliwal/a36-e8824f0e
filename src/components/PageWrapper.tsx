import { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <>
    <Nav />
    <main className="pt-16">{children}</main>
    <Footer />
  </>
);

export default PageWrapper;
