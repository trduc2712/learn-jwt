import styles from './Header.module.scss';
import { Icon, Tooltip } from '@/components';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.middle}></div>
      <div className={styles.right}>
        <Tooltip text="Tìm kiếm" position="bottom">
          <Icon name="search" size={3.25} to="/search" />
        </Tooltip>
        <Tooltip text="Tài khoản" position="bottom">
          <Icon name="person" size={3.25} to="/account" />
        </Tooltip>
        <Tooltip text="Giỏ hàng" position="bottom">
          <Icon name="cart" size={3.25} to="/cart" />
        </Tooltip>
      </div>
    </header>
  );
};
