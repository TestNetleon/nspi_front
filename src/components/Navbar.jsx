import React from 'react'

const Navbar = () => {
  return (
    <>
    {/* Navbar starts */}
    <nav className="navbar header-navbar navbar navbar-shadow align-items-center navbar-light navbar-expand floating-nav">
          <div className="navbar-container d-flex content align-items-center">
            <ul className="navbar-nav nav align-items-center ml-auto">
              <li
                className="nav-item b-nav-dropdown dropdown dropdown-user"
                id="__BVID__122"
              >
                <a
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href="#"
                  target="_self"
                  className="nav-link dropdown-toggle d-flex align-items-center dropdown-user-link"
                  id="__BVID__122__BV_toggle_"
                >
                  <div className="d-sm-flex d-none user-nav">
                    <p className="user-name font-weight-bolder mb-0"> amanjainkdl@gmail.com </p>
                    <span className="user-status">Logout</span>
                  </div>
                  <span
                    className="b-avatar badge-minimal badge-light-primary rounded-circle"
                    style={{ width: 40, height: 40 }}
                  >
                    <span className="b-avatar-img">
                      <img
                        src="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png"
                        alt="avatar"
                      />
                    </span>
                    <span
                      className="b-avatar-badge badge-success"
                      style={{ fontSize: "calc(11.2px)", bottom: 0, right: 0 }}
                    />
                  </span>
                </a>
                <ul
                  tabIndex={-1}
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="__BVID__122__BV_toggle_"
                >
                  <li role="presentation">
                    <a
                      href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/pages/profile"
                      className="dropdown-item d-flex align-items-center"
                      role="menuitem"
                      target="_self"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-50 feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span>Profile</span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/email"
                      className="dropdown-item d-flex align-items-center"
                      role="menuitem"
                      target="_self"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-50 feather feather-mail"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>Inbox</span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/todo"
                      className="dropdown-item d-flex align-items-center"
                      role="menuitem"
                      target="_self"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-50 feather feather-check-square"
                      >
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      <span>Task</span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/chat"
                      className="dropdown-item d-flex align-items-center"
                      role="menuitem"
                      target="_self"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-50 feather feather-message-square"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>Chat</span>
                    </a>
                  </li>
                  <li role="presentation">
                    <hr
                      role="separator"
                      aria-orientation="horizontal"
                      className="dropdown-divider"
                    />
                  </li>
                  <li role="presentation">
                    <a
                      href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/pages/account-setting"
                      className="dropdown-item d-flex align-items-center"
                      role="menuitem"
                      target="_self"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-50 feather feather-settings"
                      >
                        <circle cx={12} cy={12} r={3} />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/pages/pricing"
                      className="dropdown-item d-flex align-items-center"
                      role="menuitem"
                      target="_self"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-50 feather feather-credit-card"
                      >
                        <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                        <line x1={1} y1={10} x2={23} y2={10} />
                      </svg>
                      <span>Pricing</span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/pages/faq"
                      className="dropdown-item d-flex align-items-center"
                      role="menuitem"
                      target="_self"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-50 feather feather-help-circle"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <line x1={12} y1={17} x2="12.01" y2={17} />
                      </svg>
                      <span>FAQ</span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      role="menuitem"
                      href="#"
                      target="_self"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-50 feather feather-log-out"
                      >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} y1={12} x2={9} y2={12} />
                      </svg>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        {/* Navbar ends */}
    </>
  )
}

export default Navbar