import { ReactNode } from 'react';
import { Navigate } from "react-router-dom";


const VerifyAdmin = ({children}: {children : ReactNode}) => {
    const isAdmin = "admin"
    if (isAdmin) {
        return children;
    }

  

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default VerifyAdmin;