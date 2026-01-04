import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import { TempMeassurement } from '../types';

const locationAtom = atomWithStorage<string>('location', 'Málaga');
export const useLocation = () => useAtom(locationAtom);

const meassurementAtom = atomWithStorage<TempMeassurement>('meassurement', 'metric');
export const useMeassurement = () => useAtom(meassurementAtom);
