// Core
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, BackTop } from 'antd';

// Components
import { FooterComponent, Header } from '..';
import TopIcon from '../../theme/assets/top-icon.svg';

const { Content } = Layout;

export const LayoutComponent: FC = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: '0 50px' }}>
        <Outlet />
      </Content>
      <BackTop>
        <img className="back-top-img" src={TopIcon} alt="To Top" />
      </BackTop>
      <FooterComponent />
    </Layout>
  );
};
