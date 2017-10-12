// retrieve shopping cart
const shoppingCart="";
try {
    sessionStorage.clear();
} catch(e) {
    shoppingCart = JSON.parse(sessionStorage.getItem("shoppingcart"));
}

// Retrieve the products data
const productsDB = JSON.parse(localStorage.getItem("products"));
const productsDOM = document.getElementById("products");
// update the DOM
for(let key in productsDB) {
    let currentKey= productsDB[key];
    
    for (let i = 0; i < currentKey.length; i++) {
        let product = currentKey[i];
        
        productsDOM.innerHTML += `
        <article class="products" id="${product.sku}">
            <p>${product.name}</p>
            <p>${product.description}</p>
            <p>${product.img}</p>
            <p>${product.price}</p>
            <p>${product.userStory}</p>
            <button type="button" id="${product.sku}">Add</button>
            </article>
            `
            // <button type="button" onclick="addToCart('${product.sku}')">Add</button>
    }
}

for(let key in productsDB) {
    let currentKey= productsDB[key];
        
    for (let i = 0; i < currentKey.length; i++) {
        let product = currentKey[i];

            let sku = product.sku;
            document.getElementById(sku).addEventListener("click", function(){addToCart(sku);}, false);
            
    }
}

function addEventListener(sku){
    // Add something to the shopping cart
    let buttonCart = document.getElementById(sku);
    buttonCart.addEventListener('click',function(){
        addToCart(sku);
    },false)();
}
    