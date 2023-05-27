import { removePost } from "../../api/posts/remove.js";

/**
 * This function deletes a post from the API
 */
export function deletePostListener() {
	const buttons = document.querySelectorAll("[data-delete]");
	buttons.forEach((button) => button.addEventListener("click", remove));
}

/**
 * This function checks the posts id and asks the user if they want to confirm the delete action
 * If the user clicks "yes" the post is deleted from the API
 * @param {*} event 
 */
async function remove(event) {
	const { id } = event.target.dataset;
	const shouldDelete = confirm("Are you sure you want to delete the post with id: " + id);
	if (shouldDelete) {
		await removePost(id);
		event.target.parentElement.remove();
	}
}