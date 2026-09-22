export const WeeklyForecast = () => {
  return (
    <section className="flex flex-row m-2 gap-2 overflow-x-auto scrollbar-none shrink-0">
      {/* day weather */}
      <div className="flex flex-col items-center justify-center gap-1 dark:glass glass-light py-2 px-5 rounded-lg min-w-[72px]">
        <p className="font-semibold ">Sun</p>
        <img
          src="src/assets/icons/sun.svg"
          alt="sun"
          width={25}
          className="dark:invert my-3"
        />
        <p className="font-semibold">28°</p>
        <p className="dark:text-gray-400 text-gray-900">12°</p>
      </div>
      {/* day weather */}
      <div className="flex flex-col items-center justify-center gap-1 dark:glass glass-light py-2 px-5 rounded-lg min-w-[72px]">
        <p className="font-semibold ">Mon</p>
        <img
          src="src/assets/icons/sun.svg"
          alt="sun"
          width={25}
          className="dark:invert my-3"
        />
        <p className="font-semibold">28°</p>
        <p className="dark:text-gray-400 text-gray-900">12°</p>
      </div>
      {/* day weather */}
      <div className="flex flex-col items-center justify-center gap-1 dark:glass glass-light py-2 px-5 rounded-lg min-w-[72px]">
        <p className="font-semibold ">Tue</p>
        <img
          src="src/assets/icons/sun.svg"
          alt="sun"
          width={25}
          className="dark:invert my-3"
        />
        <p className="font-semibold">28°</p>
        <p className="dark:text-gray-400 text-gray-900">12°</p>
      </div>
      {/* day weather */}
      <div className="flex flex-col items-center justify-center gap-1 dark:glass glass-light py-2 px-5 rounded-lg min-w-[72px]">
        <p className="font-semibold ">Wed</p>
        <img
          src="src/assets/icons/sun.svg"
          alt="sun"
          width={25}
          className="dark:invert my-3"
        />
        <p className="font-semibold">28°</p>
        <p className="dark:text-gray-400 text-gray-900">12°</p>
      </div>
      {/* day weather */}
      <div className="flex flex-col items-center justify-center gap-1 dark:glass glass-light py-2 px-5 rounded-lg min-w-[72px]">
        <p className="font-semibold ">Thu</p>
        <img
          src="src/assets/icons/sun.svg"
          alt="sun"
          width={25}
          className="dark:invert my-3"
        />
        <p className="font-semibold">28°</p>
        <p className="dark:text-gray-400 text-gray-900">12°</p>
      </div>
      {/* day weather */}
      <div className="flex flex-col items-center justify-center gap-1 dark:glass glass-light py-2 px-5 rounded-lg min-w-[72px]">
        <p className="font-semibold ">Fri</p>
        <img
          src="src/assets/icons/sun.svg"
          alt="sun"
          width={25}
          className="dark:invert my-3"
        />
        <p className="font-semibold">28°</p>
        <p className="dark:text-gray-400 text-gray-900">12°</p>
      </div>
      {/* day weather */}
      <div className="flex flex-col items-center justify-center gap-1 dark:glass glass-light py-2 px-5 rounded-lg min-w-[72px]">
        <p className="font-semibold ">Sat</p>
        <img
          src="src/assets/icons/sun.svg"
          alt="sun"
          width={25}
          className="dark:invert my-3"
        />
        <p className="font-semibold">28°</p>
        <p className="dark:text-gray-400 text-gray-900">12°</p>
      </div>
    </section>
  );
};
