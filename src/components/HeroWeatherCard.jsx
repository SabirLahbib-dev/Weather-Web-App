export const HeroWeatherCard = () => {
  return (
    <section className="dark:glass glass-light rounded-lg p-4 sm:p-6">
      <h1 className="text-5xl sm:text-7xl">18°</h1>
      <p className="text-2xl font-semibold sm:text-[30px]">Stormy</p>
      <p className="text-gray-500 dark:text-gray-400">With partly cloudy</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="dark:bg-white/20 bg-white/50 px-4 py-0 rounded-full">
          H 29°
        </span>
        <span className=" dark:bg-white/20 bg-white/50 px-4 py-0 rounded-full">
          L 12°
        </span>
      </div>
    </section>
  );
};
