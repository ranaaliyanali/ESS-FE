import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';


import { NavLink } from "react-router-dom";
import {  Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';


import "./Registration.css"

import { useAuth } from '../store/auth';

const Registration = () => {


  const navigate = useNavigate();
  const {storetokenInLS }= useAuth();

    const [user , setUser] = useState({
        firstname:"", lastname:"", email:"" , password:"", cpassword:" ", phone:" "
    })
    let name , value;

    const handleInputs = (e) => {
        console.log(e);
        name =  e.target.name;
        value = e.target.value;

        console.log(name);

        setUser({...user, [name]:value});

    }

    const PostData = async (e) => {
        e.preventDefault();
    
        const { firstname, lastname, email, password, cpassword, phone } = user;
    
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname, lastname, email, password, cpassword, phone
            })
        });
    
        if (res.status === 422) {
            console.log("Invalid credentials");
        } else if (res.ok) { // Check if response status is in the range 200-299
            const data = await res.json();
            console.log("Response from server:", data);
            storetokenInLS(data.token1)
            
            window.alert("Success registration");
            navigate('/login');
        } else {
            console.log("Error:", res.statusText);
        }
    }
    

  return (
    
       <>
            <div className="container border    justify-content-end  ">
                <h2 className="mt-4 ml-2"><strong>Registration</strong></h2>
                <div className="row " >

                    <form method="POST" className="register-form ml-4  mt-3" id="register-form">
                        <div className="form-group ">
                            <label htmlFor="name">
                                < i class="zmdi zmdi-account mr-2"></i>
                            </label>
                            <input className="no-border" type="text" name="firstname" id="name" autoComplete="off"
                                value={user.firstname}
                                onChange={handleInputs}
                                     required
                                     placeholder="First name" 
                                      />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">
                                <i class="zmdi zmdi-account mr-2"></i>
                            </label>
                            <input className="no-border" type="text" name="lastname" id="name" autoComplete="off"
                                value={user.lastname}
                                onChange={handleInputs}
                                     required
                                     placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                <i class="zmdi zmdi-email mate mr-2"></i>
                                <input className="no-border" type="email" name="email" id="email" autoComplete="off"
                                    value={user.email}
                                    onChange={handleInputs}
                                         required
                                         placeholder="Email" />
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                <i class="zmdi zmdi-lock mate mr-2"></i>
                                <input className="no-border" type="password" name="password" id="password" autoComplete="off"
                                    value={user.password}
                                    onChange={handleInputs}
                                         required
                                         placeholder="Password" />
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="cpassword">
                                <i class="zmdi zmdi-lock mate mr-2"></i>
                                <input className="no-border" type="password" name="cpassword" id="cpassword" autoComplete="off"
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                         required
                                         placeholder="Confirm Password" />
                            </label>
                        </div>


                        <div className="form-group">
                            <label htmlFor="phone">
                                <i class="zmdi zmdi-phone-in-talk mate mr-2"></i>
                                <input className="no-border" type="tel" name="phone" id="phone" autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInputs}
                                    required
                                    placeholder="Phone Number" maxLength={11} pattern="{03}[0-9]" />
                            </label>
                        </div>

                        <div className="form-group ml-3">
                            {/* <input type="submit" name="registration" id="registration"/> */}
                            <Button className="button ml-4 btn btn-dark" type="submit" name="registration" id="registration"
                                value="register" variant="primary" onClick={PostData}>Register</Button>

                        </div>

                    </form>

    
                    <div className="col-7 ">
                        {/* <img className=" float-right class  " src={Signin} alt="logo" /> */}
                        <NavLink className=" nav-link  register" to="/login"><h5>I am already register</h5></NavLink>
                    </div>


                </div>

            </div>
        </>
    
  )
}

export default Registration
