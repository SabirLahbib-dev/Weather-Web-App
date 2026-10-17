# Weather Web App

A responsive weather dashboard built with React and Vite that helps users check the current conditions, hourly trends, and 7-day forecast for a selected location.

## Overview

Weather Web App provides a clean, mobile-friendly interface for viewing live weather data from the Open-Meteo API. Users can:

- Search for a city or place
- View the current temperature, humidity, wind, and apparent temperature
- Explore hourly forecast data for the next 24 hours
- Review daily weather summaries for the upcoming week
- Keep the last selected location saved in browser storage

## Features

- Responsive dashboard layout for desktop and mobile
- Search-driven location selection with persisted preferences
- Live weather metrics and conditions
- Hourly temperature and weather trend cards
- Weekly forecast summary
- Wind and conditions visualization cards
- No API key required for local weather data access via Open-Meteo

## Tech Stack

- React 19
- Vite
- JavaScript
- Axios for API requests
- Open-Meteo API
- Tailwind CSS
- Vitest + Testing Library for tests

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, typically:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
  components/      UI cards and forecast sections
  utils/           helper functions and weather mapping logic
  App.jsx          main weather dashboard layout
  App.css          styling for the app
  main.jsx         app entry point
public/            static assets and favicon
```

## Testing

This project includes unit and UI tests covering weather logic and dashboard behavior.

```bash
npx vitest run
```

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

## Attribution

Weather data is provided by [Open-Meteo](https://open-meteo.com/), and icons/assets are used to support the weather experience.
