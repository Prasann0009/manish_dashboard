// import { Chart } from "react-chartjs-2"
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
// console.log("header");
// localStorage.getItem
// console.log(localStorage.getItem ("token"))

export default function Home() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let [userCount, setUserCount] = useState(0);
  // let user=localStorage.getItem ("user");
  // console.log(JSON.parse(user))
  // console.log(typeof user)
  // let user=useState(JSON.parse(localStorage.getItem ("user")));
  // setUser()
  useEffect(() => {
    if (token == null) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    let apiCall = async () => {
      let res = await fetch(
        `http://localhost:8080/api/videocourse/allcourses`,
        {
          method: "GET",
        }
      );

      const result = await res.json();
      //   console.log(result.data);
      //   setTableData([...result.data])
      setUserCount(result.data.length + 1);
    };
    apiCall();
  });
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
                      <a href="/ck">Home ck</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Dashboard
                    </li>
                  </ul>
                </div>

                <div className="col-md-12">
                  <div className="page-header-title">
                    <h2 className="mb-3">Home</h2>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <Link to="/userlist">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <h3 className="mb-1">{userCount}+ </h3>

                            <p className="text-muted mb-0">Total Users</p>
                          </div>
                          <div className="col-4 text-end">
                            <i className="ti ti-user text-secondary f-36" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-1">145</h3>
                          <p className="text-muted mb-0">Task</p>
                        </div>
                        <div className="col-4 text-end">
                          <i className="ti ti-calendar-event text-danger f-36" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-1">290+</h3>
                          <p className="text-muted mb-0">Page Views</p>
                        </div>
                        <div className="col-4 text-end">
                          <i className="ti ti-file-text text-success f-36" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-1">500</h3>
                          <p className="text-muted mb-0">Downloads</p>
                        </div>
                        <div className="col-4 text-end">
                          <i className="ti ti-download text-primary f-36" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="mb-2 f-w-400 text-muted">
                        Total Page Views
                      </h6>
                      <h4 className="mb-3">
                        4,42,236{" "}
                        <span className="badge bg-light-primary border border-primary">
                          <i className="ti ti-trending-up" /> 59.3%
                        </span>
                      </h4>
                      <p className="mb-0 text-muted text-sm">
                        You made an extra{" "}
                        <span className="text-primary">35,000</span> this year{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="mb-2 f-w-400 text-muted">Total Users</h6>
                      <h4 className="mb-3">
                        78,250{" "}
                        <span className="badge bg-light-success border border-success">
                          <i className="ti ti-trending-up" /> 70.5%
                        </span>
                      </h4>
                      <p className="mb-0 text-muted text-sm">
                        You made an extra{" "}
                        <span className="text-success">8,900</span> this year
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="mb-2 f-w-400 text-muted">Total Order</h6>
                      <h4 className="mb-3">
                        18,800{" "}
                        <span className="badge bg-light-warning border border-warning">
                          <i className="ti ti-trending-down" /> 27.4%
                        </span>
                      </h4>
                      <p className="mb-0 text-muted text-sm">
                        You made an extra{" "}
                        <span className="text-warning">1,943</span> this year
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="mb-2 f-w-400 text-muted">Total Sales</h6>
                      <h4 className="mb-3">
                        $35,078{" "}
                        <span className="badge bg-light-danger border border-danger">
                          <i className="ti ti-trending-down" /> 27.4%
                        </span>
                      </h4>
                      <p className="mb-0 text-muted text-sm">
                        You made an extra{" "}
                        <span className="text-danger">$20,395</span> this year{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
