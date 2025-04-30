/* let title = document.getElementById("title")
let discription = document.getElementById("discription")
console.log(title);

title.innerHTML = "JS tới chơi"
title.addEventListener("click",function(){
    discription.innerHTML = "HeHe";
}); */

document.addEventListener("DOMContentLoaded",function(){
    let menuToggle = document.getElementById("menu-toggle");
    let mobileNav = document.getElementById("mobile-nav");
    let barsIcon = document.getElementById("bars-icon");
    let closeIcon = document.getElementById("close-icon");

    menuToggle.addEventListener("click", function(){
        mobileNav.classList.toggle("active");
        if (mobileNav.classList.contains("active")){
            barsIcon.style.display = "none";
            closeIcon.style.display = "block";
        }else{
            barsIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });
});
