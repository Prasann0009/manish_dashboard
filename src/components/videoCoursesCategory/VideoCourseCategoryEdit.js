import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useParams } from "react-router";
import {useNavigate} from "react-router-dom";
import {toast ,Bounce} from 'react-toastify';
// import Ck2 from"./Ck2"
// import MyCkeditor from './MyCKeditor';
export default function VideoCourseCategoryEdit () {
  const navigate = useNavigate();
    let {id}=useParams();
    let [formval,setFormval]=useState({category:'',categoryPhoto:"",categorySequence:''})



    const handelOnChange=(e)=>{
      if(e.target.name == "categoryPhoto"){
        setFormval((currVal)=>({...currVal,categoryPhoto: e.target.files[0]}));
      }else{
        setFormval((currVal)=>({...currVal,[e.target.name]:e.target.value}));
      }
    };
  
  useEffect(()=>{
      const apiCall =async ()=>{
          let response=await fetch(`http://localhost:8080/api/videocoursecategory/details/${id}`,{
            method: "GET",
          });
          const result=await response.json();
          console.log(result,"result");
          setFormval({...result.data})
        };
     
        apiCall();
  },[]);

  const handelOnSubmit=(e)=>{
    // console.log(formval)
    e.preventDefault();

    const postData = new FormData();
		postData.append('categoryPhoto', formval.categoryPhoto);
		postData.append('category', formval.category);
		postData.append('categorySequence', formval.categorySequence);

    const apiCall =async ()=>{
      let response=await fetch(`http://localhost:8080/api/videocoursecategory/edit/${id}`,{
        method: "POST",
		// body:JSON.stringify(postData) ,
        // header:{
        //     'Content-Type': 'application/json'
        // }
        body:postData
      });
      const result=await response.json();
      console.log(result);
      if(!result.status){
        console.log("react tosify")
        toast.success(result.message, {
          position: "top-right",
          autoClose: 1000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        navigate("/video-course-category-list");

    };
    };
    apiCall();
  };



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
                <a href="">Video Course Category  Details
                  </a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
              Course Category Details
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <div className="page-header-title">
              <h2 className="mb-0">VIdeo Course Category Details</h2>
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
            <h5>Video Course Category Details</h5>
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
                      name="categoryPhoto"
                      onChange={handelOnChange}
                    />
                  </div>
                  <img src={`http://localhost:8080/${formval?.categoryPhoto}`} alt="Preview Image" className='img-50' />
                  

                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='category'
                      onChange={handelOnChange}
                      value={formval.category}
                    />
                    <label htmlFor="">Video category</label>
                  </div>
                </div>
              
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="number"
                      className="form-control"
                      id="example-datemax"
                      max=""
                      placeholder=""
                      name='categorySequence'
                      onChange={handelOnChange}
                      value={formval.categorySequence}
                    />
                    <label htmlFor="">categorySequence</label>
                  </div>
                </div>
               
                <div className="col-md-12 text-center">
                  <button className="btn btn-primary" >
                    Update Video Course Category
                  </button>
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
