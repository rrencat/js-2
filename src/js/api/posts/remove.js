import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";

const action = "/posts";
const method = "DELETE";


/**
 * This function deletes a post
 * @param {*} id - The post id is required for this action
 * @returns - A Promise that resolves to the post deletion response
 */
export async function removePost(id) {
    if (!id) {
        throw new Error("Delete requires a post ID");
    }
    const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await fetchToken(updatePostURL, {
        method
    })

    return await response.json();
}