import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";

const action = "/posts";
const method = "GET";


export async function getPosts() {
    const url = `${API_SOCIAL_URL}${action}`;

    const response = await fetchToken(url, {
        method,
    });

    return await response.json();
}


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

