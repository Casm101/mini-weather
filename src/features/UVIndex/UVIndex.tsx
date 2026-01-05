import { FaSun, FaMoon } from 'react-icons/fa';
import { GiHeavyRain } from 'react-icons/gi';

import { ISun } from '../../types';

import styles from './UVIndex.module.css';
import { Card, CardBox } from '../../components/Widget/Widget';
import { useMeassurement } from '../../state';

export const UVIndex = ({
  uvIndex,
  heatIndex,
  clouds,
  precipitation,
  isDay,
}: ISun & { isDay: boolean }) => {
  const [tempMeassurement] = useMeassurement();
  const precipitationUnit = tempMeassurement === 'metric' ? 'mm' : 'in';

  const UVIndexIcon = isDay ? FaSun : FaMoon;

  return (
    <Card className={styles.uvIndex}>
      {/* UV Index */}
      <CardBox className={[styles.widgetBox, styles.uvIndexWidgetBox].join(' ')}>
        <UVIndexIcon className={styles.widgetIcon} />
        <div className={styles.uvIndexValue}>
          <p className={styles.widgetStatus}>{uvIndex}</p>
          <p className={styles.widgetLabel}>UV Index</p>
        </div>
      </CardBox>

      {/* Heat Index */}
      <CardBox className={[styles.widgetBox, styles.heatIndexWidgetBox].join(' ')}>
        <p className={styles.widgetStatus}>{heatIndex[tempMeassurement]}</p>
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
          <p className={styles.widgetStatus}>
            {precipitation[tempMeassurement]}
            {precipitationUnit}
          </p>
          <p className={styles.widgetLabel}>Precipitation</p>
        </div>
      </CardBox>
    </Card>
  );
};
