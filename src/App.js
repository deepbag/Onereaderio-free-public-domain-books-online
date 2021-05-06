import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './csscomponents/App.css';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Login from './Dashboard/Login';
import Header from './components/Header';
import Contributers from './components/Contributers';


export default function App() {
  return (
    <>
      <Router>
        <Header />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" exact component={About} />
              <Route path="/Contributers" exact component={Contributers} />
              <Route path="/Login" exact component={Login} />
          </Switch>
      </Router>
      <Footer />
    </>
  );
}

