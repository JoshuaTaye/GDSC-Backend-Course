// Making an asynchronous HTTP request

fetch("https://jsonplaceholder.typicode.com/albums")
.then(response => response.json())
.then(data => {
    updateUi(data);
}).catch((err) => console.error(err));


function updateUi(albums){
    for (let album of albums){
        let container = document.createElement("div");
        document.getElementById("displayData").appendChild(container);
        container.textContent = `${album["id"]}. ${album["title"]}`;
    }
}