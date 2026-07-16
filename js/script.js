// Navbar เปลี่ยนสีเมื่อเลื่อนหน้า
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(6,40,29,0.95)";
    } else {
        nav.style.background = "rgba(255,255,255,.12)";
    }
});

// Scroll Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{
    observer.observe(card);
});
