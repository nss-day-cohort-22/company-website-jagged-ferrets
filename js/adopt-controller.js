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
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

