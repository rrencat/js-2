import * as listeners from "./handlers/index.js";
import { homePage } from "./pages/homePage.js";

/**
 * This function handles the logic based on the current path the user is on
 */
export default function router() {
    const path = location.pathname;

    switch (path) {
        case "/profile/login/":
            listeners.setLoginFormListener()
            break; 
        case "/profile/register/":
            listeners.setRegisterFormListener()
            break; 
        case "/profile/edit/":
            listeners.setUpdateProfileListener()
            break; 
        case "/post/create/":
            listeners.setCreatePostListener()
            break;
        case "/feed/":
           homePage()
           break;
        case "/post/edit/":
            listeners.setUpdatePostListener()
            break;
    } 
}



