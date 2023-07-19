"use stricts";

console.log('Hello 👋, this project is made by antozr in github . ')

/// MAke the humburger menu, in mobile, with action of open / close 

let btnNav = document.querySelector('.head__btn');
let navBox = document.querySelector('.nav');
let allBar = document.querySelectorAll('.head__btnBarre');

btnNav.addEventListener('click', (e)=>{

    console.log(e);
    console.log(e.target);
    if(btnNav.classList.contains('head__btn--open')){
        navBox.classList.remove('nav--open');
        btnNav.classList.remove('head__btn--open');
        allBar.forEach((el)=>{
            el.classList.remove('head__btnBarre--open')
        })
    }else{
        navBox.classList.add('nav--open');  
        btnNav.classList.add('head__btn--open');
        allBar.forEach((el)=>{
            el.classList.add('head__btnBarre--open')
        })
    }
})