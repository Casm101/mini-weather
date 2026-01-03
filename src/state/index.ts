import { atom, useAtom } from 'jotai';

const locationAtom = atom<string>('Málaga');
export const useLocation = () => useAtom(locationAtom);
