import { Header } from "./components/Header";
import { HeroWeatherCard } from "./components/HeroWeatherCard";
import { HourlyForecast } from "./components/HourlyForecast";
import { WeeklyForecast } from "./components/WeeklyForecast";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="min-[690px]:flex min-[690px]:items-center min-[690px]:justify-center">
        <div>
          <HeroWeatherCard />
          <HourlyForecast />
          <WeeklyForecast />
        </div>
        {/* ├── HeroWeatherCard.jsx
        ├── HourlyForecast.jsx
        ├── WeeklyForecast.jsx
        ├── LiveConditionsCard.jsx
        ├── RecentSearches.jsx
        └── WindMapCard.jsx */}
      </div>
    </>
  );
}

export default App;
