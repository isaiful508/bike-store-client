import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
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
                path: '/products/:id',
                element: <ProductDetails />
            },
            {
                path: '/checkout/:id',
                element: <Checkout />
            },
            {
                path: 'order/verify',
                element: <VerifyOrder />
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
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard/add_product',
                element: <AddProduct />
            },
            {
                path: '/dashboard/my_profile',
                element: <MyProfile />
            },
            {
                path: '/dashboard/manage_orders',
                element: <ManageOrders />
            },
            {
                path: '/dashboard/manage_users',
                element: <ManageUsers />
            },
            {
                path: '/dashboard/manage_product',
                element: <Products />
            },
        ] // Keep this if you plan to add nested routes inside Dashboard
    }
]);

export default router;