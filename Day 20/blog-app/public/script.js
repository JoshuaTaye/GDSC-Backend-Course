fetch('http://localhost:5000/api/posts')
    .then(response => response.json())
    .then(data => {
        const content = document.getElementById('content');
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><small>by ${post.author.username}</small>`;
            content.appendChild(postElement);
        });
    });
