const icon = document.querySelector(".icon-el");
const ul = document.querySelector(".ul");


// if(icon){
//     icon.addEventListener("click", () => {
//         console.log("it has been click")
//         icon.classList.toggle('active')
//     })
// }

ul.style.maxHeight = '0px'
function toggleMenu(){
    if(ul.style.maxHeight = '0px'){
        ul.style.maxHeight = '3000px'
        console.log("it has been click")
    }
    else{
        ul.style.maxHeight = '0px'
        console.log("it has been click but error")
    }
}