import React, { useEffect } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from 'react-router-dom';




const Logout = () => {

    
    const {LogoutUser} = useAuth();
  const navigate = useNavigate();
    useEffect( () => {
        LogoutUser();
    },[LogoutUser])

     navigate('/login');
}



export default Logout;



