function getQueryParams() {
    const params = {};
    window.location.search
        .substring(1)
        .split("&")
        .forEach(function (param) {
            const pair = param.split("=");
            params[pair[0]] = decodeURIComponent(pair[1]);
        });
    return params;
}

const params = getQueryParams();
const postId = params.id;

const findPost = async(id) => {
    try{
        const response = await fetch( `http://localhost:5000/api/posts/${id}`);
        const post = await response.json();
        if (post) {
            document.getElementById("post-title").innerText = post.title;
            document.getElementById("post-content").innerText = post.content;
            document.getElementById("post-meta").innerText = `Author: ${post.author} | Date: ${new Date(post.createdAt).toLocaleDateString()}`;
        } else {
            document.getElementById("post-content").innerText = "Blog post not found.";
        }
    }catch (e) {

    }
}

findPost(postId)

