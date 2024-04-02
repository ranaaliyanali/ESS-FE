import { useDispatch } from "react-redux";
import {setLoginInfo} from "../reducers/alertSlice";
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.status === 200) {
      localStorage.setItem("token", data.token)
      dispatch(setLoginInfo(true));
      navigate('/user_about');
    } else {
      alert(data.message);
    }
  };
  return (
      <>
        <div className='container1  justify-content-center"'>
          <form method="POST">
            <div class="form-group ml-4 mr-4 mt-5 ">
              <label className='text' for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Enter email"/>
              <small className='text' id="emailHelp" class="form-text text-muted mt-2">We'll never share your email with
                anyone else.</small>
            </div>
            <div class="form-group ml-4 mr-4">
              <label className='text' for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="password" name='password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"/>
            </div>
            <div class="form-group form-check ml-4 mr-4">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label className='text' class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div className='text-center'>
              <button type="submit" name="login" id="login" value="login" onClick={loginUser}
                      class="btn btn-dark text-center">Submit
              </button>
            </div>

            <NavLink className=" nav-link  register" to="/registration"><h5>I am already register</h5></NavLink>
          </form>

        </div>

      </>
  )
}


export default Login;
