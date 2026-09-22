import { Header } from "./components/Header";
import { HeroWeatherCard } from "./components/HeroWeatherCard";
import { HourlyForecast } from "./components/HourlyForecast";
import { WeeklyForecast } from "./components/WeeklyForecast";
import { LiveConditionsCard } from "./components/LiveConditionsCard";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="min-[690px]:flex min-[690px]:items-center min-[690px]:justify-center flex flex-col w-full max-w-6xl max-auto min-[690px]min-w-0 min-w-0">
        <div>
          <HeroWeatherCard />
          <HourlyForecast />
          <WeeklyForecast />
        </div>
        <div>
          <LiveConditionsCard />
        </div>
      </div>
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
