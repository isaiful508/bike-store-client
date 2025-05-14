import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    title: "Explore the Trails",
    subtitle: "Alpine Rush X1",
    description: "Premium mountain bike with full suspension and hydraulic disc brakes for the ultimate off-road experience.",
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    buttonText: "Shop Mountain Bikes",
    buttonLink: "/category/mountain-bikes"
  },
  {
    title: "Ride the Road",
    subtitle: "Velocity S7",
    description: "Lightweight carbon road bike with aerodynamic design and premium components for exceptional performance.",
    image: "https://i.postimg.cc/26JsnmFX/pexels-pixabay-276517.jpg",
    buttonText: "Shop Road Bikes",
    buttonLink: "/category/road-bikes"
  },
  {
    title: "Power Your Journey",
    subtitle: "Trailblazer Pro",
    description: "Electric mountain bike with mid-drive motor and full suspension for extended trail riding and maximum enjoyment.",
    image: "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "Shop Electric Bikes",
    buttonLink: "/category/electric-bikes"
  }
];

const Banner = () => {
const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);
  
  return (
    <div className="relative h-[85vh] overflow-hidden mt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-opacity-40"></div>
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl text-white"
              >
                <h2 className="text-lg md:text-xl font-medium text-primary-300 mb-2">
                  {slides[current].subtitle}
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slides[current].title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  {slides[current].description}
                </p>
                <Link
                  to={slides[current].buttonLink}
                  className="btn-primary"
                >
                  {slides[current].buttonText}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full text-white transition-all"
        onClick={prevSlide}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full text-white transition-all"
        onClick={nextSlide}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? 'bg-white scale-125' : 'bg-white/40'
            }`}
            onClick={() => setCurrent(index)}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          />
        ))}
      </div>
      
      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a 
          href="#categories" 
          className="text-white border border-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Banner;