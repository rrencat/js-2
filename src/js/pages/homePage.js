import { displayPosts } from "../handlers/posts/profilePosts.js";
import { deletePostListener } from "../handlers/posts/deletePost.js";

export async function homePage() {
    await displayPosts();
    deletePostListener();
}