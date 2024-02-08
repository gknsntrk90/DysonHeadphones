let bars = document.querySelector("#bars")
let menu = document.querySelector("#menu")
let header = document.querySelector("#header")

bars.addEventListener("click",function(){
    menu.classList.toggle("mobilmenu")
})

window.addEventListener("scroll",()=>{
    if(window.scrollY>10){
        header.classList.add("bgheader")
    }
    
})