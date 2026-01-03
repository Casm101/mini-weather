import { FaSun } from 'react-icons/fa';
import { GiHeavyRain } from 'react-icons/gi';

import { ISun } from '../../types';

import styles from './UVIndex.module.css';
import { Card, CardBox } from '../../components/Widget/Widget';

export const UVIndex = ({ uvIndex, heatIndex, clouds, precipitation }: ISun) => {
  return (
    <Card className={styles.uvIndex}>
      {/* UV Index */}
      <CardBox className={[styles.widgetBox, styles.uvIndexWidgetBox].join(' ')}>
        <FaSun className={styles.widgetIcon} />
        <div className={styles.uvIndexValue}>
          <p className={styles.widgetStatus}>{uvIndex}</p>
          <p className={styles.widgetLabel}>UV Index</p>
        </div>
      </CardBox>

      {/* Heat Index */}
      <CardBox className={[styles.widgetBox, styles.heatIndexWidgetBox].join(' ')}>
        <p className={styles.widgetStatus}>{heatIndex}</p>
        <p className={styles.widgetLabel}>Heat Index</p>
      </CardBox>

      {/* Cloud Percentage */}
      <CardBox className={[styles.widgetBox, styles.cloudsWidgetBox].join(' ')}>
        <p className={styles.widgetStatus}>{clouds}%</p>
        <p className={styles.widgetLabel}>Clouds</p>
      </CardBox>

      {/* Cloud Percentage */}
      <CardBox className={[styles.widgetBox, styles.precipitationWidgetBox].join(' ')}>
        <GiHeavyRain className={styles.widgetIcon} />
        <div className={styles.subWidgetBox}>
          <p className={styles.widgetStatus}>{precipitation}mm</p>
          <p className={styles.widgetLabel}>Precipitation</p>
        </div>
      </CardBox>
    </Card>
  );
};
