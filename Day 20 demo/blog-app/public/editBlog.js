function getQueryParams() {
    const params = {};
    window.location.search
        .substring(1)
        .split("&")
        .forEach(function (param) {
            const pair = param.split("=");
            params[pair[0]] = decodeURIComponent(pair[1]);
        });
    return params.id;
}

document.getElementById('blog-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const id = getQueryParams();
    const formData = new FormData(e.target);
    const data = {}
    for (let [key, value] of formData.entries()) {
        if (value.length === 0) {
        }
        else if (key === "tags") {
            data[key] = value.split(', ');
        }
        else{
            data[key] = value;
        }
    }
    console.log(data);
    try {
        const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        if (response.status === 201) {
            alert("Blog Post Updated Successfully!")
            setTimeout(() => {
                window.location.href = "index.html"
            }, 2000);
        } else {
            const res = await response.json()
            alert(res.error);
        }
    } catch (e) {
        alert(e.message);
    }
});