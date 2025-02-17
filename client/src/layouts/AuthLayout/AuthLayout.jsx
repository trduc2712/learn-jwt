import { Layout, Card } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const AuthLayout = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Card
          style={{
            width: 500,
          }}
        >
          <Outlet />
        </Card>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
