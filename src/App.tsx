import CTABanner from "@/components/cta-banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Stats from "@/components/stats";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import FloatingCTA from "@/components/floating-cta";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Portfolio />
        <Process />
        <Pricing />
        <FAQ />
        {/* <Testimonials /> */}
        <CTABanner />
        <Footer />
      </main>
      <FloatingCTA />
    </>
  );
}

export default Home;
