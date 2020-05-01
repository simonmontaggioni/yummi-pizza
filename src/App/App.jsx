import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import HomePage from '../pages/HomePage/HomePage';
import OrderPage from '../pages/OrderPage/OrderPage';

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
          <Route path='/order'>
            <OrderPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
