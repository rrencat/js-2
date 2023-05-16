import * as templates from "./index.js";
import * as postMethods from "../api/posts/index.js";

export default async function showPosts() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#postsContainer");
    templates.renderPostTemplates(posts, container);
}

showPosts();
