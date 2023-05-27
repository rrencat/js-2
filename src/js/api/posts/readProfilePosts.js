import { API_SOCIAL_URL } from "../constants.js";

import { fetchToken } from "../fetchToken.js";

const action = "/posts";
const profiles = "/profiles"


/**
 * This function gets all the posts from the API that a registered and logged in user has made
 * @param {*} name - Uses the name of the user thats logged in to fetch their posts
 * @returns {Promise} - The users posts
 */
export async function getProfile(name) {
    if (!name) {
        throw new Error("This requires a name");
    }

    const getProfileURL = `${API_SOCIAL_URL}${profiles}/${name}${action}`;

    const response = await fetchToken(getProfileURL)

    return await response.json();
}