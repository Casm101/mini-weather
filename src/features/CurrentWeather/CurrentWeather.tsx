import { BsFillSunsetFill } from 'react-icons/bs';
import { MdOutlineWindPower } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa6';

import { ICurrentWeather } from '../../types';

import styles from './CurrentWeather.module.css';

interface CurrentWeatherProps {
  location: string;
  sunset: string;
  current: ICurrentWeather;
}

export const CurrentWeather = ({ location, sunset, current }: CurrentWeatherProps) => {
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
          <span>{location}</span>
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
        <p className={styles.widgetValue}>{sunset}</p>
      </div>

      {/* Pressure */}
      <div className={[styles.widgetBox, styles.pressure].join(' ')}>
        <p className={styles.widgetValue}>
          {current.pressure} <span>hPa</span>
        </p>
      </div>
    </div>
  );
};
