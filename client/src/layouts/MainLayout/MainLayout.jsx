import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu, notification } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';

const { Content, Header } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathToKey = {
    '/': 'home',
    '/users': 'users',
  };

  const [current, setCurrent] = useState(
    pathToKey[location.pathname] || 'home'
  );

  const onClick = e => {
    if (e.key === 'logout') {
      navigate('/auth/login');
      localStorage.removeItem('accessToken');

      notification.success({
        message: 'Success',
        description: 'Log out successfully',
      });
    }

    setCurrent(e.key);
  };

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/users">Users</Link>,
      key: 'users',
      icon: <UserOutlined />,
    },
    {
      label: 'Log out',
      key: 'logout',
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          padding: 0,
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
