import { Card, CardBox } from '../../components/Widget/Widget';
import { IHourlyWeather } from '../../types';

import styles from './HourlyWeather.module.css';

interface HourlyWeatherProps {
  localTime: string;
  hourly: IHourlyWeather[];
}

export const HourlyWeather = ({ localTime, hourly }: HourlyWeatherProps) => {
  const currentTime = new Date(localTime).getHours();

  const visibleHours = hourly
    .filter(hour => {
      const hourTime = Number.parseInt(hour.time.split(':')[0]);
      return currentTime <= hourTime;
    })
    .slice(0, 7);

  return (
    <Card className={styles.hourlyWeather}>
      {visibleHours.map(hour => {
        return (
          <CardBox key={hour.time}>
            <p className={styles.widgetDate}>{hour.time}</p>
            <img src={hour.conditionIcon} alt="" className={styles.widgetIcon} />
            <p className={styles.widgetTemp}>{hour.temperature}°</p>
          </CardBox>
        );
      })}
    </Card>
  );
};
