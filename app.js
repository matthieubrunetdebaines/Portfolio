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


function checkPosition() {
    const aboutMePosition = document.getElementById("contactMe").offsetTop;
    const menuBurger = document.querySelectorAll(".spanBurger");
    const currentPosition = window.innerHeight + window.scrollY;
  
    menuBurger.forEach((burger) => {
      if (currentPosition >= aboutMePosition) {
        burger.classList.add("change_color");
      } else {
        burger.classList.remove("change_color");
      }
    });
  }
  
  window.addEventListener("scroll", checkPosition);