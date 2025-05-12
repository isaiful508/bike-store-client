import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Alex Morgan',
    location: 'Denver, CO',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    text: 'The Alpine Rush X1 has completely transformed my trail riding experience. The suspension handles rough terrain with ease, while the responsive handling gives me confidence on technical descents. Customer service was outstanding from purchase through delivery.',
    product: 'Alpine Rush X1 Mountain Bike'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'Portland, OR',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    text: 'I commute daily through the city and the Urban Glide 7 has been a game-changer. The integrated lights and fenders are perfect for rainy mornings, and the comfortable geometry means I arrive at work without any back pain. Highly recommended!',
    product: 'Urban Glide 7 City Bike'
  },
  {
    id: 3,
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    text: 'As someone new to serious cycling, the Velocity S7 has been the perfect introduction to road biking. It\'s lightweight, responsive, and the quality components make shifting smooth and reliable. I would have given 5 stars if it came with pedals included.',
    product: 'Velocity S7 Road Bike'
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from cyclists who've experienced
            the quality and performance of our bikes firsthand.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[current].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonials[current].text}"
                  </blockquote>
                  
                  <div>
                    <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                    <p className="text-gray-500 text-sm">{testimonials[current].location}</p>
                    <p className="text-primary-600 text-sm mt-1">
                      Purchased: {testimonials[current].product}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    current === index ? 'bg-primary-600 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;