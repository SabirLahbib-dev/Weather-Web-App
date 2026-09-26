import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
import dayjs from "dayjs";

export const WindMapCard = ({ currentLocationData, isLoading }) => {
  // Guard close
  if (isLoading || !currentLocationData) {
    return null;
  }

  //Bar chart data
  const windData = currentLocationData?.hourly?.time.map((time, i) => {
    const speed = currentLocationData?.hourly?.wind_speed_10m[i];

    const gusts = currentLocationData?.hourly?.wind_gusts_10m[i];

    return {
      time: dayjs(time).format("hA"),
      speed: Math.round(speed),
      gusts: Math.round(gusts),
    };
  });

  // wind speed
  const windSpeed = Math.round(currentLocationData?.current?.wind_speed_10m);

  // wind direction
  const windDirection = currentLocationData?.current?.wind_direction_10m;

  //Max Gusts
  const maxGusts = Math.max(
    ...(0, currentLocationData?.hourly?.wind_gusts_10m ?? []),
  );

  // Wind status badge
  const getWindStatus = (windSpeed) => {
    if (windSpeed < 2) return "Calm";
    if (windSpeed <= 5) return "Light Air";
    if (windSpeed <= 11) return "Light Breeze";
    if (windSpeed <= 19) return "Gentle Breeze";
    if (windSpeed <= 28) return "Moderate Breeze";
    if (windSpeed <= 38) return "Fresh Breeze";
    if (windSpeed <= 49) return "Strong Breeze";
    if (windSpeed <= 61) return "High Wind";
    if (windSpeed <= 74) return "Gale";
    if (windSpeed >= 75) return "Strong Storm";
    return "Unknown";
  };

  // Beaufort Scale
  const getBeaufortScale = (windSpeed) => {
    if (windSpeed < 2) return "Force 0";
    if (windSpeed <= 5) return "Force 1";
    if (windSpeed <= 11) return "Force 2";
    if (windSpeed <= 19) return "Force 3";
    if (windSpeed <= 28) return "Force 4";
    if (windSpeed <= 38) return "Force 5";
    if (windSpeed <= 49) return "Force 6";
    if (windSpeed <= 61) return "Force 7";
    if (windSpeed <= 74) return "Force 8";
    if (windSpeed <= 88) return "Force 9";
    if (windSpeed <= 102) return "Force 10";
    if (windSpeed <= 117) return "Force 11";
    if (windSpeed >= 118) return "Force 12";
  };

  // get direction
  const getWindcompassLabel = (degree) => {
    if (typeof degree !== "number") return "N";

    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];

    //
    const index = Math.floor(((degree + 11.25) % 360) / 22.5);

    return directions[index];
  };

  return (
    <section className="dark:glass glass-light h-[246px] w-full rounded-lg flex flex-col gap-1 justify-center p-3 min-w-0">
      <div className="flex items-center justify-between min-w-0">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500 dark:text-gray-400">
            Wind & Gusts Forecast
          </p>
          <div className="text-xl font-bold text-slate-800 dark:text-white">
            {windSpeed} Km/h
          </div>
          <div className="text-xs font-medium text-slate-500 dark:text-gray-400">
            {getWindcompassLabel(windDirection)} • Gusts{" "}
            {Math.round(currentLocationData?.current?.wind_gusts_10m)} Km/h
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-500 border border-blue-500/30 shrink-0">
            {getWindStatus(windSpeed)}
          </span>
          <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
            <svg
              className="w-4 h-4 text-blue-500 transition-transform duration-500"
              style={{ transform: `rotate(${windDirection}deg)` }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 19V5m0 0l-4 4m4-4l4 4"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[60%] w-full min-w-0">
        <ResponsiveContainer height="100%" width="100%">
          <BarChart data={windData}>
            <Bar dataKey="speed" fill="#3b82f6" radius={[0, 0, 0, 0]} />
            <Tooltip
              cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="dark:glass dark:bg-white/60 glass-light px-3 py-1.5 rounded-lg text-xs font-semibold dark:text-white shadow-lg border border-white/10">
                      <p className="text-blue-400">
                        Speed: {payload[0].value} km/h
                      </p>
                      <p className="text-slate-800 text-[10px] ">
                        Gusts: {payload[0].payload.gusts} km/h
                      </p>
                      <p className="text-slate-800 text-[10px] ">
                        Time: {payload[0].payload.time}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-200 dark:border-white/10 text-center">
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">
            Direction
          </p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">
            {windDirection}° {getWindcompassLabel(windDirection)}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">
            Max Gusts
          </p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">
            {Math.round(maxGusts)} Km/h
          </p>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">
            BeauFort
          </p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">
            {getBeaufortScale(windSpeed)}
          </p>
        </div>
      </div>
    </section>
  );
};
