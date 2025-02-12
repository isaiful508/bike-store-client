import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
             <Toaster
                position="top-center"
                reverseOrder={false}
            />  
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;