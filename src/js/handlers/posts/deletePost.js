import { removePost } from "../../api/posts/remove.js";

export function deletePostListener() {
	const buttons = document.querySelectorAll("[data-delete]");
	buttons.forEach((button) => button.addEventListener("click", remove));
}

async function remove(event) {
	const { id } = event.target.dataset;
	const shouldDelete = confirm("Are you sure you want to delete the post with id: " + id);
	if (shouldDelete) {
		await removePost(id);
		event.target.parentElement.remove();
		
	}
}