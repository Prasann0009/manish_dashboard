import React, { useEffect, useState } from 'react'
import Header from '../Header'
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router";
export default function AddDetails() {
    let {id}=useParams();
 let [formval,setFormval]=useState({profileImg:'',firstName:'',lastName:'',dob:'',email:'',phone:'',gender:'',city:'',pin:'',status:''})
 

 useEffect(()=>{
    let apiCall=async ()=>{
      let res = await fetch(`http://localhost:8080/api/user/user_data/${id}`, {
    //   let res = await fetch(`http://localhost:8080/api/user/user_data/660e702aa9051284e7ffaf42`, {
        method: "GET",
        headers: {
          "Authorization":(localStorage.getItem ("token"))
        }
      });
        const result=await res.json();
        console.log(result.data);
        // setTableData([...result.data])
        setFormval({...result.data});
  };
  apiCall();
},[]);




//   const handelOnChange=(e)=>{
//     if(e.target.name == "profileImg"){
//      let a=e.target.files[0]
//       console.log(a)
//       setFormval((currVal)=>({...currVal,profileImg: e.target.files[0]}));
//     }
//    setFormval((currVal)=>({...currVal,[e.target.name]:e.target.value}));
//   };


// /(e)=>{
//     e.preventDefault();
//     console.log(formval.profileImg)
//     const postData = new FormData();
//     postData.append("profileImg", formval.profileImg);
// 		postData.append('firstName', formval.firstName);
// 		postData.append('lastName', formval.lastName);
// 		postData.append('dob', formval.dob);
// 		postData.append('email', formval.email);
// 		postData.append('phone', formval.phone);
// 		postData.append('gender', formval.gender);
// 		postData.append('city', formval.city);
// 		postData.append('pin', formval.pin);
// 		postData.append('status', formval.status);
//     const axios = require('axios');
// 		// postData.append('date', formval.date);
//     // console.log(postData)
//     console.dir(postData)
//     // const apiCall =async ()=>{
//     //   let response=await fetch("http://localhost:8080/api/user/register",{
//     //     method: "POST",
// 		// 		body: postData,
//     //   });
//     //   const result=await response.json();
//     //   console.log(result);
//     // };
//     // apiCall();
//     const apiCall =async ()=>{
//       // let response=await axios.post("http://localhost:8080/api/user/register",{
       
// 			// 	body: postData,
//       // });
//       // const result=await response.json();
//       // console.log(result);

//       axios.post("http://localhost:8080/api/user/register", {
//         postData
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//     };
//     apiCall();

//   }
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
            User deatils
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <div className="page-header-title">
              <h2 className="mb-0">User deatils</h2>
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
            <h5>All details</h5>
          </div>
          <div className="card-body">
            <form >
              <div className="row g-4">
              
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='firstName'
                      value={formval.firstName}
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
                      value={formval.lastName}
                      
                    />
                    <label htmlFor="">Last Name</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id="example-datemax"
                      max=""
                      placeholder=""
                      name='dob'
                      value={formval.dob}
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
                      value={formval.email}
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
                      value={formval.phone}
                    />
                    <label htmlFor="">Phone Number</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <select className="form-select" value={formval.gender} name='gender'  id="">
                      <option >Select Gender</option>
                      <option  selected={formval.gender === "male"  && true} value="male">Male</option>
                      <option selected={formval.gender === "Female"  && true} value="Female">Female</option>
                      <option selected={formval.gender === "Other" && true} value="Other">Other</option>
                    </select>
                    <label htmlFor="">Gender</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <select className="form-select" name='city' id="">
                      <option selected="" value="">Select City</option>
                      <option selected={formval.city === "Jaipur"  && true} value="Jaipur">Jaipur</option>
                      <option selected={formval.city === "Ajmer"  && true} value="Ajmer">Ajmer</option>
                      <option selected={formval.city === "Udaipur"  && true} value="Udaipur">Udaipur</option>
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
                      value={formval.pin}
                    />
                    <label htmlFor="">Pin Number</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <select className="form-select" name='status' value={formval.status} id="">
                      <option selected="" value="">Select Status</option>
                      <option selected={formval.city === "Active"  && true} value="Active">Active</option>
                      <option selected={formval.city === "Inactive"  && true} value="Inactive">Inactive</option>
                    </select>
                    <label htmlFor="">Status</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-0 input-group-lg">
                    {/* <label for="" class="form-label">Profile Img</label> */}
                    <input
                      type="file"
                      className="form-control "
                      id=""
                      placeholder=""
                      name="profileImg"
                      disabled
                    />
                    {<img src={`http://localhost:8080/${formval?.profileImg}`} alt="Preview Image" className="img-50 " />}
                    {/* {<img src={`${image && true ? image:`${formval?.profileImg}`}`} alt="Preview Image" className="img-100" />} */}
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  {/* <button className="btn btn-primary" disabled>
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
