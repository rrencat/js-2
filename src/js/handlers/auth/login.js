import { login } from "../../api/auth/login.js";
import displayMessage from "../../ui/common/displayMessage.js";
import * as storage from "../../storage/index.js";



export function setLoginFormListener() {
	const form = document.querySelector("#loginForm");

	if (form) {
		form.addEventListener("submit", async (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const profile = Object.fromEntries(formData.entries());

			try {
				const { accessToken, ...userProfile } = await login(profile);
				storage.save("token", accessToken);
				storage.save("profile", userProfile);
				location.href = "/feed";
			} catch (error) {
				console.log(error);
				displayMessage("danger", error, "#message");
			}
		});
	}
}
