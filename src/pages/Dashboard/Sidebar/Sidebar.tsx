import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import {  useAppSelector } from "../../../redux/hooks";
import { 
  Home, 
  Users, 
  ShoppingCart, 
  Package, 
  User, 
  LayoutDashboard,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const user = useAppSelector(useCurrentUser);
  const sidebarRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 768
      ) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeSidebar]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && isOpen) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, closeSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 left-0 z-20 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 ease-in-out bg-indigo-700 text-white md:relative md:w-${
        isOpen ? '64' : '20'
      }`}
    >
      <div className={`flex flex-col h-full overflow-y-auto ${isOpen ? 'w-40' : 'md:w-20'}`}>
        <div className={`flex items-center justify-center h-16 ${isOpen ? 'px-6' : 'px-2'}`}>
          <NavLink to="/" className="flex items-center">
            <LayoutDashboard className="h-8 w-8 text-indigo-300" />
            {isOpen && <span className="ml-2 text-xl font-bold">Dashboard</span>}
          </NavLink>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-600'
              } ${!isOpen && 'justify-center'}`
            }
          >
            <Home className={`h-5 w-5 ${isOpen ? 'mr-3' : ''}`} />
            {isOpen && <span>Overview</span>}
          </NavLink>

          {/* Show for all users */}
          <NavLink
            to="/dashboard/my_profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-indigo-800 text-white'
                  : 'text-indigo-100 hover:bg-indigo-600'
              } ${!isOpen && 'justify-center'}`
            }
          >
            <User className={`h-5 w-5 ${isOpen ? 'mr-3' : ''}`} />
            {isOpen && <span>My Profile</span>}
          </NavLink>

          {/* @ts-ignore */}
          {(user?.role === 'admin') && (
            <>
              <NavLink
                to="/dashboard/add_product"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-indigo-800 text-white'
                      : 'text-indigo-100 hover:bg-indigo-600'
                  } ${!isOpen && 'justify-center'}`
                }
              >
                <ShoppingCart className={`h-5 w-5 ${isOpen ? 'mr-3' : ''}`} />
                {isOpen && <span>Products</span>}
              </NavLink>

              <NavLink
                to="/dashboard/manage_orders"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-indigo-800 text-white'
                      : 'text-indigo-100 hover:bg-indigo-600'
                  } ${!isOpen && 'justify-center'}`
                }
              >
                <Package className={`h-5 w-5 ${isOpen ? 'mr-3' : ''}`} />
                {isOpen && <span>Orders</span>}
              </NavLink>
              <NavLink
                to="/dashboard/manage_users"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-indigo-800 text-white'
                      : 'text-indigo-100 hover:bg-indigo-600'
                  } ${!isOpen && 'justify-center'}`
                }
              >
                <Users className={`h-5 w-5 ${isOpen ? 'mr-3' : ''}`} />
                {isOpen && <span>Users</span>}
              </NavLink>

            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;