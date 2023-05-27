import { createPost } from "../../api/posts/index.js";
import displayMessage from "../../ui/common/displayMessage.js";

/**
 * This function adds an event listener to a create post form element and sends the users data to the API (creates a post)
 */
export function setCreatePostListener() {
    const form = document.querySelector("#createPost");

    if (form) {
        form.addEventListener("submit", (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);

			const title = formData.get("title");
			const body = formData.get("body");
			const tags = formData.get("tags");
			const media = formData.get("media");

			const post = {
				title: title,
				body: body,
				media: media,
			};

			post.tags = [tags];

			
			createPost(post);
			displayMessage("success", "Yey! You’ve successfully created a post!", "#message");
        })
    }
}

