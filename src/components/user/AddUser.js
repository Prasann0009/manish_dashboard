import React, { useState } from 'react'
import Header from '../Header'
import axios from 'axios';
export default function AddUser () {
 let [formval,setFormval]=useState({profileImg:'',firstName:'',lastName:'',dob:'',email:'',phone:'',gender:'',city:'',pin:'',status:''})
 
  const handelOnChange=(e)=>{
    if(e.target.name == "profileImg"){
     let a=e.target.files[0]
      console.log(a)
      setFormval((currVal)=>({...currVal,profileImg: e.target.files[0]}));
    }
   setFormval((currVal)=>({...currVal,[e.target.name]:e.target.value}));
  };


  const handelOnSubmit=(e)=>{
    e.preventDefault();
    console.log(formval.profileImg)
    const postData = new FormData();
    postData.append("profileImg", formval.profileImg);
		postData.append('firstName', formval.firstName);
		postData.append('lastName', formval.lastName);
		postData.append('dob', formval.dob);
		postData.append('email', formval.email);
		postData.append('phone', formval.phone);
		postData.append('gender', formval.gender);
		postData.append('city', formval.city);
		postData.append('pin', formval.pin);
		postData.append('status', formval.status);
    const axios = require('axios');
		// postData.append('date', formval.date);
    // console.log(postData)
    console.dir(postData)
    // const apiCall =async ()=>{
    //   let response=await fetch("http://localhost:8080/api/user/register",{
    //     method: "POST",
		// 		body: postData,
    //   });
    //   const result=await response.json();
    //   console.log(result);
    // };
    // apiCall();
    const apiCall =async ()=>{
      // let response=await axios.post("http://localhost:8080/api/user/register",{
       
			// 	body: postData,
      // });
      // const result=await response.json();
      // console.log(result);

      axios.post("http://localhost:8080/api/user/register", {
        postData
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    };
    apiCall();

  }
  return (
    <>
    <Header/>
  <div className="pc-container">
  <div className="pc-content">
    {/* [ breadcrumb ] start */}
    <div className="page-header">
      <div className="page-block">
        <div className="row align-items-center">
          <div className="col-md-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="../dashboard/index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="javascript:void(0)">User Management</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Add User
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <div className="page-header-title">
              <h2 className="mb-0">Add User</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      {/* [ form-element ] start */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5>Add User</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handelOnSubmit}>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="mb-0 input-group-lg">
                    {/* <label for="" class="form-label">Profile Img</label> */}
                    <input
                      type="file"
                      className="form-control "
                      id=""
                      placeholder=""
                      name="profileImg"
                      onChange={handelOnChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='firstName'
                      onChange={handelOnChange}
                    />
                    <label htmlFor="">First Name</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='lastName'
                      onChange={handelOnChange}
                      
                    />
                    <label htmlFor="">Last Name</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="date"
                      className="form-control"
                      id="example-datemax"
                      max=""
                      placeholder=""
                      name='dob'
                      onChange={handelOnChange}
                    />
                    <label htmlFor="">DOB</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="email"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='email'
                      onChange={handelOnChange}
                    />
                    <label htmlFor="">Email Address</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='phone'
                      onChange={handelOnChange}
                    />
                    <label htmlFor="">Phone Number</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <select className="form-select" name='gender' onChange={handelOnChange} id="">
                      <option selected="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <label htmlFor="">Gender</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <select className="form-select" name='city' onChange={handelOnChange} id="">
                      <option selected="" value="">Select City</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Ajmer">Ajmer</option>
                      <option value="Udaipur">Udaipur</option>
                    </select>
                    <label htmlFor="">City</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='pin'
                      onChange={handelOnChange}
                    />
                    <label htmlFor="">Pin Number</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <select className="form-select" name='status' onChange={handelOnChange} id="">
                      <option selected="" value="">Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                    <label htmlFor="">Status</label>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  {/* <button className="btn btn-primary" >
                    Add User
                  </button> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* [ form-element ] end */}
    </div>
    {/* [ breadcrumb ] end */}
    {/* [ Main Content ] start */}
    {/* [ Main Content ] end */}
  </div>
</div>

    </>
  )
}
