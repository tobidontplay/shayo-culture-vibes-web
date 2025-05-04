import { CalendarDays, Users, MessageCircle, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogClose, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from 'react';

// --- Data Structure for Events ---
interface EventData {
  id: string;
  name: string;
  date: string; // Placeholder
  description: string; // Placeholder
  images: string[];
}

const eventsData: EventData[] = [
  {
    id: 'detty-december',
    name: 'Detty December',
    date: 'December 20, 2024', 
    description: 'The ultimate year-end celebration.',
    images: [
      "/images/events/IMG_4574.jpg",
      "/images/events/IMG_4575.jpg",
      "/images/events/IMG_4576.jpg",
      "/images/events/IMG_4579.jpg",
      "/images/events/IMG_4810.jpg",
      "/images/events/IMG_5789.jpg",
      "/images/events/IMG_5928.jpg",
      "/images/events/KWASARI.jpg",
      "/images/events/KWASARI 2.jpg",
      "/images/events/ZMBL1098.jpg",
      "/images/events/ZMBL1257.jpg",
      "/images/events/ZMBL1281.jpg",
      "/images/events/ZMBL1294.jpg",
      "/images/events/ZMBL1308.jpg",
      "/images/events/ZMBL1472.jpg",
      // Added IMG_4784, IMG_4787 - Assuming these belong here
      "/images/events/IMG_4784.JPEG",
      "/images/events/IMG_4787.JPEG",
    ]
  },
  {
    id: 'love-lust',
    name: 'Love & Lust',
    date: 'April 12, 2025', 
    description: 'Spring vibes and connections.',
    images: [
      "/images/events/L&L-65.jpg",
      "/images/events/L&L-71.jpg",
      "/images/events/L&L-72.jpg",
      "/images/events/L&L-75.jpg",
      "/images/events/L&L-81.jpg",
      "/images/events/L&L-90.jpg",
      "/images/events/L&L-95.jpg",
      "/images/events/L&L-104.jpg",
      "/images/events/L&L-119.jpg",
      "/images/events/IMG_7497.jpg",
      "/images/events/IMG_7502.jpg",
      "/images/events/IMG_7521.jpg",
      "/images/events/IMG_7523.jpg",
      "/images/events/IMG_7525.jpg",
      "/images/events/IMG_9239.jpg",
      "/images/events/IMG_9625 1.jpg",
      "/images/events/IMG_9891 1.jpg",
      "/images/events/IMG_0337.jpg", 
      "/images/events/IMG_0362.jpg",
      "/images/events/IMG_0376.jpg",
      "/images/events/IMG_0427.jpg",
    ]
  },
  {
    id: 'summer-shayo',
    name: 'Summer Shayo',
    date: 'August 17, 2024', 
    description: 'Peak summer energy.',
    images: [
       "/images/events/3.jpg",
       "/images/events/10.jpg",
       "/images/events/11.jpg",
       "/images/events/12.jpg",
       "/images/events/31.jpg",
       "/images/events/160.jpg",
       "/images/events/167.jpg",
       "/images/events/DSC00310.jpg",
       "/images/events/DSC00663.jpg",
       "/images/events/IMG_1343.jpg",
    ]
  },
  // --- Added Midnight All Day Event ---
  {
    id: 'midnight-all-day',
    name: 'Midnight All Day',
    date: 'June 22, 2024', 
    description: 'Kicking off the summer right.', 
    images: [
      "/images/events/IMG_8055.jpg",
      "/images/events/IMG_8124.jpg",
      "/images/events/IMG_8130.jpg",
      "/images/events/IMG_8255.jpg",
      "/images/events/IMG_8339.jpg",
      "/images/events/IMG_8369.jpg",
      "/images/events/IMG_8514.jpg",
      "/images/events/IMG_8580.jpg",
      "/images/events/IMG_8598.jpg",
      "/images/events/IMG_8601.jpg",
      "/images/events/IMG_8616.jpg",
      "/images/events/IMG_8686.jpg",
      "/images/events/IMG_8700.jpg",
      "/images/events/IMG_8706.jpg",
      "/images/events/IMG_8712.jpg"
    ]
  }
];

const EventsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // State for managing the currently open gallery
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [currentGalleryImageIndex, setCurrentGalleryImageIndex] = useState(0);

  // Function to open gallery for a specific event
  const openGallery = (event: EventData) => {
    setSelectedEvent(event);
    setCurrentGalleryImageIndex(0); // Reset index when opening
    setGalleryOpen(true);
  };

  // Function to close gallery
  const closeGallery = () => {
    setGalleryOpen(false);
    setSelectedEvent(null); // Clear selected event
  };

  // Navigation functions for the gallery
  const nextImage = () => {
    if (selectedEvent) {
      setCurrentGalleryImageIndex((prevIndex) => 
        (prevIndex + 1) % selectedEvent.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentGalleryImageIndex((prevIndex) => 
        (prevIndex - 1 + selectedEvent.images.length) % selectedEvent.images.length
      );
    }
  };

  const goToImage = (index: number) => {
    if (selectedEvent && index >= 0 && index < selectedEvent.images.length) {
      setCurrentGalleryImageIndex(index);
    }
  };

  // Intersection Observer for fade-in effect (remains the same)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 } 
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

  return (
    <section 
      id="events"
      ref={sectionRef}
      className={`py-16 bg-shayo-dark text-shayo-cream transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Add background pattern SVG or image here if desired */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-shayo-gold">Event Archive</h2>
        <p className="text-center text-lg text-shayo-lightgray mb-12 max-w-2xl mx-auto">
          Experience the vibe. Connect with culture. Join us at our next event.
        </p>
        
        {/* --- Event Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <div key={event.id} className="bg-shayo-deepblue rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.images[0]} // Display first image of the event
                  alt={`${event.name} preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-shayo-cream">{event.name}</h3>
                <p className="text-sm text-shayo-gold mb-3 flex items-center">
                  <CalendarDays size={16} className="mr-2" /> {event.date}
                </p>
                <p className="text-shayo-lightgray mb-4 text-base flex-grow">
                  {event.description}
                </p>
                <div className="mt-auto">
                  <span 
                    onClick={() => openGallery(event)} 
                    className="text-shayo-gold cursor-pointer hover:underline font-semibold inline-flex items-center"
                  >
                    View Gallery <ArrowUpRight size={18} className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Refactored Gallery Modal --- */}      
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        {selectedEvent && (
          <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] h-[90vh] bg-black p-2 flex flex-col text-white">
            <DialogHeader className="flex-shrink-0">
              <DialogTitle className="text-shayo-gold text-center">{selectedEvent.name} Gallery</DialogTitle>
              <DialogDescription className="text-center text-gray-400">
                Image {currentGalleryImageIndex + 1} of {selectedEvent.images.length}
              </DialogDescription>
              <DialogClose 
                onClick={closeGallery} 
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              >
                <X className="h-6 w-6 text-white" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogHeader>
            
            <div className="relative flex-grow flex items-center justify-center overflow-hidden py-2">
              {/* Main Image Display */}            
              <div className="w-full h-full flex items-center justify-center">
                {selectedEvent.images.length > 0 ? (
                  <img 
                    src={selectedEvent.images[currentGalleryImageIndex]} 
                    alt={`${selectedEvent.name} image ${currentGalleryImageIndex + 1}`} 
                    className="block object-contain max-w-full max-h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-red-500">No images found for this event.</span>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */} 
              {selectedEvent.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
              
              {/* Thumbnail Strip */}
              {selectedEvent.images.length > 1 && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-2 overflow-x-auto whitespace-nowrap flex-shrink-0">
                  <div className="flex space-x-2 justify-center">
                    {selectedEvent.images.map((imgSrc, index) => (
                      <img
                        key={index}
                        src={imgSrc} 
                        alt={`Thumbnail ${index + 1}`}
                        className={`h-16 w-auto cursor-pointer object-cover border-2 ${index === currentGalleryImageIndex ? 'border-shayo-gold' : 'border-transparent'}`}
                        onClick={() => goToImage(index)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default EventsSection;
