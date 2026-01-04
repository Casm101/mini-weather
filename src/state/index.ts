import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const locationAtom = atomWithStorage<string>('location', 'Málaga');
export const useLocation = () => useAtom(locationAtom);
