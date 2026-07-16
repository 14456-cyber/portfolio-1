// เปลี่ยนสี Navbar เมื่อเลื่อนหน้า

window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="#0B3D2E";

}else{

nav.style.background="rgba(255,255,255,.08)";

}

});
