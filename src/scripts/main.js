"use stricts";

console.log("Hello 👋, this project is made by antozr in github . ");

/// MAke the humburger menu, in mobile, with action of open / close

let btnNav = document.querySelector(".head__btn");
let navBox = document.querySelector(".nav");
let allBar = document.querySelectorAll(".head__btnBarre");
let allLink = document.querySelectorAll(".nav__link");

btnNav.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target);
  if (btnNav.classList.contains("head__btn--open")) {
    navBox.classList.add("nav--close");
    setTimeout(() => {
      navBox.classList.remove("nav--open");
      btnNav.classList.remove("head__btn--open");
      allBar.forEach((el) => {
        el.classList.remove("head__btnBarre--open");
      });
      navBox.classList.remove("nav--close");
    }, 800);
  } else {
    navBox.classList.add("nav--open");
    btnNav.classList.add("head__btn--open");
    allBar.forEach((el) => {
      el.classList.add("head__btnBarre--open");
    });
  }
});

allLink.forEach((el) => {
  el.addEventListener("click", (e) => {
    
    allLink.forEach((el)=>{
        el.classList.remove('nav__link--actif');
    });
    e.target.classList.add("nav__link--actif");
  });
});
