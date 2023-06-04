import { load } from "../storage/index.js";

/**
 * This function makes an authenticated request to the API
 * @param {string} url - The URL the request goes to
 * @param {Object} options - The headers object containing the Content-Type and Authorization headers
 * @returns {Promise} - Promise that resolves to the fetch response
 */
export async function fetchToken(url, options = {}) {
  const token = load("token");
  
  if (!token) {
		throw new Error("No token found");
	}

	const myOptions = {
		...options,
		headers: {
			"Content-Type": "application/json;",
			Authorization: `Bearer ${token}`,
		},
	};

	return fetch(url, myOptions);
  }