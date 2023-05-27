import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";

const action = "/posts";
const method = "GET";

/**
 * This function gets all the posts from the API
 * @returns all the posts from the API
 */
export async function getPosts() {
    const url = `${API_SOCIAL_URL}${action}`;

    const response = await fetchToken(url, {
        method,
    });

    return await response.json();
}

/**
 * This function gets a post from the API by the id
 * @param {*} id 
 * @throws {error} - Throws an error if there is no id
 * @returns The post with the matching id
 */
export async function getPost(id) {
    if (!id) {
        throw new Error("This requires a post ID");
    }

    const url = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await fetchToken(url, {
        method,
    });

    return await response.json();
}

