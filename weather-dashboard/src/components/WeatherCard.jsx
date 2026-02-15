import React from "react";

const WeatherCard = ({ weather }) => {
	return (
		<div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center mb-6">
			{/* City Name */}
			<h2 className="text-2xl font-bold mb-2">{weather.name}</h2>

			{/* Weather Icon */}
			<img
				src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
				alt={weather.weather[0].description}
				className="mx-auto"
			/>

			{/* Weather Description */}
			<p className="text-xl font-semibold mb-2">{weather.weather[0].main}</p>

			{/* Weather Details */}
			<p>Temperature: {weather.main.temp} °C</p>
			<p>Humidity: {weather.main.humidity} %</p>
			<p>Wind Speed: {weather.wind.speed} m/s</p>
		</div>
	);
};

export default WeatherCard;
