import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export const Button = ({ label, variant }) => {
  return <button className={styles[variant]}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined']).isRequired,
};
