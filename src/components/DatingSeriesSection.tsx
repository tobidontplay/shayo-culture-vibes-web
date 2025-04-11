
import { Heart, Play, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const DatingSeriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const episodes = [
    { title: "Episode 1", description: "The First Impressions" },
    { title: "Episode 2", description: "Getting to Know Each Other" },
    { title: "Episode 3", description: "The Final Decision" },
  ];

  return (
    <section 
      id="dating-series" 
      ref={sectionRef}
      className="section-spacing relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-shayo-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Heart className="text-shayo-pink mb-6" size={48} />
            
            <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">
              <span className="text-gradient">Stay or Sway</span>
              <span className="text-white block">Dating Series</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-6">
              Nigeria's first-of-its-kind dating series with a fresh and exciting take on finding love. 
              It's where the boldest, realest connections are formed.
            </p>
            
            <a 
              href="https://www.instagram.com/stayorsway"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              Watch Now
              <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </a>
          </div>
          
          <div className={`lg:col-span-3 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Featured episode */}
            <div className="relative rounded-xl overflow-hidden mb-6 group">
              <div className="aspect-video bg-gradient-to-br from-shayo-pink/30 to-shayo-purple/30 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-shayo-pink flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <span className="inline-block px-3 py-1 bg-shayo-pink text-white text-sm rounded-full mb-2">Featured</span>
                <h3 className="text-2xl font-bold text-white mb-2">Season Finale</h3>
                <p className="text-white/80">Will they stay together or sway apart? Find out in the most dramatic episode yet.</p>
              </div>
            </div>
            
            {/* Episode cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {episodes.map((episode, index) => (
                <div 
                  key={index} 
                  className={`content-card transition-all duration-1000 delay-${700 + index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <div className="aspect-square bg-gradient-to-br from-shayo-pink/20 to-shayo-purple/20 rounded-lg mb-3 flex items-center justify-center">
                    <Play className="text-white" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{episode.title}</h4>
                  <p className="text-white/70 text-sm">{episode.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatingSeriesSection;
