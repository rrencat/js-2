import { login } from "../../api/auth/login.js";
import displayMessage from "../../ui/common/displayMessage.js";
import * as storage from "../../storage/index.js";

/**
 * This function handles the listener for the login form and stores items in local storage
 */

export function setLoginFormListener() {
	const form = document.querySelector("#loginForm");

	if (form) {
		form.addEventListener("submit", async (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const profile = Object.fromEntries(formData.entries());

			try {
				const { accessToken, name, ...userProfile } = await login(profile);
				storage.save("token", accessToken);
				storage.save("name", name);
				storage.save("profile", userProfile);
				location.href = "/feed";
			} catch (error) {
				console.log(error);
				displayMessage("danger", error, "#message");
			}
		});
	}
}
