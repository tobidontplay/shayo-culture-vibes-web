
import { Headphones, Play, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const PodcastSection = () => {
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

  const podcastPlatforms = [
    { name: "Spotify", url: "https://open.spotify.com/show/37i9dQZF1DX0s5kDXi1oC5" },
    { name: "Apple Podcasts", url: "#" },
    { name: "Google Podcasts", url: "#" },
    { name: "YouTube", url: "https://youtube.com/@midnightshayo" },
  ];

  return (
    <section 
      id="podcast" 
      ref={sectionRef}
      className="section-spacing relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-shayo-dark opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Microphone icon */}
              <Headphones className="text-shayo-purple mb-6" size={48} />
              
              <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">
                <span className="text-white">The #1 </span>
                <span className="text-gradient">Podcast</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-6">
                Chart-topping conversations that have taken over 55+ countries and hit #1 on Spotify Nigeria. 
                Unfiltered discussions that resonate with Nigerian Gen-Zs worldwide.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {podcastPlatforms.map((platform, index) => (
                  <a 
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-glass rounded-full text-white hover:bg-shayo-purple/30 transition-colors"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
              
              <a 
                href="https://youtube.com/@midnightshayo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Listen Now
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </a>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-xl overflow-hidden group">
              {/* Podcast Episode Image - Replace with actual image */}
              <div className="aspect-video bg-gradient-to-br from-shayo-purple/30 to-shayo-pink/30 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-shayo-purple flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">Latest Episode</h3>
                <p className="text-white/80">Exploring the vibrant culture of Nigerian Gen-Z entertainment</p>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="content-card">
                <h4 className="text-lg font-bold text-white mb-1">Featured Episodes</h4>
                <p className="text-white/70 text-sm">Curated content for new listeners</p>
              </div>
              <div className="content-card">
                <h4 className="text-lg font-bold text-white mb-1">Global Reach</h4>
                <p className="text-white/70 text-sm">55+ countries and growing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
