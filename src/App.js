import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, useHistory, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TentangKami from './pages/TentangKami';
import TimKami from './pages/TimKami';
import MentalKonseling from './pages/MentalKonseling';
import CekKesehatanMental from './pages/CekKesehatan';
import Meditasi from './pages/Meditasi';
import ContactUs from './pages/ContactUs';

import TestDepresi from './pages/TestDepresi';
import TestStress from './pages/TestStress';
import TestSuicide from './pages/TestSuicide';
import TestCemas from './pages/TestCemas';
import TestPersonality from './pages/TestPersonality';
import TestBurnOut from './pages/TestBurnOut';

import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';

import DashboardPage from './pages/admin/DashboardPage';
import InboxPage from './pages/admin/InboxPage';
import UserPage from './pages/admin/UserPage';
import TablePage from './pages/admin/TablePage';

function ScrollToTop() {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

function App() {
  return (
    <div className="App bg-stone-200">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/TentangKami" component={TentangKami} />
          <Route path="/TimKami" component={TimKami} />
          <Route path="/MentalKonseling" component={MentalKonseling} />
          <Route path="/CekKesehatan" component={CekKesehatanMental} />
          <Route path="/Meditasi" component={Meditasi}/>
          <Route path="/ContactUs" component={ContactUs}/>

          <Route path="/TestDepresi" component={TestDepresi}/>
          <Route path="/TestStress" component={TestStress}/>
          <Route path="/TestSuicide" component={TestSuicide}/>
          <Route path="/TestCemas" component={TestCemas}/>
          <Route path="/TestPersonality" component={TestPersonality}/>
          <Route path="/TestBurnOut" component={TestBurnOut}/>

          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Profile" component={UserProfile}/>

          <Route path="/admin/Dashboard" component={DashboardPage}/>
          <Route path="/admin/Inbox" component={InboxPage}/>
          <Route path="/admin/User" component={UserPage}/>
          <Route path="/admin/Table" component={TablePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;