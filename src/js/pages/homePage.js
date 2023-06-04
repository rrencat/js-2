import { displayPosts } from "../handlers/posts/profilePosts.js";
import { deletePostListener } from "../handlers/posts/deletePost.js";

/**
 * This function stores the functions used on the home page/feed 
 */
export async function homePage() {
    await displayPosts();
    deletePostListener();
}