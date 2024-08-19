
(async () => {
    try{
        const response = await fetch('http://localhost:5000/api/posts');
        const data = await response.json();
        const content = document.getElementById('content');
        data.forEach(post => {
            const postElement = document.createElement('div')
            postElement.className = "blog-post"
            postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><span>Author: ${post.author} | Date: ${post.date}</span>`;
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
        });
    }catch (e) {
        console.log(e.message)
    }

})()


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
