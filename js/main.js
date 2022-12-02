const slide = document.querySelector(".mySlides");
const slideImg = document.querySelectorAll(".mySlides img");
const slidecount = slide.querySelectorAll('img').length; //6
const backBtn = document.querySelector("#back");
const nextBtn = document.querySelector("#next");
let count = 0;
let size = slideImg[0].clientWidth;

nextBtn.addEventListener("click", () => {
    if (count!=slidecount-1) {       
        slide.style.transition = "transform 0.4s ease-in-out";
        count++;
        slide.style.transform = "translateX(" + -size * count + "px)";
    }
    else{
        count=0;
        slide.style.transition = "transform 0.4s ease-in-out";
        slide.style.transform = "translateX(" + -size * count + "px)";
    }
});

backBtn.addEventListener("click", () => {
    if (count!=0) {
        slide.style.transition = "transform 0.4s ease-in-out";
        count--;
        slide.style.transform = "translateX(" + -size * count + "px)";
    }
    else{
       count=slidecount-1;
       slide.style.transition = "transform 0.4s ease-in-out";
       slide.style.transform = "translateX(" + -size * count + "px)";
    }
    
});
const nav= document.querySelector('.customnav');

document.addEventListener("scroll",()=>{
    if (window.scrollY<115) {
        nav.style.backgroundColor="transparent";
    }else{
        nav.style.backgroundColor="#361291";
    }
})