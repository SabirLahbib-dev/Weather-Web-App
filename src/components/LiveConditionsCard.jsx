import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

// 1. Fixed Mock Data (24h Values)
const mockData = [
  { time: "00:00", temp: 15 },
  { time: "03:00", temp: 14 },
  { time: "06:00", temp: 16 },
  { time: "09:00", temp: 21 },
  { time: "12:00", temp: 26 },
  { time: "15:00", temp: 28 },
  { time: "18:00", temp: 23 },
  { time: "21:00", temp: 18 },
];

export function LiveConditionsCard() {
  return (
    <section className="dark:glass glass-light p-5 rounded-2xl flex-1 flex flex-col gap-4 mx-2 min-w-0 w-full">
      
      {/* Header Info */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium text-slate-500 dark:text-gray-400">
            Live Conditions
          </h3>
          <p className="text-xl font-bold text-slate-800 dark:text-white mt-0.5">
            23.8% <span className="text-xs font-normal text-emerald-500">↑ High</span>
          </p>
        </div>
        
        {/* Status Badge */}
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-500 border border-amber-500/30">
          Moderate
        </span>
      </div>

      {/* 2. Smooth Recharts Area Graph */}
      <div className="w-full h-28 my-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData}>
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
                      {`${payload[0].value}°C`}
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
              activeDot={{ r: 6, fill: "#3b82f6", stroke: "#ffffff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-200 dark:border-white/10 text-center">
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">Humidity</p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">78%</p>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">Wind</p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">12 km/h</p>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">Pressure</p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">1 kPa</p>
        </div>
      </div>

    </section>
  );
}