

import {navbar} from "../components/navbar.js"
import {footer} from "../components/footer.js"

document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();


let city=localStorage.getItem("place"); 
document.title = `${city} - Hotels`



// To load the default data from previous page......

document.body.onload=()=>{
    defaultData();
}

// for adding default data in DOM....


let defaultData= async(query)=>{
    
    let city=localStorage.getItem("place"); 
    
    let place_name=document.querySelector("#destination");    
    place_name.value=city; 

    query= query ? query : city
    let data= await getData(query); 
    let msgDiv=document.querySelector("#hide");
    
    data.length ? ( append(data) ,  msgDiv.style.visibility="hidden") : displayMsg("The API works only for Goa and Mumbai");
    
    place_name.value=query; 
    localStorage.setItem("place", query);  

    // map insertion
    showMap(query);
}

// if the city doesn't match the data, included in API

let displayMsg =(msg)=>{    
    document.querySelector("#list").innerHTML=null
    let div=document.querySelector("#hide");
    div.style.display="flex";
    div.style.visibility="visible";

    div.innerText=msg;
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

        hotel.onclick=()=>{
            hotelDetails(ele);
        }
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

// functionality of search button
let sBtn= document.getElementById("searchBtn");
sBtn.onclick=()=>{
    defaultData();
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

//  To redirect to hotel details page after clicking a hotel..

let hotelDetails=(data)=>{
    console.log("yEs");
    localStorage.setItem("hotel_details", JSON.stringify(data));
    window.location.href= "hoteldetail.html"
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

// sorting functionality.......

let sort=document.querySelector("#selectPrice");
console.log(sort);
sort.onchange=()=>{
    let val=document.querySelector("#selectPrice").value;
    let city=localStorage.getItem("place");
    
    if(val=="rec") fetchIt(`http://127.0.0.1:3000/api/hotel_details?q=${city}`);
    else if(val=="low") fetchIt(`http://127.0.0.1:3000/api/hotel_details?q=${city}&_sort=price&_order=asc`);
    else if(val=="high") fetchIt(`http://127.0.0.1:3000/api/hotel_details?q=${city}&_sort=price&_order=desc`);
    else if(val=="rating") fetchIt(`http://127.0.0.1:3000/api/hotel_details?q=${city}&_sort=rating&_order=desc`);
}


// Sidebar functionalities........

// sidebar -- inserting a map

let showMap=(city)=>{
    let url=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    let frame=document.querySelector("#gmap_canvas");
    frame.src=url;
}

// search by property name ...

let property=document.querySelector("#property_div");
property.addEventListener("click", ()=>{
    let name=document.querySelector("#property");
    trigger(name);
})

// filter by price.....

let filterPrice=document.querySelectorAll("#price_per_night>div>input");

filterPrice.forEach(ele=>{
    ele.onclick=()=>{
        filterBYprice(ele.id);        
    }
})

let filterBYprice= (id)=>{
    let p1;
    let p2;
    if(id=="anyPrice"){p1=0; p2=11100000;} 
    else if(id=="lessThan2k"){p1=0; p2=2000;} 
    else if(id=="2kTo4K") {p1=2000; p2=4000;}
    else if(id=="4kTo8k") {p1=4000; p2=8000;}
    else if(id=="8kTo11k") {p1=8000; p2=11000;}
    else if(id=="greaterThan11k") {p1=11000; p2=11100000;}    

    let query=localStorage.getItem("place");
    console.log(p1, p2);
    
    let url=`http://127.0.0.1:3000/api/hotel_details?q=${query}&price_gte=${p1}&price_lte=${p2}`
    fetchIt(url);

}

let fetchIt= async (url)=>{

    let res=await fetch(url, {
        method:"GET",
        headers:{
            "content-type":"application/json"
        }
    });
    let data=await res.json();    
    
    let div=document.querySelector("#hide");
    !data.length ? displayMsg ("Data is not available for selected options try different options") : (append(data), div.style.visibility="hidden" );
    
}

// filter by ratings

let rating=document.querySelectorAll(`[name="rating"]`);
console.log(rating)
rating.forEach(ele=>{
    ele.onclick=()=>{
        filterByRating(Number(ele.id));
    }    
})

let filterByRating=(id)=>{
    console.log("yes")

    let query=localStorage.getItem("place");

    let url=`http://127.0.0.1:3000/api/hotel_details?q=${query}&rating_gte=${id}`

    fetchIt(url);
}

// filter by the payserve options

let payserv=document.querySelectorAll(`[type="checkbox"]`);
payserv.forEach(ele=>{
    ele.onclick=()=>{
       
        if(ele.checked){            
            filterbyPayserv(ele.id);
        }
    }
    
})
let filterbyPayserv=(id)=>{
    let city=localStorage.getItem("place");
    let url= `http://127.0.0.1:3000/api/hotel_details?city=${city}&q=${id}`

    fetchIt(url)
}


 









