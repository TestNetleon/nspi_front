import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import UserList from './components/UserList';
import HelpTopic from './components/HelpTopic';
import AddHelpTopic from './components/AddHelpTopic';
import UpdateHelpTopic from './components/UpdateHelpTopic';
import Institute from './components/Institute';
import Query from './components/Query';
import QueryDetail from './components/QueryDetail';
import Districts from './components/Districts';
import Programmes from './components/Programmes';
import Level from './components/Level';
import Discipline from './components/Discipline';
import Organization from './components/Organization';
import State from './components/State';

import { useState } from 'react';

function App() {

  const [adminDetails, setAdminDetails] = useState(null);

  console.log("app_", adminDetails);

  return (
    <Routes>
      <Route path="login" element={<Login setAdminDetails={setAdminDetails} />} />
      <Route path="/dashboard" element={<Home adminDetails={adminDetails} />} />
      <Route path="/userlist" element={<UserList />}/>
      <Route path="/helptopics" element={<HelpTopic />}/>
      <Route path="/add_helptopic" element={<AddHelpTopic />}/>
      <Route path="/update_helptopic/:id" element={<UpdateHelpTopic />}/>
      <Route path="/institutes" element={<Institute />}/>
      <Route path="/queries" element={<Query />}/>
      <Route path="/query_details/:id" element={<QueryDetail />}/>
      <Route path="/districts" element={<Districts />}/>
      <Route path="/programmes" element={<Programmes />}/>
      <Route path="/levels" element={<Level />}/>
      <Route path="/discipline" element={<Discipline />}/>
      <Route path="/organization" element={<Organization />}/>
      <Route path="/state" element={<State />}/>
      
    </Routes>
  );
}

export default App;