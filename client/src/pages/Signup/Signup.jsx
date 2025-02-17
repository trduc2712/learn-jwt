import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupApi } from '@/api';
import { Button, Form, Input, notification } from 'antd';
import { REGEX } from '@/utils/constants';

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Signup';
  }, []);

  const onFinish = async values => {
    const { name, email, phone, password } = values;

    try {
      const result = await signupApi({ name, email, phone, password });

      if (result && !result.statusCode) {
        notification.success({
          message: 'Success',
          description: 'Sign up successfully',
        });
        navigate('/auth/login');
      } else {
        notification.error({
          message: 'Error',
          description:
            result?.message || 'Sign up failed due to an unknown error',
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      console.log('err: ', err);
      notification.error({
        message: 'Error',
        description: 'An unexpected error occurred during the signup process',
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
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

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
        label="Phone"
        name="phone"
        rules={[
          { required: true, message: 'Please input your phone number!' },
          {
            pattern: REGEX.PHONE,
            message: 'Invalid phone format',
          },
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
          {
            pattern: REGEX.PASSWORD,
            message:
              'Password must be at least 8 characters, include uppercase, lowercase, number, and special character!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item label={null} style={{ textAlign: 'center', marginTop: 48 }}>
        <Button type="primary" htmlType="submit">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;
