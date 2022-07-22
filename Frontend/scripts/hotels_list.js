// To load the default data from previous page......

document.body.onload=()=>{
    defaultData();
}

// for adding default data in DOM....


let defaultData= async(query)=>{
    
    let city=localStorage.getItem("place") || "Goa"; 
    let place_name=document.querySelector("#destination");    
    place_name.value=city; 

    query= query ? query : city
    let data= await getData(query); 
    
    data.length ? append(data) : displayMsg();
    place_name.value=query; 
    localStorage.setItem("place", query);  
}

// if the city doesn't match the data, included in API

let displayMsg =()=>{    
    document.querySelector("#list").innerHTML=null
    document.querySelector("#hide").style.display="flex";
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
    let container= document.querySelector("#list");
    container.innerHTML=null;
    
   
        data.forEach(ele=>{
        const {name, payserv, place, price, rating, services, images:{one, two, three, four} } =ele;

        let hotel=document.createElement("div");
        hotel.className="hotel";

        let imgDiv=document.createElement("div");
        let img=document.createElement("img");
        img.src=one;
        imgDiv.append(img);

        let mainDiv=document.createElement("div");
        let nameDiv=document.createElement("div");
        let title=document.createElement("h3");
        title.innerText=name;
        let city=document.createElement("p");
        city.innerText=place;
        nameDiv.append(title,city) ;

        let bottomDiv=document.createElement("div");
        bottomDiv.className="bottomBlock"

        let ratingDiv=document.createElement("div");
        let payDiv=document.createElement("div");
        payDiv.className="payserv";
        let pay=document.createElement("p");
        pay.innerText= payserv? payserv: null;
        payDiv.append(pay);

        let block=document.createElement("div");
        block.className="rating";
        let ratin = document.createElement("p");
        ratin.innerText=`${rating}/5`;
        let review=document.createElement("p");
        review.innerText=ratingBasedTag(rating);
        block.append(ratin, review);

        ratingDiv.append(payDiv,block);

        let priceDiv=document.createElement("div");
        let val=document.createElement("h2");
        val.innerText=`Rs ${price}` 
        priceDiv.append(val);  
        
        bottomDiv.append(ratingDiv, priceDiv);

        mainDiv.append(nameDiv,bottomDiv);

        hotel.append(imgDiv, mainDiv);
        container.append(hotel);
    })  
    

}

// For getting tag (wonderful, exceptional, etc..) based on rating.. 

let ratingBasedTag=(rating)=>{
    
    if (rating>4.6) return "Exceptional";
    if (rating>4.5) return "Wonderful";
    if (rating>4) return "Very good";
    if (rating>3.5)return "Good";
    else return null;
   
}

// To focus the input tag on clicking the "going to" div...

let search=document.querySelector("#search");
search.addEventListener("click", ()=>{
    let info=document.querySelector("#destination");    
    trigger(info);
});

// To be able to change the destination....

let trigger= async (info)=>{
    info.focus();
    info.onkeypress=()=>{
      if(event.key=="Enter"){
         console.log("yes");
         let city=info.value;
         defaultData(city);         
         info.blur();
        }
    }
    
 }

//  To trigger the calender on clicking div for check in and check out

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

// sorting functionality









