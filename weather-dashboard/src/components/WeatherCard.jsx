import React from "react";

const WeatherCard = ({ weather }) => {
	if (!weather) return null; // Prevent crash before data loads

	return (
		<div className="bg-blue-200 p-6 rounded-3xl shadow-lg w-fit max-w-md text-center mb-10 text-blue-700 font-sans">
			{/* City Name */}
			<h2 className="text-2xl font-bold mb-4">{weather.location.name}</h2>

			{/* Weather Icon */}
			<img
				src={weather.current.condition.icon}
				alt={weather.current.condition.text}
				className="mx-auto"
			/>

			{/* Description */}
			<p className="text-xl font-semibold mb-2">
				{weather.current.condition.text}
			</p>

			{/* Details */}
			<div className="flex flex-col gap-1 text-indigo-700">
				<p>Temperature: {weather.current.temp_c} °C</p>
				<p>Humidity: {weather.current.humidity} %</p>
				<p>Wind Speed: {weather.current.wind_kph} kph</p>
				<p>Cloud: {weather.current.cloud}%</p>
				<p>Rain %: {weather.current.chance_of_rain}</p>
				<p>Visibility: {weather.current.vis_km}km</p>
				<p>Sunrise: {weather.current.sunrise}</p>
				<p>Sunset: {weather.current.sunset}</p>
			</div>
		</div>
	);
};

export default WeatherCard;
