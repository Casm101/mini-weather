import { BsFillSunsetFill } from 'react-icons/bs';
import { MdOutlineWindPower } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa6';

import { Card, CardBox } from '../../components/Widget/Widget';

import { useMeassurement } from '../../state';

import { ICurrentWeather } from '../../types';

import styles from './CurrentWeather.module.css';

interface CurrentWeatherProps {
  location: string;
  sunset: string;
  current: ICurrentWeather;
}

export const CurrentWeather = ({ location, sunset, current }: CurrentWeatherProps) => {
  const [tempMeassurement] = useMeassurement();
  const windSpeedUnit = tempMeassurement === 'metric' ? 'km/h' : 'mph';
  const pressureUnit = tempMeassurement === 'metric' ? 'hPa' : 'mmHg';

  return (
    <Card className={styles.currentWeather}>
      {/* Today's Weather */}
      <CardBox className={styles.dailyWeather}>
        <img src={current.conditionIcon} alt="" className={styles.widgetIcon} />
        <p className={styles.widgetTemp}>
          {current.temperature[tempMeassurement]}° <span>{current.condition}</span>
        </p>
        <p className={styles.widgetLocation}>
          <FaLocationArrow />
          <span>{location}</span>
        </p>
      </CardBox>

      {/* Wind Speed */}
      <CardBox className={styles.windSpeed}>
        <MdOutlineWindPower className={styles.widgetIcon} />
        <p>
          {current.windSpeed[tempMeassurement]} {windSpeedUnit}
        </p>
      </CardBox>

      {/* Sunset */}
      <CardBox className={styles.sunset}>
        <BsFillSunsetFill className={styles.widgetIcon} />
        <p>{sunset}</p>
      </CardBox>

      {/* Pressure */}
      <CardBox className={styles.pressure}>
        <p>
          {current.pressure[tempMeassurement]} <span>{pressureUnit}</span>
        </p>
      </CardBox>
    </Card>
  );
};
