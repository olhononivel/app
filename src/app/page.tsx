import { Benefits, Cta, Faq, Footer, HeaderLP, Hero, HowItWorks, Prices, Testimonials } from "@/components";

export default function Home() {
  return (
    <div>
      <HeaderLP />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Prices />
        <Faq />
        <Cta />
        <Footer />
      </main>
    </div>
  );
}