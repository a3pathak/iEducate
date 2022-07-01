let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list');
let rightnav = document.querySelector('.rightNav');

burger.addEventListener("click", ()=>{
    navbar.classList.toggle('h-nav');
    navList.classList.toggle('v-class');
    rightnav.classList.toggle('v-class');
});