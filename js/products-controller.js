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
        <article class="card product-main" id="${product.sku}">
           <div class="product-container-img">
            <img src="${product.img}" class="product-img">
           </div>
           <div class="product-container-info">
            <p class="product-name">${product.name.toUpperCase()}</p>
            <p class="product-description">${product.description}</p>
            <div class="product-commerce">
                <p class="product-price">${product.price}</p>
                <button type="button" class="product-cart-add-button" id="${product.sku}">Add</button>
            </div>
            <p class="product-story">"${product.userStory}" - ${product.author}</p>
            </div>
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


function getItemFromSKU(sku) {
    for(let key in productsDB){
        
    }

}