import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const user = useAppSelector(useCurrentUser);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "All Products" },
    ...(user ? [{ path: "/dashboard", label: "Dashboard" }] : []),
    { path: "/about_us", label: "About Us" },
    { path: "/contact_us", label: "Contact Us" },
  ];


  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-indigo-600/70 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://i.ibb.co.com/DfKgNLx6/bikelogo.png"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-white">Bike Nest</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}

              {/* All Bikes Mega Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setIsSubmenuOpen(true)}
                onMouseLeave={() => setIsSubmenuOpen(false)}
              >
                <button className="text-white hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  All Bikes
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Submenu */}
                <div
                  className={`absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 py-1 ${isSubmenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    } transition-opacity duration-200`}
                  onMouseEnter={() => setIsSubmenuOpen(true)} // Keep submenu open when hovering over it
                  onMouseLeave={() => setIsSubmenuOpen(false)} // Close submenu when mouse leaves it
                >
                  <Link to="/category/mountain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Mountain
                  </Link>
                  <Link to="/category/road" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Road
                  </Link>
                  <Link to="/category/hybrid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Hybrid
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-transparent p-1 rounded-full text-white hover:text-gray-200 focus:outline-none">
              <span className="sr-only">Search</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="ml-3 bg-transparent p-1 rounded-full text-white hover:text-gray-200 focus:outline-none">
              <span className="sr-only">Cart</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <div className="ml-3 relative">
              {!user ? (
                <>
                  <Link to='/login' className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                    Login
                  </Link>
                  <Link to="/register" className="ml-2 bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="ml-2 bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
                >
                  Log Out
                </button>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-indigo-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-indigo-600/90 backdrop-blur-md`}>
        <div className="pt-2 pb-3 space-y-1 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile submenu - optional */}
          <div className="mt-2">
            <p className="text-white font-semibold px-3">All Bikes</p>
            <div className="pl-4 space-y-1">
              <Link to="/category/mountain" className="block text-white hover:text-gray-200">Mountain</Link>
              <Link to="/category/road" className="block text-white hover:text-gray-200">Road</Link>
              <Link to="/category/hybrid" className="block text-white hover:text-gray-200">Hybrid</Link>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-3 border-t border-indigo-500 px-4">
          {!user ? (
            <div className="flex gap-2">
              <Link to="/login" className="flex-1 bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium text-center">
                Login
              </Link>
              <Link to="/register" className="flex-1 bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium text-center">
                Sign Up
              </Link>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleLogout();
              }}
              className="w-full bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
