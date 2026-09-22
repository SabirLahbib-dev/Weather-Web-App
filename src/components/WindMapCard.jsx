import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

const mockWindData = [
  { time: "00:00", speed: 12, gusts: 18 },
  { time: "03:00", speed: 10, gusts: 15 },
  { time: "06:00", speed: 14, gusts: 20 },
  { time: "09:00", speed: 18, gusts: 26 },
  { time: "12:00", speed: 22, gusts: 32 },
  { time: "15:00", speed: 20, gusts: 28 },
  { time: "18:00", speed: 15, gusts: 22 },
  { time: "21:00", speed: 11, gusts: 16 },
];
export const WindMapCard = () => {
  return (
    <section className="dark:glass glass-light h-62 w-full rounded-lg flex flex-col gap-1 justify-center p-3 min-w-0">
      <div className="flex items-center justify-between min-w-0">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500 dark:text-gray-400">
            Wind & Gusts Forecast
          </p>
          <div className="text-xl font-bold text-slate-800 dark:text-white">
            18Km/h
          </div>
          <div className="text-xs font-medium text-slate-500 dark:text-gray-400">
            NNW • Gusts 26 Km/h
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-500 border border-blue-500/30 shrink-0">Gentle Breeze</span>
          <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
            <svg
              className="w-4 h-4 text-blue-500 transition-transform duration-500"
              style={{ transform: `rotate(${310}deg)` }}
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
          <BarChart data={mockWindData}>
            <Bar dataKey="speed" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Tooltip
              cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="dark:glass dark:bg-white/60 glass-light px-3 py-1.5 rounded-lg text-xs font-semibold dark:text-white shadow-lg border border-white/10">
                      <p className="text-blue-400">
                        Speed: {payload[0].value} km/h
                      </p>
                      <p className="text-slate-800 text-[10px] dark:text-slate-800">
                        Gusts: {payload[0].payload.gusts} km/h
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
            310° NW
          </p>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">
            Max Gusts
          </p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">
            32 Km/h
          </p>
        </div>
        <div>
          <p className="text-[11px] text-gray-500 dark:text-gray-400">
            BeauFort
          </p>
          <p className="text-sm font-semibold dark:text-white text-slate-800">
            3 Force
          </p>
        </div>
      </div>
    </section>
  );
};
