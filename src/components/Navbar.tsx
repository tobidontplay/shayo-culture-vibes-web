
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';
import TikTokIcon from './icons/TikTokIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-black bg-opacity-80 backdrop-blur-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/lovable-uploads/19cdd4a9-6e09-4b9c-a41a-6cde9be8dfa7.png" alt="Midnight Shayo" className="h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#podcast" className="text-white hover:text-shayo-purple transition-colors">Podcast</a>
          <a href="#events" className="text-white hover:text-shayo-purple transition-colors">Events</a>
          <a href="#dating-series" className="text-white hover:text-shayo-purple transition-colors">Stay or Sway</a>
          <a href="#newsletter" className="btn-primary">Join the Movement</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-screen py-5" : "max-h-0"
      )}>
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          <a 
            href="#podcast" 
            className="text-white py-2 hover:text-shayo-purple transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Podcast
          </a>
          <a 
            href="#events" 
            className="text-white py-2 hover:text-shayo-purple transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </a>
          <a 
            href="#dating-series" 
            className="text-white py-2 hover:text-shayo-purple transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Stay or Sway
          </a>
          <a 
            href="#newsletter" 
            className="btn-primary w-full justify-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Join the Movement
          </a>
          <div className="flex space-x-4 py-2">
            <a 
              href="https://www.instagram.com/midnightshayopod" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-shayo-purple transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://youtube.com/@midnightshayo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-shayo-purple transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="https://www.tiktok.com/@midnightshayo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-shayo-purple transition-colors"
            >
              <TikTokIcon size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
