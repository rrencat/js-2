import * as listeners from "./handlers/index.js";
import * as templates from "./templates/index.js";
import * as postMethods from "./api/posts/index.js";

const path = location.pathname;

if (path === "/profile/login/") {
    listeners.setLoginFormListener()
} else if (path === "/profile/register/") {
    listeners.setRegisterFormListener()
} else if (path === "post/create/") {
    listeners.setCreatePostListener()
} else if (path === "post/edit/") {
    listeners.setUpdatePostListener()
}
