import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {Alert} from "antd";

var cors = require('cors')

const AddHelpTopic = () => {

 const [name,setTopicName] = useState('');
 const [showAlert, setShowAlert] = useState(false);

 const addHelpTopic =async()=>{
    //console.log(name);
    axios
    .post(process.env.REACT_APP_BASE_URL + "/add-helptopic", {
       name:name
    })
    .then((response) => {
       // TopicName(response);
        console.log(response);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          }, 3000);
        setTopicName('');
    })
    .catch(function (error) {
        // setError(error);
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
                {
                showAlert&&
                // <Alert message="Added Successfully..!!" type="success"/>
                <>
                <h4 class="alert-heading"> </h4>
                <div class="alert-body"><span>Added Successfully...!!</span></div>
                </>
                }
                <div className='topic'>
                <h1>Add Help Topic</h1>
                <div class="form-group">
                <label for="topic">Topic Name:</label>
                <input type="text" className="form-control" placeholder="Enter Topic Name" onChange={(e)=>{setTopicName(e.target.value)}}  value={name} />
                </div>
                <button type="button" className="btn btn-primary" onClick={addHelpTopic}>Add Topic</button>
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

export default AddHelpTopic