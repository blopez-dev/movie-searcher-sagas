import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../../pages/Home';
import Cart from '../../pages/Cart';

const Routing = () => (
  <Router>
    <div>
      <Header />
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
