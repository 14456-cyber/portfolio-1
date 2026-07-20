/* ==========================================
   PORTFOLIO PHARMACY
   script.js
========================================== */

// =========================
// AOS
// =========================

AOS.init({
    duration: 1000,
    once: false,
    easing: "ease-in-out"
});

// =========================
// PRELOADER
// =========================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        preloader.style.visibility = "hidden";

        setTimeout(()=>{

            preloader.remove();

        },600);

    }

});

// =========================
// TYPING EFFECT
// =========================

const typing = document.getElementById("typing");

const words = [

"Future Pharmacist",

"Science Lover",

"Healthcare Student",

"Portfolio Website"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    if(!typing) return;

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 45 : 100);

}

typeEffect();

// =========================
// CURSOR GLOW
// =========================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    if(glow){

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    }

});

// =========================
// NAVBAR SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(!navbar) return;

    if(window.scrollY > 50){

        navbar.style.background="rgba(5,45,30,.80)";
        navbar.style.backdropFilter="blur(22px)";
        navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.25)";

    }else{

        navbar.style.background="rgba(255,255,255,.08)";
        navbar.style.boxShadow="none";

    }

});

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("show");

    });

}

// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(!topBtn) return;

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

if(topBtn){

    topBtn.onclick=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

}

// =========================
// ACTIVE MENU
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link=>{

    if(link.href === window.location.href){

        link.classList.add("active");

    }

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

document.querySelectorAll(".btn,.btn-outline").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=(e.offsetX-size/2)+"px";

circle.style.top=(e.offsetY-size/2)+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// =========================
// FADE IN ON LOAD
// =========================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log("%cFuture Pharmacist Portfolio",
"color:#31C48D;font-size:20px;font-weight:bold;");

console.log("Developed with HTML CSS JavaScript");
