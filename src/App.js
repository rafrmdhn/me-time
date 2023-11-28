import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './pages/Home';
import CekKesehatanMental from './pages/CekKesehatan';
import TentangKami from './pages/TentangKami';
import TimKami from './pages/TimKami';
import ContactUs from './pages/ContactUs';

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
          <Route path="/Home" component={Home} />
          <Route path="/CekKesehatan" component={CekKesehatanMental} />
          <Route path="/TentangKami" component={TentangKami} />
          <Route path="/TimKami" component={TimKami} />
          <Route path="/ContactUs" component={ContactUs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
