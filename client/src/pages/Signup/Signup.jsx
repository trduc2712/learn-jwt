import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@/components';
import styles from './Signup.module.scss';

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    document.title = 'Đăng ký';
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleFormDataChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Tên"
          name="firstName"
          value={formData.firstName}
          onChange={handleFormDataChange}
        />
        <Input
          type="text"
          placeholder="Họ"
          name="lastName"
          value={formData.lastName}
          onChange={handleFormDataChange}
        />
        <Input
          type="tel"
          placeholder="Số điện thoại"
          name="phone"
          value={formData.phone}
          onChange={handleFormDataChange}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleFormDataChange}
        />
        <Input
          type="password"
          placeholder="Mật khẩu"
          name="password"
          value={formData.password}
          onChange={handleFormDataChange}
        />
        <Button label="Đăng ký" variant="contained" />
        <Link to="/login">Đăng nhập.</Link>
      </form>
    </div>
  );
};
