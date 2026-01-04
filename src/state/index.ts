import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { TempMeassurement, ThemeColourType } from '../types';

const locationAtom = atomWithStorage<string>('location', 'Málaga');
export const useLocation = () => useAtom(locationAtom);

const meassurementAtom = atomWithStorage<TempMeassurement>('meassurement', 'metric');
export const useMeassurement = () => useAtom(meassurementAtom);

const themeAtom = atomWithStorage<ThemeColourType>('theme', 'hotpink');
export const useTheme = () => useAtom(themeAtom);

const apiKeyAtom = atomWithStorage<string | undefined>('apiKey', undefined);
export const useApiKey = () => useAtom(apiKeyAtom);
