import React, { useState, useEffect } from "react";
import axios from "axios"; // Axios for API requests
import SearchBar from "./SearchBar.jsx";
import WeatherCard from "./WeatherCard"
import ErrorMessage from "./ErrorMessage.jsx";
// import ErrorMessage from "./components/ErrorMessage";

// Replace with your OpenWeatherMap API key
const API_KEY = "c63d92a9aa6747a68c9124737261502";

const WeatherDashboard = () => {
	// State to store current city
	const [city, setCity] = useState("Lagos");

	// State to store fetched weather data
	const [weather, setWeather] = useState(null);

	// State to store any error messages
    const [error, setError] = useState("");
    
	// Loading state
	const [loading, setLoading] = useState(false);

	/**
	 * Function to fetch weather data using Axios
	 * @param {string} searchCity - Name of the city to fetch weather for
	 */
	const fetchWeather = async (searchCity) => {
		try {
			setLoading(true);
			setError(""); // Reset previous errors

			const res = await axios.get(
				"https://api.weatherapi.com/v1/current.json",
				{
					params: {
						key: API_KEY, //
						q: searchCity, // City name
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
			setWeather(null); // Clear previous weather
		} finally {
			setLoading(false); // Stop loading
		}
	};

	// Auto-refresh: fetch every 5 minutes
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
		setCity(searchCity); // Update current city
		fetchWeather(searchCity); // Fetch weather
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
				className="mb-4 bg-green-500 text-white px-4 py-2 rounded-lg transform transition-all hover:scale-105 hover:translate-y-0.5 duration-500 font-sans"
			>
				Refresh Weather
			</button>

			{/* Show error if exists */}
			{error && <ErrorMessage message={error} />}

			{/* Show weather card if data is available */}
			{weather && <WeatherCard weather={weather} />}
		</div>
	);
};;;;

export default WeatherDashboard;
