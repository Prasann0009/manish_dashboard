import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useParams } from "react-router";
import {useNavigate} from "react-router-dom";
import {toast ,Bounce} from 'react-toastify';
import MyCkeditor from './MyCKeditor';
export default function VideoCourseEdit () {
  const navigate = useNavigate();
    let {id}=useParams();
 let [formval,setFormval]=useState({title:'',videoCategory:"",photos:[],details:'',price:'',offerPrice:''});
 const [image, setImages] = useState([]);
 let [data ,setData]=useState(null); 

 const handelOnChange=(e)=>{
    if(e.target.name == "photos"){
      let arr=[]
      let imagesArray=[]
        for (let i of e.target.files){
          arr.push(i)
          const reader = new FileReader();
          reader.onload = (event) => {
              imagesArray.push(event.target.result);
              if (imagesArray.length === (e.target.files).length) {
                setImages(imagesArray);
              }
            };
            reader.readAsDataURL(i);
         
        }
      setFormval((currVal)=>({...currVal,photos: arr}));
    }else{
      setFormval((currVal)=>({...currVal,[e.target.name]:e.target.value}));
    }
  };


  useEffect(()=>{
    const apiCall =async ()=>{
        let response=await fetch(`http://localhost:8080/api/videocoursecategory/allcourses`,{
          method: "GET",
        });
        const result=await response.json();
        console.log(result,"result");
        setData([...result.data])
      };
      apiCall();
},[]);

  useEffect(()=>{
      const apiCall =async ()=>{
          let response=await fetch(`http://localhost:8080/api/videocourse/videoCoursDetails/${id}`,{
            method: "GET",
          });
          const result=await response.json();
          console.log(result);
          setFormval({...result.data})
        };  
        apiCall();

      
      // const apiCall2 =async ()=>{
      //     let response=await fetch(`http://localhost:8080/api/videocoursecategory/allcourses`,{
      //       method: "GET",
      //     });
      //     const result=await response.json();
      //     console.log(result,"result");
      //     // setData([...result.data])
      //   };
      
      //   apiCall();
  },[]);

  const handelOnSubmit=(e)=>{
    console.log(formval)
    e.preventDefault();

    const postData = new FormData();
    // console.log(formval.photos)
    formval?.photos?.map((arr)=>{
		postData.append('photos',arr);
    });

		postData.append('title', formval.title);
		postData.append('videoCategory', formval.videoCategory);
		postData.append('details', formval.details);
		postData.append('price', formval.price);
		postData.append('offerPrice', formval.offerPrice);
    const apiCall =async ()=>{
      let response=await fetch(`http://localhost:8080/api/videocourse/edit/${id}`,{
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
        navigate("/video-course-list");

    };
    };
    apiCall();
  };

  const handleImgDelete=(imgid)=>{
    console.log("*req")
    const apiCall =async ()=>{
      let response=await fetch(`http://localhost:8080/api/videocourse/${id}/deleteimage/${imgid}`,{
        method: "POST",
		// body:JSON.stringify(postData) ,
        // header:{
        //     'Content-Type': 'application/json'
        // }
        // body:postData
      });
      const result=await response.json();
      console.log(result);
      setFormval({...result.data});
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
                      name="photos"
                      multiple
                      onChange={handelOnChange}
                    />
                  </div>
                   <div className='image-box'>
                  {
                    formval?.images?.map((arr)=>{
                        return( 
                            <div className='image-box-innr'>
                            <img src={`http://localhost:8080/${arr?.image}`} alt="Preview Image" />
                            <button type='button' onClick={()=>handleImgDelete(arr._id)}><i className='fas fa-times'></i></button>
                            </div>
                        )
                    })
                  }
                  
                  {image.map((imageUrl, index) => (
                    <div className='image-box-innr'>
                      <img key={index} src={imageUrl} alt={`Image ${index}`} />

                    </div>
                    ))}
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='title'
                      onChange={handelOnChange}
                      value={formval.title}
                    />
                    <label htmlFor="">Video Title</label>
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='details'
                      onChange={handelOnChange}
                      value={formval.details}
                    />
                    <label htmlFor="">Video Details</label>
                  </div>
                </div> */}
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="number"
                      className="form-control"
                      id="example-datemax"
                      max=""
                      placeholder=""
                      name='price'
                      onChange={handelOnChange}
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
                      onChange={handelOnChange}
                      value={formval.offerPrice}

                    />
                    <label htmlFor="">Offer Price</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <select className="form-select" name='videoCategory' onChange={handelOnChange} id="">
                      <option >Select Category</option>
                      {
                        data?.map((arr)=>(
                          <option key={arr?._id} value={arr?._id} selected={arr?._id === formval.videoCategory && true}  >{arr?.category}</option>
                        ))
                      }
                    </select>
                    <label htmlFor="">Live Video Category</label>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <MyCkeditor data={formval.details} seteditor={setFormval} />
                  {/* <Ck2 /> */}
                </div>
                <div className="col-md-12 text-center">
                  <button className="btn btn-primary" >
                    Add Video Course
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
