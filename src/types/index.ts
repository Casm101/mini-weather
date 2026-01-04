export interface Weather {
  localTime: string;
  location: string;
  sunset: string;
  current: ICurrentWeather;
  hourly: IHourlyWeather[];
  humidity: IHumidity;
  sun: ISun;
}

export interface ICurrentWeather {
  temperature: {
    metric: number;
    imperial: number;
  };
  condition: string;
  conditionIcon: string;
  windSpeed: {
    metric: number;
    imperial: number;
  };
  pressure: {
    metric: number;
    imperial: number;
  };
}

export interface IHourlyWeather {
  time: string;
  temperature: {
    metric: number;
    imperial: number;
  };
  conditionIcon: string;
}

export interface IHumidity {
  humidity: number;
  dewPoint: {
    metric: number;
    imperial: number;
  };
}

export interface ISun {
  uvIndex: number;
  heatIndex: {
    metric: number;
    imperial: number;
  };
  clouds: number;
  precipitation: {
    metric: number;
    imperial: number;
  };
}

export interface Page {
  path: string;
  component: React.ReactElement;
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
