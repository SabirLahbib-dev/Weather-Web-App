import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import dayjs from "dayjs";

export function LiveConditionsCard({ currentLocationData, isLoading }) {
  // Guard close
  if (isLoading || !currentLocationData) {
    return null;
  }

  // graph data
  const liveConditionData =
    currentLocationData?.hourly?.temperature_2m?.map((temp, i) => ({
      time: dayjs(currentLocationData.hourly.time[i]).format("hA"),
      temp: Math.round(temp),
    })) || [];

  // Dynamic status next to the temperature
  const apparentTemp = currentLocationData?.current?.apparent_temperature;
  const actualTemp = currentLocationData?.current?.temperature_2m;

  const getDiffrenceLabel = () => {
    if (apparentTemp > actualTemp) return "↑ Warmer";
    if (apparentTemp < actualTemp) return "↓ Cooler";
    return "Equal";
  };

  // Dynamic status badge
  const getHumidityLevel = (humidity) => {
    if (humidity < 30) return "Dry";
    if (humidity >= 30 && humidity <= 60) return "Moderate";
    return "Humid";
  };

  return (
    <section className="dark:glass glass-light min-w-0 w-full rounded-lg p-4 sm:p-5 flex flex-col gap-4">
      {/* Header Info */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium text-slate-500 dark:text-gray-400">
            Live Conditions
          </h3>
          <p className="text-xl font-bold text-slate-800 dark:text-white mt-0.5">
            {Math.round(currentLocationData?.current?.apparent_temperature)}°{" "}
            <span className="text-xs font-normal text-emerald-500">
              {getDiffrenceLabel()}
            </span>
          </p>
        </div>

        {/* Status Badge */}
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-500 border border-amber-500/30">
          {getHumidityLevel(currentLocationData?.current?.relative_humidity_2m)}
        </span>
      </div>

      {/* 2. Smooth Recharts Area Graph */}
      <div className="w-full h-18 my-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={liveConditionData}>
            <defs>
              {/* Blue Gradient for Fill Effect */}
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Custom Tooltip on Hover */}
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="dark:glass glass-light px-2.5 py-1 rounded-lg text-xs font-semibold dark:text-white text-slate-800 shadow-md">
                      <span>{payload[0].payload.time}</span> •{" "}
                      <span className="text-blue-500">
                        {payload[0].payload.temp}°C
                      </span>
                    </div>
                  );
                }
                return null;
              }}
            />

            {/* Area Line */}
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#chartGradient)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#3b82f6",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-200 dark:border-white/10 text-center">
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">
            Humidity
          </p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">
            {currentLocationData?.current?.relative_humidity_2m}%
          </p>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">Wind</p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">
            {Math.round(currentLocationData?.current?.wind_speed_10m)} km/h
          </p>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">
            Pressure
          </p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">
            {(currentLocationData?.current?.surface_pressure / 10).toFixed(1)}{" "}
            kPa
          </p>
        </div>
      </div>
    </section>
  );
}
