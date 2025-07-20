import { Benefits, Cta, Faq, Footer, HeaderLP, Hero, HowItWorks, Prices, Testimonials } from "@/components";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      <SpeedInsights />
      <Analytics />
    </div>
  );
}