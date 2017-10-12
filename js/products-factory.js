// objects to store products
/* 
const product = {
    "name": "test",
    "description": "test_desc",
    "img": "img_test",
    "price": "price_test",
    "userStory": "user_story_test",
    "sku": "sku_test"
} 
*/

const leash = {
    "name": "Adorable, ajustable Ferret Leash",
    "type": "training",
    "description": "Keep your Mustela putorius furo as near or far as you'd like",
    "img": "img:adjustable leash image",
    "price": "$25.00",
    "userStory": "My dear Evoline loves to scamper about. With this little gem I can quickly and easily return her to my arms.",
    "author": author1,
    "sku": "0001"
}

const bowlerHat = {
    "name": "Smart bowler hat",
    "type": "comfort",    
    "description": "Based on Edward Coke's, younger brother of the 2nd Earl of Leicester, original design, this clever cranial accoutremont is the definition of the classical feret gentleman",
    "img": "img:smart bowler hat",
    "price": "$125.00",
    "userStory": "When my Charlie saw this online he wouldn't stop biting my feet until he had it. There were several days of pain involved, but totally worth it.",
    "author": author2,
    "sku": "0002" 
}

const book = {
    "name": "From Ferret Wild to Ferret Child",
    "type": "training",
    "description": "From acclaimed ferret wrangler, Christine D'Chentour.  This book will help you rediscover your own childlike nature.  Become the catalyst that elevates your companion's emotional well-being and intellectual reasoning to new heights.",
    "img": "img: book",
    "price": "32.00",
    "userStory": "Life Changing",
    "author": author1,
    "sku": "0003"
}

const bed  = {
    "name": "Comfortable, stylish day-bed",
    "type": "comfort",
    "description": "Nap with an art-deco touch. Your burrowing companion will find a lot to love within this Frank Lloyd Write inspired ferret day bed",
    "img": "img: day bed",
    "price": "1200.00",
    "userStory": "I wish I was a ferret",
    "author": author1,
    "sku": "0004"
}

const tubes = {
    "name": "Based on Bay Area artist Tom Franco's recent exhibition. These tubes will challenge your ferret's reflexes and artistic sensibilities",
    "type": "exercise",
    "description": "Nap with an art-deco touch. Your burrowing companion will find a lot to love within this Frank Lloyd Write inspired ferret day bed",
    "img": "img: tubes",
    "price": "3600.00",
    "userStory": "I wish I was a ferret",
    "author": author1,
    "sku": "0005"
}

// holding the shopping cart in the local storage
localStorage.removeItem("shoppingcart");

const ShoppingCart = {
    "items": []
}

const training = [leash, tubes];
const comfort = [bowlerHat, bed];
const exercise = [tubes];

const Products = {
    "training": training,
    "comfort": comfort,
    "exercise": exercise
}

localStorage.setItem("products", JSON.stringify(Products));

function addToCart(sku) {
    ShoppingCart.items.push({"sku":sku, "qty":1});
    localStorage.setItem("shoppingcart", JSON.stringify(ShoppingCart)); 
}



