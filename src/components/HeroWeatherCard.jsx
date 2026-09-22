export const HeroWeatherCard = () => {
  return (
    <section className="dark:glass glass-light m-2 rounded-lg pl-6 py-3 flex flex-wrap flex-col">
      <h1 className="text-5xl sm:text-7xl">18°</h1>
      <p className="text-[30px] font-semibold">Stormy</p>
      <p className="text-white/50">With partly cloudy</p>
      <div className="mt-2">
        <span className="mr-3 dark:bg-white/20 bg-white/50 px-4 py-0 rounded-full">
          H 29°
        </span>
        <span className=" dark:bg-white/20 bg-white/50 px-4 py-0 rounded-full">
          L 12°
        </span>
      </div>
    </section>
  );
};
