import * as listeners from "./handlers/index.js";
import * as templates from "./templates/index.js";
import * as postMethods from "./api/posts/index.js";

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
        case "/post/edit/":
            listeners.setUpdatePostListener()
            break;
    }

    if (path === "/feed/") {
        async function showPosts() {
        const posts = await postMethods.getPosts();
        const container = document.querySelector("#postsContainer");
        templates.renderPostTemplates(posts, container);
        }
        showPosts();
    } else if (path === "/post/") {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const post = postMethods.getPost(id);
        const container = document.querySelector("#postContainer");
        templates.renderPostTemplate(post, container);
    }
    
    
}



