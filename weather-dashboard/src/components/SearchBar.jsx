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
			className="flex flex-col mb-4 gap-3 w-full max-w-md"
		>
			{/* City input */}
			<label
				className="text-2xl font-bold"
				htmlFor="city"
			>
				Search Location
			</label>
			<input
				id="city"
				name="city"
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder=" 🔍Enter city name"
				className="flex-1 p-3 rounded-lg border border-blue-500 bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
			/>
			{/* Submit button */}
			<button
				type="submit"
				className="m-auto bg-blue-600 transform transition-all hover:scale-105 ease-in-out hover:translate-y-1 duration-700 focus:outline-none focus:ring-2 focus:ring-blue-400 font-sans"
			>
				Get Weather
			</button>
		</form>
	);
};

export default SearchBar;
