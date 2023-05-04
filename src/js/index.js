import { setRegisterFormListener } from "./handlers/register.js";
import { setLoginFormListener } from "./handlers/login.js";

const path = location.pathname;

if (path === "/profile/login/") {
    setLoginFormListener()
} else if (path === "/profile/register/") {
    setRegisterFormListener()
}