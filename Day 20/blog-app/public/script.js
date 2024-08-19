fetch('http://localhost:5000/api/posts')
    .then(response => response.json())
    .then(data => {
        const content = document.getElementById('content');
        data.forEach(post => {
            const postElement = document.createElement('div')
            postElement.className = "blog-post"
            postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><span>Author: ${post.author} | Date: ${post.date}</span>`;
            content.appendChild(postElement);
        });
    });
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
