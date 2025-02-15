import {  useGetAllProductsQuery} from "../../redux/features/products/productApi";
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import { useMemo, useState } from "react";

const AllProducts = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const items = products?.data;
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    priceRange: 'all',
    brand: 'all',
    category: 'all',
    availability: 'all'
  });

  const brands = useMemo(() => {
    if (!items) return [];
    return [...new Set(items.map(product => product.brand))];
  }, [items]);

  const categories = useMemo(() => {
    if (!items) return [];
    return [...new Set(items.map(product => product.category))];
  }, [items]);

  const filteredProducts = useMemo(() => {
    if (!items) return [];

    return items.filter(product => {
      const searchMatch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());

      let priceMatch = true;
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number);
        priceMatch = product.price >= min && (max ? product.price <= max : true);
      }

      const brandMatch = filters.brand === 'all' || product.brand === filters.brand;
      const categoryMatch = filters.category === 'all' || product.category === filters.category;
      const availabilityMatch = 
        filters.availability === 'all' ||
        (filters.availability === 'inStock' && product.inStock) ||
        (filters.availability === 'outOfStock' && !product.inStock);

      return searchMatch && priceMatch && brandMatch && categoryMatch && availabilityMatch;
    });
  }, [items, searchTerm, filters]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="p-8 bg-white rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 mx-auto mb-4">
            <svg className="w-full h-full text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Products</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Our Products
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              Explore our collection of premium bikes for every adventure
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Products
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                id="search"
                type="text"
                placeholder="Search by name, brand, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pr-10 pl-4 py-3 border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Filters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Price Range Filter */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  id="price"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                >
                  <option value="all">All Prices</option>
                  <option value="0-1000">Under $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000-3000">$2,000 - $3,000</option>
                  <option value="3000">$3,000 and above</option>
                </select>
              </div>

              {/* Brand Filter */}
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                  Brand
                </label>
                <select
                  id="brand"
                  value={filters.brand}
                  onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                >
                  <option value="all">All Brands</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Availability Filter */}
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  value={filters.availability}
                  onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
                >
                  <option value="all">All Availability</option>
                  <option value="inStock">In Stock</option>
                  <option value="outOfStock">Out of Stock</option>
                </select>
              </div>
            </div>

            {/* Reset Filters Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({
                    priceRange: 'all',
                    brand: 'all',
                    category: 'all',
                    availability: 'all'
                  });
                }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="bg-indigo-50 rounded-lg px-6 py-4 mb-8">
          <div className="flex items-center justify-between">
            <p className="text-indigo-700 font-medium">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            <div className="text-sm text-indigo-600">
              {searchTerm && <span className="mr-2">Search: "{searchTerm}"</span>}
              
              {Object.entries(filters).map(([key, value]) => 
                value !== 'all' && (
                  <span key={key} className="mr-2">
                    {key}: {value}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <svg className="w-full h-full text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;