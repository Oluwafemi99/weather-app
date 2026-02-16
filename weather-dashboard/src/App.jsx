import { useState } from 'react'
import './App.css'
import WeatherDashboard from './components/WeatherDashboard'

function App() {
  return (
		<div className="min-h-screen min-w-full bg-[url('/images/omar-ramadan-vcRHpfrsaL8-unsplash.jpg')] bg-cover bg-center items-center px-4 py-10 rounded-2xl">
			{/* Page Title */}
			<h1 className="text-5xl font-bold text-blue-100 mb-3 text-center font-serif">
				Weather Dashboard
			</h1>
			<h3 className="text-blue-50 mb-5 font-medium">
				Get Accurate Weather Forecasts For Any City Worldwide
			</h3>

			{/* Main Dashboard component */}
			<WeatherDashboard />
		</div>
	);
}

export default App
