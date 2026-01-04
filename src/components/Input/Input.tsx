import styles from './Input.module.css';

interface InputProps {
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({ placeholder, value, onChange, className }: InputProps) => {
  return (
    <input
      className={[className, styles.input].join(' ')}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export const InputWithLabel = ({
  label,
  placeholder,
  value,
  onChange,
  className,
}: InputProps & { label: string }) => {
  return (
    <div className={[className, styles.inputWithLabel].join(' ')}>
      <label className={styles.label}>{label}</label>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
