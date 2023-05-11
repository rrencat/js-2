import { API_SOCIAL_URL } from "../constants.js";

import { fetchToken } from "../fetchToken.js";

const action = "/profiles";

export async function getProfile() {
    const updateProfileURL = `${API_SOCIAL_URL}${action}`;

    const response = await fetchToken(updateProfileURL)

    return await response.json();
}


export async function getProfile(name) {
    if (!name) {
        throw new Error("This requires a name");
    }

    const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

    const response = await fetchToken(getProfileURL)

    return await response.json();
}