import { BsCloudHazeFill } from 'react-icons/bs';
import { useUVIndex } from './hooks/useUVIndex';

import styles from './UVIndex.module.css';

export const UVIndex = () => {
  const { uvIndex, clouds } = useUVIndex();

  return (
    <div className={styles.uvIndex}>
      <div className={styles.widgetBox}>
        <p className={styles.widgetStatus}>{uvIndex}</p>
        <p className={styles.widgetLabel}>UV Index</p>
      </div>

      <div className={styles.widgetBox}>
        <BsCloudHazeFill />
        <p className={styles.widgetStatus}>{clouds}%</p>
        <p className={styles.widgetLabel}>Clouds</p>
      </div>
    </div>
  );
};
