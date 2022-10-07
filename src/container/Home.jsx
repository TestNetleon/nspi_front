import React from 'react'
import Content from '../components/Content'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import UserList from '../components/UserList'
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&amp;display=swap" rel="stylesheet"></link>

const Home = ({adminDetails}) => {
  console.log("home_", adminDetails);
  return (
    <div className="h-100">
      <div className="vertical-layout h-100 vertical-menu-modern menu-expanded navbar-floating footer-static">        
        <Navbar />
        <Sidebar />
        <Content />
        {/* <UserList/> */}
      </div>
    </div>
  )
}

export default Home