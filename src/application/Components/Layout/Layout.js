import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header/index';
import { Wrapper, Content } from './styles';

const Presentation = ({ children }) => (
  <Layout>
    <Header />
    <Content>
      <Wrapper className="wrapper--content">
        {children}
      </Wrapper>
    </Content>
  </Layout>
);

export default Presentation;
