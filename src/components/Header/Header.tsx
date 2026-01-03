import { IoSettingsOutline } from 'react-icons/io5';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Málaga</h1>
      <IoSettingsOutline className={styles.icon} />
    </header>
  );
};
