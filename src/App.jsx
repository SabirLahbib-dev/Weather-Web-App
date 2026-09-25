import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import { HeroWeatherCard } from "./components/HeroWeatherCard";
import { HourlyForecast } from "./components/HourlyForecast";
import { WeeklyForecast } from "./components/WeeklyForecast";
import { LiveConditionsCard } from "./components/LiveConditionsCard";
import { WindMapCard } from "./components/WindMapCard";
import "./App.css";

function App() {
  // is loading state
  const [isLoading, setIsLoading] = useState(true);

  // state for location
  const [location, setLocation] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("location")) || {
        id: 2561668,
        name: "Agadir",
        latitude: 30.42018,
        longitude: -9.59815,
        elevation: 31.0,
        feature_code: "PPLA",
        country_code: "MA",
        admin1_id: 11281882,
        admin2_id: 2561655,
        admin3_id: 6545515,
        timezone: "Africa/Casablanca",
        population: 698310,
        country_id: 2542007,
        country: "Morocco",
        admin1: "Souss-Massa",
        admin2: "Agadir-Ida-ou-Tnan",
        admin3: "Agadir",
      }
    );
  });

  // save location in localStorage
  useEffect(() => {
    localStorage.setItem("location", JSON.stringify(location));
  }, [location]);

  //state for current location data
  const [currentLocationData, setCurrentLocationData] = useState({});

  useEffect(() => {
    // Guard close
    if (!location?.latitude || !location?.longitude) {
      return;
    }

    const loadWeatherData = async () => {
      try {
        const res = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,weather_code,is_day,wind_speed_10m,wind_gusts_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_hours=24`,
        );

        setCurrentLocationData(res.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Fetch weather error:", err);
      }
    };

    loadWeatherData();

    const timer = setInterval(
      () => {
        loadWeatherData();
      },
      30 * 60 * 1000,
    );

    return () => clearInterval(timer);
  }, [location]);

  return (
    <>
      <Header
        location={location}
        setLocation={setLocation}
        currentLocationData={currentLocationData}
      />
      <main className="mx-auto flex w-full max-w-3xl min-w-0 flex-col items-center gap-4 px-2 pb-4 sm:px-4 lg:max-w-6xl lg:flex-row lg:items-start lg:px-6">
        <div className="flex min-w-0 w-full flex-col gap-2 lg:w-2/3">
          <HeroWeatherCard
            currentLocationData={currentLocationData}
            isLoading={isLoading}
          />
          <HourlyForecast
            currentLocationData={currentLocationData}
            isLoading={isLoading}
          />
          <WeeklyForecast
            currentLocationData={currentLocationData}
            isLoading={isLoading}
          />
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
