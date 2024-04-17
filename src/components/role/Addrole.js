import React, { useEffect, useState } from "react";
import Header from "../Header";

function Addrole() {
  let [formval, setFormval] = useState([
    {
      userMangement: [
        { name: "add user", checked: false },
        { name: "edit user", checked: false },
        { name: "delete user", checked: false },
        { name: "active user", checked: false },
        { name: "read all user", checked: false },
      ],
    },
    {
      videoMangement: [
        { name: "add video", checked: false },
        { name: "edit video", checked: false },
        { name: "delete video", checked: false },
        { name: "active video", checked: false },
        { name: "read all video", checked: false },
      ],
    },
    {
      livevideoMangement: [
        { name: "live add video", checked: false },
        { name: "live edit video", checked: false },
        { name: "live delete video", checked: false },
        { name: "live active video", checked: false },
        { name: "live read all video", checked: false },
      ],
    },
  ]);
  // let [role,setrole]=("")
  let [data, setData] = useState([]);
  //get permission data


  const handelOnChange = (e) => {
    // console.log(e.target.name,"=> name")
    // console.dir(e.target.checked,"=> check")
    if (e.target.name == "user Mangement") {
      console.dir(e.target.value, "=> value");
      setFormval((currval) => {
        let a = currval[0].userMangement.map((arr) => {
          if (arr.name == e.target.value) {
            console.log("all is good", e.target.value);
            arr.checked = !arr.checked;
          }
        });
        // console.log(currval[0].userMangement[0])
        return [...currval];
      });
    }
    // setFormval((currVal) => ({ ...currVal, [e.target.name]: e.target.value }));
  };

 
  // const cleckme = (e) => {
  //     console.log("clicked")
  //     console.dir(e.name)
  //     console.dir(e)
  //     divRef.current.innerHTML
  // }

  return (
    <>
      <Header />
      <div className="pc-container">
        <div className="pc-content">
          {/* [ breadcrumb ] start */}
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0)">User Management</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Add Role
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="page-header-title">
                    <h2 className="mb-0">Add Role </h2>
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
                  <h5>Add Role</h5>
                </div>
                <div className="card-body">
                  <form >
                    <div className="row">
                      <div className="col-lg-6">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      
                          
                            <div
                              name="userval"
                              className="col-lg-4"
                              
                            >
                              <div className="card-header border-0 ps-0">
                                <h5>hedding1</h5>
                              </div>
                              
                                <div className="form-check mb-3">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    
                                    
                                    // checked={formval.userMangement.value}
                                    
                                  />
                                  <label
                                    className="form-check-label"
                                    
                                  >
                                    value
                                  </label>
                                </div>
                              
                            </div>
                         
                      <div className="col-md-12 text-center">
                        <button className=" mt-3 btn btn-primary">
                          Add Role
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
  );
}

export default Addrole;
