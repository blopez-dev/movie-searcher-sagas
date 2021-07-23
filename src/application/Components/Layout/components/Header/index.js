import React from 'react';
import { Layout } from 'antd';
import SearchInput from './Searcher/index';
import Navigation from './Navigation';
import Heading from './styles';

const Header = () => {
  const { Header } = Layout;
  return (
    <Heading>
      <Header>
        <div className="logo">
          lOGO
        </div>
        <SearchInput />
        <Navigation />
      </Header>
    </Heading>

  );
};

export default Header;
