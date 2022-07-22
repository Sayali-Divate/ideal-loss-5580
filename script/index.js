


let array = [];
let roomTravelersFun = (event) => {


    let appendDiv = document.querySelector(".InsideSubPart3Am");
    let label = document.querySelector(" p + label");
    label.innerText = null

    let parent = document.createElement("div");
    parent.setAttribute("id", "parentAm");


    let heading = document.createElement("h3");
    heading.innerText = "Travelers"

    parent.append(heading)
    appendDiv.append(parent);
    

}

let getTheApp = () =>{
    let phoneNum = document.querySelector("#phone_num").value;
    let appInfo = document.querySelector(".appInfo")

    if( phoneNum  == ""){
        appInfo.innerText = "Please enter your phone number"
        appInfo.style.color = "red"
        appInfo.style.fontSize = "1rem";

    } else {
        appInfo.innerText = "We’ve sent you a text message with a link to download the app."
        appInfo.style.color = "green"
        appInfo.style.fontSize = "1rem";
        phoneNum == " "

    }
}