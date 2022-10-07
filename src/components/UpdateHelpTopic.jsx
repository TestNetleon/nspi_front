import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const UpdateHelpTopic = () => {
const [name,setTopicName] = useState('');
const params = useParams();
const navigate = useNavigate();

useEffect(()=>{
    console.log(params);
    getHelpTopic();
   },[]);

const getHelpTopic = async () => {
    axios.get(process.env.REACT_APP_BASE_URL + `/helptopic/${params.id}`, {
    })
      .then(function (response) {
        setTopicName(response.data.name);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateTopic = async()=>{
    console.log(name);
    axios
    .put(process.env.REACT_APP_BASE_URL + `/update-helptopic/${params.id}`, {
       name:name
    })
    .then((response) => {
       // TopicName(response);
        console.log(response);
        setTimeout(() => {
            navigate("/helptopics")
          }, 2000)
    
    })
    .catch(function (error) {
        console.log(error);
      });

   }


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
                    
                    <div className='topic'>
                    <h1>Update Help Topic</h1>
                    <div class="form-group">
                    <label for="topic">Topic Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Topic Name" onChange={(e)=>{setTopicName(e.target.value)}}  value={name} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={updateTopic}>Update Topic</button>
                    </div>
                    {/* content ends */}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default UpdateHelpTopic