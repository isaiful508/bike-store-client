import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout/>,
        children : [
            {
               path : '/',
               element : <Home/> 
            },
            
        ]
    },
    //auth routes
    {
        path : '/login',
        element : <Login/> 
     }
]);

export default router;