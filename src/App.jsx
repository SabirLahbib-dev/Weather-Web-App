import { Header } from "./components/Header";
import { HeroWeatherCard } from "./components/HeroWeatherCard";
import { HourlyForecast } from "./components/HourlyForecast";
import { WeeklyForecast } from "./components/WeeklyForecast";
import { LiveConditionsCard } from "./components/LiveConditionsCard";
import { WindMapCard } from "./components/WindMapCard";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-3xl min-w-0 flex-col items-center gap-4 px-2 pb-4 sm:px-4 lg:max-w-6xl lg:flex-row lg:items-start lg:px-6">
        <div className="flex min-w-0 w-full flex-col gap-2 lg:w-2/3">
          <HeroWeatherCard />
          <HourlyForecast />
          <WeeklyForecast />
        </div>
        <div className="flex flex-col gap-2 min-w-0 w-full  lg:w-1/3">
          <LiveConditionsCard />
          <WindMapCard />
        </div>
      </main>
    </>
  );
}

export default App;

{
  /* ├── HeroWeatherCard.jsx
        ├── HourlyForecast.jsx
        ├── WeeklyForecast.jsx
        ├── LiveConditionsCard.jsx
        ├── RecentSearches.jsx
        └── WindMapCard.jsx */
}
