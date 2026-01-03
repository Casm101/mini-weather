import type { ElementType } from 'react';

import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  leftAction?: {
    icon: ElementType;
    action: () => void;
  };
  rightAction?: {
    icon: ElementType;
    action: () => void;
  };
}

export const Header = ({ title, leftAction, rightAction }: HeaderProps) => {
  return (
    <header className={styles.header}>
      {leftAction && (
        <leftAction.icon className={styles.icon} onClick={leftAction.action} />
      )}
      <h1 className={styles.title}>{title}</h1>
      {rightAction && (
        <rightAction.icon className={styles.icon} onClick={rightAction.action} />
      )}
    </header>
  );
};
