function getQueryParams(){
    const param = window.location.search.substring(1).split("&")
    const pair = param[0].split("=");
    return pair[1]
}
const id = getQueryParams();
document.getElementById("blog-form").addEventListener("submit", async function(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {}
    for (let [key, value] of formData.entries()){
        if (value.length === 0){
        }
        else if (key === "tags"){
            data[key] = value.split(', ');
        }
        else {
            data[key] = value;
        }
    }
    try{
        const response = await fetch(`http://localhost:5000/api/posts/${id}`,
            {
                method:"PATCH",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
        if (response.status === 201) {
            alert("Blog updated successfully");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            const res = await response.json()
            alert(res.error);
        }
    } catch (e) {
        alert(e.message);
    }
});