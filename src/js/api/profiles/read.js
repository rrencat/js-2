import { API_SOCIAL_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";

const action = "/posts";

export async function getProfile() {
    const name = JSON.parse(localStorage.getItem("name"));

    if (!name) {
        throw new Error("This requires a name");
    }

    const getProfileURL = `${API_SOCIAL_URL}/profiles/${name}${action}`;
    const response = await fetchToken(getProfileURL)

    return await response.json();
}
