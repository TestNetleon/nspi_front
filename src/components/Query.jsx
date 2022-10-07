import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Select } from 'antd';
import { Change } from 'react';
import { Link } from 'react-router-dom';


var cors = require('cors')

const QueryList = () => {

  const [querlist, setQuerylist] = useState([]);

  useEffect(() => {
    getQuerylist();
  }, [])

  const getQuerylist = async () => {
    axios.get(process.env.REACT_APP_BASE_URL + "/queries", {
    })
      .then(function (response) {
        console.log(response);
        setQuerylist(response.data);

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
                <h2>User List</h2>


                <table class="table">
                  <thead>
                    <tr>
                      <th>S no.</th>
                      <th>Topic</th>
                      <th>Subject</th>
                      <th>User</th>
                      {/* <th>Accepted By</th> */}
                      <th>Posted Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      querlist.map((item, index) =>
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td><Link to={"/query_details/" + item.query_id}
                            className="d-flex align-items-center"
                          >{item.topic_name}</Link></td>
                          <td>{item.subject}</td>
                          <td>{item.user_id}</td>
                          {/* <td>{item.accepted_by}</td> */}
                          <td>{item.createdAt}</td>

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

export default QueryList