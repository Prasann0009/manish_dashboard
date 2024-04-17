import React, { useEffect, useState } from 'react'
import whitelogo from '../assets/images/logo-white.svg'
import axios from 'axios';
import {toast ,Bounce} from 'react-toastify';
import {useNavigate} from "react-router-dom";
export default function Login() {
  let [formval,setFormval]=useState({phone:'',pin:''})
  const navigate = useNavigate();
  const handelOnChange=(e)=>{
   setFormval((currVal)=>({...currVal,[e.target.name]:e.target.value}));
  };
  
  let token=localStorage.getItem ("token");
 useEffect(()=>{
  if(token != null){
     navigate("/");
  }
 })

  const handelOnSubmit=(e)=>{
    e.preventDefault();
    // console.log(JSON.stringify( formval))
    
    // return
 
    const apiCall =async ()=>{
      const response=await fetch("http://localhost:8080/api/user/login",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify( formval),
      })
      const result =await response.json()
      console.log(result);
      if(result.status){
        toast.error(result.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }else{
        toast.success(result.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
          // localStorage("token",result.token);
          localStorage.setItem("token",result.token);
          localStorage.setItem("user",JSON.stringify(result.user));
          console.log(localStorage.getItem("token"));
          navigate("/");
      }
    };
    apiCall();
  }


  return (
  <>
  <div className="auth-main">
  <div className="auth-wrapper v1">
    <div className="auth-form">
      <div className="card my-5">
        <div className="card-body">
          <div className="text-center">
            <a href="#" className="login-brand">
              {/* <img src="../assets/images/logo-dark.svg" alt="img" /> */}
              <img
          src={whitelogo}
          className="img-fluid logo-lg"
          alt="logo"
        />
            </a>
          </div>
          <div className="saprator my-3">
            <span>Login</span>
          </div>
          <h4 className="text-center f-w-500 mb-3">Login with your Phone Number </h4>
          <div className="form-group mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="Phone Number"
              name='phone'
              onChange={handelOnChange}
              value={formval.phone}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingInput1"
              placeholder="Password"
              name='pin'
              value={formval.pin}
              onChange={handelOnChange}
            />
          </div>
          <div className="d-flex mt-1 justify-content-between align-items-center">
            <div className="form-check">
              <input
                className="form-check-input input-primary"
                type="checkbox"
                id="customCheckc1"
                defaultChecked=""
              />
              <label
                className="form-check-label text-muted"
                htmlFor="customCheckc1"
              >
                Remember me?
              </label>
            </div>
          </div>
          <div className="d-grid mt-4">
            {/* <button type="button" class="btn btn-primary">Login</button> */}
            <a href="index.html" onClick={handelOnSubmit} className="btn btn-primary">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}
