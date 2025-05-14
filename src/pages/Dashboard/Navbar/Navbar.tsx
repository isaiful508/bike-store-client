import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Menu, User, LogOut, Settings, ChevronDown } from 'lucide-react';

import { logout, useCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {

  const navigate = useNavigate();
  const user = useAppSelector(useCurrentUser);


  const dispatch = useAppDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:text-indigo-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center ml-4">
              <span className="text-indigo-600 font-semibold text-xl">Dashboard</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="p-2 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>

              {notificationOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-2 px-4 border-b border-gray-100">
                    <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    <div className="py-2 px-4 border-b border-gray-100 hover:bg-gray-50">
                      <p className="text-sm font-medium text-gray-900">New order received</p>
                      <p className="text-xs text-gray-500">10 minutes ago</p>
                    </div>
                    <div className="py-2 px-4 border-b border-gray-100 hover:bg-gray-50">
                      <p className="text-sm font-medium text-gray-900">User Michael updated their profile</p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                    <div className="py-2 px-4 hover:bg-gray-50">
                      <p className="text-sm font-medium text-gray-900">Product "Wireless Headphones" is low on stock</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <div className="py-2 px-4 border-t border-gray-100">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      View all notifications
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Profile dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      //@ts-ignore
                      src={user?.avatar || "https://randomuser.me/api/portraits/men/1.jpg"}
                      alt="User avatar"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center">
                      {/* @ts-ignore */}
                      <span className="text-sm font-medium">{user?.name || "User"}</span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </div>
                    {/* @ts-ignore */}
                    <div className="text-xs text-gray-500">{user?.role || "user"}</div>
                  </div>
                </div>
              </button>

              {dropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <User className="mr-3 h-4 w-4 text-gray-500" />
                      Your Profile
                    </Link>
                    <Link
                      to="/profile/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Settings className="mr-3 h-4 w-4 text-gray-500" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="mr-3 h-4 w-4 text-gray-500" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;