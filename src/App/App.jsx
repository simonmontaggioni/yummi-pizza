import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import WelcomePage from '../pages/WelcomePage/WelcomePage';
import HomePage from '../pages/HomePage/HomePage';
import OrderPage from '../pages/OrderPage/OrderPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

import './App.css';

function App() {
  return (
    <div className='App-container'>
      <Router basename='./'>
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
          <Route path=''>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
