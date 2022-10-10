import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../chunk.css'
var cors = require('cors')
const axios = require('axios').default;
const Login = ({ setAdminDetails }) => {
    console.log("login_");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const loginAdmin = () => {
        axios.post(process.env.REACT_APP_BASE_URL + "/admin_login", {
            username,
            password
        })
            .then(function (response) {
                if (response?.data?.status) {
                    
                    setAdminDetails(response.data);
                    navigate('/admin/dashboard');
                } else {
                    setError(response?.data?.message);
                }
            })
            .catch(function (error) {
                setError(error);
            });
    }

    return (
        <div className="h-100">
            <div>
                <div className="auth-wrapper auth-v2">
                    <div className="row auth-inner m-0">
                        <a href="#" target="_self" className="brand-logo">
                            <svg
                                viewBox="0 0 139 95"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                height={24}
                            >
                                <defs>
                                    <linearGradient
                                        id="linearGradient-1"
                                        x1="100%"
                                        y1="10.5120544%"
                                        x2="50%"
                                        y2="89.4879456%"
                                    >
                                        <stop stopColor="#000000" offset="0%" />
                                        <stop stopColor="#FFFFFF" offset="100%" />
                                    </linearGradient>
                                    <linearGradient
                                        id="linearGradient-2"
                                        x1="64.0437835%"
                                        y1="46.3276743%"
                                        x2="37.373316%"
                                        y2="100%"
                                    >
                                        <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                                        <stop stopColor="#FFFFFF" offset="100%" />
                                    </linearGradient>
                                </defs>
                                <g
                                    id="Page-1"
                                    stroke="none"
                                    strokeWidth={1}
                                    fill="none"
                                    fillRule="evenodd"
                                >
                                    <g id="Artboard" transform="translate(-400.000000, -178.000000)">
                                        <g id="Group" transform="translate(400.000000, 178.000000)">
                                            <path
                                                id="Path"
                                                d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                                                className="text-primary"
                                                style={{ fill: "currentcolor" }}
                                            />
                                            <path
                                                id="Path1"
                                                d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                                                fill="url(#linearGradient-1)"
                                                opacity="0.2"
                                            />
                                            <polygon
                                                id="Path-2"
                                                fill="#000000"
                                                opacity="0.049999997"
                                                points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                                            />
                                            <polygon
                                                id="Path-21"
                                                fill="#000000"
                                                opacity="0.099999994"
                                                points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                                            />
                                            <polygon
                                                id="Path-3"
                                                fill="url(#linearGradient-2)"
                                                opacity="0.099999994"
                                                points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h2 className="brand-text text-primary ml-1"> NSPI </h2>
                        </a>
                        <div className="d-none d-lg-flex align-items-center p-5 col-lg-8">
                            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
                                <img
                                    src="https://img.freepik.com/free-photo/online-communication_1098-15842.jpg?w=996&t=st=1662448099~exp=1662448699~hmac=b78fd06b90619f98db6cbbd58ff4ed1914f6cb5abf9887bab416006a60a7316c"
                                    alt="Login V2"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="d-flex align-items-center auth-bg px-2 p-lg-5 col-lg-4">
                            <div className="px-xl-2 mx-auto col-sm-8 col-md-6 col-lg-12">
                                <h2 className="card-title mb-1 font-weight-bold">
                                    {" "}
                                    NSPI Admin Login{" "}
                                </h2>
                                <div
                                    role="alert"
                                    aria-live="polite"
                                    aria-atomic="true"
                                    className="alert alert-primary"
                                >
                                    {/**/}
                                    <div className="alert-body font-small-2">
                                        <p>
                                            <small className="mr-50">
                                                Please sign-in to your account and start managing.
                                            </small>
                                        </p>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18px"
                                        height="18px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="position-absolute feather feather-help-circle"
                                        style={{ top: 10, right: 10 }}
                                    >
                                        <circle cx={12} cy={12} r={10} />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <line x1={12} y1={17} x2="12.01" y2={17} />
                                    </svg>
                                </div>
                                <span>
                                    <div className="auth-login-form mt-2">
                                        <div role="group" className="form-group" id="__BVID__50">
                                            <label
                                                htmlFor="login-email"
                                                className="d-block"
                                                id="__BVID__50__BV_label_"
                                            >
                                                Email
                                            </label>
                                            <div>
                                                <span>
                                                    <input
                                                        id="login-email"
                                                        name="username"
                                                        type="text"
                                                        placeholder="aman@netleon.com"
                                                        className="form-control"
                                                        value={username}
                                                        onChange={(e) => { setUsername(e.target.value) }}
                                                    />
                                                    <small className="text-danger" />
                                                </span>
                                            </div>
                                        </div>
                                        <fieldset className="form-group" id="__BVID__53">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <label htmlFor="login-password">Password</label>
                                                </div>
                                                <span>
                                                    <div
                                                        role="group"
                                                        className="input-group input-group-merge"
                                                    >
                                                        <input
                                                            id="login-password"
                                                            name="password"
                                                            type="password"
                                                            placeholder="Password"
                                                            className="form-control-merge form-control"
                                                            value={password}
                                                            onChange={(e) => { setPassword(e.target.value) }}
                                                        />
                                                        <div className="input-group-append">
                                                            <div className="input-group-text">
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
                                                                    className="cursor-pointer feather feather-eye"
                                                                >
                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                                    <circle cx={12} cy={12} r={3} />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <small className="text-danger" />
                                                </span>
                                            </div>
                                        </fieldset>
                                        <fieldset className="form-group" id="__BVID__58">
                                            <div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        id="remember-me"
                                                        type="checkbox"
                                                        name="checkbox-1"
                                                        className="custom-control-input"
                                                        defaultValue="true"
                                                    />
                                                    <label
                                                        htmlFor="remember-me"
                                                        className="custom-control-label"
                                                    >
                                                        {" "}
                                                        Remember Me{" "}
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <button type="submit" className="btn btn-primary btn-block" onClick={() => loginAdmin()}>
                                            {" "}
                                            Sign in{" "}
                                        </button>
                                        <p className='pt-2 text-danger font-weight-bold'>{error}</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login