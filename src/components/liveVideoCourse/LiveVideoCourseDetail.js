import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useParams } from "react-router";
import MyCkeditor from '../Video/MyCKeditor';
export default function LiveVideoCourseDetail () {
    let {id}=useParams();
 let [formval,setFormval]=useState({title:'',images:[],details:'',price:'',offerPrice:''})



useEffect(()=>{
    const apiCall =async ()=>{
        // let response=await fetch(`http://localhost:8080/api/videoCoursDetails/${id}`,{
        let response=await fetch(`http://localhost:8080/api/livevideocourse/videoCoursDetails/${id}`,{
          method: "GET",
        });
        const result=await response.json();
        console.log(result);
        setFormval({...result.data})
      };
    //   
      apiCall();
},[]);

 
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
                <a href="javascript:void(0)">Video Course  Details
                  </a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
              Course  Details
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <div className="page-header-title">
              <h2 className="mb-0">VIdeo Course Details</h2>
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
            <h5>Video Course Details</h5>
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
                      name='title'
                      
                      value={formval.title}
                    />
                    <label htmlFor="">Video Title</label>
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
                      name='price'
                      
                      value={formval.price}
                    />
                    <label htmlFor="">Price</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='offerPrice'
                      
                      value={formval.offerPrice}

                    />
                    <label htmlFor="">Offer Price</label>
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
                      name="images"
                      disabled
                    />
                  </div>
                  <div className='image-box'>
                  {
                    formval?.images?.map((arr)=>{
                        return( 
                          
                            <div key={arr._id}  className='image-box-innr'>
                            <img src={`http://localhost:8080/${arr?.image}`} alt="Preview Image" />
                            <button type='button'><i className='fas fa-times'></i></button>
                            </div>
                          
                        )
                    })
                  }
                  </div>
                </div>

                {/* set hight width */}
                <MyCkeditor disabled={true} data={formval.details} seteditor={setFormval} />
                {/* <div className="col-md-12 text-center">
                  <button className="btn btn-primary" >
                    Add User
                  </button>
                </div> */}
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
