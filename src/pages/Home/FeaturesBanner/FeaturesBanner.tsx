import React from 'react';
import { Truck, BadgeCheck, RefreshCw, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Truck className="w-10 h-10 text-primary-600" />,
    title: 'Free Shipping',
    description: 'On all orders over $1,000'
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-primary-600" />,
    title: 'Quality Guarantee',
    description: 'Satisfaction guaranteed or money back'
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-primary-600" />,
    title: '30-Day Returns',
    description: 'Easy returns within 30 days'
  },
  {
    icon: <HeadphonesIcon className="w-10 h-10 text-primary-600" />,
    title: 'Expert Support',
    description: 'Dedicated customer service team'
  }
];

const FeaturesBanner: React.FC = () => {
  return (
    <section className="py-16 mt-12 bg-white border-t border-b border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className="mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;