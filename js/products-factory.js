// objects to store products
const product = {
    "name": "test",
    "description": "test_desc",
    "img": "img_test",
    "price": "price_test",
    "userStory": "user_story_test",
    "sku": "sku_test"
}

const leash = {
    "name": "Adjustable Ferret Leash",
    "description": "Keep your Mustela putorius furo as near or far as you'd like",
    "img": "adjustable leash",
    "price": "$25.00",
    "userStory": "My dear Evoline loves to scamper about. With this little gem I can quickly and easily return her to my arms.",
    "sku": "0001"
}

const bowlerHat = {
    "name": "Smart bowler hat",
    "description": "Based on Edward Coke's, younger brother of the 2nd Earl of Leicester, original design, this clever cranial accoutremont is the definition of the classical feret gentleman",
    "img": "url:smart bowler hat",
    "price": "$125.00",
    "userStory": "When my Charlie saw this online he wouldn't stop biting my feet until he had it. There were several days of pain involved, but totally worth it.",
    "sku": "0002" 
}

sessionStorage.clear();

const ShoppingCart = {
    "items": []
}

const products = [leash, bowlerHat];

const Products = {
    "products": products
}

localStorage.setItem("products", JSON.stringify(Products));

function addToCart(sku) {
    console.log("alert");
    ShoppingCart.items.push({"sku":sku, "qty":1});
    sessionStorage.setItem("shoppingcart", JSON.stringify(ShoppingCart)); 
    document.getElementById("shoppingcart").innerHTML = ShoppingCart.items.length;
}



