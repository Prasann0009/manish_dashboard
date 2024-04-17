
import React from 'react'
import whitelogo from '../assets/images/logo-white.svg'
import darklogo from '../assets/images/logo-white.svg'

function Sidebar() {
  return (
    <>
      <nav className="pc-sidebar">
  <div className="navbar-wrapper">
    <div className="m-header">
      <a href="../dashboard/index.html" className="b-brand text-primary">
        {/* ========   Change your logo from here   ============ */}
        <img src={whitelogo}
          className="img-fluid logo-lg"
          alt="logo"
        />
      </a>
    </div>
    <div className="navbar-content">
      <div className="card pc-user-card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                src="../assets/images/user/avatar-1.jpg"
                alt="user-image"
                className="user-avtar wid-45 rounded-circle"
              />
            </div>
            <div className="flex-grow-1 ms-3 me-2">
              <h6 className="mb-0">Jonh Smith</h6>
              <small>Administrator</small>
            </div>
            <a
              className="btn btn-icon btn-link-secondary avtar"
              data-bs-toggle="collapse"
              href="#pc_sidebar_userlink"
            >
              <svg className="pc-icon">
                <use xlinkHref="#custom-sort-outline" />
              </svg>
            </a>
          </div>
          <div className="collapse pc-user-links" id="pc_sidebar_userlink">
            <div className="pt-3">
              <a href="#!">
                <i className="ti ti-user" />
                <span>My Account</span>
              </a>
              <a href="#!">
                <i className="ti ti-settings" />
                <span>Settings</span>
              </a>
              <a href="#!">
                <i className="ti ti-lock" />
                <span>Lock Screen</span>
              </a>
              <a href="login.html">
                <i className="ti ti-power" />
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ul className="pc-navbar">
        <li className="pc-item pc-caption">
          <label>Dashboard</label>
        </li>
        <li className="pc-item">
          <a href="index.html" className="pc-link">
            <span className="pc-micon">
              <svg className="pc-icon">
                <use xlinkHref="#custom-status-up" />
              </svg>
            </span>
            <span className="pc-mtext">Dashboard</span>
          </a>
        </li>
        <li className="pc-item pc-hasmenu">
          <a href="#!" className="pc-link">
            <span className="pc-micon">
              <svg className="pc-icon">
                <use xlinkHref="#custom-user-square" />
              </svg>
            </span>
            <span className="pc-mtext">User Management</span>
            <span className="pc-arrow">
              <i data-feather="chevron-right" />
            </span>
          </a>
          <ul className="pc-submenu">
            <li className="pc-item">
              <a className="pc-link" href="add-user.html">
                Add User
              </a>
            </li>
            <li className="pc-item">
              <a className="pc-link" href="user-list.html">
                User List
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default nav