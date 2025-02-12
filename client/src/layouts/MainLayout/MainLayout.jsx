import { Outlet } from 'react-router-dom';
import { Header } from '@/components';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
