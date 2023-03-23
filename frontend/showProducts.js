let loggedinUser = localStorage.getItem("username");
if(loggedinUser) {
    console.log(`Tjena ${loggedinUser}`);
}

function createHtmlElements() {
    const productHeading = document.createElement("h1");
    const productName = document.createElement("li");

    productHeading.innerHTML = "Available products";

    productName.classList.add("product-name");

    document.body.appendChild(productHeading);
    productHeading.appendChild(productName);
}

createHtmlElements();


fetch("http://localhost:3000/api/products")
.then(res => res.json())
.then(data => {
    console.log(data);
    printProducts(data);
});


function printProducts(data) {
    console.log("data", data);
    
}