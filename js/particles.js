/*======================================
    FUTURE PHARMACY PORTFOLIO
======================================*/

/* Typing Effect */

const textList = [

"Future Pharmacist 💊",

"Healthcare Professional 🩺",

"Science Lover 🧬",

"Portfolio Website 💚"

];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    let current = textList[textIndex];

    if(!deleting){

        typing.innerHTML = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.innerHTML = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            textIndex++;

            if(textIndex>=textList.length){

                textIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?45:90);

}

typeEffect();



/*============================
Navbar Effect
============================*/

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

nav.style.background="rgba(4,20,10,.92)";

nav.style.boxShadow="0 15px 40px rgba(0,0,0,.5)";

}

else{

nav.style.background="rgba(255,255,255,.08)";

}

});



/*============================
Card Hover Animation
============================*/

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(74,222,128,.35),
rgba(255,255,255,.08))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.08)";

});

});



/*============================
Scroll Reveal
============================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".glass,.card,.hero-left,.hero-right").forEach(el=>{

observer.observe(el);

});
