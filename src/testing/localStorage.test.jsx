import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Test suite: LocalStorage Location Persistence", () => {
  beforeEach(() => {
    vi.restoreAllMocks(); // Restore all mocks before each test
    localStorage.clear();
  });
  it("should load initial location from localStorage if available", () => {
    vi.spyOn(Storage.prototype, "getItem").mockReturnValue(
      JSON.stringify({
        id: 2538475,
        name: "Rabat",
        latitude: 34.01325,
        longitude: -6.83255,
        elevation: 46.0,
        feature_code: "PPLC",
        country_code: "MA",
        admin1_id: 11281877,
        admin2_id: 2538474,
        timezone: "Africa/Casablanca",
        population: 1655753,
        country_id: 2542007,
        country: "Morocco",
        admin1: "Rabat-Salé-Kénitra",
        admin2: "Rabat",
      }),
    );

    render(<App />);
    expect(localStorage.getItem).toHaveBeenCalledWith("location");
    expect(screen.getByTestId("location-name")).toHaveTextContent(
      "Rabat • Rabat-Salé-Kénitra",
    );
  });

  it("should save new location to localStorage when selected", () => {
    vi.spyOn(Storage.prototype, "setItem");
    localStorage.setItem(
      "location",
      JSON.stringify({
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
      }),
    );

    render(<App />);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "location",
      expect.any(String),
    );
    expect(screen.getByTestId("location-name")).toHaveTextContent(
      "Agadir • Souss-Massa",
    );
  });
});
