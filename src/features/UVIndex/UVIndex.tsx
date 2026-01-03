import { BsCloudHazeFill } from 'react-icons/bs';
import { useUVIndex } from './hooks/useUVIndex';
import { FaSun } from 'react-icons/fa';
import { GiHeavyRain } from 'react-icons/gi';

import styles from './UVIndex.module.css';

export const UVIndex = () => {
  const { uvIndex, heatIndex, clouds, precipitation } = useUVIndex();

  return (
    <div className={styles.uvIndex}>
      {/* UV Index */}
      <div className={[styles.widgetBox, styles.uvIndexWidgetBox].join(' ')}>
        <div className={styles.uvIndexValue}>
          <FaSun className={styles.widgetIcon} />
          <p className={styles.widgetStatus}>{uvIndex}</p>
        </div>
        <p className={styles.widgetLabel}>UV Index</p>
      </div>

      {/* Heat Index */}
      <div className={[styles.widgetBox, styles.heatIndexWidgetBox].join(' ')}>
        <p className={styles.widgetStatus}>{heatIndex}</p>
        <p className={styles.widgetLabel}>Heat Index</p>
      </div>

      {/* Cloud Percentage */}
      <div className={styles.widgetBox}>
        <BsCloudHazeFill className={styles.widgetIcon} />
        <div className={styles.subWidgetBox}>
          <p className={styles.widgetStatus}>{clouds}%</p>
          <p className={styles.widgetLabel}>Clouds</p>
        </div>
      </div>

      {/* Cloud Percentage */}
      <div className={[styles.widgetBox, styles.precipitationWidgetBox].join(' ')}>
        <GiHeavyRain className={styles.widgetIcon} />
        <div className={styles.subWidgetBox}>
          <p className={styles.widgetStatus}>{precipitation}mm</p>
          <p className={styles.widgetLabel}>Precipitation</p>
        </div>
      </div>
    </div>
  );
};
