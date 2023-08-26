/* ------------------------footer____________________________*/
const yearSpan = document.querySelector("#currentYear");
const currentYear = new Date();
console.log(currentYear); //check to see if working - it's not essential
yearSpan.innerText = currentYear.getFullYear();
