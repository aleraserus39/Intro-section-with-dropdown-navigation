let getDitem= document.querySelector(".d-item");
let getDitem2= document.querySelector(".d-item2");
let getDropdown= document.querySelector(".dropdown");
let getDropdown2= document.querySelector(".dropdown2");
let getArrowimg= document.querySelector(".arrowimg");
let getArrowimg2= document.querySelector(".arrowimg2");

let getMenubox= document.querySelector(".menubox");
let getDcontainer= document.querySelector(".d-container");

let getOverlay = document.querySelector('.overlay');




getDitem.addEventListener('click',()=>{
    getDropdown.classList.toggle("show");

    if(getDropdown.classList.contains("show")){
        getArrowimg.setAttribute("src","./images/icon-arrow-up.svg");
    }else{
        getArrowimg.setAttribute("src","./images/icon-arrow-down.svg")
    }
});
getDitem2.addEventListener('click',()=>{
    getDropdown2.classList.toggle("show");

    if(getDropdown2.classList.contains("show")){
        getArrowimg2.setAttribute("src","./images/icon-arrow-up.svg");
    }else{
        getArrowimg2.setAttribute("src","./images/icon-arrow-down.svg")
    }
});

getMenubox.addEventListener('click',()=>{
    let visibility= getDcontainer.getAttribute("visible");
    
    
    if(visibility==="false"){
        getDcontainer.setAttribute("visible","true");
        getMenubox.setAttribute("aria-expended","true");
        getOverlay.setAttribute("colorvisible","true");
    
    }else{
        getDcontainer.setAttribute("visible","false");
        getMenubox.setAttribute("aria-expended","false");
        getOverlay.setAttribute("colorvisible","false");
    }
    
})

