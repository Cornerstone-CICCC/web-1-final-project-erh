const menu = document.querySelector(".toggle-menu")
const menuLogo = document.getElementById("message-logo")
const closeBtn = document.getElementById("close-btn")


function openmenu(){
    menu.classList.add("open-menu")
    menuLogo.style.opacity = "0%" 
    // menuLogoclassList.add("diss-msg-logo")
}

function closemenu(){
    menu.classList.remove("open-menu")
    // menu.classList.add("close-menu")
    menuLogo.style.opacity ="100%"
}