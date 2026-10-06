import { describe, it, expect } from "vitest";
import { getWeatherCondition } from "../utils/weatherCondition";

describe("Test suite: getWeatherCondition utility function", () => {
  it("returns correct weather conditons for given weather codes during the day", () => {
    const day1 = getWeatherCondition(0, 1);
    const day2 = getWeatherCondition(1, 1);
    const day3 = getWeatherCondition(55, 1);
    const day4 = getWeatherCondition(61, 1);

    expect(day1).toEqual({
      main: "Sunny",
      sub: "With clear skies",
      icon: "sun.svg",
    });
    expect(day2).toEqual({
      main: "Mainly Clear",
      sub: "with light sunshine",
      icon: "sun.svg",
    });
    expect(day3).toEqual({
      main: "Drizzle",
      sub: "With light droplets",
      icon: "cloud-drizzle.svg",
    });
    expect(day4).toEqual({
      main: "Rainy",
      sub: "With moderate rainfall",
      icon: "cloud-showers-heavy.svg",
    });
  });

  it("returns correct weather conditons for given weather codes during the night", () => {
    const night1 = getWeatherCondition(95, 0);
    const night2 = getWeatherCondition(99, 0);
    const night3 = getWeatherCondition(77, 0);
    const night4 = getWeatherCondition(48, 0);

    expect(night1).toEqual({
      main: "Stormy",
      sub: "With partly cloudy",
      icon: "thunderstorm.svg",
    });
    expect(night2).toEqual({
      main: "Thunderstorm",
      sub: "With heavy hail",
      icon: "thunderstorm.svg",
    });
    expect(night3).toEqual({
      main: "Snowy",
      sub: "With snow flurries",
      icon: "snowflakes.svg",
    });
    expect(night4).toEqual({
        main: "Foggy",
        sub: "With low visibility",
        icon: "smog.svg",
      });
  });
});
