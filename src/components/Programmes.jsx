import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
var cors = require('cors')


const Programmes = () => {

  const [programme, setProgramme] = useState([]);
  useEffect(() => {
    getProgramme();
  }, [])


  const getProgramme = async () => {
    axios.get(process.env.REACT_APP_BASE_URL + "/programmes", {
    })
      .then(function (response) {
        setProgramme(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // setError(error);
        console.log(error);
      });
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
                <h2>Programme List</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th>S no.</th>
                      <th>Name</th>
                      <th>Level</th>
                      <th>Status</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {
                      programme.map((item, index) =>
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.level_name}</td>
                          <td>{item.is_approved == true ? 'Approved':'Not Approved'}</td>
                          {/* <td>
                            <Link to={"/update_helptopic/" + item._id}><button type="button" class="btn btn-primary">Edit</button></Link>
                            <button type="button" class="btn btn-primary" onClick={() => deleteTopic(item._id)}>Delete</button>
                          </td> */}

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

export default Programmes