import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {setLoginInfo} from "../reducers/alertSlice";
import { useDispatch } from "react-redux";


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    localStorage.removeItem("token");
    dispatch(setLoginInfo(false));

    useEffect(() => {
      navigate('/login');
    }, []);
}

export default Logout;



