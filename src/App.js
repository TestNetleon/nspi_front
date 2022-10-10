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
import WebsiteHome from './container/WebsiteHome';

import { useState } from 'react';
import WebsiteAboutUs from './container/WebsiteAboutUs';
import WebsiteOurInitiatives from './container/WebsiteOurInitiatives';
import WebsiteTeams from './container/WebsiteTeams';
import WebsiteContactUs from './container/WebsiteContactUs';
import WebsiteAskForHelp from './container/WebsiteAskForHelp';
import WebsitePrivacyPolicy from './container/WebsitePrivacyPolicy';
import WebsiteTermsAndConditions from './container/WebsiteTermsAndConditions';

function App() {

  const [adminDetails, setAdminDetails] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<WebsiteHome />} />
      <Route path="/about-us" element={<WebsiteAboutUs />} />
      <Route path="/our-initiatives" element={<WebsiteOurInitiatives />} />
      <Route path="/teams" element={<WebsiteTeams />} />
      <Route path="/contact-us" element={<WebsiteContactUs />} />
      <Route path="/ask-for-help" element={<WebsiteAskForHelp />} />
      <Route path="/privacy-policy" element={<WebsitePrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<WebsiteTermsAndConditions />} />
     

      <Route path="/admin" element={<Login setAdminDetails={setAdminDetails} />} />
      <Route path="/admin/dashboard" element={<Home adminDetails={adminDetails} />} />
      <Route path="/admin/userlist" element={<UserList />}/>
      <Route path="/admin/helptopics" element={<HelpTopic />}/>
      <Route path="/admin/add_helptopic" element={<AddHelpTopic />}/>
      <Route path="/admin/update_helptopic/:id" element={<UpdateHelpTopic />}/>
      <Route path="/admin/institutes" element={<Institute />}/>
      <Route path="/admin/queries" element={<Query />}/>
      <Route path="/admin/query_details/:id" element={<QueryDetail />}/>
      <Route path="/admin/districts" element={<Districts />}/>
      <Route path="/admin/programmes" element={<Programmes />}/>
      <Route path="/admin/levels" element={<Level />}/>
      <Route path="/admin/discipline" element={<Discipline />}/>
      <Route path="/admin/organization" element={<Organization />}/>
      <Route path="/admin/state" element={<State />}/>      
    </Routes>
  );
}

export default App;