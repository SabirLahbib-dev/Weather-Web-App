import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import locationIcon from "../assets/icons/location-icon.png";
import searchIcon from "../assets/icons/search-icon.png";
import nightModeIcon from "../assets/icons/night-mode.svg";
import lightModeIcon from "../assets/icons/light-mode.svg";

export const Header = ({ setLocation, location, currentLocationData }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

  // search
  const [search, setSearch] = useState("");

  // location suggestions for the user while typing
  const [suggestions, setSuggestions] = useState([]);

  // managing dark/light mode
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // load suggestions
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!search.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(search)}&count=5&language=en&format=json`,
        );
        setSuggestions(res.data);
      } catch (err) {
        console.error("Geocoding error:", err);
      }
    }, 300); // Wait 300ms after user stops typing

    return () => clearTimeout(timer); // Cleanup
  }, [search]);

  return (
    <>
      <header className="flex items-center justify-between py-3 px-3 sm:px-6 relative z-50">
        {/* Location Header */}
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <img
            src={locationIcon}
            width={25}
            alt="location"
            className="shrink-0 dark:invert-0 invert transition-all"
          />
          <div className="min-w-0">
            <p
              className="truncate dark:text-white font-semibold text-black text-[clamp(14px,2vw,20px)]"
              data-testid="location-name"
            >
              {location.name}{" "}
              {location?.admin1
                ? ` • ${location.admin1}`
                : location?.timezone
                  ? ` • ${location.timezone}`
                  : ""}
            </p>
            <p className="truncate dark:text-gray-400 text-gray-700 font-medium text-[clamp(12px,1.5vw,14px)]">
              {dayjs(currentLocationData?.current?.time).format(
                "dddd, MMMM DD",
              )}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            className="dark:glass dark:glass-hover p-3 shrink-0 rounded-full glass-light glass-light-hover cursor-pointer size-10"
            onClick={() => setIsSearchbarOpen(true)}
          >
            <img
              src={searchIcon}
              width={15}
              alt="search"
              className="dark:invert shrink-0 w-4 h-4"
            />
          </button>

          <button
            className="transition-all flex items-center justify-center dark:glass dark:glass-hover p-[9px] rounded-full glass-light glass-light-hover cursor-pointer shrink-0 size-10"
            onClick={() => setIsDarkMode((current) => !current)}
          >
            <img
              src={isDarkMode ? lightModeIcon : nightModeIcon}
              width={22}
              alt="theme toggle"
            />
          </button>
        </div>

        {/* Search Modal Container */}
        <div
          className={`h-fit fixed top-16 left-0 gap-0 right-0 flex flex-col items-center justify-center shrink-0 z-50  ${
            isSearchbarOpen ? "display-initial" : "display-hidden"
          }`}
        >
          {/* Search Bar Input */}
          <div
            className={`flex min-w-0 items-center gap-3 w-[90%] max-w-[700px] rounded-t-lg dark:glass glass-light py-4 px-3 sm:w-[80%] sm:gap-4 sm:px-4 border-b-0 dark:bg-black/30 ${!suggestions.results && "rounded-b-lg"}`}
          >
            <img
              src={searchIcon}
              width={18}
              alt="search icon"
              className="dark:invert invert-0 shrink-0"
            />
            <input
              type="text"
              name="search-input"
              data-testid="search-input"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search country..."
              className="outline-none h-full w-full bg-transparent dark:text-white text-slate-800 placeholder-gray-500 min-w-0"
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setIsSearchbarOpen(false);
                }
              }}
            />
            <button
              className="shrink-0 rounded-md border px-2 text-sm text-center dark:border-white/10 border-gray-400"
              onClick={() => {
                setIsSearchbarOpen(false);
              }}
            >
              esc
            </button>
          </div>

          {/* Search Dropdown Results */}
          {suggestions.results ? (
            <div className="dark:glass glass-light w-[90%] max-w-[700px] rounded-b-lg border border-t-1 border-gray-400/50 cursor-pointer max-h-60 overflow-y-auto scrollbar-none sm:w-[80%] dark:bg-black/30" data-testid="search-dropdown">
              {suggestions.results.map((sug) => {
                return (
                  <div
                    key={sug.id}
                    data-testid="search-dropdown-item"
                    onClick={() => {
                      setLocation(sug);
                      setSearch("");
                      setIsSearchbarOpen(false);
                    }}
                    className="flex justify-between items-center py-4 px-4 border-b-[0.5px] dark:border-gray-600 dark:hover:bg-white/5 border-gray-300 hover:bg-black/5 transition-all dark:text-white text-slate-800 min-w-0"
                  >
                    <div>
                      <p>{sug.name}</p>
                      <p className="text-sm text-slate-400">{sug.country}</p>
                    </div>
                    <p className="text-sm truncate">
                      {sug.admin1 ? sug.admin1 : sug.timezone}
                      {sug.admin2 ? ` - ${sug.admin2}` : ""}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
};
