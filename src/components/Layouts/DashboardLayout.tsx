import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";


const DashboardLayout = () => {
    const user = useAppSelector(useCurrentUser);
    //@ts-ignore
    const isAdmin = user?.role
    return (
        <div className="flex container mx-auto min-h-screen">
            {/* Sidebar */}
            <div className="md:w-64 bg-[#27a072] text-white shadow-lg">
                <div className="p-6 border-b border-[#1f855a]">
                    <h1 className="text-2xl font-bold text-center">Bike Dashboard</h1>
                </div>
                <ul className="menu p-4 space-y-3">
                    {(isAdmin === 'admin' || isAdmin === 'customer') && (
                        <>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-[#1f855a] text-white' : 'hover:bg-[#1f855a]'
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/my_profile"
                                    className={({ isActive }) =>
                                        `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-[#1f855a] text-white' : 'hover:bg-[#1f855a]'
                                        }`
                                    }
                                >
                                    My Profile
                                </NavLink>
                            </li>
                        </>
                    )}
                    {isAdmin === 'admin' && (
                        <>
                            <li>
                                <NavLink
                                    to="/dashboard/add_product"
                                    className={({ isActive }) =>
                                        `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-[#1f855a] text-white' : 'hover:bg-[#1f855a]'
                                        }`
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manage_users"
                                    className={({ isActive }) =>
                                        `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-[#1f855a] text-white' : 'hover:bg-[#1f855a]'
                                        }`
                                    }
                                >
                                    Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manage_orders"
                                    className={({ isActive }) =>
                                        `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-[#1f855a] text-white' : 'hover:bg-[#1f855a]'
                                        }`
                                    }
                                >
                                    Manage Orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/manage_product"
                                    className={({ isActive }) =>
                                        `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-[#1f855a] text-white' : 'hover:bg-[#1f855a]'
                                        }`
                                    }
                                >
                                    Manage Product
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-gray-50">
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;