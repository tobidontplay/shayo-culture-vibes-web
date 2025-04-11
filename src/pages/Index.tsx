
import AnimatedReveal from "@/components/AnimatedReveal";
import DatingSeriesSection from "@/components/DatingSeriesSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import PodcastSection from "@/components/PodcastSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);

    // Update document title
    document.title = "Midnight Shayo | Cultural Movement";
  }, []);

  return (
    <div className="min-h-screen bg-shayo-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      <AnimatedReveal>
        <PodcastSection />
      </AnimatedReveal>
      
      <AnimatedReveal>
        <EventsSection />
      </AnimatedReveal>
      
      <AnimatedReveal>
        <DatingSeriesSection />
      </AnimatedReveal>
      
      <AnimatedReveal>
        <NewsletterSection />
      </AnimatedReveal>
      
      <Footer />
    </div>
  );
};

export default Index;
