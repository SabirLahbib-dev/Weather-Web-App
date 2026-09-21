export const HeroWeatherCard = () => {
  return (
    <section className="dark:glass glass-light m-2 rounded-lg p-3">
      <h1 className="text-[70px]">18°</h1>
      <p className="text-[30px] font-semibold">Stormy</p>
      <p className="">With partly cloudy</p>
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
