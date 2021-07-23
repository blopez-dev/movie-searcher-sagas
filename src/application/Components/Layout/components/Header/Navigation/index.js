import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import Wrapper from './styles';

const Navigation = () => (
  <Wrapper>
    <Menu theme="dark" className="navigation-wrapp">
      <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/cart">Cart</Link></Menu.Item>
    </Menu>
  </Wrapper>

);

export default Navigation;
