import PropTypes from 'prop-types';
import { ICONS } from '@/constants';
import { Link } from 'react-router-dom';

export const Icon = ({ name, size, to }) => {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size + 'rem'}
      viewBox="0 -960 960 960"
      width={`${size}rem`}
      fill="$black"
      style={{ cursor: 'pointer' }}
    >
      <path d={ICONS[name]} />
    </svg>
  );

  return to ? <Link to={to}>{svg}</Link> : svg;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  to: PropTypes.string,
};
