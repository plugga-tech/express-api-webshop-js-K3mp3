fetch("http://localhost:3000/api/products")
.then(res => res.json())
.then(data => {
    console.log(data);
    printProducts(data);
});


function printProducts(data) {
    data.map(data => {
        const productName = document.createElement("li");
        productName.innerText = data.name;

        document.body.appendChild(productName);
        
        console.log("productName", productName.innerText);
    })
}