import { ReactNode } from "react";

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useCurrentUser } from "../redux/features/auth/authSlice";


const AdminRoute = ({children} : {children : ReactNode}) => {
      const user = useAppSelector(useCurrentUser);
      //@ts-ignore
      const isAdmin = user?.role === "admin";

    
    if(!isAdmin) {
        return <Navigate to="/login" replace={true} />
    }



    return children;
};

export default AdminRoute;