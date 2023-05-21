export function postTemplate(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.classList.add("card");
    post.innerHTML = `<h2>${postData.title}</h2> 
                    <p>${postData.body}</p>
                    <a href="/post/?id=${postData.id}" class="btn-primary">View Post</a>`;

    if (postData.media) {
        const img = document.createElement("img");
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        post.append(img)
    }

    return post;
}


export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.innerHTML = "";
    parent.append(...postDataList.map(postTemplate))
    parent.classList.add("row");
}






