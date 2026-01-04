import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { HomePage } from './HomePage';
import { SettingsPage } from './SettingsPage';
import { Pages } from '../types';

const pages: Pages = [
  {
    path: 'homePage',
    component: <HomePage />,
  },
  {
    path: 'settings',
    component: <SettingsPage />,
  },
] as const;

type RouterPage = (typeof pages)[number]['path'];

const currentPageAtom = atomWithStorage<RouterPage>('currentPage', 'settings');

export const useRouter = () => {
  const [currentPage, setCurrentPage] = useAtom<RouterPage>(currentPageAtom);

  const goToPage = (path: RouterPage) => {
    setCurrentPage(path);
  };

  return {
    currentPage,
    goToPage,
  };
};

export const Router = () => {
  const { currentPage } = useRouter();

  return <>{pages[pages.findIndex(({ path }) => path === currentPage)]?.component}</>;
};
