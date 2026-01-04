import { IoArrowBackOutline } from 'react-icons/io5';

import { Header } from '../../components/Header/Header';
import { InputWithLabel } from '../../components/Input/Input';
import { CardBox, CardWithTitle } from '../../components/Widget/Widget';
import { DropdownWithLabel } from '../../components/Dropdown/Dropdown';
import { ColourSelector } from '../../components/ColourSelector/ColourSelector';

import { useRouter } from '../Router';
import { useApiKey, useLocation, useMeassurement, useTheme } from '../../state';

import { ThemeColours, type TempMeassurement, type ThemeColourType } from '../../types';

import styles from './SettingsPage.module.css';

export const SettingsPage = () => {
  const [location, setLocation] = useLocation();
  const [meassurement, setMeassurement] = useMeassurement();
  const [theme, setTheme] = useTheme();
  const [apiKey, setApiKey] = useApiKey();

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

  const handleApiKeyChange = (newApiKey: string) => {
    setApiKey(newApiKey);
  };

  const goBack = () => goToPage('homePage');

  return (
    <>
      <Header
        title="Settings"
        leftAction={{ icon: IoArrowBackOutline, action: goBack }}
      />

      {/* Location Settings */}
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

      {/* Theme Settings */}
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

      {/* API Settings */}
      <CardWithTitle
        title="API Settings"
        className={styles.apiSettingsCard}
        contentClassName={styles.apiSettingsContent}
      >
        <CardBox>
          <InputWithLabel
            label="Weather API Key"
            placeholder="Enter API key"
            value={apiKey}
            onChange={e => handleApiKeyChange(e.target.value)}
          />
        </CardBox>
      </CardWithTitle>
    </>
  );
};
