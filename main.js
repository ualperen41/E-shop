// !Html deki elemanlara eriş
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener("click", () => {
    // header a class ekleme
    header.classList.add("nav-active");

    // nav elemanına active classı ekle
    nav.classList.add("active");

    //menuBtn Gizle
    menuBtn.style.display="none";

    // closeBtn'i aktif et
    closeBtn.style.display="block";

 
});

//! closeBtn elemanına tıklanınca header ve nav elemanından class kaldır

closeBtn.addEventListener("click", () => {
    // headerdan nav-active classını kaldır
    header.classList.remove("nav-active");

    //nav elemanında active classı kadlır
    nav.classList.remove("active");

    //menuBtn aktif et
menuBtn.style.display = "block";
    //closeBtn pasife çek
    closeBtn.style.display ="none";
})