import styles from './Widget.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardWithTitleProps extends CardProps {
  title: string;
}

export const Card = ({ children, className }: CardProps) => {
  return <div className={[className, styles.card].join(' ')}>{children}</div>;
};

export const CardBox = ({ children, className }: CardProps) => {
  return <div className={[className, styles.cardBox].join(' ')}>{children}</div>;
};

export const CardWithTitle = ({ children, className, title }: CardWithTitleProps) => {
  return (
    <div className={[className, styles.cardWithTitle].join(' ')}>
      <p className={styles.cardTitle}>{title}</p>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};
