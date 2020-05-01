import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import HomePage from '../pages/HomePage/HomePage';

function App() {
  return (
    <div className='App-container'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <WelcomePage />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
