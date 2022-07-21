import {search} from "../components/functionality.js"

// Going to destination
localStorage.setItem("destination", "Goa")

let searchBlock=document.querySelector("#search");
let destination=document.querySelector("#destination");
let x=destination.innerText
destination.innerText=localStorage.getItem("destination");
searchBlock.addEventListener("click", ()=>{
    search(searchBlock, destination, x);
});
