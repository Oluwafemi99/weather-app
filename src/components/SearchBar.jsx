import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
	const [input, setInput] = useState("");

	/**
	 * Handle form submission
	 * @param {Event} e
	 */
	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim() !== "") {
			onSearch(input); // Call parent function with input
			setInput(""); // Clear input
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="mb-10 w-full max-w-md"
		>
			{/* City input */}
			<label
				className="text-4xl font-bold text-center"
				htmlFor="city"
			>
				Search Location
			</label>
			<div className="flex gap-5 mt-3">
				<input
					id="city"
					name="city"
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder=" 🔍Enter city name"
					className="flex-1 p-3 rounded-lg border border-blue-500 bg-white opacity-55 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg text-indigo-800"
				/>
				{/* Submit button */}
				<button
					type="submit"
					className="m-auto bg-white opacity-70 font-bold rounded-2xl text-indigo-800 border border-blue-500 h-10 w-30 transform transition-all hover:scale-105 ease-in-out hover:translate-y-1 duration-700 focus:outline-none focus:ring-2 focus:ring-blue-400 font-sans"
				>
					Get Weather
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
