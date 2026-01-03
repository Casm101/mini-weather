import { useHourlyWeather } from './hooks/useHourlyWeather';

import styles from './HourlyWeather.module.css';

export const HourlyWeather = () => {
  const { localTime, hourly } = useHourlyWeather();
  const currentTime = new Date(localTime).getHours();
  const visibleHours = hourly
    .filter(hour => {
      const hourTime = Number.parseInt(hour.time.split(':')[0]);
      return currentTime <= hourTime;
    })
    .slice(0, 7);

  return (
    <div className={styles.hourlyWeather}>
      {visibleHours.map(hour => {
        return (
          <div key={hour.time} className={styles.widgetBox}>
            <p className={styles.widgetDate}>{hour.time}</p>
            <img src={hour.conditionIcon} alt="" className={styles.widgetStatus} />
            <p className={styles.widgetTemp}>{hour.temperature}°</p>
          </div>
        );
      })}
    </div>
  );
};
