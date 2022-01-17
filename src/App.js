import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/tradingpair';
import Services from './pages/appcontainer';
import Contact from './pages/tradding';
import SignUp from './pages/billing';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tradingpair' component={About} />
        <Route path='/appbinding' component={Services} />
        <Route path='/trading-records' component={Contact} />
        <Route path='/billing' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
