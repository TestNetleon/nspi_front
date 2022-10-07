import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
var cors = require('cors')


const Disciplines = () => {

  const [discipline, setDisciplines] = useState([]);
  useEffect(() => {
    getDisciplines();
  }, [])


  const getDisciplines = async () => {
    axios.get(process.env.REACT_APP_BASE_URL + "/discipline", {
    })
      .then(function (response) {
        setDisciplines(response.data);
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
                <h2>Discipline List</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th>S no.</th>
                      <th>Level</th>
                      <th>Programme</th>
                      <th>Discipline</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      discipline.map((item, index) =>
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.level_name}</td>
                          <td>{item.programme_name}</td>
                          <td>{item.discipline_name}</td>
                          <td>{item.is_approved == true ? 'Approved' : 'Not Approved'}</td>
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

export default Disciplines