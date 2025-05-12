import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Mountain Bike Maintenance',
    excerpt: 'Keep your mountain bike in top condition with these essential maintenance tips that will extend the life of your bike and improve performance on the trails.',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Mike Thompson',
    date: 'June 15, 2023',
    readTime: '8 min read',
    category: 'Maintenance',
    slug: 'ultimate-guide-mountain-bike-maintenance'
  },
  {
    id: 2,
    title: 'Finding the Perfect Bike for Your Commute',
    excerpt: 'Choosing the right bike for daily commuting can make all the difference in your riding experience. Learn about the key factors to consider when selecting your ideal commuter bike.',
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Emma Rodriguez',
    date: 'July 3, 2023',
    readTime: '6 min read',
    category: 'City Biking',
    slug: 'finding-perfect-bike-commute'
  },
  {
    id: 3,
    title: 'Top 5 Cycling Routes in California',
    excerpt: 'California offers some of the most scenic cycling routes in the country. Discover these five breathtaking rides that showcase the state\'s diverse landscapes and challenges.',
    image: 'https://images.pexels.com/photos/163407/cyclists-bicycles-mountain-bikes-bike-163407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'David Chen',
    date: 'August 22, 2023',
    readTime: '10 min read',
    category: 'Routes',
    slug: 'top-cycling-routes-california'
  }
];

const BlogPreview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cycling Tips & Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our blog for maintenance guides, riding tips, and inspiring stories
            from the cycling community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge-primary">{post.category}</span>
                  </div>
                </div>
              </Link>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">
                  <Link to={`/blog/${post.slug}`} className="text-gray-900 hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/blog" className="btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;