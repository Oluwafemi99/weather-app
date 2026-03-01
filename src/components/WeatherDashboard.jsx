import React, { useState, useEffect } from "react";
import axios from "axios"; // Axios for API requests
import SearchBar from "./SearchBar.jsx";
import WeatherCard from "./WeatherCard"
import ErrorMessage from "./ErrorMessage.jsx";
import WeeklyForecast from "./WeeklyForecast.jsx";
// import ErrorMessage from "./components/ErrorMessage";

// Replace with your OpenWeatherMap API key
const API_KEY = "c63d92a9aa6747a68c9124737261502";

const WeatherDashboard = ({theme}) => {
	// State to store current city
	const [city, setCity] = useState("Lagos");

	// State to store fetched weather data
	const [weather, setWeather] = useState(null);

	// State to store any error messages
    const [error, setError] = useState("");
    
	// Loading state
	const [loading, setLoading] = useState(false);

	const [recentSearches, setRecentSearches] = useState([]);

	/**
	 * Function to fetch weather data using Axios
	 * @param {string} searchCity - Name of the city to fetch weather for
	 */
	const fetchWeather = async (searchCity) => {
		try {
			setLoading(true);
			setError(""); // Reset previous errors

			const res = await axios.get(
				"https://api.weatherapi.com/v1/forecast.json",
				{
					params: {
						key: API_KEY,
						q: searchCity,
						days: 7,
					},
				},
			);

			setWeather(res.data); // Save API response
		} catch (err) {
			// Handle different error cases
			if (err.response) {
				// API returned an error (e.g., city not found)
				setError(err.response.data.message);
			} else if (err.request) {
				// Network issues
				setError("Network error. Please try again.");
			} else {
				// Other unexpected errors
				setError("An unexpected error occurred.");
			}
			setWeather(null); // Clear prev weather
		} finally {
			setLoading(false); // Stop Loading
		}
	};

	useEffect(() => {
		const stored = JSON.parse(localStorage.getItem("recentCities"));
		if (stored) {
			setRecentSearches(stored);
		}
	}, []);

	// Auto-Refresh: fetch every 5 minutes
	useEffect(() => {
		fetchWeather(city); // Fetch once on mount

		const interval = setInterval(
			() => {
				fetchWeather(city);
			},
			5 * 60 * 1000,
		); // 5 minutes in milliseconds

		// Cleanup interval on unmount
		return () => clearInterval(interval);
	}, [city]);


	/**
	 * Handles search submitted from SearchBar
	 * @param {string} searchCity - City name input
	 */
	const handleSearch = (searchCity) => {
		setCity(searchCity);
		fetchWeather(searchCity);

		let updatedSearches = [
			searchCity,
			...recentSearches.filter((city) => city !== searchCity),
		].slice(0, 5);

		setRecentSearches(updatedSearches);
		localStorage.setItem("recentCities", JSON.stringify(updatedSearches));
	};
	// Manual refresh
	const handleRefresh = () => {
		fetchWeather(city);
	};

	return (
		<div className="w-full flex flex-col items-center">
			{/* Search input */}
			<SearchBar onSearch={handleSearch} />

			{/* Refresh Button */}
			<button
				onClick={handleRefresh}
				className="text-indigo-800 border-2 border-white mb-5 h-10 w-50 font-bold text-2xl rounded-2xl bg-white opacity-60 transition-all hover:scale-105 ease-in-out hover:translate-y-1 duration-700 focus:outline-none focus:ring-2 focus:ring-blue-400 font-sans"
			>
				Refresh Weather
			</button>

			{weather && (
				<>
					<WeatherCard
						weather={weather}
						theme={theme}
					/>
				</>
			)}
			{recentSearches.length > 0 && (
				<div className="mb-4 text-center">
					<h4 className="font-bold">Recent Searches:</h4>
					<div className="flex gap-5 mt-5 flex-wrap justify-center">
						{recentSearches.map((city, index) => (
							<button
								key={index}
								onClick={() => handleSearch(city)}
								className="px-3 py-1 rounded-lg text-white capitalize bg-amber-700 transform transition-all hover:scale-105 ease-in-out hover:translate-y-1 duration-700"
							>
								{city}
							</button>
						))}
					</div>
				</div>
			)}

			{/* Show error if exists */}
			{error && <ErrorMessage message={error} />}

			{/* Show weather card if data is available */}
			{weather && (
				<>
					<WeeklyForecast
						forecast={weather.forecast.forecastday}
						theme={theme}
					/>
				</>
			)}
		</div>
	);
};;;;

export default WeatherDashboard;
