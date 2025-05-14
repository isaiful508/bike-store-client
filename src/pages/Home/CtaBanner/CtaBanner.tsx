import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-cover bg-center relative mt-12" style={{ backgroundImage: 'url(https://images.pexels.com/photos/38296/cycling-bicycle-riding-sport-38296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-800/70"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='px-10'
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Next Adventure?</h2>
            <p className="text-white/90 text-lg mb-8">
              Get expert advice on finding the perfect bike for your riding style.
              Visit our store for a personalized fitting and test ride today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Find a Store
              </Link>
              <Link to="/products" className="bg-transparent border text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ">
                Shop Online
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;