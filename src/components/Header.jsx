import { useState, useEffect } from "react";
import locationIcon from "../assets/icons/location-icon.png";
import searchIcon from "../assets/icons/search-icon.png";
import nightModeIcon from "../assets/icons/night-mode.svg";
import lightModeIcon from "../assets/icons/light-mode.svg";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <header className="flex items-center justify-between py-3 px-3 sm:px-6 relative z-50">
        {/* Location Header */}
        <div className="flex gap-2 items-center min-w-0 shrink-0 truncate">
          <img
            src={locationIcon}
            width={25}
            alt="location"
            className="dark:invert-0 invert transition-all"
          />
          <div>
            <p className="dark:text-white font-semibold text-black text-[clamp(14px,2vw,16px)]">
              Brooklyn, New York, USA
            </p>
            <p className="dark:text-gray-400 text-gray-700 font-medium text-[clamp(12px,1.5vw,14px)]">
              Friday, January 4
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
          <div className="flex items-center gap-4 w-[90%] sm:w-[80%] max-w-[700px]  rounded-t-lg dark:glass glass-light py-4 px-4 border-b-0 dark:bg-black/30">
            <img
              src={searchIcon}
              width={18}
              alt="search icon"
              className="dark:invert invert-0 shrink-0"
            />
            <input
              type="text"
              name="countries"
              placeholder="Search country..."
              className="outline-none h-full w-full bg-transparent dark:text-white text-slate-800 placeholder-gray-500 min-w-0"
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setIsSearchbarOpen(false);
                }
              }}
            />
            <button
              className="border dark:border-white/10 border-gray-400 px-1 rounded-md pb-1 px-2"
              onClick={() => {
                setIsSearchbarOpen(false);
              }}
            >
              esc
            </button>
          </div>

          {/* Search Dropdown Results */}
          <div className="dark:glass glass-light h-fit w-[88%] max-w-[700px] rounded-b-lg border border-t-1 border-gray-400/50 cursor-pointer max-h-60 overflow-y-auto w-[90%] sm:w-[80%] dark:bg-black/30">
            <p className="flex items-center py-4 px-4 border-b-[0.5px] dark:border-gray-600 dark:hover:bg-white/5 border-gray-300 hover:bg-black/5 transition-all dark:text-white text-slate-800">
              Morocco
            </p>
            <p className="flex items-center py-4 px-4 border-b-[0.5px] dark:border-gray-600 dark:hover:bg-white/5 border-gray-300 hover:bg-black/5 transition-all dark:text-white text-slate-800">
              Spain
            </p>
            <p className="flex items-center py-4 px-4 border-b-[0.5px] dark:border-gray-600 dark:hover:bg-white/5 border-gray-300 hover:bg-black/5 transition-all dark:text-white text-slate-800">
              United Kingdom
            </p>
          </div>
        </div>
      </header>
    </>
  );
};
