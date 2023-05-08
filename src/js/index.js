import { setRegisterFormListener } from "./handlers/register.js";
import { setLoginFormListener } from "./handlers/login.js";
import * as post from "./api/posts/index.js";

const path = location.pathname;

if (path === "/profile/login/") {
    setLoginFormListener()
} else if (path === "/profile/register/") {
    setRegisterFormListener()
}

post.createPost()
post.updatePost()
post.removePost()
post.getPost()
post.getPosts()
