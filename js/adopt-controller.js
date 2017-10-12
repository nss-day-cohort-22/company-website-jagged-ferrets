let ferretInventoryString = JSON.stringify(ferretInventory) 
localStorage.setItem("ferretInventory", ferretInventoryString)

let ferretDatabase = JSON.parse(localStorage.getItem("ferretInventory")) //JSON.parse is for storing the string in local storage
const ferretElement = document.getElementById("adopt")

for (let loopTracker = 0; loopTracker < ferretInventory.length; loopTracker +=1) {
    const currentFerret = ferretInventory[loopTracker];

ferretElement.innerHTML += `
<section class="adopt-main"> 
 

<div>${currentFerret.img}</div> 
</div>

<div class="bioContainer">
<div class="name">${currentFerret.name}</div>
<div class="age">${currentFerret.age}</div>
<div class="sex">${currentFerret.sex}</div>
<div class="likes">${currentFerret.likes}</div>
<div class="dislikes">${currentFerret.dislikes}</div>

<button type="button" onclick="clicker()" class="button">Adopt This Ferret Now</button>

</div>
</section>
`
}     

function clicker() {
    alert("Thanks for adopting this major responsibility into your life!");
}




/* <img src="img"> */
/* <div class="ferretContainer"> */
/* <div class="button">${currentFerret.button}</div> */
