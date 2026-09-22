import cloudIcon from "../assets/icons/cloud.svg";

const hourlyForecast = [
  { time: "Now", temperature: "18°" },
  { time: "2PM", temperature: "19°" },
  { time: "3PM", temperature: "19°" },
  { time: "4PM", temperature: "20°" },
  { time: "5PM", temperature: "20°" },
  { time: "6PM", temperature: "19°" },
  { time: "7PM", temperature: "18°" },
  { time: "8PM", temperature: "17°" },
  { time: "9PM", temperature: "16°" },
  { time: "10PM", temperature: "16°" },
  { time: "11PM", temperature: "15°" },
];

export const HourlyForecast = () => {
  return (
    <section className="dark:glass glass-light m-0 min-w-0 overflow-x-auto rounded-lg p-3 scrollbar-none">
      <div className="flex min-w-max items-center gap-3">
        {hourlyForecast.map(({ time, temperature }) => (
          <div
            className="flex w-14 shrink-0 flex-col items-center justify-center gap-2 rounded-md bg-white/30 p-2 dark:bg-black/20"
            key={time}
          >
            <p className="whitespace-nowrap">{time}</p>
            <img
              src={cloudIcon}
              alt="Cloudy weather"
              width={20}
              height={20}
              className="shrink-0 dark:invert"
            />
            <p>{temperature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};