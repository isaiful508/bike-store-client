
const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Bike Shop"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About BikeShop</h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Your trusted partner in cycling adventures since 2010. We're passionate about bikes and committed to providing the best cycling experience for our customers.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-500">
              To inspire and enable cycling adventures by providing exceptional bikes, expert guidance, and outstanding service to our community.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Values</h2>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Quality First</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We carefully select and stock only the highest quality bikes and accessories from trusted manufacturers.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Expert Service</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our team of certified mechanics and cycling enthusiasts provide expert advice and professional service.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Community Focus</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We actively support local cycling communities and organize events to bring cyclists together.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Sustainability</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We're committed to promoting sustainable transportation and environmentally friendly practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our experienced team is passionate about cycling and dedicated to helping you find the perfect bike.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=500&h=500&q=80"
                    alt="Team member"
                  />
                </div>
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>John Smith</h3>
                  <p className="text-indigo-600">Founder & Head Mechanic</p>
                </div>
                <div className="text-base text-gray-500">
                  <p>20+ years of experience in bicycle mechanics and shop management.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=500&h=500&q=80"
                    alt="Team member"
                  />
                </div>
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>Sarah Chen</h3>
                  <p className="text-indigo-600">Sales Manager</p>
                </div>
                <div className="text-base text-gray-500">
                  <p>Expert in bike fitting and customer service with 10+ years of experience.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=500&h=500&q=80"
                    alt="Team member"
                  />
                </div>
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>Mike Johnson</h3>
                  <p className="text-indigo-600">Service Manager</p>
                </div>
                <div className="text-base text-gray-500">
                  <p>Certified bike mechanic with expertise in high-end road and mountain bikes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Visit Us</h2>
            <p className="mt-4 text-xl text-gray-500">
              We're conveniently located in the heart of the city. Stop by to explore our collection and meet our team.
            </p>
          </div>

          <div className="mt-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Store Hours</h3>
                    <div className="mt-4 space-y-2 text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                    <div className="mt-4 space-y-2 text-gray-600">
                      <p>123 Bike Street</p>
                      <p>Cycle City, CC 12345</p>
                      <p>Phone: (555) 123-4567</p>
                      <p>Email: info@bikeshop.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;