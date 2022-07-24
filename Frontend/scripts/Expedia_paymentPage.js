// noOfroom	1	
// noOfTravellers	2	
// let checkInDate_="Sun Jul 24 2022 05:30:00 GMT+0530 (India Standard Time)"



// let checkOutDate_=	"Thu Jul 28 2022 05:30:00 GMT+0530 (India Standard Time)"	
// noOfDays	4	
let num = 4
let number_of_cont = document.querySelector("#booking_form_number_rooms_number")
let number_of_traveller_cont = document.querySelector("#booking_form_number_people")
// localStorage.setItem("checkInDate",JSON.stringify(checkInDate_))
// localStorage.setItem("checkOutDate",JSON.stringify(checkOutDate_))
let noOfroom = +localStorage.getItem("noOfroom")
console.log('noOfroom:', typeof noOfroom, noOfroom)

let noOfTravellers = +localStorage.getItem("noOfTravellers")
console.log('noOfTravellers:', noOfTravellers)

let checkInDate = localStorage.getItem("checkInDate")
let checkOutDate = localStorage.getItem("checkOutDate")

console.log('checkInDate:', checkInDate)
let arry = checkInDate.trim().split(" ")
let array = checkOutDate.trim().split(" ")
console.log('arry:', arry)
let checkIn_box = ""
let checkOut_box = ""
let checkindate = 0
let checkoutdate = 0
for (var i = 0; i <= 3; i++) {
    checkIn_box += arry[i] + " "
    checkOut_box += array[i] + " "
    if (i == 2) {
        checkindate = +arry[i]
        checkoutdate = +array[i]
    }
}
console.log('checkIn_box:', checkIn_box, checkOut_box)
console.log('checkindate:', typeof checkindate, typeof checkoutdate)
let arr = localStorage.getItem("sign")
let append = document.getElementById("payment_page_navbar_signIn_option_text")

append.innerText = arr

if (arr == null) {
    append.innerText = "Sign in"
} else {
    append.innerText = arr
}
//mock data
let hotel_container = document.querySelector("#payment_page_content_page_hotel_details")
let hotel_fare_container = document.querySelector("#payment_page_hotel_fare_details")
// let hotel_objects =
// {
//     "image": "https://images.trvl-media.com/hotels/16000000/15520000/15518800/15518705/61ac74e1.jpg?impolicy=resizecrop&rw=598&ra=fit",
//     "name": "Marriott Goa Anjuna",
//     "place": "Arossin",
//     "services": "Free WiFi + Pool",
//     "payserv": "Fully refundable, Reserve now, pay later",
//     "room":2,
//     "rating": 4.2,
//     "price": 16150
// }
// localStorage.setItem("hotel_data", JSON.stringify(hotel_objects))

//mock data



let dropdown_trigger = document.querySelector("#payment_page_content_page_signup_textbox")
let double_arrow_down = document.querySelector("#payment_page_content_page_double_arrow")
let dropdown_target = document.querySelector("#payment_page_content_page_rewards_points_dropdown_box")
let down_arrow = document.querySelector("#dropdown_fa-angles-down")
let dropdown_text_in_h3 = document.querySelector("#payment_page_content_page_h3_text")
let dropdown_trigger_func = () => {
    if (dropdown_target.style.display != "flex") {
        dropdown_target.style.display = "flex"
        dropdown_text_in_h3.style.color = "rgb(32,40,67)"
        double_arrow_down.style.color = "rgb(32,40,67)"
        double_arrow_down.style.transform = "rotate(180deg)"


    }
    else {
        dropdown_target.style.display = "none"
        dropdown_text_in_h3.style.color = "rgb(6, 124, 220)"
        double_arrow_down.style.color = "rgb(6, 124, 220)"
        double_arrow_down.style.transform = "rotate(0deg)"
    }

}
dropdown_trigger.addEventListener("click", dropdown_trigger_func)


let dropdown_optional_bedding_trigger = document.querySelector("#optional_bedding_box")
let dropdown_optional_bedding_target = document.querySelector("#optional_bedding_dropdown_first")
let dropdown_optional_bedding_down_arrow = document.querySelector("#optional_bedding_downarrow")
let optional_bedding_dropdown = () => {
    if (dropdown_optional_bedding_target.style.display != "block") {
        dropdown_optional_bedding_target.style.display = "block"
        dropdown_optional_bedding_down_arrow.style.transform = "rotate(180deg)"
    }
    else {
        dropdown_optional_bedding_target.style.display = "none"
        dropdown_optional_bedding_down_arrow.style.transform = "rotate(0deg)"
    }
}


dropdown_optional_bedding_trigger.addEventListener("click", optional_bedding_dropdown)

let dropdown_optional_special_request_trigger = document.querySelector("#optional_special_request_box")
let dropdown_optional_special_request_target = document.querySelector("#optional_special_request_dropdown_second")
let dropdown_optional_special_request_down_arrow = document.querySelector("#optional_special_request_downarrow")
let optional_special_request_dropdown = () => {
    if (dropdown_optional_special_request_target.style.display != "block") {
        dropdown_optional_special_request_target.style.display = "block"
        dropdown_optional_special_request_down_arrow.style.transform = "rotate(180deg)"
    }
    else {
        dropdown_optional_special_request_target.style.display = "none"
        dropdown_optional_special_request_down_arrow.style.transform = "rotate(0deg)"
    }
}


dropdown_optional_special_request_trigger.addEventListener("click", optional_special_request_dropdown)


var minWidth = 60;
var minHeight = 40;

// Thresholds
var FULLSCREEN_MARGINS = -10;
var MARGINS = 4;

// End of what's configurable.
var clicked = null;
var onRightEdge, onBottomEdge, onLeftEdge, onTopEdge;

var rightScreenEdge, bottomScreenEdge;

var preSnapped;

var b, x, y;

var redraw = false;

var pane = document.getElementById('pane');
var ghostpane = document.getElementById('ghostpane');

function setBounds(element, x, y, w, h) {
    element.style.left = x + 'px';
    element.style.top = y + 'px';
    element.style.width = w + 'px';
    element.style.height = h + 'px';
}

function hintHide() {
    setBounds(ghostpane, b.left, b.top, b.width, b.height);
    ghostpane.style.opacity = 0;

    // var b = ghostpane.getBoundingClientRect();
    // ghostpane.style.top = b.top + b.height / 2;
    // ghostpane.style.left = b.left + b.width / 2;
    // ghostpane.style.width = 0;
    // ghostpane.style.height = 0;
}


// Mouse events
pane.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMove);
document.addEventListener('mouseup', onUp);

// Touch events	
pane.addEventListener('touchstart', onTouchDown);
document.addEventListener('touchmove', onTouchMove);
document.addEventListener('touchend', onTouchEnd);


function onTouchDown(e) {
    onDown(e.touches[0]);
    e.preventDefault();
}

function onTouchMove(e) {
    onMove(e.touches[0]);
}

function onTouchEnd(e) {
    if (e.touches.length == 0) onUp(e.changedTouches[0]);
}

function onMouseDown(e) {
    onDown(e);
    e.preventDefault();
}

function onDown(e) {
    calc(e);

    var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;

    clicked = {
        x: x,
        y: y,
        cx: e.clientX,
        cy: e.clientY,
        w: b.width,
        h: b.height,
        isResizing: isResizing,
        isMoving: !isResizing && canMove(),
        onTopEdge: onTopEdge,
        onLeftEdge: onLeftEdge,
        onRightEdge: onRightEdge,
        onBottomEdge: onBottomEdge
    };
}

function canMove() {
    return x > 0 && x < b.width && y > 0 && y < b.height
        && y < 30;
}

function calc(e) {
    b = pane.getBoundingClientRect();
    x = e.clientX - b.left;
    y = e.clientY - b.top;

    onTopEdge = y < MARGINS;
    onLeftEdge = x < MARGINS;
    onRightEdge = x >= b.width - MARGINS;
    onBottomEdge = y >= b.height - MARGINS;

    rightScreenEdge = window.innerWidth - MARGINS;
    bottomScreenEdge = window.innerHeight - MARGINS;
}

var e;

function onMove(ee) {
    calc(ee);

    e = ee;

    redraw = true;

}

function animate() {

    requestAnimationFrame(animate);

    if (!redraw) return;

    redraw = false;

    if (clicked && clicked.isResizing) {

        if (clicked.onRightEdge) pane.style.width = Math.max(x, minWidth) + 'px';
        if (clicked.onBottomEdge) pane.style.height = Math.max(y, minHeight) + 'px';

        if (clicked.onLeftEdge) {
            var currentWidth = Math.max(clicked.cx - e.clientX + clicked.w, minWidth);
            if (currentWidth > minWidth) {
                pane.style.width = currentWidth + 'px';
                pane.style.left = e.clientX + 'px';
            }
        }

        if (clicked.onTopEdge) {
            var currentHeight = Math.max(clicked.cy - e.clientY + clicked.h, minHeight);
            if (currentHeight > minHeight) {
                pane.style.height = currentHeight + 'px';
                pane.style.top = e.clientY + 'px';
            }
        }

        hintHide();

        return;
    }

    if (clicked && clicked.isMoving) {

        if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
            // hintFull();
            setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight);
            ghostpane.style.opacity = 0.2;
        } else if (b.top < MARGINS) {
            // hintTop();
            setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight / 2);
            ghostpane.style.opacity = 0.2;
        } else if (b.left < MARGINS) {
            // hintLeft();
            setBounds(ghostpane, 0, 0, window.innerWidth / 2, window.innerHeight);
            ghostpane.style.opacity = 0.2;
        } else if (b.right > rightScreenEdge) {
            // hintRight();
            setBounds(ghostpane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
            ghostpane.style.opacity = 0.2;
        } else if (b.bottom > bottomScreenEdge) {
            // hintBottom();
            setBounds(ghostpane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
            ghostpane.style.opacity = 0.2;
        } else {
            hintHide();
        }

        if (preSnapped) {
            setBounds(pane,
                e.clientX - preSnapped.width / 2,
                e.clientY - Math.min(clicked.y, preSnapped.height),
                preSnapped.width,
                preSnapped.height
            );
            return;
        }

        // moving
        pane.style.top = (e.clientY - clicked.y) + 'px';
        pane.style.left = (e.clientX - clicked.x) + 'px';

        return;
    }

    // This code executes when mouse moves without clicking

    // style cursor
    if (onRightEdge && onBottomEdge || onLeftEdge && onTopEdge) {
        pane.style.cursor = 'nwse-resize';
    } else if (onRightEdge && onTopEdge || onBottomEdge && onLeftEdge) {
        pane.style.cursor = 'nesw-resize';
    } else if (onRightEdge || onLeftEdge) {
        pane.style.cursor = 'ew-resize';
    } else if (onBottomEdge || onTopEdge) {
        pane.style.cursor = 'ns-resize';
    } else if (canMove()) {
        pane.style.cursor = 'move';
    } else {
        pane.style.cursor = 'default';
    }
}

animate();

function onUp(e) {
    calc(e);

    if (clicked && clicked.isMoving) {
        // Snap
        var snapped = {
            width: b.width,
            height: b.height
        };

        if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
            // hintFull();
            setBounds(pane, 0, 0, window.innerWidth, window.innerHeight);
            preSnapped = snapped;
        } else if (b.top < MARGINS) {
            // hintTop();
            setBounds(pane, 0, 0, window.innerWidth, window.innerHeight / 2);
            preSnapped = snapped;
        } else if (b.left < MARGINS) {
            // hintLeft();
            setBounds(pane, 0, 0, window.innerWidth / 2, window.innerHeight);
            preSnapped = snapped;
        } else if (b.right > rightScreenEdge) {
            // hintRight();
            setBounds(pane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
            preSnapped = snapped;
        } else if (b.bottom > bottomScreenEdge) {
            // hintBottom();
            setBounds(pane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
            preSnapped = snapped;
        } else {
            preSnapped = null;
        }

        hintHide();

    }

    clicked = null;

}


let not_a_residence_trigger = document.querySelector("#protect_your_hotel_click_here_not")
let residence_trigger = document.querySelector("#protect_your_hotel_click_here")
let residence_target = document.querySelector("#protect_your_hotel_note_section")
let not_a_residence_target = document.querySelector("#protect_your_hotel_note_section_not")

let is_not_resident = () => {
    event.preventDefault()
    if (not_a_residence_target.style.display = "none") {
        not_a_residence_target.style.display = "flex"
        residence_target.style.display = "none"
    }
}

residence_trigger.addEventListener("click", is_not_resident)

let is_resident = () => {
    event.preventDefault()
    if (residence_target.style.display = "none") {
        residence_target.style.display = "flex"
        not_a_residence_target.style.display = "none"

    }
}

not_a_residence_trigger.addEventListener("click", is_resident)


// let radio_button_trigger_yes=document.querySelector("#protect_your_hotel_radio_input_yes")
// let radio_button_trigger_no=document.querySelector("#protect_your_hotel_radio_input_no")

// let radio_yes=()=>{
//     if(radio_button_trigger_yes.checked==false){
//         radio_button_trigger_yes.checked=true
//         radio_button_trigger_no.checked=false
//         console.log('hello:')
//     }
// // else if(radio_button_trigger_yes.checked==true){
// //     radio_button_trigger_yes.checked=false
// // }
// }

// radio_button_trigger_yes.addEventListener("click",radio_yes)

// let radio_no=()=>{
//     if(radio_button_trigger_no.checked==false){
//         radio_button_trigger_no.checked=true
//         radio_button_trigger_yes.checked=false
//         console.log('hello:')
//     }
// // else if(radio_button_trigger_yes.checked==true){
// //     radio_button_trigger_yes.checked=false
// // }
// }

// radio_button_trigger_no.addEventListener("click",radio_no)



// let hotel_obj = {

//     city: "mumbai",
//     images: {
//         four: "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/cea6d2e2.jpg?impolicy=resizecrop&rw=455&ra=fit",
//         one: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/6000000/5310000/5301700/5301691/42bd346d_b.jpg",
//         three: "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/12567285.jpg?impolicy=resizecrop&rw=455&ra=fit",
//         two: "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/33d94bb4.jpg?impolicy=resizecrop&rw=455&ra=fit",
//     },
//     name: "The St. Regis Mumbai",
//     payserv: "Fully refundable, Reserve now, pay later",
//     place: "Mumbai",
//     price: 12000,
//     rating: 4.6,
//     services: "Free WiFi + Pool"
// }
// localStorage.setItem("hotel_details", JSON.stringify(hotel_obj))
// images: {,…}, name: "The St. Regis Mumbai", city: "mumbai", place: "Mumbai",…}
// city: "mumbai"
// images: {,…}
// four: "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/cea6d2e2.jpg?impolicy=resizecrop&rw=455&ra=fit"
// one: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/6000000/5310000/5301700/5301691/42bd346d_b.jpg"
// three: "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/12567285.jpg?impolicy=resizecrop&rw=455&ra=fit"
// two: "https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/33d94bb4.jpg?impolicy=resizecrop&rw=455&ra=fit"
// name: "The St. Regis Mumbai"
// payserv: "Fully refundable, Reserve now, pay later"
// place: "Mumbai"
// price: 12000
// rating: 4.6
// services: "Free WiFi + Pool"

let data_from_ls = JSON.parse(localStorage.getItem("hotel_details"))
console.log('data_from_ls:', typeof data_from_ls.price)

append_hotel_data(data_from_ls, noOfroom)

function append_hotel_data(el, noOfroom) {
    hotel_container.innerHTML = ""
    hotel_fare_container.innerHTML = ""
    let card = document.createElement("div")
    card.setAttribute("class", "hotel_card")

    let hotel_poster_box = document.createElement("div")
    hotel_poster_box.setAttribute("class", "image_box")

    let hotel_poster = document.createElement("img")
    hotel_poster.setAttribute("class", "poster")
    hotel_poster.src = el.images.two
    let title_box = document.createElement("div")
    title_box.setAttribute("class", "title_box")
    let hotel_title = document.createElement("h4")
    hotel_title.setAttribute("class", "hotel_title")
    hotel_title.innerText = el.name
    title_box.append(hotel_title)

    hotel_poster_box.append(hotel_poster, title_box)

    //***************************************************************** */
    //rating
    document.querySelector("#form_free_wifi").innerText = el.services
    let hotel_ratings_services_box = document.createElement("div")
    hotel_ratings_services_box.setAttribute("class", "hotel_ratings_services_box")

    let hotel_rating_box = document.createElement("div")
    hotel_rating_box.setAttribute("class", "hotel_rating_box")

    let hotel_rating = document.createElement("h3")
    hotel_rating.setAttribute("class", "hotel_rating")
    let rating_number = document.createElement("h2")
    rating_number.setAttribute("class", "rating_number")
    rating_number = el.rating
    let rating_text_review = document.createElement("h2")
    rating_text_review.setAttribute("class", "rating_text_review")
    if (el.rating < 4) {
        rating_text_review = "Satisfactory (1156 reviews)"
        hotel_rating.innerText = rating_number + "/5 " + rating_text_review
    }
    else if (el.rating >= 4) {
        rating_text_review = "Wonderful (973 reviews)"
        // hotel_rating.innerText=`${rating_number}/5 ${rating_text_review}`
        hotel_rating.innerText = rating_number + "/5 " + rating_text_review
    }

    hotel_rating_box.append(hotel_rating)
    //********************************************************** */
    let guest_review_box = document.createElement("div")
    guest_review_box.setAttribute("class", "guest_review_box")
    console.log('rating:', typeof el.rating)
    let guest_review = document.createElement("h3")
    guest_review.setAttribute("class", "guest_review")
    guest_review.innerText = `Guests rated this property ${el.rating}/5 for cleanliness`
    console.log('guest_review:', guest_review)

    guest_review_box.append(guest_review)
    //***************************************************************** */

    let room_number_details_box = document.createElement("div")
    room_number_details_box.setAttribute("class", "room_number_details_box")

    let room_details = document.createElement("h3")
    room_details.setAttribute("class", "room_details")
    room_details = "Superior Double or Twin Room"
    let room_number = document.createElement("h3")
    room_number.setAttribute("class", "room_number")
    number_of_cont.innerText = ""
    number_of_cont.innerText = noOfroom
    number_of_traveller_cont.innerText = ""
    number_of_traveller_cont.innerText = `${noOfTravellers} Adults,`
    if (noOfroom == undefined || noOfroom == 1) {
        room_number = ` 1 Room: ${room_details}`
    } else if (noOfroom > 1) {
        room_number = ` ${noOfroom} Rooms: ${room_details}`
    }

    room_number_details_box.append(room_number)

    //***************************************************************** */

    let checkin_checkout_box = document.createElement("div")
    checkin_checkout_box.setAttribute("class", "checkin_checkout_box")

    let check_in_box = document.createElement("div")
    check_in_box.setAttribute("class", "check_in_box")

    let check_in_text = document.createElement("h3")
    check_in_text.setAttribute("class", "check_in_text")
    check_in_text.innerText = "Check-in:"

    let check_in_data = document.createElement("h3")
    check_in_data.setAttribute("class", "check_in_data")
    check_in_data.innerText = checkIn_box

    check_in_box.append(check_in_text, check_in_data)

    let check_out_box = document.createElement("div")
    check_out_box.setAttribute("class", "check_out_box")

    let check_out_text = document.createElement("h3")
    check_out_text.setAttribute("class", "check_out_text")
    check_out_text.innerText = "Check-out:"

    let check_out_data = document.createElement("h3")
    check_out_data.setAttribute("class", "check_out_data")
    check_out_data.innerText = checkOut_box

    check_out_box.append(check_out_text, check_out_data)

    let day_difference = checkoutdate - checkindate
    let number_of_nights = document.createElement("h4")
    number_of_nights.setAttribute("class", "number_of_nights")
    number_of_nights.innerText = `${day_difference}-night stay`
    checkin_checkout_box.append(check_in_box, check_out_box, number_of_nights)

    hotel_ratings_services_box.append(hotel_rating_box, guest_review_box, room_number_details_box, checkin_checkout_box)
    console.log('room_number:', room_number)







    card.append(hotel_poster_box, hotel_ratings_services_box)
    hotel_container.append(card)
    //***************************************************************** */
    // hotel fare

    let fare_top_box = document.createElement("div")
    fare_top_box.setAttribute("class", "fare_top_box")

    let fare_top_text = document.createElement("h2")
    fare_top_text.setAttribute("class", "fare_top_text")
    fare_top_text.innerText = "Price details"
    fare_top_box.append(fare_top_text)
    let fare_about_details_box = document.createElement("div")
    fare_about_details_box.setAttribute("class", "fare_about_box")

    let roomNight_box = document.createElement("div")
    roomNight_box.setAttribute("class", "roomNight_box")

    let roomNight = document.createElement("h3")
    roomNight.setAttribute("class", "roomNight")

    if (noOfroom == undefined || noOfroom == 1) {
        roomNight.innerText = "1 room x 1 night"
    }
    else if (noOfroom > 1) {
        roomNight.innerText = `${noOfroom} rooms x ${day_difference} nights`
    }


    let roomNight_fare = document.createElement("h3")
    roomNight_fare.setAttribute("class", "roomNight_fare")
    let price_for_perNight = noOfroom * el.price * day_difference
    roomNight_fare.innerText = `₹${price_for_perNight}`
    console.log('price:', typeof el.price)
    roomNight_box.append(roomNight, roomNight_fare)

    let fare_taxes_box = document.createElement("div")
    fare_taxes_box.setAttribute("class", "fare_taxes_box")

    let fare_taxes = document.createElement("h3")
    fare_taxes.setAttribute("class", "fare_taxes")
    fare_taxes.innerText = "Taxes"

    let Taxes_fare = document.createElement("h3")
    Taxes_fare.setAttribute("class", "Taxes_fare")
    let taxesBe = +1875
    Taxes_fare.innerText = `₹${taxesBe}`
    fare_taxes_box.append(fare_taxes, Taxes_fare)

    let local_tax_box = document.createElement("div")
    local_tax_box.setAttribute("class", "local_tax_box")

    let local_taxes = document.createElement("h3")
    local_taxes.setAttribute("class", "local_taxes")
    local_taxes.innerText = "Local tax"

    let local_taxes_fare = document.createElement("h3")
    local_taxes_fare.setAttribute("class", "Taxes_fare")
    let local_taxBe = +487
    local_taxes_fare.innerText = `₹${local_taxBe}`
    local_tax_box.append(local_taxes, local_taxes_fare)

    fare_about_details_box.append(roomNight_box, fare_taxes_box, local_tax_box)

    let horizontal_line = document.createElement("div")
    horizontal_line.setAttribute("class", "horizontal_line")
    //horizontal line******************************
    let total_box = document.createElement("div")
    total_box.setAttribute("class", "total_box")

    let total_fare_box = document.createElement("div")
    total_fare_box.setAttribute("class", "total_fare_box")

    let total_text = document.createElement("h2")
    total_text.setAttribute("class", "total_text")
    total_text.innerText = "Total"
    let total_fare = document.createElement("h2")
    total_fare.setAttribute("class", "total_fare")
    console.log('roomNight_fare:', typeof el.price, typeof taxesBe, typeof local_taxBe)
    let total_of_all = price_for_perNight + taxesBe + local_taxBe
    console.log('total_of_all:', typeof total_of_all)
    total_fare = `₹${total_of_all}`

    total_fare_box.append(total_text, total_fare)
    let paynow_box = document.createElement("div")
    paynow_box.setAttribute("class", "paynow_box")

    let paynow_text = document.createElement("h2")
    paynow_text.setAttribute("class", "paynow_text")
    paynow_text.innerText = "Pay now"
    let paynow_fare = document.createElement("h2")
    paynow_fare.setAttribute("class", "paynow_fare")
    let paynow_zero = 0
    paynow_fare.innerText = `₹${paynow_zero}.00`

    paynow_box.append(paynow_text, paynow_fare)

    //***************************************************************** */

    let pay_at_property_box = document.createElement("div")
    pay_at_property_box.setAttribute("class", "pay_at_property_box")

    let pay_at_property_text = document.createElement("h2")
    pay_at_property_text.setAttribute("class", "pay_at_property_text")
    pay_at_property_text.innerText = "Pay at property"
    let pay_at_property_fare = document.createElement("h2")
    pay_at_property_fare.setAttribute("class", "pay_at_property_fare")

    pay_at_property_fare.innerText = `₹${total_of_all}.00`



    pay_at_property_box.append(pay_at_property_text, pay_at_property_fare)

    let p_text_box = document.createElement("div")
    p_text_box.setAttribute("class", "p_text_box")

    let p_text = document.createElement("p")
    p_text.setAttribute("class", "p_text")
    p_text.innerText = `Rates quoted in Indian Rupees are based on current exchange rates, which may vary at the time of travel. The property will charge you the full amount of ₹${total_of_all} approx in Dollars ($${Math.floor(total_of_all / 79.85)}).`
    p_text_box.append(p_text)


    total_box.append(total_fare_box, paynow_box, pay_at_property_box, p_text_box)


    let fare_card = document.createElement("div")

    fare_card.setAttribute("class", "fare_card")

    fare_card.append(fare_top_box, fare_about_details_box, horizontal_line, total_box)
    hotel_fare_container.append(fare_card)


}
function sendAlert() {
    alert(`Payment of Successful.`)
    alert(`Booking Successful`)
    window.location.href = "./index.html"

}
document.querySelector("#continue_button").addEventListener("click", sendAlert)

let user_name=document.getElementById("payment_page_navbar_signIn_option_text");
user_name.innerText=localStorage.getItem("sign") || "Sign in"



// {
//     "image":"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/31000000/30790000/30783800/30783748/b015ad4a_b.jpg",
//     "name":"ITC, Grand Goa, a Luxury Collection Resort & Spa, Goa",
//     "place":"Arossin",
//     "services":"Free WiFi + Pool",
//     "payserv":"Fully refundable, Reserve now, pay later",
//     "rating":4.2,
//     "price":16150
// },