import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { LightThemeContext } from './LightThemeContext';
import Home from './pages';
import Contact from './pages/ContactPage'
import About from './pages/AboutPage';
import Creators from './pages/CreatorsPage';

function App() {
  const [lightTheme, setLightTheme] = useState(true);
  return (
    <Router>
      <Switch>
        <LightThemeContext.Provider value={{lightTheme, setLightTheme}}>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/creators" component={Creators} exact/>
          <Route path="/contact" component={Contact} exact/>
        </LightThemeContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
