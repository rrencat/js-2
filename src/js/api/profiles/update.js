import { API_SOCIAL_URL } from "../constants.js";

import { fetchToken } from "../fetchToken.js";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
    if (!profileData.name) {
        throw new Error("Update requires a name");
    }
    const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

    const response = await fetchToken(updateProfileURL, {
        method,
        body: JSON.stringify(profileData)
    })

    return await response.json();
}