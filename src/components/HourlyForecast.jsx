import dayjs from "dayjs";
import { icons } from "../utils/icons";
import { getWeatherCondition } from "../utils/weatherCondition";

export const HourlyForecast = ({ currentLocationData, isLoading }) => {
  if (isLoading || !currentLocationData) {
    return (
      <section
        className="flex items-center dark:glass glass-light h-[125.6px] rounded-lg gap-3 p-3 overflow-x-auto scrollbar-none"
        data-testid="hourlyForecast-skeleton"
      >
        {[...Array(13)].map((_, i) => (
          <div
            key={i}
            className="w-14 shrink-0 rounded-md bg-white/30 p-2 dark:bg-black/20 h-[100px] animate-pulse"
          >
            {_}
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="dark:glass glass-light m-0 min-w-0 overflow-x-auto rounded-lg p-3 scrollbar-none" data-testid="hourly-forecast">
      <div className="flex min-w-max items-center gap-3">
        {currentLocationData.hourly.time.map((time, i) => {
          const temperature = currentLocationData.hourly.temperature_2m[i];
          const icon = getWeatherCondition(
            currentLocationData.hourly.weather_code[i],
            currentLocationData.hourly.is_day[i],
          );

          return (
            <div
              className="flex w-14 shrink-0 flex-col items-center justify-center gap-2 rounded-md bg-white/30 p-2 dark:bg-black/20"
              key={i}
            >
              <p className="whitespace-nowrap">
                {i === 0 ? "Now" : dayjs(time).format("hA")}
              </p>
              <img
                src={icons[`../assets/icons/${icon.icon}`]}
                alt="Weather"
                width={20}
                height={20}
                className="shrink-0 dark:invert"
              />
              <p>{Math.round(temperature)}°</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
