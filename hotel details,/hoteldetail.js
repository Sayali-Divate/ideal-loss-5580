amenities=[
    {icon:"fa-solid fa-person-swimming", text:"Pool"},
    {icon:"fa-regular fa-snowflake" , text:"Air conditioning"},
    {icon:"fa-solid fa-wifi" , text:"Free Wifi"},
    {icon:"fa-solid fa-utensils", text:"Restaurant"},
    {icon:"fa-solid fa-p", text:"Parking Included"},
    {icon:"fa-solid fa-dumbbell", text:"Gym"}
]

amenities.forEach(ele=>{

    let div =document.createElement("div");
    let i= document.createElement("i");
    i.setAttribute("class", ele.icon);
    let p=document.createElement("p");
    p.innerText=ele.text;
    div.append(i,p);
    document.querySelector("#amenities").append(div);
});

cleaningSafety=[
    {icon:"fa-solid fa-pump-medical", text:"Cleaned with disinfectant"},
    {icon:"fa-solid fa-clock", text:"24-hour vacancy between guest room stays"},
    {icon:"fa-solid fa-bell-concierge", text:"Contactless check-in"},
    {icon:"fa-solid fa-pump-soap", text:"Hand sanitiser provided"},
]

cleaningSafety.forEach(ele=>{

    let div =document.createElement("div");
    let i= document.createElement("i");
    i.setAttribute("class", ele.icon);
    let p=document.createElement("p");
    p.innerText=ele.text;
    div.append(i,p);
    document.querySelector("#cleaningSafety").append(div);
});

mapp=[
    {icon:"fa-solid fa-location-dot", text:"Saturday Night Market" ,time: "9 min walk"},
    {icon:"fa-solid fa-location-dot", text:"Baga Night Market" ,time: "13 min walk"},
    {icon:"fa-solid fa-car", text:"Miraculous Cross" ,time: "3 min drive"},
   
]

mapp.forEach(ele=>{

    let div1 =document.createElement("div");
    let i= document.createElement("i");
    i.setAttribute("class", ele.icon);
    let p=document.createElement("p");
    p.innerText=ele.text;
    div1.append(i,p);
    div2=document.createElement("div");
    div2.innerText=ele.time
    document.querySelector("#explore").append(div1,div2);
});

