// import React from 'react'

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contect/AuthProvider";
import { Spinner } from "flowbite-react";
import {useContext} from "react";


const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading){
        return  <div className="flex items-center justify-center min-h-screen w-full">
        <Spinner aria-label="Center-aligned spinner example"size="lg"  />
      </div>
      
    }

    if (user){
        return children;
    }
    return (
        <div>
            <Navigate to="/login" state={{from : location}} replace ></Navigate>
        </div>
    )
}

export default PrivateRoute
