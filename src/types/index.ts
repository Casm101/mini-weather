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
  temperature: number;
  condition: string;
  conditionIcon: string;
  windSpeed: number;
  pressure: number;
}

export interface IHourlyWeather {
  time: string;
  temperature: number;
  conditionIcon: string;
}

export interface IHumidity {
  humidity: number;
  dewPoint: number;
}

export interface ISun {
  uvIndex: number;
  heatIndex: number;
  clouds: number;
  precipitation: number;
}

export interface Page {
  path: string;
  component: React.ReactElement;
}

export type Pages = Page[];
