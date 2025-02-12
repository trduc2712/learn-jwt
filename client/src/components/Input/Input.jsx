import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import { Icon } from '@/components';
import { validate } from '@/utils';

export const Input = ({ type, placeholder, name, value, onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const handleTogglePassword = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    onChange(e);
    setError(validate(name, value));
  };

  return (
    <div className={styles.container}>
      <div className={styles['input-wrapper']}>
        <input
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
        />
        {type === 'password' && (
          <div
            className={styles['toggle-password']}
            onClick={handleTogglePassword}
          >
            {isPasswordVisible ? (
              <Icon name="visibilityOff" size={2.5} />
            ) : (
              <Icon name="visibility" size={2.5} />
            )}
          </div>
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
