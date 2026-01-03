import { IoArrowBackOutline } from 'react-icons/io5';

import { Header } from '../components/Header/Header';
import { CardBox, CardWithTitle } from '../components/Widget/Widget';

import { useRouter } from './Router';

export const SettingsPage = () => {
  const { goToPage } = useRouter();

  const goBack = () => goToPage('homePage');

  return (
    <>
      <Header
        title="Settings"
        leftAction={{ icon: IoArrowBackOutline, action: goBack }}
      />
      <CardWithTitle title="Location Settings">
        <CardBox>
          <p>Settings content</p>
        </CardBox>
      </CardWithTitle>
    </>
  );
};
