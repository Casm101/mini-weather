import { IoArrowBackOutline } from 'react-icons/io5';

import { Header } from '../components/Header/Header';
import { InputWithLabel } from '../components/Input/Input';
import { CardBox, CardWithTitle } from '../components/Widget/Widget';

import { useRouter } from './Router';
import { useLocation } from '../state';

export const SettingsPage = () => {
  const [location, setLocation] = useLocation();
  const { goToPage } = useRouter();

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
  };

  const goBack = () => goToPage('homePage');

  return (
    <>
      <Header
        title="Settings"
        leftAction={{ icon: IoArrowBackOutline, action: goBack }}
      />
      <CardWithTitle title="Location Settings">
        <CardBox>
          <InputWithLabel
            label="Weather Location"
            placeholder="Enter location"
            value={location}
            onChange={e => handleLocationChange(e.target.value)}
          />
        </CardBox>
      </CardWithTitle>
    </>
  );
};
