import { createPost } from "../../api/posts/index.js";

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

            console.log(post);

			createPost(post);
        })
    }
}

