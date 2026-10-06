// diffrence label
export const getDiffrenceLabel = (apparentTemp, actualTemp) => {
  if (apparentTemp > actualTemp) return "↑ Warmer";
  if (apparentTemp < actualTemp) return "↓ Cooler";
  return "Equal";
};

// Dynamic status badge
export const getHumidityLevel = (humidity) => {
  if (humidity < 30) return "Dry";
  if (humidity >= 30 && humidity <= 60) return "Moderate";
  return "Humid";
};

// Wind status badge
export const getWindStatus = (windSpeed) => {
  if (windSpeed < 2) return "Calm";
  if (windSpeed <= 5) return "Light Air";
  if (windSpeed <= 11) return "Light Breeze";
  if (windSpeed <= 19) return "Gentle Breeze";
  if (windSpeed <= 28) return "Moderate Breeze";
  if (windSpeed <= 38) return "Fresh Breeze";
  if (windSpeed <= 49) return "Strong Breeze";
  if (windSpeed <= 61) return "High Wind";
  if (windSpeed <= 74) return "Gale";
  if (windSpeed >= 75) return "Strong Storm";
  return "Unknown";
};

// Beaufort Scale
export const getBeaufortScale = (windSpeed) => {
  if (windSpeed < 2) return "Force 0";
  if (windSpeed <= 5) return "Force 1";
  if (windSpeed <= 11) return "Force 2";
  if (windSpeed <= 19) return "Force 3";
  if (windSpeed <= 28) return "Force 4";
  if (windSpeed <= 38) return "Force 5";
  if (windSpeed <= 49) return "Force 6";
  if (windSpeed <= 61) return "Force 7";
  if (windSpeed <= 74) return "Force 8";
  if (windSpeed <= 88) return "Force 9";
  if (windSpeed <= 102) return "Force 10";
  if (windSpeed <= 117) return "Force 11";
  if (windSpeed >= 118) return "Force 12";
};

// get direction
export const getWindcompassLabel = (degree) => {
  if (typeof degree !== "number") return "N";

  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  //
  const index = Math.floor(((degree + 11.25) % 360) / 22.5);

  return directions[index];
};
