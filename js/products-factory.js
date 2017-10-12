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

const scarf = {
    "name": "Adorable, Hand-Knitted Icelandic Scarf",
    "type": "clothing",
    "description": "Keep your Mustela putorius furo warm as she makes your heart",
    "img": "./images/km-ferret-scarf.jpg",
    "price": "$225.00",
    "userStory": "My dear Evaline loves to scamper about in the snow. With this beautiful scarf she stays as warm as when she's in my arms.",
    "author": "Raj Erle",
    "sku": "0001"
}

const topHat = {
    "name": "Symphony Style Top Hat",
    "type": "clothing",    
    "description": "Based on Edward Coke's, younger brother of the 2nd Earl of Leicester, original design, this clever cranial accoutremont is the definition of the classically dressed ferret gentleman",
    "img": "./images/km-ferret-top-hat.gif",
    "price": "$125.00",
    "userStory": "When my Charlie saw this online he wouldn't stop biting my feet until he had it. There were several days of pain involved, but totally worth it.",
    "author": "Erastos Anastastius",
    "sku": "0002" 
}

const book = {
    "name": "From Ferret Wild to Ferret Child",
    "type": "training",
    "description": "From acclaimed ferret wrangler, Christine D'Chentour.  This book will help you rediscover your own childlike nature.  Become the catalyst that elevates your companion's emotional well-being and intellectual reasoning to new heights.",
    "img": "./images/km-book-ferret.jpg",
    "price": "$32.00",
    "userStory": "Life Changing",
    "author": "Felicitas Loris",
    "sku": "0003"
}

const bed  = {
    "name": "Comfortable, stylish day-bed",
    "type": "comfort",
    "description": "Nap with an art-deco touch. Your burrowing companion will find a lot to love within this Frank Lloyd Write inspired ferret day bed",
    "img": "./images/km-ferret-beds-hand-carved.jpg",
    "price": "$12,000.00",
    "userStory": "I wish I was a ferret",
    "author": "Gillean Rinaldo",
    "sku": "0004"
}

const tubes = {
    "name": "Exotic Excursion Tunnels",
    "type": "exercise",
    "description": "Based on Bay Area artist Tom Franco's recent exhibition. These tubes will challenge your ferret's reflexes and artistic sensibilities",
    "img": "./images/km-products-pipes.jpg",
    "price": "$3,600.00",
    "userStory": "My ferret lost his mind and his pre-concieved notions of what life is and how to live it.",
    "author": "Noemia Vlahovic",
    "sku": "0005"
}

// holding the shopping cart in the local storage
localStorage.removeItem("shoppingcart");

const ShoppingCart = {
    "items": []
}

const training = [book];
const clothing = [scarf, topHat]
const comfort = [bed];
const exercise = [tubes];

const Products = {
    "training": training,
    "clothing": clothing,
    "comfort": comfort,
    "exercise": exercise
}

localStorage.setItem("products", JSON.stringify(Products));

function addToCart(sku) {
    ShoppingCart.items.push({"sku":sku, "qty":1});
    localStorage.setItem("shoppingcart", JSON.stringify(ShoppingCart)); 
}



