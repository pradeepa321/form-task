import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const goToHome =()=>{
        navigate ("/Home");
    };
  return (
    <div>
        Login <Link to={"/Home"}>Got to home</Link>
        <button  style={{fontSize:"40px",background:"pink"}}onClick={()=>goToHome()}>Click</button>
        
    </div> 
  )
}

export default Login