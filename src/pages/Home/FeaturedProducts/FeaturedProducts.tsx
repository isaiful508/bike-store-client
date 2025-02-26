import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: "Mountain Explorer Pro",
    brand: "TrailBlazer",
    price: 149,
    rating: 5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=3540&auto=format&fit=crop",
    tag: "Best Seller",
    description: "Professional-grade mountain Cycle with advanced suspension"
  },
  {
    id: 2,
    name: "Road Master Elite",
    brand: "SpeedKing",
    price: 219,
    rating: 4.9,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3540&auto=format&fit=crop",
    tag: "New Arrival",
    description: "Ultra-lightweight carbon frame road Cycle"
  },
  {
    id: 3,
    name: "Urban Glide X",
    brand: "CityRider",
    price: 899,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3540&auto=format&fit=crop",
    tag: "Popular",
    description: "Comfortable hybrid Cycle perfect for city commuting"
  },
  {
    id: 4,
    name: "Electric Explorer",
    brand: "PowerRide",
    price: 249,
    rating: 4.9,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=3540&auto=format&fit=crop",
    tag: "Featured",
    description: "Premium electric Cycle with extended range"
  }
];

const FeaturedProducts = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured BiCycles</h2>
          <p className="text-xl text-gray-600">Discover our most popular and newest additions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.tag}
                </span>
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-500 text-sm mb-1">{product.brand}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className={`${
                          index < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                  <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;