// FAQ section opening function and adding listenres functions
const list = document.getElementById("list");
let lastOpendFAQ = false;

function flip(e) {
    const main = e.target;
    let contentHeight = main.lastElementChild.offsetHeight;
    let newHeight = contentHeight + 75;
    main.style.height = newHeight + "px";
    main.firstElementChild.lastElementChild.classList.add("FAQ-arrow-on");
    if(lastOpendFAQ != false){
        lastOpendFAQ.style.height = "75px";
        lastOpendFAQ.firstElementChild.lastElementChild.classList.remove("FAQ-arrow-on");
    }
    if(lastOpendFAQ == main){
        lastOpendFAQ = false;
    } else{
        lastOpendFAQ = main;
    }
}

function runFlip(){
    let FAQ = list.children;
    for(let i = 0;i < FAQ.length; i++){
        let child = FAQ[i];
        if(child.className == "FAQ-list-element"){
            child.addEventListener("click",flip);
        }
    }
}
runFlip();

// slider staff
const slider = document.getElementById("slider");
const dot1 = document.getElementById("dot-1");
const dot2 = document.getElementById("dot-2");
const dot3 = document.getElementById("dot-3");
let sliderPosition = -100;
let sliderState = false;
let lastDot = dot1;


function moveSlider(direction) {
    if(!sliderState){
        sliderState = true;
        if(direction == 1){
        sliderPosition += -100;
        slider.style.left = sliderPosition + "%" ;
        } else {
            sliderPosition = direction;
            slider.style.left = sliderPosition + "%";
        };
        switch (sliderPosition) {
            case -100:
            case -400:
                lastDot.classList.toggle("slider-dot-on");
                dot1.classList.toggle("slider-dot-on");
                lastDot = dot1;
                break;
            case -200:
                lastDot.classList.toggle("slider-dot-on");
                dot2.classList.toggle("slider-dot-on");
                lastDot = dot2;
                break;
            case 0:
            case -300:
                lastDot.classList.toggle("slider-dot-on");
                dot3.classList.toggle("slider-dot-on");
                lastDot = dot3;
                break;
            default:
                break;
        }
        setTimeout(() => lookAtSlider(), 210);
    }
};

function lookAtSlider(){
    if(sliderPosition == 0){
        slider.style.transition = "none";
        sliderPosition = -300;
        slider.style.left = sliderPosition + "%";
        setTimeout(() => slider.style.transition = "0.2s", 20);
    } 
    if( sliderPosition == -400){
        slider.style.transition = "none";
        sliderPosition = -100;
        slider.style.left = sliderPosition + "%";
        setTimeout(() => slider.style.transition = "0.2s", 20);
    }
    sliderState = false;
}

setInterval(() => moveSlider(1), 5000);
dot1.addEventListener("click", () => {moveSlider(-100)})
dot2.addEventListener("click", () => {moveSlider(-200)})
dot3.addEventListener("click", () => {moveSlider(-300)})


//bottom photos loop animation 
const animationMain = document.getElementById("footer-animation-img");
let presentFrame = 1;
function animation(){
    presentFrame++;
    if(presentFrame > 4){
        presentFrame = 1;
    }
    animationMain.src = "./pictures/animation/" + presentFrame +".jpg";
}
setInterval(animation, 1000);

// photos moving when scroling staff
const main1 = document.getElementById("main-1");
const main2 = document.getElementById("main-2");
const main3 = document.getElementById("main-3");

function scrollControl(e){
    let main1Position = main1.getBoundingClientRect();
    let main3Position = main3.getBoundingClientRect();
    if(main1Position.y < 100){
        main1.classList.add("top-poster-wraper-on");
        main2.classList.add("middle-poster-wraper-on");
    }
    if(main3Position.y < 300){
        main3.classList.add("FAQ-frame-on");
        document.removeEventListener("scroll", scrollControl);
    }
}

document.addEventListener("scroll", scrollControl);

// nav staff
const navCenter = document.getElementById("nav-center");
const rightNav = document.getElementById("right-nav");
const navButton = document.getElementById("nav-button");

function navControl(){
    navCenter.classList.toggle("nav-center-on");
    rightNav.classList.toggle("right-nav-on");
}

navButton.addEventListener("click", navControl);
