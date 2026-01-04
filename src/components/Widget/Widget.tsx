import styles from './Widget.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardWithTitleProps extends CardProps {
  title: string;
  titleClassName?: string;
  contentClassName?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return <div className={[className, styles.card].join(' ')}>{children}</div>;
};

export const CardBox = ({ children, className = '' }: CardProps) => {
  return <div className={[className, styles.cardBox].join(' ')}>{children}</div>;
};

export const CardWithTitle = ({
  children,
  className = '',
  title,
  titleClassName = '',
  contentClassName = '',
}: CardWithTitleProps) => {
  return (
    <div className={[className, styles.cardWithTitle].join(' ')}>
      <p className={[titleClassName, styles.cardTitle].join(' ')}>{title}</p>
      <div className={[contentClassName, styles.cardContent].join(' ')}>{children}</div>
    </div>
  );
};
