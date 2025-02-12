import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

export const Tooltip = ({ children, text, position }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div className={`${styles.tooltip} ${styles[position]}`}>{text}</div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']).isRequired,
};
