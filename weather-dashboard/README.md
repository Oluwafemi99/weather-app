# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




weather-dashboard/
├─ src/
│  ├─ components/
│  │  ├─ SearchBar.jsx       # Search input component
│  │  ├─ WeatherCard.jsx     # Card to display weather info
│  │  └─ ErrorMessage.jsx    # Display error messages
│  ├─ WeatherDashboard.jsx   # Main logic for fetching & managing weather data
│  ├─ App.jsx                # Main layout and container
│  └─ main.jsx               # React DOM entry point
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md



⚙️ Features

Search for a city to see current weather conditions.

Displays temperature, humidity, wind speed, and weather condition.

Shows weather icons from OpenWeatherMap for visual clarity.

Responsive UI built with TailwindCSS for mobile, tablet, and desktop.

Proper error handling for invalid city names or network issues.

Reusable components for cleaner code and better scalability.

🛠 Tech Stack

React JS – Frontend library for building interactive UIs.

Vite – Fast development build tool.

TailwindCSS – Utility-first CSS framework for styling.

Axios – HTTP client for fetching weather data.

OpenWeatherMap API – Source for live weather data.

🚀 Getting Started
1. Clone the repository
git clone https://github.com/oluwafemi99/weather-dashboard.git
cd weather-dashboard

2. Install dependencies
npm install

3. Configure OpenWeatherMap API Key

Sign up for an API key at OpenWeatherMap
.

Open WeatherDashboard.jsx and replace:

const API_KEY = "YOUR_API_KEY_HERE";


with your actual API key.

4. Run the development server
npm run dev


Open your browser at http://localhost:5173 (default Vite port) to see the app.

5. Build for production
npm run build


The dist folder will contain your optimized production build.

📱 Responsive Design

Mobile-first design using TailwindCSS.

Grid and card layouts adjust automatically for tablet and desktop screens.

Inputs and buttons resize for smaller screens.

⚡ Optional Features (Future Enhancements)

Auto-refresh weather data every 5 minutes.

Save recent searches in local storage.

Light/Dark mode toggle.

7-day weather forecast using OpenWeatherMap One Call API.

Geolocation support to detect user’s current city.