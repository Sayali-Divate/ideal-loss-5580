let dropdown_trigger = document.querySelector("#payment_page_content_page_signup_textbox")
let double_arrow_down = document.querySelector("#payment_page_content_page_double_arrow")
let dropdown_target = document.querySelector("#payment_page_content_page_rewards_points_dropdown_box")
let down_arrow = document.querySelector("#dropdown_fa-angles-down")
let dropdown_text_in_h3=document.querySelector("#payment_page_content_page_h3_text")
let dropdown_trigger_func = () => {
    if (dropdown_target.style.display != "flex") {
        dropdown_target.style.display = "flex"
        dropdown_text_in_h3.style.color="rgb(32,40,67)"
        double_arrow_down.style.color="rgb(32,40,67)"
        double_arrow_down.style.transform = "rotate(180deg)"
        
        
    }
    else {
        dropdown_target.style.display = "none"
        dropdown_text_in_h3.style.color="rgb(6, 124, 220)"
        double_arrow_down.style.color="rgb(6, 124, 220)"
        double_arrow_down.style.transform = "rotate(0deg)"
    }
    
}
dropdown_trigger.addEventListener("click", dropdown_trigger_func)



