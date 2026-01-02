import { useHumidity } from './hooks/useHumitidy';

import styles from './Humidity.module.css';

export const Humidity = () => {
  const { humidity, dewPoint } = useHumidity();

  return (
    <div className={styles.humidity}>
      <div className={styles.widgetBox}>
        <p className={styles.widgetStatus}>{humidity}%</p>
        <p className={styles.widgetLabel}>Humidity</p>
      </div>

      <div className={styles.widgetBox}>
        <p className={styles.widgetStatus}>{dewPoint}°</p>
        <p className={styles.widgetLabel}>Dew Point</p>
      </div>
    </div>
  );
};
