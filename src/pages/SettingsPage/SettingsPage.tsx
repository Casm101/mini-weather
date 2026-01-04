import { IoArrowBackOutline } from 'react-icons/io5';

import { Header } from '../../components/Header/Header';
import { InputWithLabel } from '../../components/Input/Input';
import { CardBox, CardWithTitle } from '../../components/Widget/Widget';
import { DropdownWithLabel } from '../../components/Dropdown/Dropdown';
import { ColourSelector } from '../../components/ColourSelector/ColourSelector';

import { useRouter } from '../Router';
import { useLocation, useMeassurement, useTheme } from '../../state';

import { ThemeColours, type TempMeassurement, type ThemeColourType } from '../../types';

import styles from './SettingsPage.module.css';

export const SettingsPage = () => {
  const [location, setLocation] = useLocation();
  const [meassurement, setMeassurement] = useMeassurement();
  const [theme, setTheme] = useTheme();

  const { goToPage } = useRouter();

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
  };

  const handleMeassurementChange = (newMeassurement: TempMeassurement) => {
    setMeassurement(newMeassurement);
  };

  const handleThemeChange = (newTheme: ThemeColourType) => {
    setTheme(newTheme);
  };

  const goBack = () => goToPage('homePage');

  return (
    <>
      <Header
        title="Settings"
        leftAction={{ icon: IoArrowBackOutline, action: goBack }}
      />
      <CardWithTitle
        title="Location Settings"
        className={styles.locationSettingsCard}
        contentClassName={styles.locationSettingsContent}
      >
        <CardBox>
          <InputWithLabel
            label="Weather Location"
            placeholder="Enter location"
            value={location}
            onChange={e => handleLocationChange(e.target.value)}
          />
        </CardBox>

        <CardBox>
          <DropdownWithLabel
            label="Temperature Meassurement"
            value={meassurement}
            onChange={handleMeassurementChange}
            options={[
              { value: 'metric', label: 'Metric' },
              { value: 'imperial', label: 'Imperial' },
            ]}
          />
        </CardBox>
      </CardWithTitle>
      <CardWithTitle
        title="Theme Settings"
        className={styles.themeSettingsCard}
        contentClassName={styles.themeSettingsContent}
      >
        <CardBox>
          <ColourSelector
            selectedColour={theme}
            colours={ThemeColours}
            onSelectColour={handleThemeChange}
          />
        </CardBox>
      </CardWithTitle>
    </>
  );
};
