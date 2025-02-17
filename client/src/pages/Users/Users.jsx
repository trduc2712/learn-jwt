import { useState, useEffect } from 'react';
import { notification, Table, Tag } from 'antd';
import { getAllUsersApi } from '@/api';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Role',
    dataIndex: 'roleId',
    key: 'roleId',
    render: roleId => {
      switch (roleId) {
        case 1:
          return <Tag color="green">Admin</Tag>;
        case 2:
          return <Tag color="blue">Staff</Tag>;
        case 3:
          return <Tag color="yellow">Customer</Tag>;
      }
    },
  },
];

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const res = await getAllUsersApi();

      if (res && res.users) {
        setUsers(res.users);
      } else {
        notification.error({ message: 'Error', description: res.message });
      }
    };

    getAllUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Table bordered dataSource={users} columns={columns} rowKey={'id'} />
    </div>
  );
};

export default Users;
