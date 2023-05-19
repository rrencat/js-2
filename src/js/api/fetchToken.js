import { displayMessage } from "../ui/common/displayMessage.js";

/**
 * Fetches data from a specified endpoint using the provided options.
 *
 * @param {string} API_SOCIAL_URL - The base URL of the API.
 * @param {string} endpoint - The endpoint to fetch the data from.
 * @param {object} options - (Optional) Additional options for the fetch request.
 * @returns {void}
 */
export async function fetchData(API_SOCIAL_URL, endpoint, options = {}) {
  try {
    const response = await fetch(`${API_SOCIAL_URL}${endpoint}`, options);

    if (response.status === 201) {
      displayMessage("success", "User registered");
    } else {
      displayMessage("warning", "User already exists");
    }
  } catch (error) {
    displayMessage("warning", error);
  }
}