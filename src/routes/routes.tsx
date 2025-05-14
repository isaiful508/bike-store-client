import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import About from "../components/About/About";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Checkout from "../pages/Checkout/Checkout";
import VerifyOrder from "../pages/VerifyOrder/VerifyOrder";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import AllProducts from './../pages/AllProducts/AllProducts';
import Products from "../pages/Dashboard/Products/Products";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ManageOrders from "../pages/Dashboard/ManageOrders/ManageOrders";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import Contact from "../components/Contact/Contact";
import Overview from "../pages/Dashboard/Overview/Overview";
import ProtectedRoute from "../components/Layouts/ProtectedRoute";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <AllProducts />
            },
            {
                path: '/about_us',
                element: <About />
            },
            {
                path: '/contact_us',
                element: <Contact />
            },
            {
                path: '/products/:id',
                element: <ProductDetails />
            },
            {
                path: '/checkout/:id',
                element: <ProtectedRoute><Checkout /></ProtectedRoute>
            },
            {
                path: 'order/verify',
                element: <ProtectedRoute><VerifyOrder /></ProtectedRoute> 
            }

        ]
    },
    //auth routes
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    // Dashboard route
    {
        path: '/dashboard',
        element:<ProtectedRoute><DashboardLayout /></ProtectedRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Overview />
            },
            {
                path: '/dashboard/add_product',
                element: <AdminRoute><AddProduct /></AdminRoute>
            },
            {
                path: '/dashboard/my_profile',
                element: <ProtectedRoute><MyProfile /></ProtectedRoute>
            },
            {
                path: '/dashboard/manage_orders',
                element: <AdminRoute><ManageOrders /></AdminRoute>
            },
            {
                path: '/dashboard/manage_users',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: '/dashboard/manage_product',
                element: <AdminRoute><Products /></AdminRoute>
            },
        ] // Keep this if you plan to add nested routes inside Dashboard
    }
]);

export default router;