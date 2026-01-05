export * from './ErrorCodes';
export * from './Weather';

export interface Page {
  path: string;
  component: React.ReactElement;
  requiresApiKey?: boolean;
}

export type Pages = Page[];

export type TempMeassurement = 'metric' | 'imperial';

export const ThemeColours = [
  'hotpink',
  'limegreen',
  'sunyellow',
  'skyblue',
  'grapepurple',
  'cloudgrey',
] as const;

export type ThemeColourType = (typeof ThemeColours)[number];
