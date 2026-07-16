// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
    } else {
        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,.08)";
    }
});


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Active Menu
// ===============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link=>{

    if(link.getAttribute("href")==currentPage){

        link.classList.add("active");

    }

});


// ===============================
// Image Hover Effect
// ===============================

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("mouseover",()=>{

        img.style.transform="scale(1.03)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});


// ===============================
// Fade Card Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

        card.style.transition=".4s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


// ===============================
// Quote Animation
// ===============================

const quote = document.querySelector(".quote-box");

if(quote){

quote.addEventListener("mouseenter",()=>{

quote.style.transform="scale(1.02)";

});

quote.addEventListener("mouseleave",()=>{

quote.style.transform="scale(1)";

});

}
