import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
var cors = require('cors')


const Organizatios = () => {

  const [organization, setOrganization] = useState([]);
  useEffect(() => {
    getOrganization();
  }, [])


  const getOrganization = async () => {
    axios.get(process.env.REACT_APP_BASE_URL + "/organization", {
    })
      .then(function (response) {
        setOrganization(response.data);
        // console.log(response);
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
                <h2>Levels List</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th>S no.</th>
                      <th>Name</th>
                      <th>Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      organization.map((item, index) =>
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.createdAt}</td>
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

export default Organizatios