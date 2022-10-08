import React from 'react'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
    {/* sidebar starts */}
    <div className="main-menu menu-fixed menu-accordion menu-shadow expanded menu-light">
          <div className="navbar-header expanded">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mr-auto">
                <a
                  href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/"
                  className="navbar-brand router-link-active"
                  target="_self"
                >
                  <span className="brand-logo">
                    <img
                      src="/logo.png"
                      alt="logo"
                      className=""
                    />
                  </span>
                  <h2 className="brand-text"> NSPI </h2>
                </a>
              </li>
            </ul>
          </div>
          <div className="shadow-bottom d-block" />
          <ul className="ps-container main-menu-content scroll-area ps ps--active-y">
            <ul className="navigation navigation-main">
              <li className="nav-item">
                &nbsp;
              </li>              
              <li className="nav-item">
              <Link to="/admin/userlist"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="menu-title text-truncate">Users</span>
                  {/**/}
                  </Link>
              </li>
            
              <li className="nav-item">
                <Link to = "/admin/helptopics"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="menu-title text-truncate">Help Topics</span>
                  {/**/}
                </Link>
              </li>

              <li className="nav-item">
                <Link to = "/admin/institutes"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="menu-title text-truncate">Institute</span>
                  {/**/}
                </Link>
              </li>

              <li className="nav-item">
                <Link to = "/admin/queries"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="menu-title text-truncate">Queries</span>
                  {/**/}
                </Link>
              </li>

              <li className="nav-item">
                <Link to = "/admin/state"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="menu-title text-truncate">States</span>
                  {/**/}
                </Link>
              </li>

              <li className="nav-item">
                <Link to = "/admin/districts"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="menu-title text-truncate">Districts</span>
                  {/**/}
                </Link>
              </li>

              <li className="nav-item">
                <Link to = "/admin/levels"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="menu-title text-truncate">Levels</span>
                  {/**/}
                </Link>
              </li>


              <li className="nav-item">
                <Link to = "/admin/programmes"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="menu-title text-truncate">Programmes</span>
                  {/**/}
                </Link>
              </li>

              <li className="nav-item">
                <Link to = "/admin/discipline"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="menu-title text-truncate">Discipline</span>
                  {/**/}
                </Link>
              </li>

              <li className="nav-item">
                <Link to = "/admin/organization"
                  className="d-flex align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="menu-title text-truncate">Organization</span>
                  {/**/}
                </Link>
              </li>

            </ul>
          </ul>
        </div>
        {/* sidebar ends */}
    </>
  )
}

export default Sidebar