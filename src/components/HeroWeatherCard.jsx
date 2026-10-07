import { getWeatherCondition } from "../utils/weatherCondition";

export const HeroWeatherCard = ({ currentLocationData, isLoading }) => {
  if (isLoading || !currentLocationData) {
    return (
      <section className="dark:glass glass-light rounded-lg h-[217.6px] animate-pulse" data-testid="heroWeather-skeleton"></section>
    );
  }

  // get weather conditions
  const conditions = getWeatherCondition(
    currentLocationData.current.weather_code,
    currentLocationData.current.is_day,
  );

  return (
    <section className="dark:glass glass-light rounded-lg p-4 sm:p-6" data-testid="hero-card">
      <h1 className=" text-5xl sm:text-7xl">
        {Math.round(currentLocationData.current.temperature_2m)}°
      </h1>
      <p className="text-2xl font-semibold sm:text-[30px]">{conditions.main}</p>
      <p className="text-gray-500 dark:text-gray-400">{conditions.sub}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="dark:bg-white/20 bg-white/50 px-4 py-0 rounded-full">
          H {Math.round(currentLocationData.daily.temperature_2m_max[0])}°
        </span>
        <span className=" dark:bg-white/20 bg-white/50 px-4 py-0 rounded-full">
          L {Math.round(currentLocationData.daily.temperature_2m_min[0])}°
        </span>
      </div>
    </section>
  );
};
