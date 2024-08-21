document.getElementById('blog-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {}
    for (let [key, value] of formData.entries()) {
        if (key === "tags") {
            data[key] = value.split(', ');
        }
        else{
            data[key] = value;
        }
    }
    console.log(data)
    try {
        const response = await fetch("http://localhost:5000/api/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        if (response.status === 201) {
            alert("Blog Post Created Successfully!")
            setTimeout(() => {
                window.location.href = "index.html"
            }, 2000);
        } else {
            const res = await response.json()
            alert(await res[0]);
        }
    } catch (e) {
        alert(e.message);
    }
});