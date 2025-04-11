
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay for dramatic effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient with overlay */}
      <div className="absolute inset-0 bg-shayo-black">
        <div className="absolute inset-0 bg-gradient-to-r from-shayo-purple/20 to-shayo-pink/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-display uppercase tracking-tight mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="block text-gradient">Midnight Shayo</span>
            <span className="block text-white">Cultural Movement</span>
          </h1>

          <p className={`text-xl md:text-2xl mb-8 text-white/80 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Redefining entertainment for Nigerian Gen-Zs worldwide through electrifying experiences, unfiltered conversations, and groundbreaking content.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <a href="#podcast" className="btn-primary group">
              Listen to Podcast
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a href="#newsletter" className="btn-secondary group">
              Join the Movement
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="stat-card">
            <span className="text-shayo-purple text-4xl md:text-5xl font-bold">#1</span>
            <span className="text-white text-lg mt-2">Spotify Nigeria Podcast</span>
          </div>
          <div className="stat-card">
            <span className="text-shayo-pink text-4xl md:text-5xl font-bold">55+</span>
            <span className="text-white text-lg mt-2">Countries Reached</span>
          </div>
          <div className="stat-card">
            <span className="text-shayo-orange text-4xl md:text-5xl font-bold">6</span>
            <span className="text-white text-lg mt-2">Sold-Out Events</span>
          </div>
        </div>
      </div>

      {/* Moving stripe */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-shayo-purple to-shayo-pink py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(10).fill("WHERE THE CULTURE HAPPENS").map((text, index) => (
            <span key={index} className="text-white font-bold mx-4 text-lg">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
