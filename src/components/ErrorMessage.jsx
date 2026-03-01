import React from "react";

/**
 * Component to display error messages
 * @param {string} message - Error message to show
 */
const ErrorMessage = ({ message }) => (
	<p className="text-red-500 font-medium mb-4">{message}</p>
);

export default ErrorMessage;
