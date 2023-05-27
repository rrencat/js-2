import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";

const action = "/posts";
const method = "DELETE";

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