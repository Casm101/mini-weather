import { FaLocationArrow } from 'react-icons/fa6';
import { MdWbSunny } from 'react-icons/md';

const weatherIconsMap = {
  sunny: <MdWbSunny />,
  partlyCloudy: <FaLocationArrow />,
};

export const WeatherIcon = ({ icon }: { icon: string }) => {
  return <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />;
};
