import * as api from "../../api/profiles/index.js";
import displayMessage from "../../ui/common/displayMessage.js";

/**
 * This function renders the posts
 * @param {*} posts 
 */
export default function renderPosts(posts) {
	const postsContainer = document.querySelector("#postsContainer");
	postsContainer.innerHTML = "";
	const postsHtml = posts.map((post) => createPost(post));
	postsContainer.append(...postsHtml);
}

/**
 * This function creates a post with div, buttons etc.
 * @param {*} post 
 * @returns - The post in its entirety
 */
function createPost(post) {
	const div = document.createElement("div");
	div.classList.add("post");
  	div.classList.add("card");

	const span = document.createElement("span");
	span.innerText = post.title;
	div.append(span);

  	const body = document.createElement("span");
  	body.innerText = post.body;
  	div.append(body);

	const editButton = document.createElement("a");
	editButton.classList.add("btn");
	editButton.classList.add("btn-outline-primary");
	editButton.classList.add("mb-2");
	editButton.innerText = "Edit Post";
	editButton.href = `/post/edit/?id=${post.id}`;
	div.append(editButton);
	
	const deleteButton = document.createElement("button");
	deleteButton.classList.add("btn");
	deleteButton.classList.add("btn-danger");
	deleteButton.innerText = "Delete";
	deleteButton.dataset.id = post.id;
	deleteButton.dataset.delete = true;
	div.append(deleteButton);

	return div;
}


/**
 * This function adds a listener 
 */
export function displayProfilePostsListener() {
	window.addEventListener("DOMContentLoaded", displayPosts);
}

/**
 * This function displays the posts and displays a message incase of an error
 */
export async function displayPosts() {
	try {
		const posts = await api.getProfile();
		renderPosts(posts);
	} catch (error) {
		console.log(error);
		displayMessage("danger", error, "#productsContainer");
	}
}

