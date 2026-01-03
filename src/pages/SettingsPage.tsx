import { IoArrowBackOutline } from 'react-icons/io5';

import { Header } from '../components/Header/Header';

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
    </>
  );
};
