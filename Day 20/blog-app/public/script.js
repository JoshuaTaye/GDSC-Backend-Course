(async () => {
    try {
        const response = await fetch('http://localhost:5000/api/posts');
        const data = await response.json();
        const content = document.getElementById('content');
        content.innerHTML = ''
        data.forEach(post => {
            const postElement = document.createElement('div')
            postElement.className = "blog-post"
            postElement.innerHTML =
                `<h2 class="text-3xl font-bold"><a href=blogDetails.html?id=${post._id}>${post.title}</a></h2>
                 <p>${post.content}</p>
                  <div class="text-sm text-gray-400">
                  <div>Author: ${post.author}</div> 
                  <div>Date: ${new Date(post.createdAt).toLocaleDateString()}</div>
                  </div>
                  `;
            const tagContainer = document.createElement('div')
            tagContainer.className = "tagContainer"
            postElement.appendChild(tagContainer)
            post.tags.forEach(tag => {
                const tagNode = document.createElement('span')
                tagContainer.appendChild(tagNode)
                tagNode.innerText = `${tag}`
                tagNode.className = "tagNode"
            })
            content.appendChild(postElement);
            const buttons = document.createElement('div')
            buttons.innerHTML = `<div class="flex flex-wrap gap-x-3 justify-around">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-5 rounded"
                        onClick=deleteBlog(\`${post._id}\`)>Delete Blog
                </button>
                <a href=edit.html?id=${post._id}
                   class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded">Edit Blog</a>
            </div>`
            postElement.append(buttons);
        });
    } catch (e) {
        console.log(e.message)
    }
})();

const deleteBlog = async (id) => {
    console.log(id)
    const answer = prompt(`You are about to delete this blog? Y or N (blog ${id})`);
    if (answer === "N" || answer === "n") {
    } else {
        try {
            const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
                method: "DELETE"
            });
            if (response.status === 204) {
               alert("Blog Post Deleted Successfully");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                alert(response)
            }
        } catch (e) {
            alert(e.message)
        }
    }
}

const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Toggle Dark Mode';
    } else {
        toggleButton.textContent = 'Toggle Light Mode';
    }
});
