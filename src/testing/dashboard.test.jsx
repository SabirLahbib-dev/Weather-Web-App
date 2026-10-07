import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import App from "../App";

describe("Test suite: Dashboard Integration Flow", () => {
  it("renders loading state initially and then displays all weather cards", async () => {
    vi.spyOn(axios, "get").mockResolvedValue({
      data: {
        latitude: 30.419516,
        longitude: -9.592094,
        generationtime_ms: 0.3668069839477539,
        utc_offset_seconds: 3600,
        timezone: "Africa/Casablanca",
        timezone_abbreviation: "GMT+1",
        elevation: 35.0,
        current_units: {
          time: "iso8601",
          interval: "seconds",
          temperature_2m: "°C",
          relative_humidity_2m: "%",
          apparent_temperature: "°C",
          is_day: "",
          weather_code: "wmo code",
          surface_pressure: "hPa",
          wind_speed_10m: "km/h",
          wind_direction_10m: "°",
          wind_gusts_10m: "km/h",
        },
        current: {
          time: "2026-10-07T21:00",
          interval: 900,
          temperature_2m: 20.3,
          relative_humidity_2m: 90,
          apparent_temperature: 22.8,
          is_day: 0,
          weather_code: 2,
          surface_pressure: 1011.5,
          wind_speed_10m: 4.5,
          wind_direction_10m: 104,
          wind_gusts_10m: 10.1,
        },
        hourly_units: {
          time: "iso8601",
          temperature_2m: "°C",
          weather_code: "wmo code",
          is_day: "",
          wind_speed_10m: "km/h",
          wind_gusts_10m: "km/h",
        },
        hourly: {
          time: [
            "2026-10-07T21:00",
            "2026-10-07T22:00",
            "2026-10-07T23:00",
            "2026-10-08T00:00",
            "2026-10-08T01:00",
            "2026-10-08T02:00",
            "2026-10-08T03:00",
            "2026-10-08T04:00",
            "2026-10-08T05:00",
            "2026-10-08T06:00",
            "2026-10-08T07:00",
            "2026-10-08T08:00",
            "2026-10-08T09:00",
            "2026-10-08T10:00",
            "2026-10-08T11:00",
            "2026-10-08T12:00",
            "2026-10-08T13:00",
            "2026-10-08T14:00",
            "2026-10-08T15:00",
            "2026-10-08T16:00",
            "2026-10-08T17:00",
            "2026-10-08T18:00",
            "2026-10-08T19:00",
            "2026-10-08T20:00",
          ],
          temperature_2m: [
            20.3, 20.1, 20.1, 20.3, 20.3, 20.2, 20.2, 20.1, 19.7, 19.4, 19.1,
            18.9, 20.4, 21.8, 23.3, 24.5, 23.7, 24.0, 23.9, 23.5, 23.6, 23.2,
            22.1, 20.8,
          ],
          weather_code: [
            2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0,
            0,
          ],
          is_day: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            0,
          ],
          wind_speed_10m: [
            4.5, 7.4, 9.1, 9.6, 10.8, 10.6, 9.3, 7.7, 6.4, 5.2, 4.3, 4.3, 5.0,
            6.6, 5.7, 7.1, 11.6, 13.5, 15.2, 15.5, 14.3, 13.5, 11.7, 9.1,
          ],
          wind_gusts_10m: [
            10.1, 19.1, 22.3, 23.0, 26.3, 26.3, 25.6, 22.3, 18.0, 14.4, 13.0,
            10.8, 13.7, 18.4, 18.0, 20.2, 31.3, 35.6, 38.9, 39.2, 39.2, 38.2,
            34.9, 30.6,
          ],
        },
        daily_units: {
          time: "iso8601",
          weather_code: "wmo code",
          temperature_2m_max: "°C",
          temperature_2m_min: "°C",
        },
        daily: {
          time: [
            "2026-10-07",
            "2026-10-08",
            "2026-10-09",
            "2026-10-10",
            "2026-10-11",
            "2026-10-12",
            "2026-10-13",
          ],
          weather_code: [45, 45, 45, 45, 2, 2, 2],
          temperature_2m_max: [26.3, 24.5, 22.9, 23.4, 23.7, 28.9, 33.0],
          temperature_2m_min: [20.1, 18.0, 18.1, 17.2, 18.1, 17.2, 21.2],
        },
      },
    });

    render(<App />);

    expect(screen.getByTestId("heroWeather-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("hourlyForecast-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("weeklyForecast-skeleton")).toBeInTheDocument();
    expect(
      screen.getByTestId("liveConditionCard-skeleton"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("windMapCard-skeleton")).toBeInTheDocument();

    const [
      hero,
      hourlyForecast,
      weeklyForecast,
      liveConditionsCard,
      windMapCard,
    ] = await Promise.all([
      screen.findByTestId("hero-card"),
      screen.findByTestId("hourly-forecast"),
      screen.findByTestId("weekly-forecast"),
      screen.findByTestId("live-conditions-card"),
      screen.findByTestId("wind-map-card"),
    ]);

    expect(hero).toBeInTheDocument();
    expect(hourlyForecast).toBeInTheDocument();
    expect(weeklyForecast).toBeInTheDocument();
    expect(liveConditionsCard).toBeInTheDocument();
    expect(windMapCard).toBeInTheDocument();
    expect(
      screen.queryByTestId("heroWeather-skeleton"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("hourlyForecast-skeleton"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("weeklyForecast-skeleton"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("liveConditionCard-skeleton"),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("windMapCard-skeleton"),
    ).not.toBeInTheDocument();
  });
});
