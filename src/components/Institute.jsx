import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
var cors = require('cors')

const Institute = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    getInstitutes();
  }, [])

  const getInstitutes = async () => {
    axios.get(process.env.REACT_APP_BASE_URL + "/institutes", {
    })
      .then(function (response) {
        console.log(response);
        setColleges(response.data);
      })
      .catch(function (error) {
        // setError(error);
        console.log(error);
      });
  };


  const options = [
    { value: '', text: '--Choose an option--' },
    { value: true, text: 'Approved' },
    { value: false, text: 'Not Approved' }
  ];

  const [selected, setSelected] = useState(options[0].value);


  const handleChange = event => {
    axios.post(process.env.REACT_APP_BASE_URL + "/changeCollegeStatus", {
      "status": event.target.value
    })
      .then(function (response) {

        setSelected(event.target.value);
        // console.log(response);
        setColleges(response.data);
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
                <h2>Institutes</h2>
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
                      <th>Name</th>
                      <th>State</th>
                      <th>District</th>
                      <th>College Id</th>
                      <th>Status</th>


                    </tr>
                  </thead>
                  <tbody>
                    {console.log(colleges)}
                    {
                      colleges.map((item, index) =>
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.state}</td>
                          <td>{item.district}</td>
                          <td>{item.college_id}</td>
                          <td>{item.is_approved == true ? 'Approved' : 'Not Approved'}</td>

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

export default Institute