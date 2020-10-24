import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import HomePage from './components/homepage/HomePageContainer'


function App() {

  useEffect(() => {
    ReactGA.initialize('250308213');
    ReactGA.pageview(window.location.pathname);
  })

  return (
    <div className="App">
      <HomePage />
    </div>
  );
};
export default App;