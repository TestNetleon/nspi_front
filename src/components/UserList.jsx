import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Select } from 'antd';
import { Change } from 'react';

var cors = require('cors')

const UserList = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, [])

  // const getUsers = async () => { 
  // let result = await fetch( process.env.REACT_APP_BASE_URL + "/userlist");
  // result = await result.json();
  // console.log(result);
  // setUsers(result);
  // }


  const getUsers = async () => {
    axios.get(process.env.REACT_APP_BASE_URL + "/userlist", {
    })
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        // setError(error);
        console.log(error);
      });
  };

  const options = [
    { value: '', text: '--Choose an option--' },
    { value: 1, text: 'Student' },
    { value: 2, text: 'Volunteer' }
  ];

  const [selected, setSelected] = useState(options[1].value);

  const handleChange = event => {
    // axios
    // .post(process.env.REACT_APP_BASE_URL + "/add_helptopic", {
    //    name:event.target.value
    // })

    axios.post(process.env.REACT_APP_BASE_URL + "/changeUserType", {
      "role": parseInt(event.target.value)
    })
      .then(function (response) {
        // if (response?.data?.status) {
        //   console.log(response?.data);
        setSelected(event.target.value);
        // } else {
        //   console.log(error);
        // }
        console.log(response);
        setUsers(response.data);
      })
      .catch(function (error) {
        // setError(error);
        console.log(error);
      });

    console.log(event.target.value);

  };

  return (
    <div className="h-100">
      <div className="vertical-layout h-100 vertical-menu-modern menu-expanded navbar-floating footer-static">
        <Navbar />
        <Sidebar />
        <div className="app-content content">
          <div className="content-overlay" />
          <div className="header-navbar-shadow" />
          <div className="content-wrapper">
            <div className="content-body">

              <section id="dashboard-ecommerce">
                {/* content starts */}
                <h2>User List</h2>
                <select value={selected} onChange={handleChange}>
                  {options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>

                <table class="table">
                  <thead>
                    <tr>
                      <th>S no.</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>User Type</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      users.map((item, index) =>

                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td>{item.role[0] == 1 ? 'Student' : 'Volunteer'}</td>
                        </tr>
                      )
                    }

                  </tbody>
                </table>
                {/* content ends */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserList