
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const User_about = () => {


      
  

  return (
    <>
    <form  method="GET">
<div class="form-group ml-4 mr-4 mt-5 " >
<label className='text' for="exampleInputEmail1">Email address</label>
<input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" 
// value={email}
// onChange = {(e) => setEmail(e.target.value)}
placeholder="Enter email"/>
<small className='text' id="emailHelp" class="form-text text-muted mt-2">We'll never share your email with anyone else.</small>
</div>
<div class="form-group ml-4 mr-4"> 
<label className='text' for="exampleInputPassword1">Password</label>
<input type="password" class="form-control" id="password" name='password' 
// value={password}
// onChange = {(e) =>setPassword(e.target.value)}
placeholder="Password"/>
</div>
</form>
</>
  );
};

export default User_about;
