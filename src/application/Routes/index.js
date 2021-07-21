import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navigation from '../Components/Header/Navigation';
import Home from '../../pages/Home';
import Cart from '../../pages/Cart';

const Routing = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  </Router>
);
export default Routing;
