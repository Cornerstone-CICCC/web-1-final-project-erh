//MENU HOME PAGE
const menu = document.querySelector(".toggle-menu")
const menuLogo = document.getElementById("message-logo")
const closeBtn = document.getElementById("close-btn")


function openmenuhome(){
    menu.classList.add("open-menu")
    menuLogo.style.opacity = "0%" 
}

function closemenuhome(){
    menu.classList.remove("open-menu")
    menuLogo.style.opacity ="100%"
}


///POP UP VIDEO 
const photoCarrousel = document.querySelectorAll(".slider img")
const popUp = document.querySelector(".popup-video")
const firstVideo = document.querySelector(".first-video")
const secondVideo = document. querySelector(".second-video")
const thirdVideo = document.querySelector(".third-video")

const allVideos = document.querySelectorAll(".all-videos")

//for mobile carrousel 
photoCarrousel.forEach((pic, i) =>{
    console.log(pic)
    console.log(i)
    pic.addEventListener("click", () =>{
        if (i === 0){
            popUp.style.display = "block"
            firstVideo.style.visibility ="visible"
            secondVideo.style.visibility="hidden"
            thirdVideo.style.visibility = "hidden"
        }
        if (i === 1) {
            popUp.style.display = "block"
            secondVideo.style.visibility = "visible"
            firstVideo.style.visibility="hidden"
            thirdVideo.style.visibility = "hidden"
        }
        if (i === 2){
            popUp.style.display = "block"
            thirdVideo.style.visibility = "visible"
            secondVideo.style.visibility="hidden"
            firstVideo.style.visibility = "hidden"
        }
    })
})

const closeBtn2 = document.querySelector(".close-btn-2")

closeBtn2.addEventListener("click", () =>{
    popUp.style.display = "none"
})

//for desktop gallery 

const photoNonCarrousel = document.querySelectorAll(".non-carrousel .gallery img")

photoNonCarrousel.forEach((pic, i) => {
    pic.addEventListener("click", () =>{
        if (i === 0){
            popUp.style.display = "block"
            thirdVideo.style.visibility ="visible"
            firstVideo.style.visibility="hidden"
            secondVideo.style.visibility = "hidden"
        }
        if (i === 1) {
            popUp.style.display = "block"
            firstVideo.style.visibility = "visible"
            secondVideo.style.visibility="hidden"
            thirdVideo.style.visibility = "hidden"
        }
        if (i === 2){
            popUp.style.display = "block"
            secondVideo.style.visibility = "visible"
            thirdVideo.style.visibility="hidden"
            firstVideo.style.visibility = "hidden"
        }
    })
})