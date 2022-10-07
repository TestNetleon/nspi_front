import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Select } from 'antd';
import { Change } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';


var cors = require('cors')

const QueryDetails = () => {

  const [querydetails, setQueryDetails] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getQueryDetails();
  }, [])

  const getQueryDetails = async () => {
    axios.get(process.env.REACT_APP_BASE_URL + `/query_details/${params.id}`, {
    })
      .then(function (response) {
        console.log(response);
        setQueryDetails(response.data);

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
            <Link to ={"/queries/"}><button type="button" class="btn btn-primary">Back</button></Link>
              <section id="dashboard-ecommerce">
                {/* content starts */}
                <h2>Query Details</h2>
                {console.log(querydetails)}
                {
                  querydetails.map((item, index) =>
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Topic Name</th>
                          <td>{item.topic_name}</td>
                        </tr>
                        <tr>
                          <th>Subject</th>
                          <td>{item.subject}</td>
                        </tr>
                        <tr>
                          <th>Details</th>
                          <td>{item.details}</td>
                        </tr>
                        <tr>
                          <th>User</th>
                          <td>{item.user_id}</td>
                        </tr>

                        <tr>
                          <th>Status</th>
                          <td>{item.status}</td>
                        </tr><tr>
                          <th>Posted Date</th>
                          <td>{item.createdAt}</td>
                        </tr>
                      </thead>

                    </table>
                  )
                }
                {/* content ends */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QueryDetails