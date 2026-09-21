import { Header } from "./components/Header";
import { HeroWeatherCard } from "./components/HeroWeatherCard";
import { HourlyForecast } from "./components/HourlyForecast";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div>
        <div>
          <HeroWeatherCard />
          <HourlyForecast />
        </div>
      </div>
    </>
  );
}

export default App;
