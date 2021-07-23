import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Presentation from '../Components/Layout/Layout';

import Home from '../../pages/Home';
import Cart from '../../pages/Cart';

const Routing = () => (
  <Router>
    <Presentation className="layout">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Presentation>
  </Router>
);
export default Routing;
