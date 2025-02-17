import { useState } from 'react';
import { Layout, Menu, notification } from 'antd';
import {
  HomeOutlined,
  ProductOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Header: AntDesignHeader } = Layout;

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Collections',
    key: 'collections',
    icon: <ProductOutlined />,
    children: [
      {
        label: <Link to="/collections/tops">Tops</Link>,
        key: 'tops',
      },
      {
        label: <Link to="/collections/bottoms">Bottoms</Link>,
        key: 'bottoms',
      },
      {
        label: <Link to="/collections/outerwear">Outerwear</Link>,
        key: 'outerwear',
      },
      {
        label: <Link to="/collections/hoodies">Hoodies</Link>,
        key: 'hoodies',
      },
      {
        label: <Link to="/collections/sweaters">Sweaters</Link>,
        key: 'sweaters',
      },
      {
        label: <Link to="/collections/accessories">Accessories</Link>,
        key: 'accessories',
      },
    ],
  },
  {
    label: <Link to="/cart">Cart</Link>,
    key: 'cart',
    icon: <ShoppingCartOutlined />,
  },
  {
    label: 'Account',
    key: 'account',
    icon: <UserOutlined />,
    children: [
      {
        label: <Link to="/profile">My profile</Link>,
        key: 'profile',
      },
      {
        label: 'Log out',
        key: 'logout',
      },
    ],
  },
];

const Header = () => {
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate();

  const onClick = e => {
    if (e.key === 'logout') {
      navigate('/auth/login');

      notification.success({
        message: 'Success',
        description: 'Log out successfully',
      });
    }

    setCurrent(e.key);
  };

  return (
    <AntDesignHeader
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
    </AntDesignHeader>
  );
};

export default Header;
