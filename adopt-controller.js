let ferretInventoryString = JSON.stringify(ferretInventory) 
localStorage.setItem("ferretInventory", ferretInventoryString)

let ferretDatabase = JSON.parse(localStorage.getItem("ferretInventory")) //JSON.parse is for storing the string in local storage
const ferretElement = document.getElementById("adopt")

console.log(ferretDatabase)

