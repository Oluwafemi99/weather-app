const WeeklyForecast = ({ forecast, theme }) => {
	if (!forecast) return null;

	return (
		<div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 ml-42`}>
			{forecast.map((day) => (
				<div
					key={day.date}
					className={`p-3 rounded-xl shadow-md text-center ${
						theme === "dark"
							? "bg-gray-700 text-white"
							: "bg-blue-200 text-black"
					}`}
				>
					<p className="font-bold">
						{new Date(day.date).toLocaleDateString("en-US", {
							weekday: "short",
						})}
					</p>
					<img
						src={day.day.condition.icon}
						alt={day.day.condition.text}
						className="mx-auto"
					/>
					<p>High: {day.day.maxtemp_c}°C</p>
					<p>Low: {day.day.mintemp_c}°C</p>
					<p>{day.day.condition.text}</p>
				</div>
			))}
		</div>
	);
};
export default WeeklyForecast;
