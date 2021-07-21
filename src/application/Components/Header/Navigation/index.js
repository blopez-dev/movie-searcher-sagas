import React from 'react';
import { Link } from 'react-router-dom';
import MainNavigation from './styles';

const Navigation = () => (
  <MainNavigation>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  </MainNavigation>
);

export default Navigation;
