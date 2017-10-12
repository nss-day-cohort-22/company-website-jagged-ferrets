let ferretInventoryString = JSON.stringify(ferretInventory) 
localStorage.setItem("ferretInventory", ferretInventoryString)

let ferretDatabase = JSON.parse(localStorage.getItem("ferretInventory")) //JSON.parse is for storing the string in local storage
const ferretElement = document.getElementById("adopt")

for (let loopTracker = 0; loopTracker < ferretInventory.length; loopTracker +=1) {
    const currentFerret = ferretInventory[loopTracker];

ferretElement.innerHTML += `
<section="adopt"> 
<h2>${currentFerret.name}</h2> 
<div><img src="url">${currentFerret.url}</div>
<div>${currentFerret.age}</div>
<div>${currentFerret.sex}</div>
<div>${currentFerret.likes}</div>
<div>${currentFerret.dislikes}</div>
</section>
`
}     
