'use strict';
const burgerMenu = document.querySelector('.main-title-burger');

const mobileLayout = document.querySelector('.mobile-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector(".close-btn");

/* const bodyHidden = document.querySelector('body.hidden'); */


const toggleMenu = (event) => {
    mobileLayout.style.display = "none";
    mobileMenu.style.display = "block";
    /* bodyHidden.style.overflow = "hidden"; */
};

const toggleClose = (event) => {
    mobileLayout.style.display = "block";
    mobileMenu.style.display = "none";
}

burgerMenu.addEventListener('click', toggleMenu);

closeBtn.addEventListener("click",toggleClose);