import {navbar} from "../components/navbar.js"
import {footer} from "../components/footer.js"

document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();

document.getElementById("DefaultAdultsNo").onclick=()=>{
    // roomTravelersFun();
}

let roomTravelersFun = (event) => {

    let appendDiv = document.querySelector("#APDP");
    appendDiv.innerHTML = null
    let label = document.querySelector(" div + label");
    label.innerText = null
    addRoomFun(appendDiv);

    // parentDiv
    function addRoomFun(appendDiv){
        let parent = document.createElement("div");
    parent.setAttribute("id", "parentAm");
    let heading = document.createElement("h3");
    heading.innerText = "Travelers"
    let DemoDiv = document.createElement("div");
    DemoDiv.setAttribute("id","DemoDiv")
    // DemoDiv.innerText = "a";
    let button = document.createElement("button");
    button.innerText = "Done"
    button.addEventListener("click",disapearFun);
    let h2 = document.createElement("h2");
    h2.innerHTML = "Add another room"

 

    // inside parent div , so here i am creating subdiv,subdiv2,subdiv3 //
    let subDiv = document.createElement("div");
    addAnotherRoom(subDiv);

    function addAnotherRoom (subDiv){
        subDiv.setAttribute("class","subDiv");

        // subDiv2
        let subDiv2 = document.createElement("div");
        subDiv2.setAttribute("class","subDiv2");
        let h4 = document.createElement("h4");
        h4.innerText = "Room 1"
        let p1 = document.createElement("p");
        p1.innerText = "Adults"
        let p2 = document.createElement("p");
        p2.innerText = "Children"
        subDiv2.append(h4,p1,p2);
    
        // subDiv3
        let subDiv3 = document.createElement("div");
        subDiv3.setAttribute("class","subDiv2");
        // insideSubDiv
        let AdultsNo = 2;
        let ChildrenNo = 0;
        let array = [];
        array.push(ChildrenNo);
        let insideSubDiv1 = document.createElement("div");
        insideSubDiv1.setAttribute("class","insideSubDiv3");
        let insideSubDiv1P1 = document.createElement("p");
        insideSubDiv1P1.innerText = "-"
        let insideSubDiv1P2 = document.createElement("p");
        insideSubDiv1P2.innerText = `${AdultsNo}`;
        let insideSubDiv1P3 = document.createElement("p");
        insideSubDiv1P3.innerText = "+";
        insideSubDiv1.append(insideSubDiv1P1,insideSubDiv1P2,insideSubDiv1P3);

        // AdultsNo Increase and Decrease Function
         insideSubDiv1P3.addEventListener("click",IncreseFun);
        function IncreseFun(){
         if( AdultsNo < 14 ){
            AdultsNo++;
         }
         insideSubDiv1P2.innerText = AdultsNo;
         document.querySelector("#DefaultAdultsNo").innerText = `1 room, ${AdultsNo + ChildrenNo} travelers`

        }
        insideSubDiv1P1.addEventListener("click",DecreseFun);
        function DecreseFun(){
            if( AdultsNo > 2){
                AdultsNo--;
            }
            insideSubDiv1P2.innerText = AdultsNo;
         document.querySelector("#DefaultAdultsNo").innerText = `1 room, ${AdultsNo + ChildrenNo} travelers`

        }
        // insideSubDiv
        let insideSubDiv2 = document.createElement("div");
        insideSubDiv2.setAttribute("class","insideSubDiv3");
        let insideSubDiv2P1 = document.createElement("p");
        insideSubDiv2P1.innerText = "-"
        let insideSubDiv2P2 = document.createElement("p");
        insideSubDiv2P2.innerText = `${ChildrenNo}`;
        let insideSubDiv2P3 = document.createElement("p");
        insideSubDiv2P3.innerText = "+";
        insideSubDiv2.append(insideSubDiv2P1,insideSubDiv2P2,insideSubDiv2P3);

        // childrenNo IncreaseFunction 
        let count = 0;
        insideSubDiv2P3.addEventListener("click",AddChildrenNoFun);
        function AddChildrenNoFun(){
            if(ChildrenNo < 6){
                ChildrenNo++;
                count++;
            }
       
            DemoDiv.innerText = "Please provide the ages of children."
            DemoDiv.style.backgroundColor = "#CA2F2C";
            DemoDiv.style.color = "white";
            DemoDiv.style.padding = "10px"
            insideSubDiv2P2.innerText = ChildrenNo;
            
            document.querySelector("#DefaultAdultsNo").innerText = `1 room, ${AdultsNo + ChildrenNo} travelers`
            for( let i = 0; i < array.length; i++ ){
                let ChildrenAge = document.createElement("select");
                let option1 = document.createElement("option")
                option1.innerText = "Under1";
                let option2 = document.createElement("option")
                option2.innerText = "1";
                let option3 = document.createElement("option")
                option3.innerText = "2";
                let option4 = document.createElement("option")
                option4.innerText = "3";
                let option5 = document.createElement("option")
                option5.innerText = "4";
                let option6 = document.createElement("option")
                option6.innerText = "5";
                let option7 = document.createElement("option")
                option7.innerText = "6";
                let option8 = document.createElement("option")
                option8.innerText = "7";
                let option9 = document.createElement("option")
                option9.innerText = "8";
                let option10 = document.createElement("option")
                option10.innerText = "9";
                let option11 = document.createElement("option")
                option11.innerText = "10";

                ChildrenAge.append(option1,option2,option3,option4,option5,option6,option7,option8,option9,option10,option11);
                subDiv2.append(ChildrenAge);
            }

        }
        // append part
        subDiv3.append(insideSubDiv1,insideSubDiv2);
        subDiv.append(subDiv2,subDiv3)
        parent.append(heading,DemoDiv, subDiv,h2,button)
        appendDiv.append(parent);

    }
   

    }
    

    // apear and disapear function //
    let APDPFun = () =>{
        let APDP = document.querySelector("#APDP");
        if(APDP.style.display == "block" ){
            APDP.style.display = "none";
        } else {
            APDP.style.display = " block ";
        }

    }
    APDPFun()
    function disapearFun(){
        APDPFun();
    }
   

}


let getTheApp = () => {
    let phoneNum = document.querySelector("#phone_num").value;
    let appInfo = document.querySelector(".appInfo")

    if (phoneNum == "") {
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


/// user search part ///

document.getElementById("search").onclick=()=>{
    clickForDestination();
}

let clickForDestination = () =>{
    let query = document.querySelector("#GoingTo").value;
    localStorage.setItem("place",query);
    window.location.href = "./hotels_list.html"
    console.log(query);
}


