import sunIcon from "../assets/icons/sun.svg";

const weeklyForecast = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const WeeklyForecast = () => {
  return (
    <section className="m-0 w-full min-w-0">
      <div className="grid w-full grid-cols-7 gap-1 sm:gap-2">
        {weeklyForecast.map((day) => (
          <div
            className="dark:glass glass-light flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 sm:px-2"
            key={day}
          >
            <p className="text-sm font-semibold sm:text-base">{day}</p>
            <img
              src={sunIcon}
              alt="Sunny weather"
              width={22}
              height={22}
              className="my-2 shrink-0 dark:invert sm:my-3"
            />
            <p className="text-sm font-semibold sm:text-base">28°</p>
            <p className="text-sm dark:text-gray-400 text-gray-900 sm:text-base">12°</p>
          </div>
        ))}
      </div>
    </section>
  );
};