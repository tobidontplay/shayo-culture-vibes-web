import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface EventGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: number;
    name: string;
    date: string;
    images: string[];
  };
}



const EventGallery = ({ isOpen, onClose, event }: EventGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex]);
  
  // Reset image loaded state when image changes
  useEffect(() => {
    setImageLoaded(false);
  }, [currentImageIndex]);
  
  // Reset index when event changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [event.id]);
  

  const nextImage = useCallback(() => {
    setImageLoaded(false);
    setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
  }, [event.images.length]);

  const prevImage = useCallback(() => {
    setImageLoaded(false);
    setCurrentImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
  }, [event.images.length]);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Don't render anything if not initialized properly
  if (!event || !event.images || !event.images.length) return null;

  // Use CSS transitions instead of Framer Motion to fix black screen issues
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      style={{ transitionProperty: 'opacity, visibility' }}
    >
      {/* Overlay background */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-95"
        onClick={() => isMobile && onClose()}
      />
      
      {/* Gallery container */}
      <div 
        className={`relative z-10 w-full h-full md:max-w-4xl md:h-auto md:max-h-[90vh] md:rounded-xl bg-shayo-dark overflow-hidden flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-3 md:p-4 border-b border-white/10 bg-gradient-to-b from-black/80 to-transparent">
          <div className="truncate pr-2">
            <h3 className="text-lg md:text-xl font-bold text-white truncate">{event.name}</h3>
            <p className="text-white/70 text-sm truncate">{event.date}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close gallery"
          >
            <X className="text-white" size={20} />
          </button>
        </div>
        
        {/* Gallery */}
        <div className="flex-1 relative flex items-center justify-center p-4 overflow-hidden bg-black/20">
          <div className="relative flex items-center justify-center w-full h-full">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-shayo-pink border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img 
              key={currentImageIndex}
              src={event.images[currentImageIndex]} 
              alt={`${event.name} - Photo ${currentImageIndex + 1}`}
              className={`max-h-[70vh] w-auto h-auto transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                objectFit: 'contain',
                maxWidth: '100%',
              }}
              onLoad={handleImageLoad}
            />
          </div>
          
          {/* Navigation controls */}
          {event.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={isMobile ? 20 : 24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={isMobile ? 20 : 24} />
              </button>
            </>
          )}
          
          {/* Image counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {event.images.length}
          </div>
        </div>
        
        {/* Thumbnails - only show on larger screens */}
        {event.images.length > 1 && !isMobile && (
          <div className="flex overflow-x-auto p-3 gap-2 bg-black/30">
            {event.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded overflow-hidden border-2 transition-colors flex items-center justify-center bg-black/30 ${index === currentImageIndex ? 'border-shayo-pink' : 'border-transparent'}`}
                aria-label={`View image ${index + 1}`}
              >
                <div className="relative flex items-center justify-center w-full h-full p-1">
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                    style={{ objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
              </button>
            ))}
          </div>
        )}
        
        {/* Mobile indicator dots */}
        {event.images.length > 1 && isMobile && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {event.images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-shayo-pink w-4' : 'bg-white/50'}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventGallery;
