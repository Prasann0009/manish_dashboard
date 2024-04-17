import React, { useEffect, useState } from 'react'
import Header from '../Header'
import defaultimg from '../../assets/images/default.jpg'
import dummy from '../../assets/images/dummy.mp4'
import { Link } from 'react-router-dom'
import Myeditor from './MyCKeditor'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from 'react-toastify';
import VideoTable from "../Table/VideoTable"
function Videocourselist() {
  let [tableData, setTableData] = useState([]);
  let [num, setnum] = useState(1)
  useEffect(() => {

    let apiCall = async () => {
      let res = await fetch(`http://localhost:8080/api/videocourse/allcourses`, {
        method: "GET",

      });
      const result = await res.json();
      console.log(result.data);
      setTableData([...result.data])
    };
    apiCall();
    ;
  }, [num]);

  const data = tableData;
  const columns = [
    // { Header: 'S.N', accessor: 'title' },
    { Header: 'firstName', accessor: 'title' },

    { Header: 'Price ', accessor: 'price' },

    { Header: 'offerPrice', accessor: 'offerPrice' },

  ];

  const handleDelete = (id) => {
    // console.log(id);

    let apiCall = async () => {
      let res = await fetch(`http://localhost:8080/api/videocourse/deletecourse/${id}`, {
        method: "POST",
        // headers: {
        //   "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlNzAyYWE5MDUxMjg0ZTdmZmFmNDIiLCJwZ29uZSI6MTIzLCJwaW4iOjEyMzQsImlhdCI6MTcxMjIyMjQxOX0.f6tfrIcyO4GdoH6DO849jrzxg4cdkur3-dk042iLeQI"
        // }
      });
      const result = await res.json();
      console.log(result.data);
      let deletedUser = result.data
      setTableData(tableData.filter((arr) => arr._id != deletedUser._id))
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

  const handleStatus = (id) => {
    //  console.log(id);
    let apiCall = async () => {
      let res = await fetch(`http://localhost:8080/api/videocourse/activevideo/${id}`, {
        method: "PUT",
        //  headers: {
        //    "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBlNzAyYWE5MDUxMjg0ZTdmZmFmNDIiLCJwZ29uZSI6MTIzLCJwaW4iOjEyMzQsImlhdCI6MTcxMjIyMjQxOX0.f6tfrIcyO4GdoH6DO849jrzxg4cdkur3-dk042iLeQI"

        //  }
      });
      const result = await res.json();
      //  console.log(result.data); 
      //  console.log(result.data._id);
      setTableData((currtable) => {
        currtable.map((arr) => {
          if (arr._id === result.data._id) {
            arr.isActive = (result.data.isActive)
          }
        });

        return [...currtable]
      })
      //  setTableData([...result.data])
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
                      <a href="javascript: void(0)">Video Management</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Video Course List
                    </li>
                  </ul>
                </div>

                <div className='card'>
                  <div className="card-header mb-3 border-0">
                    <h5 className='d-flex justify-content-between align-items-center'> <span>Video Course List</span>
                      <Link to='/video-course-add' className='btn btn-primary'>Add Video course</Link>
                    </h5>

                  </div>

                  {/* <table className="table table-bordered table-striped">
                <thead>
                <tr>
                <th>#</th>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Video</th>
                <th>Price</th>
                <th>offer Price</th>
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
                           <td> <img src={( arr?.images[0]?.image)?`http://localhost:8080/${arr?.images[0]?.image}`:defaultimg} className='img-50' alt='' /></td>
                           <td>{arr?.title}</td>
                           <td> 
                           <video width={50} height={50} controls="">
                           <source src={dummy} type="video/mp4" />
                           </video>
                           </td>
                           <td>{arr.price}</td>
                           <td>{arr.offerPrice}</td>
                           <td>
                               {arr.isActive == true? <button className='btn btn-success' onClick={()=>handleStatus(arr?._id)}>Active</button>:<button className='btn btn-danger' onClick={()=>handleStatus(arr?._id)} >InActive</button>}
                           </td>
                           <td>
                               <Link to={`/video-course-edit/${arr?._id}`} className='btn btn-primary btn-sm'>
                               <i class="fas fa-edit"></i>
                               </Link>
                               <Link to={`/video-course-details/${arr?._id}`} className='btn btn-info btn-sm'>
                               <i class="fas fa-eye"></i>
                               </Link>
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
                */}
                </div>
                <div>
                  {/* <DataTable columns={columns} data={data} handleStatus={handleStatus} handleDelete={handleDelete}/> */}
                  <VideoTable columns={columns} data={data} handleStatus={handleStatus} handleDelete={handleDelete} isLiveCourse={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Videocourselist