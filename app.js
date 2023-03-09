const boutonMenu = document.querySelector(".menu_burger");
const navBar = document.querySelector(".nav");
const topSpan = document.querySelector(".topSpan");
const middleSpan = document.querySelector(".middleSpan");
const bottomSpan = document.querySelector(".bottomSpan");

boutonMenu.addEventListener("click", () => {
    navBar.classList.toggle("setMenu");
    topSpan.classList.toggle("topSpanBye");
    middleSpan.classList.toggle("middleSpanBye");
    bottomSpan.classList.toggle("bottomSpanBye");
})