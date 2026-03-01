import React from "react";

const WeatherCard = ({ weather, theme }) => {
	if (!weather) return null; // Prevent crash before data loads

	return (
		<div
			className={`p-4 rounded-3xl shadow-lg w-3/5 max-w-md text-center mb-10 font-sans transition-all transform duration-600 ease-in-out hover:scales-105 hover:translate-y-1.5 hover:shadow-2xl
			${theme === "dark" ? "bg-black opacity-50 text-white" : "bg-white opacity-60 bg-cover bg-center text-indigo-800"}`}
		>
			{/* City Name */}
			<h2 className="text-4xl font-bold mb-4 wrap-break-words ">
				{weather.location.name}
			</h2>

			{/* Weather Icon */}
			<img
				src={weather.current.condition.icon}
				alt={weather.current.condition.text}
				className="mx-auto w-28 hover:scale-130 transition duration-700 ease-in-out"
			/>

			{/* Description */}
			<p className="text-2xl font-bold mb-2">
				{weather.current.condition.text}
			</p>

			{/* Details */}
			<div className="flex flex-col gap-1 font-bold font-stretch-200%">
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
