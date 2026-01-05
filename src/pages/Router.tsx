import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { HomePage } from './HomePage';
import { SettingsPage } from './SettingsPage/SettingsPage';
import { ErrorPage } from './ErrorPage/ErrorPage';

import { Pages } from '../types';
import { useApiKey } from '../state';

const pages: Pages = [
  {
    path: 'homePage',
    component: <HomePage />,
    requiresApiKey: true,
  },
  {
    path: 'settings',
    component: <SettingsPage />,
  },
  {
    path: 'error-missing-api-key',
    component: <ErrorPage errorCode={401} />,
  },
] as const;

type RouterPage = (typeof pages)[number]['path'];

const currentPageAtom = atomWithStorage<RouterPage>('currentPage', 'homePage');

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
  const { requiresApiKey } =
    pages[pages.findIndex(({ path }) => path === currentPage)] || {};

  const [apiKey] = useApiKey();

  if (requiresApiKey && !apiKey) {
    return <ErrorPage errorCode={401} />;
  }

  return <>{pages[pages.findIndex(({ path }) => path === currentPage)]?.component}</>;
};
