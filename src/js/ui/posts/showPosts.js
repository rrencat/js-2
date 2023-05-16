
import * as profile from "../../api/profiles/read.js";

const url = profile.getProfileURL;

const container = document.querySelector("#postsContainer");



async function showProfilePosts() {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
}

showProfilePosts()