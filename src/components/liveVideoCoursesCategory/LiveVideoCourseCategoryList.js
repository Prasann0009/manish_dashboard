import React, { useEffect, useState } from 'react'
import Header from '../Header'
import defaultimg from '../../assets/images/default.jpg'
import dummy from '../../assets/images/dummy.mp4'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";
import {toast ,Bounce} from 'react-toastify';

function LiveVideoCourseCategorylist() {
   let [tableData,setTableData]=useState([]);
   let [num,setnum]=useState(1)
   useEffect(()=>{
      
      let apiCall=async ()=>{
        let res = await fetch(`http://localhost:8080/api/livevideocoursescategory/allcourses`, {
          method: "GET",
        
        });
          const result=await res.json();
          console.log(result.data);
          setTableData([...result.data])
    };
    apiCall();
;
  },[]);
  
 
  const handleDelete=(id)=>{
   // console.log(id);
   
     let apiCall=async ()=>{
       let res = await fetch(`http://localhost:8080/api/livevideocoursescategory/delete/${id}`, {
         method: "POST",
         // headers: {
         //   "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlNzAyYWE5MDUxMjg0ZTdmZmFmNDIiLCJwZ29uZSI6MTIzLCJwaW4iOjEyMzQsImlhdCI6MTcxMjIyMjQxOX0.f6tfrIcyO4GdoH6DO849jrzxg4cdkur3-dk042iLeQI"
         // }
       });
         const result=await res.json();
         console.log(result.data);
         let deletedUser=result.data
         setTableData(tableData.filter((arr)=>arr._id != deletedUser._id))
   };
     Swal.fire({
       title: "Are you sure?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!"
     }).then((result) => {
       if (result.isConfirmed) {
         apiCall();
         Swal.fire({
           title: "Deleted!",
           text: "Your file has been deleted.",
           icon: "success"
         });
       }
     });
 // apiCall();
 };

 const handleStatus=(id)=>{
   console.log(id);
   let apiCall=async ()=>{
     let res = await fetch(`http://localhost:8080/api/livevideocoursescategory/active/${id}`, {
       method: "PUT",
      //  headers: {
      //    "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlNzAyYWE5MDUxMjg0ZTdmZmFmNDIiLCJwZ29uZSI6MTIzLCJwaW4iOjEyMzQsImlhdCI6MTcxMjIyMjQxOX0.f6tfrIcyO4GdoH6DO849jrzxg4cdkur3-dk042iLeQI"
 
      //  }
     });
       const result=await res.json();
      //  console.log(result.data);
      //  setTableData([...result.data])
      setTableData((currtable)=>{
        currtable.map((arr)=>{
          if(arr._id === result.data._id){
            arr.isActive=(result.data.isActive)
          }
        });
          
          return [...currtable]
   })
 };
 apiCall();
 };

  return (
    <>
    <Header />
    <div className="pc-container">
   <div className="pc-content">
      <div className="page-header">
         <div className="page-block">
            <div className="row align-items-center">
               <div className="col-md-12">
                  <ul className="breadcrumb">
                     <li className="breadcrumb-item">
                        <a href="../dashboard/index.html">Dashboard</a>
                     </li>
                     <li className="breadcrumb-item">
                        <a href="javascript: void(0)">Live Video Category Management</a>
                     </li>
                     <li className="breadcrumb-item" aria-current="page">
                     Live Video Course  Category List
                     </li>
                  </ul>
               </div>
               
               <div className='card'>
               <div className="card-header mb-3 border-0">
               <h5 className='d-flex justify-content-between align-items-center'> <span>Live Video Course Category List</span>
               <Link to='/live-video-course-category-add' className='btn btn-primary'>Live Video course Category Add</Link>
               </h5>
               </div>
               <div className='table-responsive'>
                <table className="table table-bordered table-striped">
                <thead>
                <tr>
                <th>#</th>
                <th>CategoryPhoto</th>
                <th>Category</th>
                <th>categorySequence</th>

                <th>Status</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  {
                     tableData.map((arr)=>{
                        return (
                           <tr>
                           <td>
                              {num++}
                           </td>
                           <td> <img src={( arr?.categoryPhoto)?`http://localhost:8080/${arr?.categoryPhoto}`:defaultimg} className='img-50' alt='' /></td>
                           <td>{arr?.category}</td>
                           {/* <td> 
                           <video width={50} height={50} controls="">
                           <source src={dummy} type="video/mp4" />
                           </video>
                           </td> */}
                           <td>{arr.categorySequence}</td>
                           {/* <td>{arr.offerPrice}</td> */}
                           <td>
                               {/* <a href='#' className='btn btn-success'>{arr.isActive == true? <button className='btn btn-success'>Active</button>:<button className='btn btn-danger'>InActive</button>}</a> */}
                               {arr?.isActive === true? <button className='btn btn-success' onClick={()=>handleStatus(arr?._id)}>Active</button>:<button className='btn btn-danger' onClick={()=>handleStatus(arr?._id)} >InActive</button>}
                           </td>
                           <td>
                               <Link to={`/live-video-course-category-edit/${arr._id}`} className='btn btn-primary btn-sm'>
                               <i class="fas fa-edit"></i>
                               </Link>
                               {/* <Link to={`/video-course-category-edit/${arr._id}`} className='btn btn-info btn-sm'>
                               <i class="fas fa-eye"></i>
                               </Link> */}
                               <Link to='#' onClick={()=>handleDelete(arr?._id)} className='btn btn-danger btn-sm'>
                               <i class="fas fa-trash"></i>
                               </Link>
                           </td>
                           </tr>
                        )
                     })
                  }           
                </tbody>
                </table>    
               </div>
               </div>              
            </div>
         </div>
      </div>
   </div>
</div>
    </>
  )
}

export default LiveVideoCourseCategorylist;