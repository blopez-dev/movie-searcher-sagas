import React from 'react';
import { Layout } from 'antd';
import Navigation from './Navigation';

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="Header">
      <div className="logo">
        lOGO
      </div>
      <Navigation />
    </Header>
  );
};

export default Header;
