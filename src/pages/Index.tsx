import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Routes from "@/components/Routes";
import TourOperators from "@/components/TourOperators";
import Culture from "@/components/Culture";
import AppPromo from "@/components/AppPromo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Routes />
      <TourOperators />
      <Culture />
      <AppPromo />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
