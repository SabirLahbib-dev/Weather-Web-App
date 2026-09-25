import dayjs from "dayjs";
import { icons } from "../utils/icons";
import { getWeatherCondition } from "../utils/weatherCondition";

export const WeeklyForecast = ({ currentLocationData, isLoading }) => {
  return (
    <section className="m-0 w-full min-w-0">
      {!isLoading ? (
        <div className="grid w-full grid-cols-7 gap-1 sm:gap-2">
          {currentLocationData?.daily?.time.map((day, i) => {
            const icon = getWeatherCondition(
              currentLocationData?.daily?.weather_code[i],
            );

            const condition = getWeatherCondition(
              currentLocationData?.daily?.weather_code[i],
            );

            const maxTemperature =
              currentLocationData?.daily?.temperature_2m_max[i];

            const minTemperature =
              currentLocationData?.daily?.temperature_2m_min[i];
            return (
              <div
                className="dark:glass glass-light flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 sm:px-2"
                key={day}
              >
                <p className="text-xs sm:text-sm font-semibold sm:text-base">
                  {i === 0 ? "Today" : dayjs(day).format("ddd")}
                </p>
                <img
                  src={icons[`../assets/icons/${icon.icon}`]}
                  alt={condition.main}
                  width={22}
                  height={22}
                  className="my-2 shrink-0 dark:invert sm:my-3"
                />
                <p className="text-sm font-semibold sm:text-base">
                  {Math.round(maxTemperature)}°
                </p>
                <p className="text-sm dark:text-gray-400 text-gray-900 sm:text-base">
                  {Math.round(minTemperature)}°
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};
