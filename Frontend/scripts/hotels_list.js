// To load the default data from previous page......

document.body.onload=()=>{
    defaultData();
}

// for adding default data in DOM....

let defaultData= async()=>{
    localStorage.setItem("place", "Goa");
    let place_name=document.querySelector("#destination");
    place_name.value=localStorage.getItem("place"); 

    let data= await getData(place_name.value);
    
    append(data);  
}

// for getting the data from api...

let getData= async(query)=>{

    let url=`http://127.0.0.1:3000/api/hotel_details?q=${query}`
    let res= await fetch(url,{
        method: "GET",
        headers: {
            "content-type":"application/json"
        }
    });
    let data= await res.json();
    return data;
}

// for appending the hotel details as per query....

let append=(data)=>{
    console.log(data);
    data.forEach(ele=>{
    const {name, payserve, place, price, rating, services, images:{one, two, three, four} } =ele;

    let container= document.querySelector("#main");
    container.innerHTML=null;

    let imgDiv=document.createElement("div");
    let img=document.createElement("img");
    img.src=one;

    
    })
    

}

// To focus the input tag on clicking the "going to" div...

let search=document.querySelector("#search");
search.addEventListener("click", ()=>{
    let info=document.querySelector("#destination");    
    trigger(info);
});

// To be able to change the destination....

let trigger=(info)=>{
    info.focus();
    info.onkeypress=()=>{
     if(event.key=="Enter"){
         console.log("yes");
         let query=info.value;
         console.log(query);
         append(query);
         info.blur();
        }
    }
    
 }

let checkIn=document.querySelector("#check-in");
checkIn.onclick=()=>{
    let date=document.querySelector("#checkin_date");
    date.showPicker();
   
}
let checkOut=document.querySelector("#check-out");
checkOut.onclick=()=>{
    let date=document.querySelector("#checkout_date");
    date.showPicker();   
}








