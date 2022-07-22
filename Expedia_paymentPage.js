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


let not_a_residence_trigger=document.querySelector("#protect_your_hotel_click_here_not")
let residence_trigger=document.querySelector("#protect_your_hotel_click_here")
let residence_target=document.querySelector("#protect_your_hotel_note_section")
let not_a_residence_target=document.querySelector("#protect_your_hotel_note_section_not")

let is_not_resident=()=>{
    event.preventDefault()
    if(not_a_residence_target.style.display="none"){
        not_a_residence_target.style.display="flex"
        residence_target.style.display="none"
    }
}

residence_trigger.addEventListener("click",is_not_resident)

let is_resident=()=>{
    event.preventDefault()
    if(residence_target.style.display="none"){
        residence_target.style.display="flex"
        not_a_residence_target.style.display="none"
        
    }
}

not_a_residence_trigger.addEventListener("click",is_resident)


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
