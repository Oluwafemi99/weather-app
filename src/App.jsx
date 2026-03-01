import { useState, useEffect } from "react";
import "./App.css";
import WeatherDashboard from "./components/WeatherDashboard";

function App() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	return (
		<div
			className={`min-h-screen w-screen relative px-4 py-10 transition-all duration-500 ${
				theme === "dark"
					? "bg-[url('/images/ivan-ulamec-F-kdP4Hk7lg-unsplash.jpg')] bg-cover bg-center text-white"
					: "bg-[url('/images/omar-ramadan-vcRHpfrsaL8-unsplash.jpg')] bg-cover bg-center text-black"
			}`}
		>
			<button
				onClick={toggleTheme}
				className="absolute top-4 right-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:scale-105 transition"
			>
				Toggle Theme
			</button>

			<h1 className="text-5xl font-bold mb-3 text-center font-serif">
				Weather Dashboard
			</h1>

			<h3 className="mb-5 font-medium text-center">
				Get Accurate Weather Forecasts For Any City Worldwide
			</h3>

			<WeatherDashboard theme={ theme } />
		</div>
	);
}

export default App;
