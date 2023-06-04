import { API_SOCIAL_URL } from "../constants.js";

import { fetchToken } from "../fetchToken.js";

const action = "/posts";
const method = "put";

/**
 * This function lets the user update/edit a post
 * @param {Object} postData - The post data object
 * @returns {Promise} - A Promise that resolves to the post update response
 */
export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("Update requires a post ID");
    }
    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

    const response = await fetchToken(updatePostURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}