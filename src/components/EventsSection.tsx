
import { CalendarDays, Users, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import EventGallery from './EventGallery';

// Define the event data structure
interface Event {
  id: number;
  name: string;
  date: string;
  description: string;
  status: 'upcoming' | 'sold-out';
  thumbnail: string;
  images: string[];
}

const events: Event[] = [
  {
    id: 1,
    name: 'Midnight All Day',
    date: 'June 22, 2024',
    description: 'Our signature event celebrating Nigerian youth culture',
    status: 'sold-out',
    thumbnail: '/images/events/midnight-all-day-june-2024/thumbnail.jpg',
    images: [
      '/images/events/midnight-all-day-june-2024/image1.jpg',
      '/images/events/midnight-all-day-june-2024/image2.jpg',
      '/images/events/midnight-all-day-june-2024/image3.jpg',
      '/images/events/midnight-all-day-june-2024/image4.jpg',
      '/images/events/midnight-all-day-june-2024/image5.jpg',
      '/images/events/midnight-all-day-june-2024/image6.jpg',
      '/images/events/midnight-all-day-june-2024/image7.jpg',
      '/images/events/midnight-all-day-june-2024/image8.jpg',
      '/images/events/midnight-all-day-june-2024/image9.jpg',
      '/images/events/midnight-all-day-june-2024/image10.jpg'
    ]
  },
  {
    id: 2,
    name: 'Summer Shayo',
    date: 'August 17, 2024',
    description: 'Vibrant summer celebration with unforgettable beats',
    status: 'upcoming',
    thumbnail: '/images/events/summer-shayo-august-2024/thumbnail.jpg',
    images: [
      '/images/events/summer-shayo-august-2024/image1.jpg',
      '/images/events/summer-shayo-august-2024/image2.jpg',
      '/images/events/summer-shayo-august-2024/image3.jpg',
      '/images/events/summer-shayo-august-2024/image4.jpg',
      '/images/events/summer-shayo-august-2024/image5.jpg',
      '/images/events/summer-shayo-august-2024/image6.jpg',
      '/images/events/summer-shayo-august-2024/image7.jpg',
      '/images/events/summer-shayo-august-2024/image8.jpg',
      '/images/events/summer-shayo-august-2024/image9.jpg',
      '/images/events/summer-shayo-august-2024/image10.jpg'
    ]
  },
  {
    id: 3,
    name: 'MAD: Detty December',
    date: 'December 20, 2024',
    description: 'End the year with the ultimate Nigerian party experience',
    status: 'upcoming',
    thumbnail: '/images/events/detty-december-2024/thumbnail.jpg',
    images: [
      '/images/events/detty-december-2024/image1.jpg',
      '/images/events/detty-december-2024/image2.jpg',
      '/images/events/detty-december-2024/image3.jpg',
      '/images/events/detty-december-2024/image4.jpg',
      '/images/events/detty-december-2024/image5.jpg',
      '/images/events/detty-december-2024/image6.jpg',
      '/images/events/detty-december-2024/image7.jpg',
      '/images/events/detty-december-2024/image8.jpg',
      '/images/events/detty-december-2024/image9.jpg',
      '/images/events/detty-december-2024/image10.jpg'
    ]
  },
  {
    id: 4,
    name: 'Midnight Masquerade',
    date: 'October 31, 2024',
    description: 'A night of mystery and elegance',
    status: 'upcoming',
    thumbnail: '/images/events/placeholder.jpg',
    images: []
  },
  {
    id: 5,
    name: 'Afrobeats Night',
    date: 'November 25, 2024',
    description: 'Celebrating the best of African music',
    status: 'upcoming',
    thumbnail: '/images/events/placeholder.jpg',
    images: []
  },
  {
    id: 6,
    name: 'End of Year Bash',
    date: 'December 28, 2024',
    description: 'Closing the year with unforgettable memories',
    status: 'upcoming',
    thumbnail: '/images/events/placeholder.jpg',
    images: []
  }
];

const EventsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  // Gallery state with transition handling
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  // Track if we're in the process of closing
  const [isClosing, setIsClosing] = useState(false);

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

  const openGallery = (event: Event) => {
    setSelectedEvent(event);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    // Simply close the gallery first
    setIsGalleryOpen(false);
    
    // Wait for animation to complete before removing the event data
    setTimeout(() => {
      setSelectedEvent(null);
    }, 300);
  };

  const testimonials = [
    { 
      quote: "Midnight Shayo events are the most electrifying party scene in Abuja!",
      author: "Sarah N."
    },
    { 
      quote: "I've never experienced anything like the energy at a Midnight Shayo event.",
      author: "Tunde K."
    },
  ];

  return (
    <section 
      id="events" 
      ref={sectionRef}
      className="section-spacing bg-shayo-dark relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.3),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.3),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <CalendarDays className="mx-auto text-shayo-pink mb-6" size={48} />
          <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">
            <span className="text-white">Signature </span>
            <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            The biggest Gen-Z party scene in Abuja with six immersive, unforgettable, sold-out events. 
            Where Nigerian youth come together to celebrate culture and create memories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Event gallery cards */}
          {events.map((event, index) => (
            <div 
              key={event.id}
              onClick={() => event.images.length > 0 ? openGallery(event) : null}
              className={`content-card group relative aspect-square transition-all duration-1000 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${event.images.length > 0 ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-shayo-purple/40 to-shayo-pink/40 rounded-xl overflow-hidden">
                {/* Event image */}
                <img 
                  src={event.thumbnail} 
                  alt={event.name}
                  className="w-full h-full object-cover opacity-70"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/events/placeholder.jpg';
                  }}
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold text-lg">{event.name}</span>
                  <span className="text-white/80 text-sm">{event.date}</span>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-white/70 text-xs">{event.description}</span>
                    <div className="flex items-center text-white/80 text-xs">
                      <Users size={12} className="mr-1" />
                      <span className={event.status === 'sold-out' ? 'text-shayo-pink' : 'text-green-400'}>
                        {event.status === 'sold-out' ? 'Sold Out' : 'Upcoming'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover overlay */}
              {event.images.length > 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold flex items-center gap-2">
                    <CalendarDays size={18} />
                    View Gallery
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-glass p-6 rounded-xl">
              <MessageCircle className="text-shayo-purple mb-4" size={24} />
              <p className="text-white italic mb-4">{testimonial.quote}</p>
              <p className="text-white/70 text-sm">— {testimonial.author}</p>
            </div>
          ))}
        </div>
        
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://www.instagram.com/midnightshayopod"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent group inline-flex"
          >
            See All Events
            <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
          </a>
        </div>
      </div>

      {/* Event Gallery - Keep the element mounted but control visibility with isOpen */}
      {selectedEvent && (
        <EventGallery
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          event={selectedEvent}
        />
      )}
    </section>
  );
};

export default EventsSection;
