document.getElementById("create-btn").onclick = function(){
    const my_div = document.getElementById("super-div");
    
    // create new div that will hold  new product
    const newProd = document.createElement("div");

    // pick up input value and save it into these variables which you'll append afterward
    const prodName = document.getElementById("new-prod-name").value; 
    const prodPrice = document.getElementById("new-prod-price").value; 
    
    // use "innerHTML" to populate elements before you append 
    newProd.innerHTML = `
        <span>${prodName}</span>
        <span>${prodPrice}</span>
        <span>QTY <input type="number" class="prod-qty"></span>
        <span>$0</span>
        <button class="btn btn-danger delete">DELETE</button>
    `
    // append the div that has new product to the main div (with class "super-div")
    my_div.appendChild(newProd);
}


