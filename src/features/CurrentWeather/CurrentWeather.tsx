import { useCurrentWeather } from './hooks/useCurrentWeather';

import styles from './CurrentWeather.module.css';
import { BsFillSunsetFill } from 'react-icons/bs';
import { MdOutlineWindPower } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa6';

export const CurrentWeather = () => {
  const current = useCurrentWeather();

  return (
    <div className={styles.currentWeather}>
      {/* Today's Weather */}
      <div className={[styles.widgetBox, styles.dailyWeather].join(' ')}>
        <img src={current.conditionIcon} alt="" className={styles.widgetStatus} />
        <p className={styles.widgetTemp}>
          {current.temperature}° <span>{current.condition}</span>
        </p>
        <p className={styles.widgetLocation}>
          <FaLocationArrow />
          <span>{current.location}</span>
        </p>
      </div>

      {/* Wind Speed */}
      <div className={[styles.widgetBox, styles.windSpeed].join(' ')}>
        <MdOutlineWindPower className={styles.widgetStatus} />
        <p className={styles.widgetValue}>{current.windSpeed} km/h</p>
      </div>

      {/* Sunset */}
      <div className={[styles.widgetBox, styles.sunset].join(' ')}>
        <BsFillSunsetFill className={styles.widgetStatus} />
        <p className={styles.widgetValue}>{current.sunset}</p>
      </div>

      {/* Pressure */}
      <div className={[styles.widgetBox, styles.pressure].join(' ')}>
        <p className={styles.widgetValue}>{current.pressure} hPa</p>
      </div>
    </div>
  );
};
