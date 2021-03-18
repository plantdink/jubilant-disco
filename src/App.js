import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import History from './components/pages/History';
import Contact from './components/pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/projects' component={ Projects } />
          <Route path='/skills' component={ Skills } />
          <Route path='/history' component={ History } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
