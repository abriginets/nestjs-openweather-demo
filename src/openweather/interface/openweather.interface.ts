export interface OpenweatherDailyForecastEntryTemperature {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface OpenweatherDailyForecastEntryFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface OpenweatherDailyForecastEntryWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface OpenweatherDailyForecastEntry {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: OpenweatherDailyForecastEntryTemperature;
  feels_like: OpenweatherDailyForecastEntryFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: OpenweatherDailyForecastEntryWeather[];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface OpenweatherDailyForecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: OpenweatherDailyForecastEntry[];
}
