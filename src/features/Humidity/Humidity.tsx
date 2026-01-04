import { Card, CardBox } from '../../components/Widget/Widget';
import { useMeassurement } from '../../state';
import { IHumidity } from '../../types';

import styles from './Humidity.module.css';

export const Humidity = ({ humidity, dewPoint }: IHumidity) => {
  const [tempMeassurement] = useMeassurement();

  return (
    <Card className={styles.humidity}>
      <CardBox className={styles.humidityBox}>
        <p className={styles.widgetValue}>{humidity}%</p>
        <p>Humidity</p>
      </CardBox>

      <CardBox className={styles.dewBox}>
        <p className={styles.widgetValue}>{dewPoint[tempMeassurement]}°</p>
        <p>Dew Point</p>
      </CardBox>
    </Card>
  );
};
