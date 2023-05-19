import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";

const action = "/posts";

export async function getPosts() {
    const updatePostURL = `${API_SOCIAL_URL}${action}`;

    const response = await fetchToken(updatePostURL)

    return await response.json();
}


export async function getPost(id) {
    if (!id) {
        throw new Error("This requires a post ID");
    }

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await fetchToken(getPostURL)

    return await response.json();
}