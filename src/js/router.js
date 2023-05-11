import * as listeners from "./handlers/index.js";

export default function router() {
    const path = location.pathname;

    swithc (path) {
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
        case "/post/edit/":
            listeners.setUpdatePostListener()
            break;
    }
}


