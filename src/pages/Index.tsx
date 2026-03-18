import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import BodyEffects from "@/components/BodyEffects";
import Promo from "@/components/Promo";
import HelpBanner from "@/components/HelpBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <BodyEffects />
      <Promo />
      <HelpBanner />
      <Footer />
    </main>
  );
};

export default Index;
