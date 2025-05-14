
const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 min-h-screen mt-16">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              We'd love to hear from you! Whether you're curious about a specific bike, need service help, or anything else — we're ready to answer all your questions.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Address:</strong> 123 Bike Street, Cycle City, CC 12345</li>
              <li><strong>Phone:</strong> (555) 123-4567</li>
              <li><strong>Email:</strong> info@bikeshop.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
