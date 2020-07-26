var btn = document.querySelector(".btn");
var modal = document.querySelector(".modal");
var close = document.querySelector(".close");
var section = document.querySelector(".section");

btn.addEventListener("click",open);

function open(){
    modal.style.display = "block";
    section.style.filter = "blur(5px)";
}

close.addEventListener("click",disappear);

function disappear(){
    modal.style.display = "none";
    section.style.filter = "blur(0)";
}

section.addEventListener("click",(e)=>{
    if(e.target.className == "section"){
        modal.style.display = "none";
        section.style.filter = "blur(0)";
    }else{
        modal.style.display = "block";
        section.style.filter = "blur(5px)";
    }
})


