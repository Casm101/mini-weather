import styles from './Widget.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return <div className={[className, styles.card].join(' ')}>{children}</div>;
};

export const CardBox = ({ children, className }: CardProps) => {
  return <div className={[className, styles.cardBox].join(' ')}>{children}</div>;
};
