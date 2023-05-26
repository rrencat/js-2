export default function renderPosts(posts) {
	const postsContainer = document.querySelector("#postsContainer");
	postsContainer.innerHTML = "";
	const postsHtml = posts.map((post) => createPost(post));
	postsContainer.append(...postsHtml);
}

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
	editButton.classList.add("btn-primary");
	editButton.innerText = "View Post";
	editButton.href = `/post/?id=${post.id}`;
	div.append(editButton);
	return div;
}

import * as api from "../../api/profiles/index.js";
import displayMessage from "../../ui/common/displayMessage.js";


export function displayProfilePostsListener() {
	window.addEventListener("DOMContentLoaded", displayPosts);
}

async function displayPosts() {
	try {
		const posts = await api.getProfile();
		renderPosts(posts);
	} catch (error) {
		console.log(error);
		displayMessage("danger", error, "#productsContainer");
	}
}