
import { Instagram, Youtube } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-shayo-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img src="/lovable-uploads/19cdd4a9-6e09-4b9c-a41a-6cde9be8dfa7.png" alt="Midnight Shayo" className="h-12 mb-4" />
            <p className="text-white/70 mb-6 max-w-md">
              Midnight Shayo is a cultural movement redefining entertainment for Nigerian Gen-Zs worldwide through electrifying experiences, unfiltered conversations, and groundbreaking content.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/midnightshayopod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-shayo-purple transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com/@midnightshayo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-shayo-purple transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@midnightshayo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-shayo-purple transition-colors"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#podcast" className="text-white/70 hover:text-shayo-purple transition-colors">Podcast</a></li>
              <li><a href="#events" className="text-white/70 hover:text-shayo-purple transition-colors">Events</a></li>
              <li><a href="#dating-series" className="text-white/70 hover:text-shayo-purple transition-colors">Stay or Sway</a></li>
              <li><a href="#newsletter" className="text-white/70 hover:text-shayo-purple transition-colors">Join the Movement</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.instagram.com/midnightshayopod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-shayo-purple transition-colors"
                >
                  Podcast Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/stayorsway" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-shayo-purple transition-colors"
                >
                  Stay or Sway Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/zumnann" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-shayo-purple transition-colors"
                >
                  Zumnan's Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Midnight Shayo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
