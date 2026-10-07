import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Header } from "../components/Header";

describe("Test suite: search component", () => {
  it("should fetch suggestions when user types and handle selection", async () => {
    vi.spyOn(axios, "get").mockResolvedValue({
      data: {
        results: [
          {
            id: 2561668,
            name: "Agadir",
            country: "Morocco",
            admin1: "Souss-Massa",
          },
        ],
      },
    });

    const user = userEvent.setup();
    const location = {
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
    };

    const setLocation = vi.fn();
    const currentLocationData = {};

    render(
      <Header
        setLocation={setLocation}
        location={location}
        currentLocationData={currentLocationData}
      />,
    );

    const searchInput = screen.getByTestId("search-input");

    await user.type(searchInput, "Agadir");
    const searchDropdownItem = await screen.findByTestId(
      "search-dropdown-item",
    );
    await user.click(searchDropdownItem);
    expect(setLocation).toHaveBeenCalledWith({
      id: 2561668,
      name: "Agadir",
      country: "Morocco",
      admin1: "Souss-Massa",
    });
    expect(screen.getByTestId("search-dropdown")).toHaveTextContent("Agadir");
    expect(screen.getByTestId("search-dropdown")).toHaveTextContent("Morocco");
    expect(searchInput.value).toBe("");
  });
});
