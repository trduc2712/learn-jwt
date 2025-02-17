import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import { Layout } from 'antd';

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
