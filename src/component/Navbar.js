import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import NavbarImage from "../images/home.png";
import './Navbar.css';
import {useSelector} from "react-redux";
import {selectLoginInfo} from "../reducers/loginSlice";


const Navbar = () => {
    const loginInfo = useSelector(selectLoginInfo);
    const [loginInfo_l, setLoginInfo_l] = useState(false);


    useEffect(() => {
        setLoginInfo_l(loginInfo.status)
    }, [loginInfo]);

    return (
        <>
            <nav className="navbar pt-1 mt-3  navbar-expand-lg navbar-light bg-dark">
                <NavLink className="navbar-brand" to="#">
                    <img className="image" src={NavbarImage} alt="logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto " >
                        <li className="nav-item active">
                            <NavLink className="nav-link text-light" to="user_about">User_about <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/owner_about">Owner_about</NavLink>
                        </li>
                        {loginInfo_l ?
                            (
                            <li className="nav-item  ">
                                <NavLink className="nav-link text-light" to="/logout">Logout</NavLink>
                            </li>
                            )
                                :
                            (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light" to="/registration">Registration</NavLink>
                                </li>

                                <li className="nav-item  ">
                                    <NavLink className="nav-link text-light" to="/login">Login</NavLink>
                                </li>
                            </>
                        )
                        }



                    </ul>
                    
                </div>
            </nav>
        </>

    )
}

export default Navbar