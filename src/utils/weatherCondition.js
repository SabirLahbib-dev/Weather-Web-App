export const getWeatherCondition = (code, isDay = 1) => {
  const isNight = isDay === 0;

  switch (code) {
    // 0: Clear Sky
    case 0:
      return {
        main: isNight ? "Clear night" : "Sunny",
        sub: "With clear skies",
        icon: isNight ? "moon.svg" : "sun.svg",
      };

    // 1: Mainly Clear
    case 1:
      return {
        main: "Mainly Clear",
        sub: isNight ? "With clear night skies" : "with light sunshine",
        icon: isNight ? "moon.svg" : "sun.svg",
      };

    // 2: Partly Cloudy
    case 2:
      return {
        main: "Partly Cloudy",
        sub: "With light clouds",
        icon: isNight ? "clouds-moon.svg" : "cloud-sun.svg",
      };

    // 3: Overcast
    case 3:
      return {
        main: "Overcast",
        sub: "With dense cloud cover",
        icon: "cloud.svg",
      };

    // 45, 48: Fog
    case 45:
    case 48:
      return {
        main: "Foggy",
        sub: "With low visibility",
        icon: "smog.svg",
      };

    // 51, 53, 55, 56, 57: Drizzle
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return {
        main: "Drizzle",
        sub: "With light droplets",
        icon: "cloud-drizzle.svg",
      };

    // 61, 63, 65, 66, 67: Rain
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return {
        main: "Rainy",
        sub: "With moderate rainfall",
        status: "rain",
        icon: "cloud-showers-heavy.svg",
      };

    // 80, 81, 82: Rain Showers
    case 80:
    case 81:
    case 82:
      return {
        main: "Showers",
        sub: "With passing rain",
        status: "rain",
        icon: "cloud-showers-heavy.svg",
      };

    // 71, 73, 75, 77, 85, 86: Snow
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return {
        main: "Snowy",
        sub: "With snow flurries",
        status: "snow",
        icon: "snowflakes.svg",
      };

    // 95: Thunderstorm (The exact match for your screenshot)
    case 95:
      return {
        main: "Stormy",
        sub: "With partly cloudy",
        status: "stormy",
        icon: "thunderstorm.svg",
      };

    // 96, 99: Severe Thunderstorm
    case 96:
    case 99:
      return {
        main: "Thunderstorm",
        sub: "With heavy hail",
        status: "stormy",
        icon: "thunderstorm.svg",
      };

    default:
      return {
        main: "Unknown",
        sub: "With variable weather",
        status: "unknown",
        icon: "sun.svg",
      };
  }
};
