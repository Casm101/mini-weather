import { IoSettingsOutline } from 'react-icons/io5';

import styles from './Header.module.css';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <IoSettingsOutline className={styles.icon} />
    </header>
  );
};
