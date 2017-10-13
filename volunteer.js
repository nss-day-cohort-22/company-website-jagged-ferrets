 

//Create First Name Error Function
function checkForFirstName () {
    console.log("function ran")
    if (document.getElementsByClassName("styleFirstName")[0].value === ""){
            alert("Please enter your first name");
            return false;
    }
}
let button = document.getElementsByClassName("submitButton")[0]
button.addEventListener("click", checkForFirstName)


// Create Last Name Error Function 
function checkForLastName () {
    console.log("function ran")
    if (document.getElementsByClassName("styleLastName")[0].value === ""){
            alert("Please enter your last name");
            return false; 
    }
}
 


// // Create Email Error Function
// function checkForuserEmail () {
//     console.log("function ran")
//     if (document.getElementsByClassName("styleEmail")[0].value === ""){
//             alert("Please enter your email");
//             return false;
//     }
// }
// let button = document.getElementsByClassName("submitButton")[0]
// button.addEventListener("click", checkForFirstName)




// //End Submit Error Alerts 
