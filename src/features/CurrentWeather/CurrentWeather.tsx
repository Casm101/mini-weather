import { useCurrentWeather } from './services/fetchWeather';

import styles from './CurrentWeather.module.css';

export const CurrentWeather = () => {
  const current = useCurrentWeather();

  console.log(current);

  return (
    <div className={styles.currentWeather}>
      {/* Today's Weather */}
      <div className={[styles.widgetBox, styles.dailyWeather].join(' ')}>
        <img src={current.conditionIcon} alt="" className={styles.widgetStatus} />
        <p className={styles.widgetTemp}>
          {current.temperature}° <span>{current.condition}</span>
        </p>
        <p className={styles.widgetLocation}>{current.location}</p>
      </div>

      {/* Wind Speed */}
      <div className={[styles.widgetBox, styles.windSpeed].join(' ')}>
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className={styles.widgetStatus}
        />
        <p className={styles.widgetValue}>{current.windSpeed} km/h</p>
      </div>

      {/* Sunset */}
      <div className={[styles.widgetBox, styles.sunset].join(' ')}>
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className={styles.widgetStatus}
        />
        <p className={styles.widgetValue}>{current.sunset}</p>
      </div>

      {/* Pressure */}
      <div className={[styles.widgetBox, styles.pressure].join(' ')}>
        <p className={styles.widgetValue}>{current.pressure} hPa</p>
      </div>
    </div>
  );
};
