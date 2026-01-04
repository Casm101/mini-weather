import { useTheme } from '../../state';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useTheme();

  return <main className={[theme, 'themeProvider'].join(' ')}>{children}</main>;
};
