import { register } from "../../api/auth/register.js";
import displayMessage from "../../ui/common/displayMessage.js";

/**
 * This function handles the listener for the registration form and displays a message if the user successfully registered
 */
export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries())
    
            register(profile)
            displayMessage("success", "You successfully registered your account, you may now log in!", "#message");
        })
    }
}

