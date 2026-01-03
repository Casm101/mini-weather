import { atom, useAtom } from 'jotai';

import { HomePage } from './HomePage';
import { SettingsPage } from './SettingsPage';

const pages = [
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

const currentPageAtom = atom<RouterPage>('homePage');

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
