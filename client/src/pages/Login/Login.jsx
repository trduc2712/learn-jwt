import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { loginApi } from '@/api';
import { Button, Form, Input } from 'antd';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const onFinish = async values => {
    const { email, password } = values;

    try {
      const response = await loginApi({ email, password });

      if (response && !response.statusCode) {
        notification.success({
          message: 'Success',
          description: response.message,
        });

        navigate('/');
      } else {
        notification.error({
          message: 'Error',
          description: response.message,
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      notification.error({
        message: 'Error',
        description: 'An unexpected error occurred during the login process',
      });
    }
  };

  const onFinishFailed = () => {};

  return (
    <Form
      name="basic"
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          { type: 'email', message: 'Invalid email format!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null} style={{ textAlign: 'center', marginTop: 48 }}>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
